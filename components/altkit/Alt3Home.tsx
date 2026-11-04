import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Phone, ShieldCheck, Siren } from "lucide-react";
import { siteConfig } from "@/config/site";
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
  STATS,
  SURVEY_LINE,
  TESTIMONIALS,
} from "./data";
import type { A1Card } from "./insights";
import { Reveal } from "./motion";
import { PostCard } from "./PostCard";
import { Container, Eyebrow, H2, MediaMarquee, Section } from "./primitives";

const ICONS = { Building2, ShieldCheck, Siren } as const;

/** A rounded panel: the Ember building block. */
function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`kit-r relative overflow-hidden border border-line bg-card ${className}`}>{children}</div>;
}

/**
 * Ember (concept 3): everything lives in large rounded panels. Blue replaces
 * the orange. Three photographs: the hero and two small round portraits.
 */
export function Alt3Home({ posts }: { posts: A1Card[] }) {
  const base = CONCEPTS.alt3.base;

  return (
    <>
      {/* ---------- WHO WE ARE ---------- */}
      <Section tone="base" className="pb-6 pt-6 md:pt-8">
        <Container>
          <Panel className="p-6 md:p-10">
            <div className="orb -left-40 -top-48 h-[34rem] w-[34rem]" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:items-center lg:gap-12">
              <Reveal>
                <Eyebrow>{HERO.eyebrow}</Eyebrow>
                <h1 className="kit-display kit-h1 mt-5">
                  Strategic, <span className="text-accent">proven</span> communications advice.
                </h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">{HERO.lead}</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="btn btn-primary">
                    Book a consultation
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link href="/services" className="btn btn-quiet">
                    View all services
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="kit-r-sm relative aspect-[5/4] overflow-hidden">
                <Image
                  src={PHOTOS.foundersStudio2}
                  alt={FOUNDERS_ALT}
                  fill
                  priority
                  sizes="(min-width: 1024px) 440px, 90vw"
                  className="object-cover object-[50%_26%]"
                />
              </Reveal>
            </div>
            <div className="relative mt-8 border-t border-line pt-7">
              <MediaMarquee />
            </div>
          </Panel>
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section tone="base" className="py-12 md:py-16">
        <Container>
          <Eyebrow>Our practice areas</Eyebrow>
          <H2 className="mt-3">Corporate. Reputation. Crisis.</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {practices(base).map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <Reveal key={p.href} delay={i * 0.05} className="h-full">
                  <Panel className="flex h-full flex-col p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line">
                      <Icon className="h-4 w-4 text-accent" aria-hidden />
                    </span>
                    <h3 className="kit-display mt-5 text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
                    <Link href={p.href} className="btn btn-quiet mt-6 self-start !px-4 !py-2">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </Panel>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE STAND FOR ---------- */}
      <Section tone="base" className="py-6 md:py-8">
        <Container>
          <Panel className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-14">
            <div>
              <Eyebrow>Why a boutique firm</Eyebrow>
              <p className="kit-display mt-5 text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.3]">&quot;{BOUTIQUE_QUOTE}&quot;</p>
              <p className="mt-5 text-sm text-muted">Lyall Mercer, co-founder</p>
            </div>
            <div className="divide-y divide-[var(--line)]">
              {PILLARS.map((p) => (
                <div key={p.title} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-base font-bold">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </Panel>
        </Container>
      </Section>

      {/* ---------- OUTCOMES ---------- */}
      <Section tone="base" className="py-12 md:py-16">
        <Container>
          <Eyebrow>Client outcomes</Eyebrow>
          <H2 className="mt-3">Results that speak for themselves.</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {siteConfig.caseStudies.map((cs, i) => (
              <Reveal key={cs.id} delay={i * 0.05} className="h-full">
                <Panel className="flex h-full flex-col p-6">
                  <span className="self-start rounded-full bg-[#1c74bc] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    {cs.sector}
                  </span>
                  <p className="kit-display mt-5 text-[clamp(1.25rem,2vw,1.6rem)]">{cs.outcome}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cs.outcomeSub}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- PROOF ---------- */}
      <Section tone="base" className="py-4">
        <Container>
          <Panel className="grid grid-cols-2 gap-6 p-6 md:grid-cols-4 md:p-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="kit-display text-[clamp(1.7rem,2.6vw,2.3rem)] leading-none text-accent">{s.value}</p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </Panel>
        </Container>
      </Section>

      {/* ---------- THE PEOPLE ---------- */}
      <Section tone="base" className="py-12 md:py-16">
        <Container>
          <Eyebrow>Our team</Eyebrow>
          <H2 className="mt-3">The people behind the advice.</H2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[FOUNDERS.lyall, FOUNDERS.barbara].map((f, i) => (
              <Reveal key={f.name} delay={i * 0.06} className="h-full">
                <Panel className="flex h-full gap-5 p-6">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full md:h-24 md:w-24">
                    <Image src={f.photo} alt={`${f.name}, ${f.role}`} fill sizes="96px" className="object-cover object-[50%_18%]" />
                  </div>
                  <div>
                    <p className="kit-display text-lg">{f.name}</p>
                    <p className="text-sm text-accent">{f.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{f.bio[0]}</p>
                    {i === 0 ? (
                      <Link href="/about" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
                        Read Lyall&apos;s full profile
                        <ArrowUpRight className="h-3.5 w-3.5 text-accent" aria-hidden />
                      </Link>
                    ) : (
                      <p className="mt-2 text-sm leading-relaxed text-muted">{f.bio[1]}</p>
                    )}
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- ENDORSEMENTS ---------- */}
      <Section tone="base" className="py-12 md:py-16">
        <Container>
          <Eyebrow>Client endorsements</Eyebrow>
          <H2 className="mt-3">Partnerships our clients stand behind.</H2>
          <div className="mt-8 border-t border-line">
            {[...TESTIMONIALS, { quote: SURVEY_LINE, who: "CRC Public Relations Client Survey" }].map((t) => (
              <div key={t.who} className="grid gap-2 border-b border-line py-5 md:grid-cols-[1fr,auto] md:gap-10">
                <p className="text-base leading-relaxed">&quot;{t.quote}&quot;</p>
                <p className="text-xs text-muted md:text-right">{t.who}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- INSIGHTS ---------- */}
      <Section tone="base" className="py-12 md:py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <H2 className="mt-3">Insights. Commentary. Crisis thinking.</H2>
            </div>
            <Link href={routesFor(base).insights} className="btn btn-quiet">
              Insights
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- INVITATION ---------- */}
      <Section tone="base" className="pb-14 pt-4 md:pb-20">
        <Container>
          <section className="tone-cta kit-cta-panel kit-r relative overflow-hidden px-6 py-14 text-center md:py-16" aria-label={CTA_COPY.title}>
            <div className="orb -bottom-64 left-1/2 h-[34rem] w-[50rem] -translate-x-1/2" aria-hidden />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">{CTA_COPY.eyebrow}</p>
            <h2 className="kit-display relative mx-auto mt-4 max-w-2xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.08]">
              {CTA_COPY.title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">{CTA_COPY.body}</p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Book a consultation
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href={siteConfig.phone.href} className="inline-flex items-center gap-2 text-sm font-semibold">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                {siteConfig.phone.display}
              </a>
            </div>
          </section>
        </Container>
      </Section>
    </>
  );
}
