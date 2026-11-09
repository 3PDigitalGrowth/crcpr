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
  SECTORS,
  SPECIALIST,
  STATS,
  SURVEY_LINE,
  TESTIMONIALS,
} from "./data";
import { formatDate } from "./format";
import type { A1Card } from "./insights";
import { Reveal } from "./motion";
import { Container, H2, MediaMarquee, Section } from "./primitives";

const ROMAN = ["I", "II", "III"];

/** Small tracked capitals: the Letterhead label. */
function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[11px] font-semibold uppercase tracking-[0.26em] text-muted ${className}`}>{children}</p>;
}

function Rule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`block h-px w-12 bg-[var(--accent)] ${className}`} />;
}

/**
 * Letterhead (concept 13, round three). References: Brunswick, Cato Counsel,
 * Wachtell Lipton, Kekst CNC. A paper canvas, navy ink and centred serif
 * statements at a modest size. No hero photograph: the two of them appear in
 * one photograph mid-page and as two small portraits.
 */
export function Alt13Home({ posts }: { posts: A1Card[] }) {
  const base = CONCEPTS.alt13.base;
  const routes = routesFor(base);

  return (
    <>
      {/* ---------- WHO WE ARE ---------- */}
      <Section tone="base" className="pb-12 pt-16 md:pb-16 md:pt-24">
        <Container className="text-center">
          <Reveal>
            <Label>{HERO.eyebrow}</Label>
            <h1 className="kit-display kit-h1 mx-auto mt-7 max-w-3xl [text-wrap:balance]">Strategic, proven communications advice.</h1>
            <Rule className="mx-auto mt-8" />
            <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-fg">{HERO.lead}</p>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{HERO.direct}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn btn-primary">
                Book a consultation
              </Link>
              <Link href="/services" className="btn btn-quiet">
                View all services
              </Link>
            </div>
          </Reveal>
          <div className="mt-16 border-t border-line pt-9">
            <MediaMarquee center />
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section tone="base" className="border-t border-line py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Label>Our practice areas</Label>
            <H2 className="mt-4">Corporate. Reputation. Crisis.</H2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[var(--line)]">
            {practices(base).map((p, i) => (
              <Reveal key={p.href} delay={i * 0.05} className="text-center md:px-8">
                <p className="kit-display text-sm text-accent">{ROMAN[i]}</p>
                <h3 className="kit-display mt-3 text-[1.35rem] leading-snug">{p.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">{p.blurb}</p>
                <Link
                  href={p.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-fg hover:text-accent"
                >
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 text-accent" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-3xl text-center text-sm leading-relaxed text-muted">
            <span className="font-semibold text-fg">Also: </span>
            {SPECIALIST.map((s) => (
              <span key={s.href}>
                <Link href={s.href} className="underline decoration-[var(--line)] underline-offset-4 hover:text-fg">
                  {s.title}
                </Link>
                {" · "}
              </span>
            ))}
            <Link href="/media-training" className="underline decoration-[var(--line)] underline-offset-4 hover:text-fg">
              Media training
            </Link>
          </p>
        </Container>
      </Section>

      {/* ---------- THE ONE PHOTOGRAPH ---------- */}
      <Section tone="base" className="pb-16 md:pb-20">
        <Container>
          <figure>
            <Reveal className="kit-r relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src={PHOTOS.foundersOffice}
                alt={FOUNDERS_ALT}
                fill
                sizes="(min-width: 1200px) 1136px, 100vw"
                className="object-cover object-[50%_32%]"
              />
            </Reveal>
            <figcaption className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Lyall Mercer, co-founder &amp; principal adviser, and Barbara Gorogh, Director of Operations
            </figcaption>
          </figure>
        </Container>
      </Section>

      {/* ---------- WHAT WE STAND FOR ---------- */}
      <Section tone="base" className="border-t border-line py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:gap-16">
          <Reveal>
            <Label>Why a boutique firm</Label>
            <blockquote className="kit-display mt-6 text-[clamp(1.35rem,2.2vw,1.8rem)] leading-[1.38]">
              &ldquo;{BOUTIQUE_QUOTE}&rdquo;
            </blockquote>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Lyall Mercer, co-founder</p>
          </Reveal>
          <div>
            {PILLARS.map((p) => (
              <div key={p.title} className="border-t border-line py-5 last:border-b">
                <p className="kit-display text-lg">{p.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- THE RECORD ---------- */}
      <Section tone="deep" className="py-14 md:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-[var(--line)]">
            {STATS.map((s) => (
              <div key={s.label} className="px-4 text-center">
                <p className="kit-display text-[clamp(2rem,3.2vw,2.7rem)] leading-none">{s.value}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- OUTCOMES ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Label>Client outcomes</Label>
              <H2 className="mt-4">Results that speak for themselves.</H2>
            </div>
            <Link href="/case-studies" className="btn btn-quiet">
              Case studies
            </Link>
          </div>
          <div className="mt-10 border-b border-line">
            {siteConfig.caseStudies.map((cs) => (
              <div key={cs.id} className="grid gap-2 border-t border-line py-6 md:grid-cols-[220px,1fr,1.25fr] md:gap-8">
                <p className="pt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{cs.sector}</p>
                <p className="kit-display text-xl leading-snug">{cs.outcome}</p>
                <p className="text-sm leading-relaxed text-muted">{cs.outcomeSub}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- WHO WE ADVISE ---------- */}
      <Section tone="base" className="border-t border-line py-14">
        <Container className="text-center">
          <Label>Who we work with</Label>
          <p className="kit-display mx-auto mt-6 max-w-4xl text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.7]">
            {SECTORS.map((s, i) => (
              <span key={s.label}>
                {"href" in s ? (
                  <Link href={s.href} className="underline decoration-[var(--accent)] decoration-1 underline-offset-[5px]">
                    {s.label}
                  </Link>
                ) : (
                  s.label
                )}
                {i < SECTORS.length - 1 ? <span className="px-2.5 text-accent">&middot;</span> : null}
              </span>
            ))}
          </p>
        </Container>
      </Section>

      {/* ---------- THE PEOPLE ---------- */}
      <Section tone="base" className="border-t border-line py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Label>Our team</Label>
            <H2 className="mt-4">The people behind the advice.</H2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-12 md:grid-cols-2">
            {[FOUNDERS.lyall, FOUNDERS.barbara].map((f, i) => (
              <Reveal key={f.name} delay={i * 0.06} className="flex gap-5">
                <div className="kit-r relative h-[92px] w-[76px] shrink-0 overflow-hidden">
                  <Image src={f.photo} alt={`${f.name}, ${f.role}`} fill sizes="76px" className="object-cover object-[50%_18%]" />
                </div>
                <div>
                  <p className="kit-display text-xl">{f.name}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{f.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{f.bio[0]}</p>
                  {i === 0 ? (
                    <Link href="/about" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:text-accent">
                      Read Lyall&apos;s full profile
                      <ArrowRight className="h-3.5 w-3.5 text-accent" aria-hidden />
                    </Link>
                  ) : (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{f.bio[1]}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- ENDORSEMENTS ---------- */}
      <Section tone="deep" className="py-16 md:py-20">
        <Container>
          <div className="text-center">
            <Label>Client endorsements</Label>
            <H2 className="mt-4">Partnerships our clients stand behind.</H2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {TESTIMONIALS.map((t) => (
              <figure key={t.who} className="border-t border-line pt-6">
                <blockquote className="kit-display text-[1.08rem] leading-[1.55]">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 text-xs leading-relaxed text-muted">{t.who}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-12 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{SURVEY_LINE}</p>
        </Container>
      </Section>

      {/* ---------- INSIGHTS ---------- */}
      <Section tone="base" className="py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Label>Insights</Label>
              <H2 className="mt-4">Insights. Commentary. Crisis thinking.</H2>
            </div>
            <Link href={routes.insights} className="btn btn-quiet">
              All insights
            </Link>
          </div>
          <div className="mt-10 border-b border-line">
            {posts.slice(0, 4).map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                className="group grid gap-2 border-t border-line py-5 md:grid-cols-[150px,1fr,auto] md:items-baseline md:gap-8"
              >
                <p className="text-xs text-muted">{formatDate(p.date)}</p>
                <div>
                  <p className="kit-display text-lg leading-snug transition-colors group-hover:text-accent">{p.title}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {p.category} &middot; {p.readMins} min read
                  </p>
                </div>
                <ArrowRight className="hidden h-4 w-4 text-accent transition-transform group-hover:translate-x-1 md:block" aria-hidden />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- INVITATION ---------- */}
      <section className="tone-cta py-16 text-center md:py-20" aria-label={CTA_COPY.title}>
        <Container>
          <Label>{CTA_COPY.eyebrow}</Label>
          <h2 className="kit-display kit-h2 mx-auto mt-5 max-w-2xl">{CTA_COPY.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">{CTA_COPY.body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Book a consultation
            </Link>
            <a href={siteConfig.phone.href} className="inline-flex items-center gap-2 text-sm font-semibold">
              <Phone className="h-4 w-4 text-accent" aria-hidden />
              {siteConfig.phone.display}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
