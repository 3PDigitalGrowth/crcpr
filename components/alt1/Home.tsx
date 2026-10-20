import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, GraduationCap, Landmark, Phone, Scale } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  A1_ROUTES,
  FOUNDERS,
  PHOTOS,
  PILLARS,
  PRACTICES,
  SECTORS,
  SPECIALIST,
  STATS,
  TESTIMONIALS,
} from "./data";
import type { A1Post } from "./insights";
import { Reveal } from "./motion";
import {
  BlueRule,
  Container,
  Eyebrow,
  GhostWord,
  H2,
  MediaMarquee,
  PhotoChip,
  Section,
  VideoFill,
} from "./primitives";
import { PostCard } from "./PostCard";

const CASE_ICONS = { Scale, Building2, GraduationCap, Landmark } as const;

export function Home({ posts }: { posts: A1Post[] }) {
  const snapshot = siteConfig.mediaReachSnapshot;

  return (
    <>
      {/* ---------- WHO WE ARE ---------- */}
      <Section tone="deep">
        <div className="orb -right-48 -top-64 h-[60rem] w-[60rem]" aria-hidden />
        <Container className="pt-12 md:pt-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
              Boutique corporate PR &middot; Australia &middot; New Zealand &middot; Pacific
            </p>
            {/* Sized so "COMMUNICATIONS" always fits one line, 360px phones up. */}
            <h1 className="font-display mt-8 text-[clamp(1.6rem,7.8vw,6.75rem)] uppercase leading-[0.95] tracking-[-0.015em]">
              <span className="block">Strategic,</span>
              <span className="block text-[#1c74bc] underline decoration-[0.07em] underline-offset-[0.12em]">
                proven
              </span>
              <span className="block">communications advice.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 grid gap-10 lg:grid-cols-[1fr,auto] lg:items-end">
            <div>
              <div className="grid max-w-2xl gap-4 text-base leading-relaxed text-muted md:grid-cols-2 md:gap-8 md:text-lg">
                <p>Whatever your communications objectives, you need experienced counsel you can trust.</p>
                <p>We are your trusted adviser and advocate, and we believe in you.</p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Book a consultation
                </Link>
                <Link href="/contact" className="btn btn-quiet group">
                  Start the free assessment
                  <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </div>
            <a
              href={siteConfig.phone.href}
              className="glass block rounded-2xl p-5 transition-transform hover:-translate-y-0.5 sm:w-72"
            >
              <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                <Phone className="h-3.5 w-3.5 text-accent" aria-hidden />
                24/7 confidential crisis line
              </span>
              <span className="font-display mt-3 block text-2xl">{siteConfig.phone.display}</span>
            </a>
          </Reveal>
        </Container>

        {/* Photography strip: the people first, then the work. */}
        <div className="mt-14 grid gap-[2px] bg-[var(--line)] md:mt-20 md:grid-cols-[1.15fr,1fr]">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-[min(52vw,660px)]">
            <Image
              src={PHOTOS.foundersStudio}
              alt="Lyall Mercer and Barbara Gorogh, co-founders of CRC Public Relations"
              fill
              priority
              sizes="(min-width: 768px) 54vw, 100vw"
              className="object-cover object-[50%_24%]"
            />
            <PhotoChip
              className="absolute bottom-4 left-4 md:bottom-6 md:left-6"
              title="Lyall Mercer & Barbara Gorogh"
              sub="Co-founders, CRC Public Relations"
            />
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto md:h-[min(52vw,660px)]">
            <Image
              src={PHOTOS.lyallAdvising}
              alt="Lyall Mercer advising a client at the boardroom table"
              fill
              priority
              sizes="(min-width: 768px) 46vw, 100vw"
              className="object-cover object-[28%_40%]"
            />
            <div className="glass-photo absolute bottom-4 right-4 max-w-[19rem] rounded-2xl p-4 md:bottom-6 md:right-6 md:p-5">
              <p className="text-sm font-semibold leading-snug">
                You deal directly with an experienced adviser, not an account manager.
              </p>
            </div>
          </div>
        </div>

        <Container className="py-14 md:py-16">
          <MediaMarquee />
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section tone="base" className="py-24 md:py-32">
        <GhostWord align="right">REPUTATION</GhostWord>
        <Container>
          <Eyebrow>Our practice areas</Eyebrow>
          <H2 className="mt-4 max-w-2xl">Corporate. Reputation. Crisis.</H2>

          <div className="mt-14 border-t border-line">
            {PRACTICES.map((p, i) => (
              <Reveal key={p.href} delay={i * 0.05}>
                <Link
                  href={p.href}
                  className="group grid items-center gap-6 border-b border-line py-8 md:grid-cols-[minmax(0,1fr),18rem,auto] md:gap-10 md:py-10 lg:grid-cols-[minmax(0,1fr),24rem,auto]"
                >
                  <div>
                    <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.8rem)] uppercase leading-[1.02]">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{p.blurb}</p>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 24rem, (min-width: 768px) 18rem, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    Explore
                    <ArrowUpRight
                      className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {SPECIALIST.map((s) => (
              <Link key={s.href} href={s.href} className="glass group rounded-[20px] p-6 transition-transform hover:-translate-y-1">
                <p className="text-base font-bold">{s.title}</p>
                <p className="mt-1.5 text-sm text-muted">{s.blurb}</p>
                <ArrowUpRight className="mt-5 h-4 w-4 text-accent" aria-hidden />
              </Link>
            ))}
          </div>
          <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
            View all services
            <ArrowRight className="h-4 w-4 text-accent" aria-hidden />
          </Link>
        </Container>
      </Section>

      {/* ---------- WHAT WE STAND FOR ---------- */}
      <Section tone="deep" className="py-24 md:py-32">
        <div className="orb -left-40 top-40 h-[44rem] w-[44rem]" aria-hidden />
        <GhostWord align="left">TRUST</GhostWord>
        <Container>
          <Eyebrow>Why a boutique firm</Eyebrow>
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:gap-0">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
              <VideoFill
                video="pair"
                alt="Lyall Mercer and Barbara Gorogh in the CRC Public Relations office"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </Reveal>
            <Reveal delay={0.1} className="relative z-10 lg:-ml-24">
              <blockquote className="glass-strong rounded-[28px] p-8 md:p-12">
                <span aria-hidden className="font-display block text-6xl leading-none text-[#1c74bc]">
                  &quot;
                </span>
                <p className="font-display mt-2 text-[clamp(1.4rem,2.4vw,2.1rem)] leading-[1.18]">
                  As a boutique PR firm, you deal directly with experienced advisers who take a genuine, long-term
                  interest in your organisation. It is a partnership, and it makes a huge difference to outcomes.
                </p>
                <footer className="mt-8 flex items-center gap-3 text-sm font-semibold text-muted">
                  <BlueRule width="2rem" />
                  Lyall Mercer, co-founder
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-10 border-t border-line pt-12 md:grid-cols-3 md:gap-12">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <BlueRule />
                <h3 className="mt-5 text-xl font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- PROOF (once, grouped) ---------- */}
      <section className="tone-deep relative min-h-[560px] overflow-hidden md:min-h-[78vh]" aria-label={snapshot.intro.eyebrow}>
        <VideoFill
          video="meeting"
          alt="Barbara Gorogh and Lyall Mercer in a client meeting"
          stillClassName="object-cover object-[30%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" aria-hidden />
        <Container className="relative flex min-h-[560px] flex-col justify-end pb-10 md:min-h-[78vh] md:pb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">{snapshot.intro.eyebrow}</p>
          <div className="glass-photo mt-5 grid grid-cols-2 overflow-hidden rounded-[24px] md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`p-5 md:p-7 ${i % 2 === 1 ? "border-l border-white/15" : ""} ${
                  i > 1 ? "border-t border-white/15 md:border-t-0" : ""
                } ${i === 2 ? "md:border-l md:border-white/15" : ""}`}
              >
                <p className="stat-num font-display text-[clamp(1.9rem,3.4vw,3rem)] leading-none">
                  {s.value}
                </p>
                <p className="on-photo-muted mt-2 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section tone="base" className="py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:gap-16">
          <Reveal>
            <H2>{snapshot.intro.headline}</H2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4 text-base leading-relaxed text-muted md:text-lg">
            {snapshot.intro.body.map((p) => (
              <p key={p}>{p.replace(" — ", ", ")}</p>
            ))}
            <p className="text-xs">{snapshot.caveat}</p>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- WHO WE SERVE ---------- */}
      <Section tone="base" className="border-t border-line py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-[1fr,0.85fr] lg:gap-20">
          <div>
            <Eyebrow>Who we work with</Eyebrow>
            <H2 className="mt-4 max-w-xl">Trusted by leaders across every sector.</H2>
            <ul className="mt-12 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
              {SECTORS.map((s) => (
                <li key={s.label} className="border-b border-line">
                  {"href" in s && s.href ? (
                    <Link href={s.href} className="group flex items-center justify-between py-4 text-base font-semibold">
                      {s.label}
                      <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5" aria-hidden />
                    </Link>
                  ) : (
                    <span className="block py-4 text-base font-semibold">{s.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden min-h-[34rem] lg:block">
            <Reveal className="absolute right-0 top-0 aspect-[3/2] w-[86%] overflow-hidden rounded-[24px]">
              <Image
                src={PHOTOS.boardroomMeeting}
                alt="Barbara Gorogh and Lyall Mercer leading a boardroom meeting"
                fill
                sizes="36vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={0.12} className="absolute bottom-0 left-0 aspect-[3/2] w-[70%] overflow-hidden rounded-[24px] shadow-2xl">
              <Image
                src={PHOTOS.foundersMeetingRoom}
                alt="Barbara Gorogh and Lyall Mercer in a CRC Public Relations meeting room"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- ENDORSEMENTS (glass over the office) ---------- */}
      <section className="tone-deep relative overflow-hidden py-24 md:py-32" aria-labelledby="a1-endorse">
        <Image src={PHOTOS.officeLounge2} alt="" fill sizes="100vw" className="object-cover" aria-hidden />
        <div className="absolute inset-0 bg-[var(--bg)] opacity-[0.82]" aria-hidden />
        <Container>
          <Eyebrow>Client endorsements</Eyebrow>
          <H2 className="mt-4 max-w-2xl">
            <span id="a1-endorse">Partnerships our clients stand behind.</span>
          </H2>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.who} delay={i * 0.08} className="h-full">
                <figure className="glass flex h-full flex-col rounded-[24px] p-7 md:p-8">
                  <span aria-hidden className="font-display text-4xl leading-none text-[#1c74bc]">
                    &quot;
                  </span>
                  <blockquote className="mt-3 flex-1 text-lg leading-relaxed">{t.quote}</blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4 text-sm text-muted">{t.who}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-base">
            <span className="font-display text-2xl text-accent">100%</span>
            <span>of our consulting clients would recommend CRC Public Relations to a peer.</span>
            <span className="text-xs text-muted">CRC Public Relations Client Survey</span>
          </p>
        </Container>
      </section>

      {/* ---------- OUTCOMES ---------- */}
      <Section tone="base" className="py-24 md:py-32">
        <GhostWord align="right">RESULTS</GhostWord>
        <Container>
          <Eyebrow>Client outcomes</Eyebrow>
          <H2 className="mt-4 max-w-2xl">Results that speak for themselves.</H2>
          <div className="mt-14 border-t border-line">
            {siteConfig.caseStudies.map((cs) => {
              const Icon = CASE_ICONS[cs.icon];
              return (
                <Reveal key={cs.id}>
                  <article className="grid gap-6 border-b border-line py-10 md:grid-cols-[1fr,1fr] md:gap-16">
                    <div>
                      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
                        <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                        {cs.sector}
                      </p>
                      <p className="font-display mt-4 text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.05]">{cs.outcome}</p>
                      <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">{cs.outcomeSub}</p>
                    </div>
                    <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted md:pt-9 md:text-base">
                      <p>{cs.challenge}</p>
                      <p>{cs.approach}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Link href="/case-studies" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
            Case Studies
            <ArrowRight className="h-4 w-4 text-accent" aria-hidden />
          </Link>
        </Container>
      </Section>

      {/* ---------- THE PEOPLE ---------- */}
      <Section tone="deep" className="py-24 md:py-32">
        <div className="orb -right-40 top-1/3 h-[46rem] w-[46rem]" aria-hidden />
        <GhostWord align="left">ADVISERS</GhostWord>
        <Container className="grid gap-16 pt-16 md:pt-24 lg:grid-cols-[1.08fr,0.92fr] lg:gap-20">
          {[FOUNDERS.lyall, FOUNDERS.barbara].map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1} className={i === 1 ? "lg:mt-32" : ""}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                <Image
                  src={f.photo}
                  alt={`${f.name}, ${f.role}, CRC Public Relations`}
                  fill
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover object-[50%_18%]"
                />
                <PhotoChip className="absolute bottom-4 left-4" title={f.name} sub={f.role} />
              </div>
              <div className="mt-8 flex max-w-xl flex-col gap-4 text-base leading-relaxed text-muted">
                {f.bio.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
              {i === 0 ? (
                <>
                  <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                    <BlueRule width="2rem" />
                    <p className="text-sm text-muted">
                      &quot;You have 15 minutes to respond before you start to lose control of the message.&quot;
                    </p>
                  </div>
                  <Link href="/about" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                    Read Lyall&apos;s full profile
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </>
              ) : null}
            </Reveal>
          ))}
        </Container>
      </Section>

      {/* ---------- INSIGHTS ---------- */}
      <Section tone="base" className="py-24 md:py-32">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Insights</Eyebrow>
              <H2 className="mt-4">Insights. Commentary. Crisis thinking.</H2>
              <p className="mt-4 text-base text-muted md:text-lg">From Lyall Mercer and the CRC Public Relations team.</p>
            </div>
            <Link href={A1_ROUTES.insights} className="btn btn-quiet">
              Insights
              <ArrowRight className="h-4 w-4 text-accent" aria-hidden />
            </Link>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- INVITATION ---------- */}
      <section className="tone-cta relative overflow-hidden py-24 md:py-36" aria-labelledby="a1-invite">
        <VideoFill video="office" alt="" />
        <div
          className="absolute inset-0"
          style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)" }}
          aria-hidden
        />
        <Container className="grid gap-6 lg:grid-cols-[1.35fr,0.65fr] lg:items-stretch">
          <Reveal className="glass rounded-[28px] p-8 md:p-12">
            <Eyebrow>Ready to work with us</Eyebrow>
            <h2 id="a1-invite" className="font-display mt-6 text-[clamp(2.1rem,5vw,4.2rem)] leading-[1.02]">
              Trust is your most valuable asset. Let us help you build it.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Whether you need experienced advice on a complex issue, help building your public profile, a
              communications strategy, or trusted counsel during a crisis, we are your adviser and advocate. We believe in
              you, and we have your back.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link href="/contact" className="btn btn-primary">
                Book a consultation
              </Link>
              <a href={siteConfig.phone.href} className="flex items-center gap-2 text-sm font-semibold">
                <Phone className="h-4 w-4 text-accent" aria-hidden />
                {siteConfig.phone.display}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="glass flex flex-col rounded-[28px] p-8">
            <p className="text-xl font-bold leading-snug">How exposed is your organisation&apos;s reputation?</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Used by CEOs, communications directors and board chairs across Australia. 20 questions across 5 risk areas.
            </p>
            <p className="mt-3 text-sm text-muted">Three minutes. No commitment. Results delivered by email.</p>
            <Link href="/contact" className="group mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold">
              Start the free assessment
              <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
