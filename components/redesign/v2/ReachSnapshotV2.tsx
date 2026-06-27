"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Counter } from "./Counter";

const serif = "font-[family-name:var(--font-display)]";

/**
 * V2 media-reach snapshot. Replaces the legacy MediaReachSnapshot (which used the
 * old Roboto-black system) with the editorial serif + glass language of the rest
 * of the page. Navy editorial block, giant serif number, glass channel tiles.
 */
export function ReachSnapshotV2() {
  const data = siteConfig.mediaReachSnapshot;
  const clientLedPct = Math.round((data.clientLed.total / data.total) * 100);
  const expertPct = 100 - clientLedPct;

  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-navy">
      <Image
        src="/images/redesign-v2/navy-anchor.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right opacity-25"
      />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(16,28,52,0.97)_0%,rgba(16,28,52,0.9)_55%,rgba(16,28,52,0.68)_100%)]" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"
      />

      <div className="relative px-7 py-16 md:px-14 md:py-20">
        {/* Header row: copy + the hero number */}
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-gold`}
            >
              {data.intro.eyebrow}
            </p>
            <h2
              className={`${serif} mt-5 max-w-2xl text-4xl font-normal leading-[1.02] tracking-[-0.02em] text-white md:text-[3.25rem]`}
            >
              What proactive media relations produces in a{" "}
              <span className="italic text-brand-gold">single month.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
              For a {data.clientDescriptor}, four media stories generated 221
              placements nationally across television, radio, print and digital,
              in a single month.
            </p>
          </div>

          <div className="lg:justify-self-end lg:text-right">
            <p
              className={`${serif} text-[5.5rem] leading-[0.8] tracking-tight text-brand-gold md:text-[9rem]`}
            >
              <Counter value={data.total} />
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/70">
              media placements
            </p>
          </div>
        </div>

        {/* Channel breakdown as glass tiles */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {data.breakdown.map((item) => (
            <div
              key={item.label}
              className="v2-glass-dark rounded-2xl p-5"
            >
              <p className={`${serif} text-4xl leading-none text-white md:text-5xl`}>
                <Counter value={item.value} />
              </p>
              <p className="mt-2 text-[13px] leading-snug text-white/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Client-led vs expert-comment split */}
        <div className="mt-10 max-w-3xl">
          <div className="flex items-baseline justify-between text-[11px] uppercase tracking-[0.15em] text-white/55">
            <span>Led by the client ({clientLedPct}%)</span>
            <span>Expert commentary ({expertPct}%)</span>
          </div>
          <div className="mt-3 flex h-2.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="bg-brand-gold" style={{ width: `${clientLedPct}%` }} />
            <div className="bg-brand-teal/80" style={{ width: `${expertPct}%` }} />
          </div>
        </div>

        {/* Source + caveat + link */}
        <div className="mt-12 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
          <div>
            <p className="max-w-2xl text-[13px] leading-relaxed text-white/55">
              <span className="font-semibold text-white/85">Source.</span>{" "}
              {data.source}
            </p>
            <p className="mt-2 text-[12px] text-white/40">{data.caveat}</p>
          </div>
          <Link
            href="/services/media-strategy#media-reach-snapshot"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-gold transition hover:text-gold-light"
          >
            See the full breakdown
            <ArrowRight
              size={15}
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
