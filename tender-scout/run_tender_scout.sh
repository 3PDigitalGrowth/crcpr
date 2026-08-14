#!/usr/bin/env bash
# Cron entrypoint for Tender Scout (runs inside the hermes-agent container).
# Sources the Resend key, runs scout + emails the shortlist when new tenders
# appear. Wire from the host crontab via agent_cron_wrap.sh, e.g.:
#   0 21 * * 0-4 /usr/local/bin/agent_cron_wrap.sh tender_scout \
#     /usr/bin/docker exec hermes-agent-hlwg-hermes-agent-1 \
#     bash /opt/data/repos/crcpr/tender-scout/run_tender_scout.sh \
#     >> /var/log/tender_scout_cron.log 2>&1
# (0 21 UTC = 07:00 Brisbane; 0-4 = Mon-Fri Brisbane.)
set -euo pipefail
cd "$(dirname "$0")"
set -a; . /opt/data/.hermes/.env 2>/dev/null || true; set +a
export TENDER_SCOUT_TO="lyall@crcpr.com.au,alex@3pdigital.com.au"
exec python3 notify.py
