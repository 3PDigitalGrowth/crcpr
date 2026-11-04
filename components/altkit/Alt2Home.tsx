import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
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
  TESTIMONIALS,
} from "./data";
import { formatDate } from "./format";
import type { A1Card } from "./insights";
import { Reveal } from "./motion";
import { Container, Eyebrow, H2, MediaMarquee, Section } from "./primitives";

/**
 * Chambers (concept 2): the page is a mounted print inside a frame. Numbered
 * practice stack, editorial ledgers, three photographs in total.
 */
export function Alt2Home({ posts }: { posts: A1Card[] }) {
  const base = CONCEPTS.alt2.base;

  return (
    <>
      {/* ---------- WHO WE ARE ---------- */}
      <Section tone="base" className="pb-6 pt-12 md:pt-16">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-3xl">
              <Eyebrow>{HERO.eyebrow}</Eyebrow>
              <h1 className="kit-display kit-h1 mt-5">
                Strategic,
                <br />
                Proven
                <br />
                Communications
                <br />
                Advice.
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="flex max-w-sm flex-col gap-4 text-[15px] leading-relaxed text-muted lg:pb-1 lg:text-right">
              <p>{HERO.lead}</p>
              <p>{HERO.second}</p>
              <div className="mt-2 flex flex-wrap gap-3 lg:justify-end">
                <Link href="/contact" className="btn btn-primary">
                  Book a consultation
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal className="kit-r relative mt-10 aspect-[16/9] overflow-hidden md:aspect-[3/1]">
            <Image
              src={PHOTOS.foundersOffice}
              alt={FOUNDERS_ALT}
              fill
              priority
              sizes="(min-width: 1200px) 1140px, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </Reveal>
          <div className="py-10">
            <MediaMarquee />
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <Eyebrow>Our practice areas</Eyebrow>
          <H2 className="mt-3">Corporate. Reputation. Crisis.</H2>
          <div className="mt-8 border-t border-line">
            {practices(base).map((p, i) => (
              <Reveal key={p.href} delay={i * 0.05}>
                <Link href={p.href} className="group block border-b border-line py-5 md:py-6">
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className="kit-display text-sm text-accent">{`0${i + 1}.`}</span>
                      <span className="kit-display text-[clamp(1.3rem,2.6vw,2.15rem)] uppercase leading-none transition-transform duration-300 group-hover:translate-x-1.5">
                        {p.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 md:max-w-sm md:justify-end md:text-right">
                      <p className="text-sm leading-relaxed text-muted">{p.blurb}</p>
                      <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-accent md:block" aria-hidden />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE STAND FOR ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="kit-r grid gap-10 border border-line p-6 md:p-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-14">
            <div>
              <Eyebrow>Why a boutique firm</Eyebrow>
              <p className="mt-5 text-[clamp(1.15rem,1.8vw,1.45rem)] font-medium leading-[1.4]">&quot;{BOUTIQUE_QUOTE}&quot;</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Lyall Mercer, co-founder</p>
            </div>
            <div className="divide-y divide-[var(--line)]">
              {PILLARS.map((p) => (
                <div key={p.title} className="py-4 first:pt-0 last:pb-0">
                  <p className="kit-display text-[15px] uppercase">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- THE PEOPLE ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <Eyebrow>Our team</Eyebrow>
          <H2 className="mt-3">The people behind the advice.</H2>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Reveal className="order-1 h-full">
              <div className="kit-r h-full overflow-hidden border border-line bg-card">
                <div className="relative aspect-[4/4] w-full">
                  <Image src={FOUNDERS.lyall.photo} alt={`${FOUNDERS.lyall.name}, ${FOUNDERS.lyall.role}`} fill sizes="(min-width: 1024px) 270px, 50vw" className="object-cover object-[50%_18%]" />
                </div>
                <div className="p-4">
                  <p className="kit-display text-base">{FOUNDERS.lyall.name}</p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{FOUNDERS.lyall.role}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.05} className="order-3 col-span-2 h-full lg:order-2 lg:col-span-1">
              <div className="kit-r flex h-full flex-col justify-center gap-4 border border-line p-5">
                <p className="text-sm leading-relaxed text-muted">{FOUNDERS.lyall.bio[0]}</p>
                <Link href="/about" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                  Read Lyall&apos;s full profile
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="order-4 col-span-2 h-full lg:order-3 lg:col-span-1">
              <div className="kit-r flex h-full flex-col justify-center gap-3 border border-line p-5">
                <p className="text-sm leading-relaxed text-muted">{FOUNDERS.barbara.bio[0]}</p>
                <p className="text-sm leading-relaxed text-muted">{FOUNDERS.barbara.bio[1]}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="order-2 h-full lg:order-4">
              <div className="kit-r h-full overflow-hidden border border-line bg-card">
                <div className="relative aspect-[4/4] w-full">
                  <Image src={FOUNDERS.barbara.photo} alt={`${FOUNDERS.barbara.name}, ${FOUNDERS.barbara.role}`} fill sizes="(min-width: 1024px) 270px, 50vw" className="object-cover object-[50%_18%]" />
                </div>
                <div className="p-4">
                  <p className="kit-display text-base">{FOUNDERS.barbara.name}</p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{FOUNDERS.barbara.role}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- PROOF ---------- */}
      <Section tone="base" className="py-10">
        <Container>
          <div className="grid grid-cols-2 border-y border-line md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-6 text-center ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
              >
                <p className="kit-display text-[clamp(1.6rem,2.4vw,2.1rem)] text-accent">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <Eyebrow>Client endorsements</Eyebrow>
          <H2 className="mt-3">Partnerships our clients stand behind.</H2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.who} delay={i * 0.05} className="h-full">
                <div className="glass kit-r flex h-full flex-col justify-between gap-5 p-5">
                  <p className="text-[15px] leading-relaxed">&quot;{t.quote}&quot;</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">{t.who}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- OUTCOMES ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Client outcomes</Eyebrow>
              <H2 className="mt-3">Results that speak for themselves.</H2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              Explore
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 border-t border-line">
            {siteConfig.caseStudies.map((cs, i) => (
              <div key={cs.id} className="grid gap-2 border-b border-line py-6 md:grid-cols-[3rem,1fr,1.6fr] md:items-baseline md:gap-8">
                <span className="kit-display text-sm text-accent">{`0${i + 1}.`}</span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{cs.sector}</p>
                  <p className="kit-display mt-1 text-[clamp(1.15rem,1.8vw,1.45rem)]">{cs.outcome}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted">{cs.outcomeSub}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- INSIGHTS ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <H2 className="mt-3">Insights. Commentary. Crisis thinking.</H2>
            </div>
            <Link href={routesFor(base).insights} className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              Insights
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 border-t border-line">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} href={p.href} className="group grid gap-2 border-b border-line py-5 md:grid-cols-[11rem,1fr,auto] md:items-baseline md:gap-8">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{formatDate(p.date)}</span>
                <span className="text-lg font-semibold leading-snug transition-colors group-hover:text-accent">{p.title}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">{p.category}</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- INVITATION ---------- */}
      <div className="tone-base px-3 pb-3 md:px-5 md:pb-5">
        <section className="tone-cta kit-r relative overflow-hidden px-6 py-14 text-center md:py-16" aria-label={CTA_COPY.title}>
          <div className="orb -right-32 -top-40 h-[30rem] w-[30rem]" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-accent">{CTA_COPY.eyebrow}</p>
          <h2 className="kit-display mx-auto mt-4 max-w-2xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.08]">{CTA_COPY.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">{CTA_COPY.body}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Book a consultation
            </Link>
            <a href={siteConfig.phone.href} className="inline-flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" aria-hidden />
              24/7 confidential crisis line &middot; {siteConfig.phone.display}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
