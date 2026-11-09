import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Phone, ShieldCheck, Siren } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ClosingCTA } from "./blocks";
import { CONCEPTS, routesFor } from "./concepts";
import {
  BOUTIQUE_QUOTE,
  CTA_COPY,
  FOUNDERS,
  FOUNDERS_ALT,
  HERO,
  PHOTOS,
  PILLARS,
  practices,
  SECTORS,
  SPECIALIST,
  STATS,
  SURVEY_LINE,
  TESTIMONIALS,
} from "./data";
import type { A1Card } from "./insights";
import { Reveal } from "./motion";
import { PostCard } from "./PostCard";
import { Container, Eyebrow, H2, MediaMarquee, Section } from "./primitives";

const ICONS = { Building2, ShieldCheck, Siren } as const;

/* Fixed heights so server and client draw the same lines. */
const LINES = Array.from({ length: 34 }, (_, i) => 0.18 + 0.82 * Math.abs(Math.sin(i * 1.37) * Math.cos(i * 0.21)));

/** Fine vertical blue lines that stand in for a hero photograph. */
function Linework({ id, className = "" }: { id: string; className?: string }) {
  const W = 680;
  const H = 520;
  const gap = W / LINES.length;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden className={className}>
      <defs>
        {/* userSpaceOnUse: a vertical line has a zero-width box, so bounding-box units draw nothing. */}
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={H}>
          <stop offset="0" stopColor="#62aeea" stopOpacity="0" />
          <stop offset="0.55" stopColor="#3a91d6" stopOpacity="0.55" />
          <stop offset="1" stopColor="#1c74bc" stopOpacity="1" />
        </linearGradient>
      </defs>
      {LINES.map((h, i) => {
        const x = gap * i + gap / 2;
        return (
          <line
            key={i}
            x1={x}
            x2={x}
            y1={H - h * H}
            y2={H}
            stroke={`url(#${id})`}
            strokeWidth={i % 5 === 2 ? 3 : 1.5}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}

/**
 * Linework (concept 15, round three). References: Gilbert + Tobin, Teneo,
 * Centerview Partners. Navy and logo blue with fine linework in place of a
 * hero photograph, a sector list, a pale record band and small round
 * portraits. Three photographs in total.
 */
export function Alt15Home({ posts }: { posts: A1Card[] }) {
  const base = CONCEPTS.alt15.base;

  return (
    <>
      {/* ---------- WHO WE ARE ---------- */}
      <Section tone="deep">
        <Container className="relative pb-12 pt-16 md:pb-14 md:pt-24">
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-end">
            {/* Lines sit in the right half of the hero block and stop above the media strip. */}
            <Linework id="lw-hero" className="absolute -bottom-2 right-0 top-[-3rem] hidden w-[44%] lg:block" />
            <Reveal>
              <Eyebrow>{HERO.eyebrow}</Eyebrow>
              <h1 className="kit-display kit-h1 mt-6 max-w-2xl [text-wrap:balance]">Strategic, proven communications advice.</h1>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted">{HERO.lead}</p>
              <p className="mt-3 max-w-lg text-[15px] font-medium leading-relaxed">{HERO.direct}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Book a consultation
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href="/services" className="btn btn-quiet">
                  View all services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="relative lg:justify-self-end">
              <a href={siteConfig.phone.href} className="glass-strong kit-r block max-w-xs p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">24/7 confidential crisis line</p>
                <p className="kit-display mt-2 flex items-center gap-2 text-xl">
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  {siteConfig.phone.display}
                </p>
              </a>
            </Reveal>
          </div>
          <Linework id="lw-hero-sm" className="mt-10 block h-20 w-full lg:hidden" />
          <div className="mt-10 border-t border-line pt-8 lg:mt-14">
            <MediaMarquee />
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr,1.25fr] lg:gap-16">
          <div>
            <Eyebrow>Our practice areas</Eyebrow>
            <H2 className="mt-4">Corporate. Reputation. Crisis.</H2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">{HERO.second}</p>
          </div>
          <div>
            <div className="border-b border-line">
              {practices(base).map((p) => {
                const Icon = ICONS[p.icon];
                return (
                  <Link key={p.href} href={p.href} className="group flex items-start gap-5 border-t border-line py-6">
                    <span className="kit-r-sm mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-line">
                      <Icon className="h-4 w-4 text-accent" aria-hidden />
                    </span>
                    <span className="flex-1">
                      <span className="kit-display block text-xl">{p.title}</span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-muted">{p.blurb}</span>
                    </span>
                    <ArrowUpRight
                      className="mt-1 h-5 w-5 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[...SPECIALIST, { title: "Media training", blurb: "", href: "/media-training" }].map((s) => (
                <Link key={s.href} href={s.href} className="kit-r-sm border border-line px-3 py-1.5 text-sm hover:border-[var(--accent)]">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- WHO WE ADVISE ---------- */}
      <Section tone="deep" className="py-14 md:py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.75fr,1.25fr] lg:gap-16">
          <div>
            <Eyebrow>Who we work with</Eyebrow>
            <H2 className="mt-4">Trusted by leaders across every sector.</H2>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {SECTORS.map((s) =>
              "href" in s ? (
                <Link key={s.label} href={s.href} className="kit-r-sm border border-[var(--accent)] px-3 py-1.5 text-sm">
                  {s.label}
                </Link>
              ) : (
                <span key={s.label} className="kit-r-sm border border-line px-3 py-1.5 text-sm">
                  {s.label}
                </span>
              ),
            )}
          </div>
        </Container>
      </Section>

      {/* ---------- THE RECORD ---------- */}
      <section className="tone-base py-12 md:py-14" style={{ background: "var(--k-light-2)" }}>
        <Container>
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-[var(--line)]">
            {STATS.map((s) => (
              <div key={s.label} className="px-2 md:px-8">
                <p className="kit-display text-[clamp(2rem,3.2vw,2.75rem)] leading-none text-accent">{s.value}</p>
                <p className="mt-3 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- WHAT WE STAND FOR ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="kit-r relative aspect-[4/3] overflow-hidden">
            <Image
              src={PHOTOS.foundersOffice}
              alt={FOUNDERS_ALT}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </Reveal>
          <div>
            <Eyebrow>Why a boutique firm</Eyebrow>
            <blockquote className="kit-display mt-5 text-[clamp(1.2rem,1.9vw,1.55rem)] leading-[1.38]">
              &ldquo;{BOUTIQUE_QUOTE}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-muted">Lyall Mercer, co-founder</p>
            <div className="mt-8 space-y-4">
              {PILLARS.map((p) => (
                <div key={p.title} className="border-l-2 border-[var(--accent)] pl-4">
                  <p className="text-[15px] font-semibold">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- OUTCOMES ---------- */}
      <Section tone="deep" className="py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Client outcomes</Eyebrow>
              <H2 className="mt-4">Results that speak for themselves.</H2>
            </div>
            <Link href="/case-studies" className="btn btn-quiet">
              Case studies
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {siteConfig.caseStudies.map((cs, i) => (
              <Reveal key={cs.id} delay={i * 0.05} className="h-full">
                <div className="kit-r h-full border-t-2 border-[var(--accent)] bg-card p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{cs.sector}</p>
                  <p className="kit-display mt-4 text-xl">{cs.outcome}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cs.outcomeSub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- THE PEOPLE ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr,1.25fr] lg:gap-16">
          <div>
            <Eyebrow>Our team</Eyebrow>
            <H2 className="mt-4">The people behind the advice.</H2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {[FOUNDERS.lyall, FOUNDERS.barbara].map((f, i) => (
              <Reveal key={f.name} delay={i * 0.06}>
                <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-28 md:w-28">
                  <Image src={f.photo} alt={`${f.name}, ${f.role}`} fill sizes="112px" className="object-cover object-[50%_18%]" />
                </div>
                <p className="kit-display mt-5 text-lg">{f.name}</p>
                <p className="text-sm text-accent">{f.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.bio[0]}</p>
                {i === 0 ? (
                  <Link href="/about" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
                    Read Lyall&apos;s full profile
                    <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden />
                  </Link>
                ) : null}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- ENDORSEMENTS ---------- */}
      <Section tone="base" className="border-t border-line py-16 md:py-20">
        <Container>
          <Eyebrow>Client endorsements</Eyebrow>
          <H2 className="mt-4">Partnerships our clients stand behind.</H2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.who}>
                <span aria-hidden className="kit-display block text-4xl leading-none text-accent">
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-[15px] leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-4 text-xs text-muted">{t.who}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 border-t border-line pt-6 text-sm font-medium">{SURVEY_LINE}</p>
        </Container>
      </Section>

      {/* ---------- INSIGHTS ---------- */}
      <Section tone="base" className="pb-16 md:pb-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <H2 className="mt-4">Insights. Commentary. Crisis thinking.</H2>
            </div>
            <Link href={routesFor(base).insights} className="btn btn-quiet">
              All insights
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCTA eyebrow={CTA_COPY.eyebrow} title={CTA_COPY.title} body={CTA_COPY.body} />
    </>
  );
}
