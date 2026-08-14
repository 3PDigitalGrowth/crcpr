# Tender Scout

Polls public tender feeds, surfaces live opportunities that fit CRC (public
relations, media, communications) and 3P (digital growth), scores each on a
first-pass go/no-go, dedupes against past runs, and writes a dated shortlist.

This is the discovery front-end to the tender workflow. Once Scout flags a
tender, the existing bid pipeline (`southern_tender_docs/02-kb-and-automation-plan.md`)
takes over: pack ingestion, compliance matrix, draft-zero, human go/no-go gate.

## Run it

    cd tender-scout
    python scout.py                 # fetch, score, dedupe, write today's report
    python scout.py --all           # ignore the QLD filter (whole country)
    python scout.py --min-score 40  # lower the shortlist bar for this run
    python scout.py --no-save       # dry run, don't touch seen.json
    python scout.py --open          # open the report after writing (Windows)

Zero third-party dependencies. Python 3.9+. Runs on Windows and the VPS unchanged.

- Reports: `reports/YYYY-MM-DD.md` (shortlist table + per-tender detail)
- Dedupe store: `seen.json` (`guid -> first-seen date`); anything already seen
  loses its **NEW** tag on the next run.

## What it scans

`VendorPanel` public-tenders RSS (`PublicTendersRssV2.aspx?mode=all`), ~440 live
tenders nationally. VendorPanel is where SDRC and most QLD councils publish, so
it is the right primary source for CRC.

QLD is detected two ways: the closing-date timezone label reads `Brisbane time`
for QLD tenders (vs `Canberra, Melbourne, Sydney time`), and the issuer name is
matched against a QLD gov/council pattern list. Set `require_qld: false` in the
config, or pass `--all`, to go nationwide.

### Not yet covered
- **QTenders** (`qtenders.hpw.qld.gov.au`, QLD state portal) is a JavaScript
  single-page app with no clean feed. It needs a headless browser to scrape
  (the gstack `browse` daemon would do it). Councils on VendorPanel are the
  higher-value pool for CRC, so this is a later add.
- Council sites that self-host tenders outside VendorPanel (rare in QLD).

## Tuning

Everything lives in `config.json`:

- `keywords.strong` / `keywords.weak` - what counts as relevant. Strong hits in
  the title score highest; weak hits in the body score least.
- `relevant_categories` - VendorPanel category buckets that count.
- `qld_issuer_patterns` - issuer-name fragments that mark a tender as QLD.
- `weights` - points per signal (category, keyword, council buyer, QLD, runway).
- `min_score` - shortlist bar. Default 45. A council tender only earns the
  council bonus when it also matches a comms keyword, which keeps broad council
  EOIs (leases, rec-centre management) out of the list.

## Scheduling (not yet wired)

Pick one and it gets set up:

- **VPS cron** (hermes-agent container) - copy `tender-scout/` to the VPS crcpr
  repo, cron `python scout.py` daily ~7am Brisbane, email the report to Alex/Lyall.
- **Windows Task Scheduler** - daily local run on Alex's box, `--open` to pop
  the report.
- **Trigger.dev** - if it should live with the other 3P agents.

Until then, run it by hand before each go/no-go cycle.
