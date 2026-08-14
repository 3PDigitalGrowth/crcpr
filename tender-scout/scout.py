#!/usr/bin/env python3
"""Tender Scout: poll public tender feeds, surface live opportunities that fit
CRC (public relations, media, communications) and 3P (digital growth), score
each go/no-go, dedupe against past runs, write a shortlist report.

Zero third-party deps. Python 3.9+. Runs on Windows and the VPS unchanged.

Usage:
    python scout.py                 # normal run: fetch, score, dedupe, write report
    python scout.py --all           # ignore the QLD filter (whole country)
    python scout.py --min-score 20  # lower the shortlist bar for this run
    python scout.py --no-save       # do not update seen.json (dry run)
    python scout.py --open          # print the report path and open it (Windows)

Report lands in tender-scout/reports/YYYY-MM-DD.md
Dedupe store: tender-scout/seen.json  (guid -> first-seen ISO date)
"""

import argparse
import html
import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from pathlib import Path

HERE = Path(__file__).resolve().parent
CONFIG_PATH = HERE / "config.json"
SEEN_PATH = HERE / "seen.json"
REPORTS_DIR = HERE / "reports"
UA = "Mozilla/5.0 (TenderScout/1.0; +3pdigital.com.au)"

# Brisbane is UTC+10 year round, no DST.
BRISBANE = timezone(timedelta(hours=10))


# ---------------------------------------------------------------- config / io
def load_config():
    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def load_seen():
    if SEEN_PATH.exists():
        with open(SEEN_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def save_seen(seen):
    with open(SEEN_PATH, "w", encoding="utf-8") as f:
        json.dump(seen, f, indent=2, sort_keys=True)


def fetch(url, tries=3):
    last = None
    for attempt in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=45) as resp:
                return resp.read().decode("utf-8", errors="replace")
        except Exception as exc:  # noqa: BLE001 - report and retry
            last = exc
    raise RuntimeError(f"fetch failed after {tries} tries: {url} ({last})")


# ---------------------------------------------------------------- rss parsing
FIELD_RE = {
    "details": re.compile(r"Tender Details\s*:\s*</b>\s*(.*?)(?:<br\s*/?>|<b>)", re.I | re.S),
    "issuer": re.compile(r"Issued by\s*:\s*</b>\s*(.*?)(?:<br|<b>)", re.I | re.S),
    "closing": re.compile(r"Closing Date\s*</b>\s*:\s*(.*?)(?:<br|<b>)", re.I | re.S),
    "reference": re.compile(r"Reference number\s*</b>\s*:\s*(.*?)(?:<br|<b>)", re.I | re.S),
    "categories": re.compile(r"Tender categories\s*</b>\s*:\s*(.*?)(?:<br|<b>|$)", re.I | re.S),
}
CLOSE_DT_RE = re.compile(r"(\d{1,2}/[A-Za-z]{3}/\d{4}\s+\d{1,2}:\d{2}\s*[AP]M)")


def strip_html(text):
    text = re.sub(r"<[^>]+>", " ", text)
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def parse_field(desc_html, key):
    m = FIELD_RE[key].search(desc_html)
    return strip_html(m.group(1)) if m else ""


def parse_closing(closing_str):
    """Return (datetime|None, is_brisbane_tz)."""
    is_bris = "brisbane" in closing_str.lower()
    m = CLOSE_DT_RE.search(closing_str)
    if not m:
        return None, is_bris
    try:
        dt = datetime.strptime(m.group(1).strip(), "%d/%b/%Y %I:%M %p")
        # closing times in the feed are local to the tender; treat as Brisbane
        # for QLD ones, otherwise leave naive-tagged Brisbane for runway math.
        return dt.replace(tzinfo=BRISBANE), is_bris
    except ValueError:
        return None, is_bris


def parse_feed(xml_text, source_name):
    items = []
    root = ET.fromstring(xml_text)
    for it in root.iter("item"):
        title = (it.findtext("title") or "").strip()
        desc = it.findtext("description") or ""
        link = (it.findtext("link") or "").strip()
        guid = (it.findtext("guid") or "").strip()
        cats = [c.text.strip() for c in it.findall("category") if c.text]
        closing_str = parse_field(desc, "closing")
        closing_dt, is_bris = parse_closing(closing_str)
        items.append({
            "source": source_name,
            "guid": guid or link or title,
            "title": html.unescape(title),
            "link": link,
            "details": parse_field(desc, "details"),
            "issuer": parse_field(desc, "issuer"),
            "closing_str": closing_str,
            "closing_dt": closing_dt,
            "closing_brisbane_tz": is_bris,
            "reference": parse_field(desc, "reference"),
            "categories": cats or [c.strip() for c in parse_field(desc, "categories").split(",") if c.strip()],
        })
    return items


# ---------------------------------------------------------------- scoring
def is_qld(item, cfg):
    if item["closing_brisbane_tz"]:
        return True
    issuer = item["issuer"].lower()
    return any(p in issuer for p in cfg["qld_issuer_patterns"])


def is_council(item):
    issuer = item["issuer"].lower()
    return any(w in issuer for w in ("council", "shire", "regional", "city of"))


def score(item, cfg, now_bris):
    w = cfg["weights"]
    reasons = []
    total = 0

    title_l = item["title"].lower()
    body_l = (item["details"] + " " + " ".join(item["categories"])).lower()
    cats_l = " ".join(item["categories"]).lower()

    # category match
    if any(rc in cats_l for rc in cfg["relevant_categories"]):
        total += w["category_hit"]
        reasons.append("category match")

    # keyword matches
    strong_hits = [k for k in cfg["keywords"]["strong"] if k in title_l or k in body_l]
    weak_hits = [k for k in cfg["keywords"]["weak"] if k in title_l or k in body_l]
    has_keyword = bool(strong_hits or weak_hits)
    for k in cfg["keywords"]["strong"]:
        if k in title_l:
            total += w["keyword_strong_title"]
            reasons.append(f"title:{k}")
            break
    else:
        for k in cfg["keywords"]["strong"]:
            if k in body_l:
                total += w["keyword_strong_body"]
                reasons.append(f"body:{k}")
                break
    for k in cfg["keywords"]["weak"]:
        if k in title_l:
            total += w["keyword_weak_title"]
            break
    else:
        for k in cfg["keywords"]["weak"]:
            if k in body_l:
                total += w["keyword_weak_body"]
                break

    # council bonus only counts when the tender is genuinely comms-flavoured,
    # otherwise broad council EOIs that tag every category leak through.
    if is_council(item) and has_keyword:
        total += w["is_council"]
        reasons.append("council buyer")
    if is_qld(item, cfg):
        total += w["is_qld"]

    # runway
    days = None
    if item["closing_dt"] is not None:
        days = (item["closing_dt"] - now_bris).days
        if days >= cfg["healthy_runway_days"]:
            total += w["healthy_runway"]

    item["_days_to_close"] = days
    item["_strong_hits"] = strong_hits
    item["_weak_hits"] = weak_hits
    item["_reasons"] = reasons
    return total


# ---------------------------------------------------------------- report
def fmt_close(item):
    if item["closing_dt"] is None:
        return item["closing_str"] or "unknown"
    d = item["_days_to_close"]
    tail = f" ({d}d)" if d is not None else ""
    return item["closing_dt"].strftime("%d %b %Y %I:%M%p AEST") + tail


def build_report(shortlist, all_relevant, seen_before, cfg, args, now_bris, feed_count):
    lines = []
    today = now_bris.strftime("%Y-%m-%d")
    lines.append(f"# Tender Scout shortlist - {today}")
    lines.append("")
    lines.append(f"Scanned {feed_count} live public tenders. "
                 f"{len(all_relevant)} relevant (score >= {args.min_score}), "
                 f"{len([i for i in shortlist if i['guid'] not in seen_before])} new since last run.")
    lines.append(f"Filter: {'QLD only' if cfg['require_qld'] and not args.all else 'nationwide'}. "
                 f"Sources: {', '.join(s['name'] for s in cfg['sources'])}.")
    lines.append("")
    lines.append("Go/no-go is a first-pass fit score, not a decision. A human still "
                 "opens the pack and runs the real go/no-go gate.")
    lines.append("")

    if not shortlist:
        lines.append("_No tenders cleared the score bar this run._")
        return "\n".join(lines) + "\n"

    lines.append("| Score | New | Tender | Buyer | Closes | Why |")
    lines.append("|--:|:-:|---|---|---|---|")
    for it in shortlist:
        new = "**NEW**" if it["guid"] not in seen_before else ""
        why = ", ".join(it["_reasons"][:4]) or "keyword"
        title = it["title"].replace("|", "/")
        buyer = it["issuer"].replace("|", "/") or "?"
        lines.append(f"| {it['_score']} | {new} | [{title}]({it['link']}) | {buyer} | {fmt_close(it)} | {why} |")
    lines.append("")

    lines.append("## Detail")
    lines.append("")
    for it in shortlist:
        lines.append(f"### {it['_score']} - {it['title']}")
        lines.append(f"- **Buyer**: {it['issuer'] or '?'}")
        lines.append(f"- **Ref**: {it['reference'] or '?'}  |  **Closes**: {fmt_close(it)}")
        lines.append(f"- **Categories**: {', '.join(it['categories']) or '?'}")
        if it["_strong_hits"]:
            lines.append(f"- **Keyword hits**: {', '.join(it['_strong_hits'][:8])}")
        lines.append(f"- **Link**: {it['link']}")
        snippet = it["details"][:340]
        if snippet:
            lines.append(f"- {snippet}{'...' if len(it['details']) > 340 else ''}")
        lines.append("")
    return "\n".join(lines) + "\n"


# ---------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser(description="Poll public tender feeds for CRC/3P-fit opportunities.")
    ap.add_argument("--all", action="store_true", help="ignore the QLD filter")
    ap.add_argument("--min-score", type=int, default=None, help="override shortlist score bar")
    ap.add_argument("--no-save", action="store_true", help="do not update seen.json")
    ap.add_argument("--open", action="store_true", help="open the report after writing (Windows)")
    args = ap.parse_args()

    cfg = load_config()
    if args.min_score is None:
        args.min_score = cfg["min_score"]

    now_bris = datetime.now(BRISBANE)
    seen = load_seen()
    seen_before = set(seen.keys())

    all_items = []
    for src in cfg["sources"]:
        try:
            xml_text = fetch(src["url"])
            all_items.extend(parse_feed(xml_text, src["name"]))
        except Exception as exc:  # noqa: BLE001
            print(f"[warn] source failed: {src['name']}: {exc}", file=sys.stderr)

    feed_count = len(all_items)
    if feed_count == 0:
        print("[error] no items fetched from any source", file=sys.stderr)
        sys.exit(1)

    relevant = []
    for it in all_items:
        if cfg["require_qld"] and not args.all and not is_qld(it, cfg):
            continue
        it["_score"] = score(it, cfg, now_bris)
        # drop already-closed tenders
        if it["_days_to_close"] is not None and it["_days_to_close"] < 0:
            continue
        if it["_score"] >= args.min_score:
            relevant.append(it)

    relevant.sort(key=lambda i: (-i["_score"], i["_days_to_close"] if i["_days_to_close"] is not None else 999))

    report = build_report(relevant, relevant, seen_before, cfg, args, now_bris, feed_count)
    REPORTS_DIR.mkdir(exist_ok=True)
    out = REPORTS_DIR / f"{now_bris.strftime('%Y-%m-%d')}.md"
    with open(out, "w", encoding="utf-8") as f:
        f.write(report)

    # update seen store with everything we surfaced
    if not args.no_save:
        stamp = now_bris.strftime("%Y-%m-%d")
        for it in relevant:
            seen.setdefault(it["guid"], stamp)
        save_seen(seen)

    new_count = len([i for i in relevant if i["guid"] not in seen_before])
    print(f"Scanned {feed_count} tenders -> {len(relevant)} relevant, {new_count} new.")
    print(f"Report: {out}")
    if args.open and sys.platform == "win32":
        import os
        os.startfile(out)  # noqa: S606


if __name__ == "__main__":
    main()
