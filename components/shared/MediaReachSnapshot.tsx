import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container, Eyebrow, H2 } from "@/components/altkit/primitives";

interface MediaReachSnapshotProps {
  variant?: "navy" | "light";
  compact?: boolean;
  href?: string;
  hrefLabel?: string;
}

/**
 * Chambers media reach snapshot: the anonymised one-month coverage example as
 * an editorial ledger on the pale band. Copy is siteConfig.mediaReachSnapshot.
 */
export function MediaReachSnapshot({ compact = false, href, hrefLabel }: MediaReachSnapshotProps) {
  const data = siteConfig.mediaReachSnapshot;
  const clientLedPct = Math.round((data.clientLed.total / data.total) * 100);
  const expertPct = 100 - clientLedPct;

  return (
    <section className="tone-deep relative py-11 md:py-14" aria-label={data.intro.headline}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.25fr,0.75fr] lg:items-end lg:gap-14">
          <div>
            <Eyebrow>{data.intro.eyebrow}</Eyebrow>
            <H2 className="mt-3 max-w-2xl">
              {compact ? "221 placements. One month. One client." : data.intro.headline}
            </H2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              {compact
                ? `For a ${data.clientDescriptor}, four media stories generated 221 placements nationally across television, radio, print and digital, in a single month.`
                : data.intro.body[0]}
            </p>
          </div>
          <div className="border-l-[3px] border-[var(--k-blue)] pl-6">
            <p className="kit-display text-[clamp(3.5rem,8vw,6rem)] leading-[0.9] text-accent">{data.total}</p>
            <p className="kit-display mt-2 text-[15px] uppercase">media placements</p>
          </div>
        </div>

        <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">How the 221 broke down</p>
        <div className="ledger ledger-wide mt-4">
          {data.breakdown.map((item) => (
            <div key={item.label}>
              <p className="kit-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-none">{item.value}</p>
              <p className="mt-2 text-[13px] leading-snug text-muted">{item.label}</p>
            </div>
          ))}
        </div>

        {!compact ? (
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:gap-14">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                What this looked like for the client
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{data.intro.body[1]}</p>
            </div>

            <div>
              <div className="flex items-baseline justify-between text-[11px] uppercase tracking-[0.15em] text-muted">
                <span>Led by the client</span>
                <span>Expert commentary</span>
              </div>
              <div className="mt-3 flex h-2.5 w-full overflow-hidden rounded-full bg-[var(--line)]">
                <div className="bg-[var(--k-blue)]" style={{ width: `${clientLedPct}%` }} />
                <div className="bg-[var(--k-blue-lift)]" style={{ width: `${expertPct}%` }} />
              </div>
              <div className="kit-display mt-3 flex items-baseline justify-between">
                <span className="text-2xl md:text-3xl">
                  {data.clientLed.total}
                  <span className="ml-2 font-sans text-sm font-medium text-muted">({clientLedPct}%)</span>
                </span>
                <span className="text-2xl md:text-3xl">
                  {data.expertComment.total}
                  <span className="ml-2 font-sans text-sm font-medium text-muted">({expertPct}%)</span>
                </span>
              </div>

              <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm leading-relaxed text-muted">Stories where the client was the focus of the coverage.</p>
                  <ul className="mt-4 divide-y divide-[var(--line)] border-y border-line">
                    {data.clientLed.items.map((item) => (
                      <li key={item.label} className="flex items-baseline justify-between gap-4 py-2 text-sm">
                        <span>{item.label}</span>
                        <span className="kit-display text-base">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted">
                    Stories where the client&apos;s name, organisation and commentary were carried as the expert voice in
                    someone else&apos;s story.
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-muted">
                    The combined effect: a sustained presence as both the subject of national news and as a trusted voice
                    in the broader public conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-12 grid items-start gap-3 border-t border-line pt-6 md:grid-cols-[minmax(0,1fr),auto] md:gap-10">
          <p className="text-[13px] leading-relaxed text-muted">
            <span className="font-semibold text-fg">Source.</span> {data.source}
          </p>
          <p className="text-xs leading-relaxed text-muted md:max-w-xs md:text-right">{data.caveat}</p>
        </div>

        {href ? (
          <Link
            href={href}
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent"
          >
            {hrefLabel ?? "See the full breakdown"}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        ) : null}
      </Container>
    </section>
  );
}
