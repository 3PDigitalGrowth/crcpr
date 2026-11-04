import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, ShieldCheck, Siren } from "lucide-react";
import { ClosingCTA } from "./blocks";
import { Alt9Carousel } from "./Alt9Carousel";
import { CONCEPTS, routesFor } from "./concepts";
import {
  CTA_COPY,
  FOUNDERS,
  FOUNDERS_ALT,
  HERO,
  PHOTOS,
  PILLARS,
  practices,
  SECTORS,
  STATS,
  TESTIMONIALS,
} from "./data";
import type { A1Card } from "./insights";
import { Reveal } from "./motion";
import { PostCard } from "./PostCard";
import { Container, Eyebrow, H2, MediaMarquee, Section } from "./primitives";

const ICONS = { Building2, ShieldCheck, Siren } as const;

/** The rotating circular badge that sits over the hero photograph. */
function Badge() {
  return (
    <Link
      href="/contact"
      aria-label="Book a consultation"
      className="glass-strong absolute -top-10 right-6 hidden h-28 w-28 items-center justify-center rounded-full md:flex"
    >
      <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <path id="kit-badge-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-[var(--fg)] text-[8px] font-semibold uppercase tracking-[0.12em]">
          <textPath href="#kit-badge-path">Book a consultation · CRC Public Relations ·</textPath>
        </text>
      </svg>
      <ArrowUpRight className="h-5 w-5 text-accent" aria-hidden />
    </Link>
  );
}

/**
 * Gallery (concept 9), reworked per Lyall's "need some changes to layout":
 * the page now follows who we are, what we do, why us, proof, the people,
 * invitation. Stock imagery is gone; two real photographs remain.
 */
export function Alt9Home({ posts }: { posts: A1Card[] }) {
  const base = CONCEPTS.alt9.base;

  return (
    <>
      {/* ---------- WHO WE ARE ---------- */}
      <Section tone="base" className="pb-6 pt-14 md:pt-20">
        <Container className="text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">{HERO.eyebrow}</p>
            <h1 className="kit-display kit-h1 mx-auto mt-5 max-w-4xl">Strategic, proven communications advice.</h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
              {HERO.lead} {HERO.second}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Book a consultation
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
              <Link href="/services" className="btn btn-quiet">
                View all services
              </Link>
            </div>
          </Reveal>
        </Container>
        <Container className="mt-12">
          <Reveal className="relative">
            <div className="kit-r relative aspect-[16/9] overflow-hidden md:aspect-[21/8]">
              <Image
                src={PHOTOS.officeLounge}
                alt="The CRC Public Relations office"
                fill
                priority
                sizes="(min-width: 1200px) 1140px, 100vw"
                className="object-cover"
              />
            </div>
            <Badge />
          </Reveal>
          <div className="py-12">
            <MediaMarquee center />
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section tone="base" className="pb-16 pt-4 md:pb-20">
        <Container>
          <Eyebrow>Our practice areas</Eyebrow>
          <H2 className="mt-3">Corporate. Reputation. Crisis.</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {practices(base).map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <Reveal key={p.href} delay={i * 0.05} className="h-full">
                  <Link href={p.href} className="kit-r group flex h-full flex-col bg-card p-6">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                    <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ---------- WHY US + WHO WE SERVE ---------- */}
      <Section tone="deep" className="py-16 md:py-20">
        <Container>
          <H2 className="text-center">Trusted by leaders across every sector.</H2>
          <div className="mt-12 grid items-center gap-10 md:grid-cols-[1fr,auto,1fr] md:gap-12">
            <div className="space-y-8 md:text-right">
              {PILLARS.slice(0, 2).map((p) => (
                <div key={p.title}>
                  <p className="text-base font-semibold">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </div>
            <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full md:h-64 md:w-64">
              <Image src={PHOTOS.foundersStudio} alt={FOUNDERS_ALT} fill sizes="256px" className="object-cover object-[50%_12%]" />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-base font-semibold">{PILLARS[2].title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{PILLARS[2].body}</p>
              </div>
              <Link href="/contact" className="btn btn-primary">
                Book a consultation
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2">
            {SECTORS.map((s) => (
              <li key={s.label}>
                {"href" in s && s.href ? (
                  <Link href={s.href} className="block rounded-full border border-line px-3.5 py-1.5 text-xs font-medium hover:border-[var(--accent)]">
                    {s.label}
                  </Link>
                ) : (
                  <span className="block rounded-full border border-line px-3.5 py-1.5 text-xs font-medium">{s.label}</span>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Signature ticker, approved line only. */}
      <div className="overflow-hidden bg-[#141414] py-3.5 text-white" aria-hidden>
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.22em]">
          {Array.from({ length: 8 }).map((_, n) => (
            <span key={n} className="flex items-center gap-10">
              We are your trusted adviser and advocate
              <span className="h-1 w-1 rounded-full bg-[#62aeea]" />
            </span>
          ))}
        </div>
      </div>

      {/* ---------- PROOF ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container>
          <Eyebrow>Client outcomes</Eyebrow>
          <H2 className="mt-3">Results that speak for themselves.</H2>
          <div className="mt-8">
            <Alt9Carousel />
          </div>
          <div className="mt-10 grid grid-cols-2 border-y border-line md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-6 text-center ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
              >
                <p className="kit-display text-[clamp(1.6rem,2.6vw,2.3rem)]">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="base" className="pb-16 md:pb-20">
        <Container>
          <Eyebrow>Client endorsements</Eyebrow>
          <H2 className="mt-3">Partnerships our clients stand behind.</H2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.who} className="border-t border-[var(--fg)] pt-5">
                <blockquote className="text-[15px] leading-relaxed">&quot;{t.quote}&quot;</blockquote>
                <figcaption className="mt-4 text-[11px] uppercase tracking-[0.12em] text-muted">{t.who}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- THE PEOPLE (their photo sits in the circle above) ---------- */}
      <Section tone="deep" className="py-16 md:py-20">
        <Container>
          <Eyebrow>Our team</Eyebrow>
          <H2 className="mt-3">The people behind the advice.</H2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {[FOUNDERS.lyall, FOUNDERS.barbara].map((f, i) => (
              <div key={f.name} className="border-t border-line pt-6">
                <p className="kit-display text-xl uppercase">{f.name}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{f.role}</p>
                <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
                  {f.bio.map((b) => (
                    <p key={b.slice(0, 20)}>{b}</p>
                  ))}
                </div>
                {i === 0 ? (
                  <Link href="/about" className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em]">
                    Read Lyall&apos;s full profile
                    <ArrowRight className="h-3.5 w-3.5 text-accent" aria-hidden />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- INSIGHTS ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <H2 className="mt-3">Insights. Commentary. Crisis thinking.</H2>
            </div>
            <Link href={routesFor(base).insights} className="btn btn-quiet">
              Insights
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCTA eyebrow={CTA_COPY.eyebrow} title={CTA_COPY.title} body={CTA_COPY.body} center />
    </>
  );
}
