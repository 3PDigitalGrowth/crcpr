import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, GraduationCap, Landmark, Phone, Scale } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ClosingCTA } from "./blocks";
import { CONCEPTS, routesFor } from "./concepts";
import {
  ASSESSMENT,
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
import { BlueRule, Container, Eyebrow, GhostWord, H2, MediaMarquee, Section } from "./primitives";

const CASE_ICONS = { Scale, Building2, GraduationCap, Landmark } as const;

/**
 * Signal (concept 1), revised after Lyall's 1 Nov feedback: headline and
 * photos scaled right down, three photographs in total, no video.
 */
export function Alt1Home({ posts }: { posts: A1Card[] }) {
  const base = CONCEPTS.alt1.base;
  const snapshot = siteConfig.mediaReachSnapshot;

  return (
    <>
      {/* ---------- WHO WE ARE ---------- */}
      <Section tone="deep">
        <div className="orb -right-48 -top-64 h-[50rem] w-[50rem]" aria-hidden />
        <Container className="grid gap-10 pb-12 pt-12 md:pt-16 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:gap-14">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">{HERO.eyebrow}</p>
            <h1 className="kit-display kit-h1 mt-6">
              <span className="block">Strategic,</span>
              <span className="block text-[#1c74bc] underline decoration-[0.07em] underline-offset-[0.12em]">proven</span>
              <span className="block">communications advice.</span>
            </h1>
            <div className="mt-8 grid max-w-2xl gap-4 text-base leading-relaxed text-muted md:grid-cols-2 md:gap-8">
              <p>{HERO.lead}</p>
              <p>{HERO.second}</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Book a consultation
              </Link>
              <Link href="/contact" className="btn btn-quiet group">
                Start the free assessment
                <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="kit-r relative aspect-[4/3] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={PHOTOS.foundersStudio}
                alt={FOUNDERS_ALT}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <a
              href={siteConfig.phone.href}
              className="glass-strong kit-r-sm absolute -bottom-5 left-4 right-4 flex items-center justify-between gap-4 px-4 py-3 sm:left-auto sm:right-4 sm:w-72"
            >
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  24/7 confidential crisis line
                </span>
                <span className="kit-display mt-1 block text-lg">{siteConfig.phone.display}</span>
              </span>
              <Phone className="h-5 w-5 text-accent" aria-hidden />
            </a>
          </Reveal>
        </Container>
        <Container className="pb-12 pt-6">
          <MediaMarquee />
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section tone="base" className="py-16 md:py-24">
        <GhostWord align="right">REPUTATION</GhostWord>
        <Container>
          <Eyebrow>Our practice areas</Eyebrow>
          <H2 className="mt-4">Corporate. Reputation. Crisis.</H2>
          <div className="mt-10 border-t border-line">
            {practices(base).map((p, i) => (
              <Reveal key={p.href} delay={i * 0.05}>
                <Link
                  href={p.href}
                  className="group grid items-center gap-3 border-b border-line py-6 md:grid-cols-[minmax(0,1fr),minmax(0,1fr),auto] md:gap-10"
                >
                  <h3 className="kit-display text-[clamp(1.2rem,2.1vw,1.75rem)] uppercase leading-[1.05]">{p.title}</h3>
                  <p className="max-w-md text-[15px] leading-relaxed text-muted">{p.blurb}</p>
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    Explore
                    <ArrowUpRight
                      className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {SPECIALIST.map((s) => (
              <Link key={s.href} href={s.href} className="glass kit-r group p-5">
                <p className="text-[15px] font-bold">{s.title}</p>
                <p className="mt-1 text-sm text-muted">{s.blurb}</p>
                <ArrowUpRight className="mt-4 h-4 w-4 text-accent" aria-hidden />
              </Link>
            ))}
          </div>
          <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
            View all services
            <ArrowRight className="h-4 w-4 text-accent" aria-hidden />
          </Link>
        </Container>
      </Section>

      {/* ---------- WHAT WE STAND FOR ---------- */}
      <Section tone="deep" className="py-16 md:py-24">
        <div className="orb -left-40 top-24 h-[36rem] w-[36rem]" aria-hidden />
        <GhostWord align="left">TRUST</GhostWord>
        <Container>
          <Eyebrow>Why a boutique firm</Eyebrow>
          <Reveal className="mt-8">
            <blockquote className="glass-strong kit-r max-w-4xl p-7 md:p-10">
              <span aria-hidden className="kit-display block text-4xl leading-none text-[#1c74bc]">
                &quot;
              </span>
              <p className="kit-display mt-1 text-[clamp(1.2rem,2vw,1.6rem)] leading-[1.3]">{BOUTIQUE_QUOTE}</p>
              <footer className="mt-6 flex items-center gap-3 text-sm font-semibold text-muted">
                <BlueRule width="2rem" />
                Lyall Mercer, co-founder
              </footer>
            </blockquote>
          </Reveal>
          <div className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-3 md:gap-10">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <BlueRule />
                <h3 className="mt-4 text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- PROOF (once, grouped) ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container>
          <Eyebrow>{snapshot.intro.eyebrow}</Eyebrow>
          <div className="mt-8 grid grid-cols-2 border-y border-line md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 md:px-6 ${i % 2 === 1 ? "border-l border-line pl-5" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l md:pl-6" : ""}`}
              >
                <p className="kit-display text-[clamp(1.6rem,2.6vw,2.25rem)] leading-none text-accent">{s.value}</p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-[1fr,1fr] md:gap-14">
            <H2>{snapshot.intro.headline}</H2>
            <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-muted">
              {snapshot.intro.body.map((p) => (
                <p key={p}>{p.replace(" — ", ", ")}</p>
              ))}
              <p className="text-xs">{snapshot.caveat}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- WHO WE SERVE ---------- */}
      <Section tone="base" className="border-t border-line py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:gap-16">
          <div>
            <Eyebrow>Who we work with</Eyebrow>
            <H2 className="mt-4">Trusted by leaders across every sector.</H2>
          </div>
          <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
            {SECTORS.map((s) => (
              <li key={s.label} className="border-b border-line">
                {"href" in s && s.href ? (
                  <Link href={s.href} className="group flex items-center justify-between py-3.5 text-[15px] font-semibold">
                    {s.label}
                    <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden />
                  </Link>
                ) : (
                  <span className="block py-3.5 text-[15px] font-semibold">{s.label}</span>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="deep" className="py-16 md:py-24" ariaLabel="Client endorsements">
        <div className="orb -right-40 top-0 h-[34rem] w-[34rem]" aria-hidden />
        <Container>
          <Eyebrow>Client endorsements</Eyebrow>
          <H2 className="mt-4">Partnerships our clients stand behind.</H2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.who} delay={i * 0.06} className="h-full">
                <figure className="glass kit-r flex h-full flex-col p-6">
                  <blockquote className="flex-1 text-base leading-relaxed">&quot;{t.quote}&quot;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4 text-sm text-muted">{t.who}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-[15px]">
            {SURVEY_LINE} <span className="text-xs text-muted">CRC Public Relations Client Survey</span>
          </p>
        </Container>
      </Section>

      {/* ---------- OUTCOMES ---------- */}
      <Section tone="base" className="py-16 md:py-24">
        <GhostWord align="right">RESULTS</GhostWord>
        <Container>
          <Eyebrow>Client outcomes</Eyebrow>
          <H2 className="mt-4">Results that speak for themselves.</H2>
          <div className="mt-10 grid gap-x-10 border-t border-line md:grid-cols-2">
            {siteConfig.caseStudies.map((cs) => {
              const Icon = CASE_ICONS[cs.icon];
              return (
                <article key={cs.id} className="border-b border-line py-7">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                    <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                    {cs.sector}
                  </p>
                  <p className="kit-display mt-3 text-[clamp(1.3rem,2vw,1.6rem)] leading-[1.1]">{cs.outcome}</p>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{cs.outcomeSub}</p>
                </article>
              );
            })}
          </div>
          <Link href="/case-studies" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">
            Case Studies
            <ArrowRight className="h-4 w-4 text-accent" aria-hidden />
          </Link>
        </Container>
      </Section>

      {/* ---------- THE PEOPLE ---------- */}
      <Section tone="deep" className="py-16 md:py-24">
        <GhostWord align="left">ADVISERS</GhostWord>
        <Container>
          <Eyebrow>Our team</Eyebrow>
          <H2 className="mt-4">The people behind the advice.</H2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {[FOUNDERS.lyall, FOUNDERS.barbara].map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08} className="h-full">
                <div className="glass kit-r grid h-full gap-5 p-5 sm:grid-cols-[150px,1fr] md:p-6">
                  <div className="kit-r-sm relative aspect-[4/5] w-32 overflow-hidden sm:w-full">
                    <Image src={f.photo} alt={`${f.name}, ${f.role}`} fill sizes="150px" className="object-cover object-[50%_15%]" />
                  </div>
                  <div>
                    <p className="kit-display text-xl">{f.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{f.role}</p>
                    <div className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
                      {f.bio.map((b) => (
                        <p key={b.slice(0, 20)}>{b}</p>
                      ))}
                    </div>
                    {i === 0 ? (
                      <Link href="/about" className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                        Read Lyall&apos;s full profile
                        <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- INSIGHTS ---------- */}
      <Section tone="base" className="py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <H2 className="mt-4">Insights. Commentary. Crisis thinking.</H2>
            </div>
            <Link href={routesFor(base).insights} className="btn btn-quiet">
              Insights
              <ArrowRight className="h-4 w-4 text-accent" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- ASSESSMENT + INVITATION ---------- */}
      <Section tone="base" className="pb-16 md:pb-20">
        <Container>
          <div className="kit-r grid gap-5 border border-line p-6 md:grid-cols-[1fr,auto] md:items-center md:p-8">
            <div>
              <p className="text-lg font-bold">{ASSESSMENT.title}</p>
              <p className="mt-1.5 text-sm text-muted">
                {ASSESSMENT.body} {ASSESSMENT.note}
              </p>
            </div>
            <Link href="/contact" className="btn btn-quiet group">
              Start the free assessment
              <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      <ClosingCTA eyebrow={CTA_COPY.eyebrow} title={CTA_COPY.title} body={CTA_COPY.body} />
    </>
  );
}
