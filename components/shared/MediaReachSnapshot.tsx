import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface MediaReachSnapshotProps {
  variant?: "navy" | "light";
  compact?: boolean;
  href?: string;
  hrefLabel?: string;
}

export function MediaReachSnapshot({
  variant = "navy",
  compact = false,
  href,
  hrefLabel,
}: MediaReachSnapshotProps) {
  const data = siteConfig.mediaReachSnapshot;

  // The snapshot is intentionally dark + image-led; the `variant` prop is
  // reserved for future placements (e.g. light section) but currently renders
  // the navy editorial treatment in both cases. Kept on the API so callers do
  // not need to change later.
  void variant;

  const clientLedPct = Math.round((data.clientLed.total / data.total) * 100);
  const expertPct = 100 - clientLedPct;

  return (
    <section className="relative isolate overflow-hidden bg-[#0A1830]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/services/media-strategy/snapshot-bg.webp"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className="object-cover object-center"
        />
        {/* Layered navy gradients to keep type readable while letting the
            newsroom imagery show through on the right. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(95deg,rgba(7,18,40,0.97)_0%,rgba(7,18,40,0.93)_42%,rgba(7,18,40,0.6)_72%,rgba(7,18,40,0.45)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_15%_50%,rgba(0,0,0,0.45),transparent_70%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay opacity-[0.06] [background-image:repeating-linear-gradient(0deg,#fff_0_1px,transparent_1px_3px)]"
        />
      </div>

      {/* Top hairline accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Header band */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="font-sans font-medium tracking-[0.18em] uppercase text-brand-gold text-[11px]">
              {data.intro.eyebrow}
            </p>
            <h2 className="mt-5 font-heading font-black text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[0.98] tracking-tight">
              {compact
                ? "221 placements. One month. One client."
                : data.intro.headline}
            </h2>
            {!compact ? (
              <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                {data.intro.body[0]}
              </p>
            ) : (
              <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                Four planned media stories, developed for a {data.clientDescriptor},
                generated 221 placements nationally across television, radio,
                print and digital — in a single month.
              </p>
            )}
          </div>

          {/* Hero stat — large editorial number, asymmetric */}
          <div className="lg:col-span-5">
            <div className="relative pl-6 md:pl-8 border-l border-brand-gold/40">
              <p className="font-heading font-black text-brand-gold text-[88px] md:text-[120px] lg:text-[144px] leading-[0.85] tracking-tighter tabular-nums">
                {data.total}
              </p>
              <p className="mt-3 font-heading font-black text-white text-lg md:text-xl tracking-tight">
                media placements
              </p>
              <p className="mt-1 text-white/55 text-sm">
                from {data.storyCount} planned stories &nbsp;·&nbsp; one month
              </p>
            </div>
          </div>
        </div>

        {/* Channel breakdown — horizontal newspaper-style row */}
        <div className="mt-14 md:mt-20 border-t border-white/10 pt-10">
          <p className="font-sans font-medium tracking-[0.18em] uppercase text-white/50 text-[10px] mb-6">
            How the 221 broke down
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 -mx-2 md:-mx-6">
            {data.breakdown.map((item) => (
              <div
                key={item.label}
                className="px-2 md:px-6 py-5 md:py-2 flex items-baseline gap-4 md:flex-col md:items-start md:gap-2"
              >
                <p className="font-heading font-black text-white text-4xl md:text-5xl lg:text-6xl leading-none tabular-nums">
                  {item.value}
                </p>
                <p className="text-white/65 text-[13px] leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {!compact ? (
          <>
            {/* Second body paragraph + the proportional split */}
            <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="font-sans font-medium tracking-[0.18em] uppercase text-brand-gold text-[10px] mb-4">
                  What this looked like for the client
                </p>
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  {data.intro.body[1]}
                </p>
              </div>

              <div className="lg:col-span-7">
                {/* Proportional split bar */}
                <div className="flex items-baseline justify-between text-white/60 text-[11px] uppercase tracking-[0.15em]">
                  <span>Led by the client</span>
                  <span>Expert commentary</span>
                </div>
                <div className="mt-3 flex h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="bg-brand-gold"
                    style={{ width: `${clientLedPct}%` }}
                  />
                  <div
                    className="bg-brand-teal/80"
                    style={{ width: `${expertPct}%` }}
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between font-heading font-black text-white">
                  <span className="text-3xl md:text-4xl tabular-nums">
                    {data.clientLed.total}
                    <span className="text-white/45 text-sm font-sans font-medium ml-2">
                      ({clientLedPct}%)
                    </span>
                  </span>
                  <span className="text-3xl md:text-4xl tabular-nums">
                    {data.expertComment.total}
                    <span className="text-white/45 text-sm font-sans font-medium ml-2">
                      ({expertPct}%)
                    </span>
                  </span>
                </div>

                {/* Two narrow columns of detail under the bar */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                  <div>
                    <p className="text-white/65 text-sm leading-relaxed">
                      Stories where the client was the focus of the coverage.
                    </p>
                    <ul className="mt-4 divide-y divide-white/10">
                      {data.clientLed.items.map((item) => (
                        <li
                          key={item.label}
                          className="flex items-baseline justify-between gap-4 py-2 text-white/85 text-sm"
                        >
                          <span>{item.label}</span>
                          <span className="font-heading font-black text-white text-base tabular-nums">
                            {item.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-white/65 text-sm leading-relaxed">
                      Stories where the client&rsquo;s name, organisation and
                      commentary were carried as the expert voice in someone
                      else&rsquo;s story.
                    </p>
                    <p className="mt-6 text-white/65 text-sm leading-relaxed">
                      The combined effect: a sustained presence as both the
                      subject of national news and as a trusted voice in the
                      broader public conversation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {/* Source + caveat footer */}
        <div className="mt-14 md:mt-20 border-t border-white/10 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-3 md:gap-10 items-start">
            <p className="text-white/55 text-[13px] leading-relaxed">
              <span className="font-sans font-semibold text-white/85">
                Source.
              </span>{" "}
              {data.source}
            </p>
            <p className="text-white/40 text-[12px] leading-relaxed md:text-right md:max-w-xs">
              {data.caveat}
            </p>
          </div>

          {href ? (
            <div className="mt-6 flex justify-start md:justify-end">
              <Link
                href={href}
                className="group inline-flex items-center gap-2 text-brand-gold font-sans font-semibold text-sm hover:text-gold-light transition-colors"
              >
                {hrefLabel ?? "See the full breakdown"}
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
