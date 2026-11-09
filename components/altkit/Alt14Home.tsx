import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
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
  SPECIALIST,
  STATS,
  SURVEY_LINE,
  TESTIMONIALS,
} from "./data";
import type { A1Card } from "./insights";
import { Reveal } from "./motion";
import { PostCard } from "./PostCard";
import { BlueRule, Container, H2, MediaMarquee, Section } from "./primitives";

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] text-muted ${className}`}>{children}</p>;
}

/* Keeps split-panel copy aligned with the 1200px container on wide screens. */
const EDGE_L = "px-6 sm:px-8 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-14";
const EDGE_R = "px-6 sm:px-8 lg:pr-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pl-14";

/**
 * Private Office (concept 14, round three). References: C. Hoare & Co.,
 * Gresham, Lazard. A split hero (navy panel beside one photograph of the
 * office), light tracked capitals and square edges. The two of them appear
 * once, in the "why a boutique firm" split; the team section is text only.
 */
export function Alt14Home({ posts }: { posts: A1Card[] }) {
  const base = CONCEPTS.alt14.base;

  return (
    <>
      {/* ---------- WHO WE ARE: split panel ---------- */}
      <section className="tone-base">
        <div className="grid lg:min-h-[540px] lg:grid-cols-2">
          <div className={`tone-deep flex flex-col justify-center py-14 md:py-20 ${EDGE_L}`}>
            <Reveal>
              <Label>{HERO.eyebrow}</Label>
              <h1 className="kit-display kit-h1 mt-7 max-w-xl [text-wrap:balance]">Strategic, proven communications advice.</h1>
              <div className="mt-7">
                <BlueRule />
              </div>
              <p className="mt-7 max-w-md text-base leading-relaxed text-muted">{HERO.lead}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Book a consultation
                </Link>
                <Link href="/services" className="btn btn-quiet">
                  Our services
                </Link>
              </div>
              <a href={siteConfig.phone.href} className="mt-9 inline-flex items-center gap-2.5 text-sm">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                <span className="text-muted">24/7 confidential line</span>
                <span className="font-semibold">{siteConfig.phone.display}</span>
              </a>
            </Reveal>
          </div>
          <div className="relative min-h-[280px] sm:min-h-[380px]">
            <Image
              src={PHOTOS.officeBoardroom}
              alt="The CRC Public Relations boardroom"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- STATEMENT ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container className="grid gap-6 lg:grid-cols-[0.75fr,1.25fr] lg:gap-14">
          <Label className="pt-2">Boutique corporate PR</Label>
          <div>
            <p className="kit-display text-[clamp(1.35rem,2.3vw,1.95rem)] leading-[1.4] !tracking-[0.01em]">
              {HERO.second}
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">{HERO.direct}</p>
          </div>
        </Container>
      </Section>

      <Section tone="base" className="border-y border-line py-9">
        <Container>
          <MediaMarquee />
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Label>Our practice areas</Label>
            <H2 className="mt-4">Corporate. Reputation. Crisis.</H2>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {practices(base).map((p, i) => (
              <Reveal key={p.href} delay={i * 0.05} className="h-full">
                <div className="flex h-full flex-col items-center border border-line px-7 py-9 text-center">
                  <BlueRule width="1.75rem" />
                  <h3 className="mt-6 text-[13px] font-semibold uppercase tracking-[0.18em]">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{p.blurb}</p>
                  <Link href={p.href} className="btn btn-quiet mt-auto !px-5 !py-3">
                    Find out more
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-1 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...SPECIALIST, { title: "Media training", blurb: "", href: "/media-training" }].map((s) => (
              <Link key={s.href} href={s.href} className="group flex items-center justify-between gap-3 py-2 text-sm">
                <span className="font-medium">{s.title}</span>
                <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE STAND FOR: split, reversed ---------- */}
      <section className="tone-base">
        <div className="grid lg:grid-cols-2">
          <div className="relative order-2 min-h-[340px] sm:min-h-[460px] lg:order-1">
            <Image
              src={PHOTOS.foundersStudio}
              alt={FOUNDERS_ALT}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_18%]"
            />
          </div>
          <div className={`tone-deep order-1 py-14 md:py-20 lg:order-2 ${EDGE_R}`}>
            <Label>Why a boutique firm</Label>
            <blockquote className="kit-display mt-6 text-[clamp(1.15rem,1.8vw,1.45rem)] leading-[1.5] !tracking-[0.01em]">
              &ldquo;{BOUTIQUE_QUOTE}&rdquo;
            </blockquote>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Lyall Mercer, co-founder</p>
            <div className="mt-9">
              {PILLARS.map((p) => (
                <div key={p.title} className="border-t border-line py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em]">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- OUTCOMES ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:gap-16">
          <div>
            <Label>Client outcomes</Label>
            <H2 className="mt-4">Results that speak for themselves.</H2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{SURVEY_LINE}</p>
            <Link href="/case-studies" className="btn btn-quiet mt-7">
              Case studies
            </Link>
          </div>
          <div className="border-b border-line">
            {siteConfig.caseStudies.map((cs) => (
              <div key={cs.id} className="border-t border-line py-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{cs.sector}</p>
                <p className="mt-2 text-lg font-semibold">{cs.outcome}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{cs.outcomeSub}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- THE RECORD ---------- */}
      <Section tone="deep" className="py-14">
        <Container>
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-[var(--line)]">
            {STATS.map((s) => (
              <div key={s.label} className="px-4 text-center">
                <p className="kit-display text-[clamp(2rem,3vw,2.6rem)] leading-none">{s.value}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- THE PEOPLE (text only) ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container>
          <Label>Our team</Label>
          <H2 className="mt-4">The people behind the advice.</H2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
            {[FOUNDERS.lyall, FOUNDERS.barbara].map((f, i) => (
              <div key={f.name} className="border-t border-line pt-6">
                <p className="kit-display text-lg uppercase">{f.name}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{f.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{f.bio[0]}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.bio[1]}</p>
                {i === 0 ? (
                  <Link href="/about" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:text-accent">
                    Read Lyall&apos;s full profile
                    <ArrowRight className="h-3.5 w-3.5 text-accent" aria-hidden />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- ENDORSEMENTS ---------- */}
      <Section tone="base" className="border-t border-line py-16 md:py-20">
        <Container>
          <Label className="text-center">Client endorsements</Label>
          <blockquote className="kit-display mx-auto mt-6 max-w-3xl text-center text-[clamp(1.15rem,1.9vw,1.5rem)] leading-[1.5] !tracking-[0.01em]">
            &ldquo;{TESTIMONIALS[0].quote}&rdquo;
          </blockquote>
          <p className="mt-4 text-center text-xs text-muted">{TESTIMONIALS[0].who}</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            {TESTIMONIALS.slice(1).map((t) => (
              <figure key={t.who} className="border-t border-line pt-5">
                <blockquote className="text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-xs text-muted">{t.who}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- COMMENTARY ---------- */}
      <Section tone="base" className="border-t border-line py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Label>Commentary</Label>
              <H2 className="mt-4">Insights. Commentary. Crisis thinking.</H2>
            </div>
            <Link href={routesFor(base).insights} className="btn btn-quiet">
              All insights
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- INVITATION ---------- */}
      <section className="tone-deep py-16 md:py-20" aria-label={CTA_COPY.title}>
        <Container className="grid gap-10 lg:grid-cols-[1.3fr,0.7fr] lg:items-end lg:gap-16">
          <div>
            <Label>{CTA_COPY.eyebrow}</Label>
            <h2 className="kit-display kit-h2 mt-5 max-w-2xl">{CTA_COPY.title}</h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">{CTA_COPY.body}</p>
          </div>
          <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <Link href="/contact" className="btn btn-primary w-full">
              Book a consultation
            </Link>
            <a href={siteConfig.phone.href} className="mt-6 flex items-center gap-2.5 text-sm">
              <Phone className="h-4 w-4 text-accent" aria-hidden />
              <span className="text-muted">24/7 confidential line</span>
              <span className="font-semibold">{siteConfig.phone.display}</span>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
