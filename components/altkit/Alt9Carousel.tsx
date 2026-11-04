"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

/** Text-only case study carousel (Gallery). One outcome at a time. */
export function Alt9Carousel() {
  const items = siteConfig.caseStudies;
  const [i, setI] = useState(0);
  const cs = items[i];
  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);

  return (
    <div className="kit-r bg-card p-6 md:p-10">
      <div className="grid gap-8 md:grid-cols-[1fr,1.3fr] md:gap-12">
        <div aria-live="polite">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{cs.sector}</p>
          <p className="kit-display mt-3 text-[clamp(1.5rem,2.6vw,2.2rem)] uppercase leading-[1.08]">{cs.outcome}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">{cs.outcomeSub}</p>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-muted md:pt-7">
          <p>{cs.challenge}</p>
          <p>{cs.approach}</p>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
        <div className="flex items-center gap-2" role="tablist" aria-label="Case studies">
          {items.map((it, n) => (
            <button
              key={it.id}
              type="button"
              role="tab"
              aria-selected={n === i}
              aria-label={it.outcome}
              onClick={() => setI(n)}
              className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-[var(--accent)]" : "w-2 bg-[var(--line)]"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link href="/case-studies" className="btn btn-primary !py-2.5">
            Case Studies
          </Link>
          <button type="button" onClick={() => go(-1)} aria-label="Back" className="flex h-9 w-9 items-center justify-center rounded-full border border-line">
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next" className="flex h-9 w-9 items-center justify-center rounded-full border border-line">
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
