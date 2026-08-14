#!/usr/bin/env python3
"""Run Tender Scout, then email the shortlist via Resend.

Designed for the VPS hermes-agent container cron. Stdlib only (urllib), so it
does not need the G.Ads-Agent venv. Reads RESEND_API_KEY from the environment
(source /opt/data/.hermes/.env before running).

    python3 notify.py                 # run scout, email the report
    python3 notify.py --dry           # run scout, print what would send, no email
    TENDER_SCOUT_TO="a@x,b@y" python3 notify.py

Recipients default to alex@3pdigital.com.au; override with TENDER_SCOUT_TO
(comma-separated). Never sends if the shortlist is empty unless --always.
"""

import argparse
import html as html_mod
import json
import os
import re
import subprocess
import sys
import urllib.request
from datetime import datetime, timezone, timedelta
from pathlib import Path

HERE = Path(__file__).resolve().parent
BRISBANE = timezone(timedelta(hours=10))
DEFAULT_FROM = "Alex Frew <alex@3pdigital.com.au>"
DEFAULT_TO = ["alex@3pdigital.com.au"]


def run_scout():
    """Run scout.py and return (report_path, stdout)."""
    proc = subprocess.run(
        [sys.executable, str(HERE / "scout.py")],
        capture_output=True, text=True, cwd=str(HERE),
    )
    if proc.returncode != 0:
        raise RuntimeError(f"scout.py failed:\n{proc.stdout}\n{proc.stderr}")
    today = datetime.now(BRISBANE).strftime("%Y-%m-%d")
    return HERE / "reports" / f"{today}.md", proc.stdout.strip()


def md_to_html(md):
    """Tiny markdown-to-HTML for our own report shape (headings, tables, links,
    bold, list items). Not a general converter."""
    out = []
    in_table = False
    for line in md.splitlines():
        # links [text](url)
        line_html = re.sub(
            r"\[([^\]]+)\]\(([^)]+)\)",
            lambda m: f'<a href="{html_mod.escape(m.group(2), quote=True)}">{html_mod.escape(m.group(1))}</a>',
            line,
        )
        line_html = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", line_html)

        if line.startswith("|"):
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if set("".join(cells)) <= set("-: "):
                continue  # separator row
            if not in_table:
                out.append('<table cellpadding="6" cellspacing="0" border="1" '
                           'style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:13px">')
                in_table = True
            tag = "th" if "Score" in line and "Tender" in line else "td"
            row_html = re.sub(
                r"\[([^\]]+)\]\(([^)]+)\)",
                lambda m: f'<a href="{html_mod.escape(m.group(2), quote=True)}">{html_mod.escape(m.group(1))}</a>',
                "|".join(cells),
            )
            row_html = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", row_html)
            tds = "".join(f"<{tag}>{c}</{tag}>" for c in row_html.split("|"))
            out.append(f"<tr>{tds}</tr>")
            continue
        if in_table:
            out.append("</table>")
            in_table = False

        if line.startswith("### "):
            out.append(f"<h3 style='font-family:Arial'>{line_html[4:]}</h3>")
        elif line.startswith("## "):
            out.append(f"<h2 style='font-family:Arial'>{line_html[3:]}</h2>")
        elif line.startswith("# "):
            out.append(f"<h1 style='font-family:Arial'>{line_html[2:]}</h1>")
        elif line.startswith("- "):
            out.append(f"<div style='font-family:Arial;font-size:13px'>&bull; {line_html[2:]}</div>")
        elif line.strip() == "":
            out.append("<br>")
        else:
            out.append(f"<div style='font-family:Arial;font-size:13px'>{line_html}</div>")
    if in_table:
        out.append("</table>")
    return "\n".join(out)


def send_resend(subject, html_body, to):
    api_key = os.environ.get("RESEND_API_KEY", "")
    if not api_key:
        raise RuntimeError("RESEND_API_KEY not set (source /opt/data/.hermes/.env)")
    payload = json.dumps({
        "from": os.environ.get("TENDER_SCOUT_FROM", DEFAULT_FROM),
        "to": to,
        "reply_to": "alex@3pdigital.com.au",
        "subject": subject,
        "html": html_body,
    }).encode("utf-8")
    req = urllib.request.Request(
        "https://api.resend.com/emails",
        data=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            # Resend sits behind Cloudflare; the default urllib UA trips a 1010 block.
            "User-Agent": "Mozilla/5.0 (TenderScout/1.0)",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry", action="store_true", help="run scout, don't email")
    ap.add_argument("--always", action="store_true", help="email even if shortlist empty")
    args = ap.parse_args()

    report_path, scout_out = run_scout()
    md = report_path.read_text(encoding="utf-8")

    # relevant count from scout stdout: "Scanned N tenders -> M relevant, K new."
    m = re.search(r"->\s*(\d+)\s+relevant,\s*(\d+)\s+new", scout_out)
    relevant = int(m.group(1)) if m else 0
    new = int(m.group(2)) if m else 0

    to = [x.strip() for x in os.environ.get("TENDER_SCOUT_TO", "").split(",") if x.strip()] or DEFAULT_TO
    today = datetime.now(BRISBANE).strftime("%d %b %Y")
    subject = f"Tender Scout: {new} new, {relevant} live opportunities ({today})"

    # On a daily cron, only email when something genuinely new appeared, so the
    # inbox stays quiet on no-change days. --always forces a send (manual runs).
    if new == 0 and not args.always:
        print(f"No new tenders since last run; skipping email. ({scout_out})")
        return

    html_body = md_to_html(md)
    if args.dry:
        print(f"[dry] would send to {to}\nsubject: {subject}\n--- html {len(html_body)} chars ---")
        print(scout_out)
        return

    result = send_resend(subject, html_body, to)
    print(f"Sent to {to}: {result.get('id', result)}")
    print(scout_out)


if __name__ == "__main__":
    main()
