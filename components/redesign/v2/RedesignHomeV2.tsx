"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Check,
  ShieldCheck,
  Newspaper,
  Clock,
  Building2,
  Landmark,
  Users,
  GraduationCap,
  Scale,
  HeartHandshake,
  Globe,
  Church,
  UtensilsCrossed,
  UserRound,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { T, bind, imgBindPath } from "@/components/editable";
import { submitEnquiry, type FormState } from "@/lib/actions";
import { MediaOutletLogoLink } from "@/components/shared/MediaOutletLogoLink";
import { ReputationAssessmentModal } from "@/components/shared/ReputationAssessmentModal";
import { AuroraCanvas } from "./AuroraCanvas";
import { Marquee } from "./Marquee";
import { MagneticButton } from "./MagneticButton";
import { Counter } from "./Counter";
import { ReachSnapshotV2 } from "./ReachSnapshotV2";
import { FaqV2 } from "./FaqV2";

const serif = "font-[family-name:var(--font-display)]";
const body = "font-[family-name:var(--font-body)]";

/* Glass field styling for the hero enquiry form (on the dark video hero). */
const fieldCls =
  "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/45 backdrop-blur transition focus:border-brand-gold/60 focus:outline-none focus:ring-2 focus:ring-brand-gold/30";

/* --------------------------------- data --------------------------------- */

const specialistServices = [
  {
    title: "Media relations & strategy",
    blurb: "Proactive presence and trusted relationships",
    href: "/services/media-strategy",
  },
  {
    title: "Issues management",
    blurb: "Get ahead before issues become crises",
    href: "/services/issues-management",
  },
  {
    title: "Digital media",
    blurb: "Online reputation and social strategy",
    href: "/services/digital-media",
  },
] as const;

const assessmentAreas = [
  "Media and spokesperson readiness",
  "Crisis planning and testing",
  "Stakeholder communication and trust",
  "Digital and social media exposure",
  "Governance and procedures",
];

const sectors = [
  { title: "Companies & family businesses", href: null, icon: Building2 },
  { title: "Local & state government", href: null, icon: Landmark },
  {
    title: "Industry & professional associations",
    href: "/clients/industry-associations",
    icon: Users,
  },
  { title: "Independent & faith-based schools", href: null, icon: GraduationCap },
  { title: "Legal & professional services", href: null, icon: Scale },
  { title: "Child care, aged care & health", href: null, icon: HeartHandshake },
  { title: "Pacific islands", href: "/pacific", icon: Globe },
  { title: "Faith-based organisations", href: null, icon: Church },
  { title: "Hospitality", href: null, icon: UtensilsCrossed },
  { title: "High profile individuals", href: null, icon: UserRound },
] as const;

const testimonials = [
  {
    quote:
      "As a boutique PR firm, you deal directly with experienced advisers who take a genuine, long-term interest in your organisation. It's a partnership, and it makes a huge difference to outcomes.",
    title: "Lyall Mercer, co-founder",
  },
  {
    quote:
      "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
    title: "CEO, national industry association with 14,000 members",
  },
  {
    quote:
      "CRC Public Relations developed a crisis communications plan for our schools and has assisted many of our member schools across Australia to communicate effectively when issues have arisen.",
    title: "Executive Officer, Christian schools sector",
  },
  {
    quote:
      "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
    title: "Director, hospitality sector",
  },
];

/* ------------------------------ small parts ----------------------------- */

function Eyebrow({
  children,
  tone = "gold",
}: {
  children: React.ReactNode;
  tone?: "gold" | "teal" | "light";
}) {
  const color =
    tone === "gold"
      ? "text-brand-gold"
      : tone === "teal"
        ? "text-link-teal"
        : "text-brand-gold";
  return (
    <span
      className={`${body} inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] ${color}`}
    >
      <span className="h-px w-8 bg-current opacity-50" aria-hidden />
      {children}
    </span>
  );
}

/* Reveal-on-scroll wrapper using Framer (replaces AnimateIn for V2 cohesion). */
function Reveal({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------- main ---------------------------------- */

export function RedesignHomeV2() {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const reduce = useReducedMotion();

  const [enquiry, setEnquiry] = useState<FormState>({
    status: "idle",
    message: "",
  });
  const [sending, setSending] = useState(false);

  async function handleEnquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const result = await submitEnquiry({ status: "idle", message: "" }, data);
    setSending(false);
    setEnquiry(result);
  }

  const headWords = ["Strategic,", "proven"];

  const wordContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const wordItem: Variants = {
    hidden: { opacity: 0, y: "0.5em" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className={`${body} relative text-navy`}>
      <AuroraCanvas />

      {/* ============================== HERO ============================== */}
      <section className="relative">
        <div className="relative overflow-hidden">
          {/* Background video + cinematic overlay (scoped to the hero).
              Static image below md per house rules; video is desktop-only. */}
          <div
            className="absolute inset-0 bg-cover bg-center md:hidden"
            style={{
              backgroundImage: "url(/images/redesign-v2/hero-ambient.png)",
            }}
            aria-hidden
          />
          <video
            className="absolute inset-0 hidden size-full object-cover md:block"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/redesign-v2/hero-ambient.png"
            aria-hidden
          >
            <source src="/images/redesign/hero.mp4" type="video/mp4" />
          </video>
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(105deg,rgba(16,28,52,0.94)_0%,rgba(16,28,52,0.82)_46%,rgba(16,28,52,0.5)_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-[#F5F2EC]"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-28 lg:pt-24">
          {/* Left: copy */}
          <div>
            <Reveal y={12}>
              <Eyebrow>
                <T id="home2.hero.eyebrow">
                  Boutique corporate PR &middot; Australia &middot; New Zealand
                  &middot; Pacific
                </T>
              </Eyebrow>
            </Reveal>

            <motion.h1
              className={`${serif} mt-7 text-[3.25rem] font-normal leading-[0.95] tracking-[-0.02em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-[5.25rem]`}
              variants={reduce ? undefined : wordContainer}
              initial={reduce ? false : "hidden"}
              animate={reduce ? undefined : "show"}
            >
              {headWords.map((w, i) => (
                <motion.span
                  key={w}
                  variants={wordItem}
                  className="inline-block"
                >
                  <T id={`home2.hero.title.word${i}`}>{w}</T>&nbsp;
                </motion.span>
              ))}
              <motion.span variants={wordItem} className="inline-block">
                <span className="text-brand-gold">
                  <T id="home2.hero.title.word2">communications</T>
                </span>
              </motion.span>{" "}
              <motion.span variants={wordItem} className="inline-block">
                <T id="home2.hero.title.word3">advice.</T>
              </motion.span>
            </motion.h1>

            <Reveal delay={0.5} y={16}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/85">
                <T id="home2.hero.sub1">
                  Whatever your communications objectives, you need experienced
                  counsel you can trust.
                </T>
              </p>
              <p className={`${serif} mt-3 max-w-lg text-xl text-white`}>
                <T id="home2.hero.sub2">
                  We are your trusted adviser and advocate, and we believe in you.
                </T>
              </p>
            </Reveal>

            <Reveal delay={0.62} y={16}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticButton
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 transition-colors hover:bg-gold-light"
                >
                  <Phone className="size-4" strokeWidth={2} aria-hidden />
                  <T id="home2.hero.cta1">Book a consultation</T>
                </MagneticButton>
                <button
                  type="button"
                  onClick={() => setAssessmentOpen(true)}
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-white transition hover:text-brand-gold"
                >
                  <T id="home2.hero.cta2">Start the free assessment</T>
                  <ArrowRight
                    size={15}
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.72} y={16}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={siteConfig.phone.href}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-brand-teal/60"
                >
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-teal/60" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-brand-teal" />
                  </span>
                  <T id="home2.hero.crisisLine">24/7 confidential crisis line</T>
                  <span className="font-semibold text-brand-gold">
                    {siteConfig.phone.display}
                  </span>
                </a>
                <p className="text-sm text-white/65">
                  <T id="home2.hero.adviserNote">
                    You deal directly with an experienced adviser, not an account
                    manager.
                  </T>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: hero enquiry form (glass card on the dark video) */}
          <Reveal delay={0.25} y={28} className="relative">
            <div className="v2-glass-dark rounded-[1.75rem] p-6 shadow-2xl shadow-navy/40 sm:p-8">
              {enquiry.status === "success" ? (
                <div className="py-6 text-center">
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                    <Check size={24} strokeWidth={2.5} aria-hidden />
                  </div>
                  <p className={`${serif} text-2xl text-white`}>
                    <T id="home2.hero.form.successTitle">Message received.</T>
                  </p>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                    <T id="home2.hero.form.successBody">
                      An experienced adviser will be in touch shortly, within the
                      hour during business hours.
                    </T>
                  </p>
                  <a
                    href={siteConfig.phone.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold transition hover:text-gold-light"
                  >
                    <Phone size={14} aria-hidden />{" "}
                    <T id="home2.hero.form.urgentCall">Urgent? Call</T>{" "}
                    {siteConfig.phone.display}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleEnquiry} className="space-y-3.5">
                  <div>
                    <Eyebrow tone="gold">
                      <T id="home2.hero.form.eyebrow">Book a consultation</T>
                    </Eyebrow>
                    <p
                      className={`${serif} mt-3 text-2xl leading-tight text-white`}
                    >
                      <T id="home2.hero.form.title">Start a conversation.</T>
                    </p>
                  </div>
                  {enquiry.status === "error" && (
                    <p className="text-sm text-red-300" role="alert">
                      {enquiry.message}
                    </p>
                  )}
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Full name"
                    className={fieldCls}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email"
                    className={fieldCls}
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Phone"
                    className={fieldCls}
                  />
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="How can we help?"
                    className={`${fieldCls} min-h-[88px] resize-y`}
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-brand-gold/20 transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? (
                      <T id="home2.hero.form.sending">Sending…</T>
                    ) : (
                      <T id="home2.hero.form.submit">Send message</T>
                    )}
                    {!sending && <ArrowRight size={15} aria-hidden />}
                  </button>
                  <p className="text-center text-xs text-white/45">
                    <T id="home2.hero.form.crisisNote">For active crises, call</T>{" "}
                    {siteConfig.phone.display}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
          </div>
        </div>

        {/* Media marquee — living seam into the bento */}
        <div className="mt-10">
          <p className="mb-4 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-text-caption">
            <T id="home2.marquee.caption">
              Expert commentary from our advisers, featured in
            </T>
          </p>
          <Marquee>
            {Array.from({ length: 3 }).flatMap((_, rep) =>
              siteConfig.lyall.mediaLinks.map((link) => (
                <span key={`${rep}-${link.name}`} className="mx-9 inline-flex">
                  <MediaOutletLogoLink
                    href={link.href}
                    name={link.name}
                    logoSrc={link.logoSrc}
                    variant="onLight"
                    tone={link.tone}
                  />
                </span>
              )),
            )}
          </Marquee>
        </div>
      </section>

      {/* ============================ BENTO ============================== */}
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>
                <T id="home2.bento.eyebrow">Our practice areas</T>
              </Eyebrow>
              <h2
                className={`${serif} mt-5 max-w-2xl text-4xl font-normal leading-[1.0] tracking-[-0.02em] text-navy md:text-6xl`}
              >
                <T id="home2.bento.title1">Corporate. Reputation.</T>{" "}
                <span className="text-brand-gold">
                  <T id="home2.bento.title2">Crisis.</T>
                </span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-link-teal transition hover:text-navy"
            >
              <T id="home2.bento.viewAll">View all services</T>
              <ArrowRight
                size={15}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {/* Crisis — large feature tile */}
            <Link
              href="/services/crisis-communications"
              className="group relative col-span-1 row-span-2 overflow-hidden rounded-[1.5rem] md:col-span-2 lg:col-span-4"
            >
              <Image
                src="/images/redesign-v2/bento-crisis.png"
                alt="A composed spokesperson before a wall of broadcast monitors"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
                <span
                  className={`${serif} text-2xl text-brand-gold`}
                >
                  <T id="home2.bento.crisis.number">03</T>
                </span>
                <h3
                  className={`${serif} mt-1 text-3xl font-normal text-white md:text-4xl`}
                >
                  <T id="home2.bento.crisis.title">Crisis Communications</T>
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/80">
                  <T id="home2.bento.crisis.body">
                    We help you prevent, prepare for and strategically manage
                    crises. 24/7. Confidential. Decisive.
                  </T>
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-gold transition-all group-hover:gap-3">
                  <T id="home2.bento.crisis.cta">Explore crisis communications</T>
                  <ArrowRight size={14} aria-hidden />
                </span>
              </div>
            </Link>

            {/* Corporate */}
            <Link
              href="/services/corporate-communications"
              className="group relative col-span-1 row-span-1 overflow-hidden rounded-[1.5rem] md:col-span-1 lg:col-span-2"
            >
              <Image
                src="/images/redesign-v2/bento-corporate.png"
                alt="Advisers in conversation over strategy documents"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className={`${serif} text-2xl font-normal text-white`}>
                  <T id="home2.bento.corporate.title">Corporate Communications</T>
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-gold transition-all group-hover:gap-3">
                  <T id="home2.bento.corporate.cta">Explore</T>{" "}
                  <ArrowRight size={13} aria-hidden />
                </span>
              </div>
            </Link>

            {/* Reputation */}
            <Link
              href="/services/reputation-management"
              className="group relative col-span-1 row-span-1 overflow-hidden rounded-[1.5rem] md:col-span-1 lg:col-span-2"
            >
              <Image
                src="/images/redesign-v2/bento-reputation.png"
                alt="Calm still water reflecting a glass facade, a metaphor for protected reputation"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className={`${serif} text-2xl font-normal text-white`}>
                  <T id="home2.bento.reputation.title">Reputation Management</T>
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-gold transition-all group-hover:gap-3">
                  <T id="home2.bento.reputation.cta">Explore</T>{" "}
                  <ArrowRight size={13} aria-hidden />
                </span>
              </div>
            </Link>

            {/* Stat tile */}
            <div className="col-span-1 row-span-1 flex flex-col justify-center rounded-[1.5rem] border border-brand-border bg-warm-white/70 p-6 backdrop-blur md:col-span-1 lg:col-span-2">
              <p className={`${serif} text-5xl leading-none text-navy`}>
                <Counter value={500} suffix="+" />
              </p>
              <p className="mt-2 text-sm leading-snug text-text-secondary">
                <T id="home2.bento.stat.caption">
                  professionals trained in media and crisis readiness.
                </T>
              </p>
            </div>

            {/* Quote tile */}
            <div className="col-span-1 row-span-1 flex flex-col justify-center rounded-[1.5rem] bg-navy p-6 md:col-span-1 lg:col-span-2">
              <p className={`${serif} text-lg leading-snug text-white`}>
                <T id="home2.bento.quote.text">
                  &ldquo;You have 15 minutes to respond before you start to lose
                  control of the message.&rdquo;
                </T>
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-brand-gold">
                <T id="home2.bento.quote.attribution">Lyall Mercer</T>
              </p>
            </div>

            {/* Assessment CTA tile */}
            <button
              type="button"
              onClick={() => setAssessmentOpen(true)}
              className="group col-span-1 row-span-1 flex flex-col justify-between rounded-[1.5rem] bg-brand-teal p-6 text-left text-white transition-colors hover:bg-link-teal md:col-span-2 lg:col-span-2"
            >
              <ShieldCheck size={26} strokeWidth={1.75} aria-hidden />
              <div>
                <p className={`${serif} text-xl leading-snug`}>
                  <T id="home2.bento.assessmentCta.title">
                    How exposed is your reputation?
                  </T>
                </p>
                <span className="mt-2 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-all group-hover:gap-3">
                  <T id="home2.bento.assessmentCta.cta">Free 3-minute assessment</T>{" "}
                  <ArrowRight size={13} aria-hidden />
                </span>
              </div>
            </button>
          </div>
        </Reveal>

        {/* Specialist services — thin row */}
        <Reveal delay={0.1}>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {specialistServices.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-brand-border bg-warm-white/60 p-5 backdrop-blur transition hover:border-brand-gold/40 hover:bg-warm-white"
              >
                <div>
                  <p className="text-[15px] font-semibold text-navy group-hover:text-link-teal">
                    <T id={`home2.bento.services.${i}.title`}>{s.title}</T>
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    <T id={`home2.bento.services.${i}.blurb`}>{s.blurb}</T>
                  </p>
                </div>
                <ArrowUpRight
                  className="shrink-0 text-brand-gold opacity-60 transition group-hover:opacity-100"
                  size={20}
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ====================== WHY BOUTIQUE (differentiator) =========== */}
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <Eyebrow tone="teal">
              <T id="home2.why.eyebrow">Why a boutique firm</T>
            </Eyebrow>
            <blockquote
              className={`${serif} mt-6 text-3xl font-normal leading-[1.18] tracking-[-0.01em] text-navy md:text-[2.75rem]`}
            >
              <T id="home2.why.quote1">
                As a boutique PR firm, you deal directly with experienced advisers
                who take a genuine,
              </T>{" "}
              <span className="text-brand-gold">
                <T id="home2.why.quote2">long-term interest</T>
              </span>{" "}
              <T id="home2.why.quote3">
                in your organisation. It is a partnership, and it makes a huge
                difference to outcomes.
              </T>
            </blockquote>
            <p className="mt-7 text-sm font-medium uppercase tracking-[0.18em] text-text-secondary">
              <T id="home2.why.attribution">Lyall Mercer, co-founder</T>
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-4">
              {[
                {
                  icon: UserRound,
                  title: "Experienced counsel, every time",
                  text: "No account managers, no junior hand-offs. You work directly with advisers who have managed the situations you are facing.",
                },
                {
                  icon: Newspaper,
                  title: "We know how media thinks",
                  text: "A foundation in journalism means we understand exactly how a story is made, moved, and decided before it ever breaks.",
                },
                {
                  icon: Clock,
                  title: "There when it matters",
                  text: "Available 24/7 and strictly confidential. When an issue emerges, decisive counsel is one call away.",
                },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="flex gap-4 rounded-2xl border border-brand-border bg-warm-white/60 p-6 backdrop-blur"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold">
                      <Icon size={20} strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-navy">
                        <T id={`home2.why.points.${i}.title`}>{p.title}</T>
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                        <T id={`home2.why.points.${i}.text`}>{p.text}</T>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== NAVY ANCHOR: ASSESSMENT ================== */}
      <section className="px-4 pt-20 md:pt-28">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/redesign-v2/navy-anchor.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(16,28,52,0.97)_0%,rgba(16,28,52,0.9)_45%,rgba(16,28,52,0.7)_100%)]" />
            <div className="relative grid items-center gap-10 p-8 md:p-14 lg:grid-cols-2 lg:gap-16">
              {/* Glass form card */}
              <div className="v2-glass-dark rounded-[1.5rem] p-7 md:p-9">
                <Eyebrow tone="gold">
                  <T id="home2.assessment.eyebrow">Free assessment</T>
                </Eyebrow>
                <h2
                  className={`${serif} mt-5 text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-white md:text-4xl`}
                >
                  <T id="home2.assessment.title">
                    How exposed is your organisation&rsquo;s reputation?
                  </T>
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
                  <T id="home2.assessment.body">
                    Used by CEOs, communications directors and board chairs across
                    Australia. 20 questions across 5 risk areas.
                  </T>
                </p>
                <div className="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                  {assessmentAreas.map((area, i) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 border-b border-white/10 py-2.5"
                    >
                      <Check
                        className="shrink-0 text-brand-teal"
                        size={15}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span className="text-sm text-white/85">
                        <T id={`home2.assessment.areas.${i}`}>{area}</T>
                      </span>
                    </div>
                  ))}
                </div>
                <MagneticButton
                  onClick={() => setAssessmentOpen(true)}
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                >
                  <T id="home2.assessment.cta">Start the free assessment</T>{" "}
                  <ArrowRight size={15} aria-hidden />
                </MagneticButton>
                <p className="mt-3 text-xs text-white/45">
                  <T id="home2.assessment.caption">
                    Three minutes. No commitment. Results delivered by email.
                  </T>
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 px-2 md:px-4">
                {[
                  { v: 15, s: "+", label: "years advising leaders" },
                  { v: 100, s: "%", label: "client retention" },
                  { v: 500, s: "+", label: "professionals trained" },
                  { v: 221, s: "", label: "placements in one month" },
                ].map((stat, i) => (
                  <div key={stat.label}>
                    <p
                      className={`${serif} text-5xl leading-none text-brand-gold md:text-6xl`}
                    >
                      <Counter value={stat.v} suffix={stat.s} />
                    </p>
                    <p className="mt-2 text-sm leading-snug text-white/65">
                      <T id={`home2.assessment.stats.${i}.label`}>{stat.label}</T>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ===================== PROVEN IMPACT (reach snapshot) =========== */}
      <section className="px-4 pt-4">
        <Reveal className="mx-auto max-w-7xl">
          <ReachSnapshotV2 />
        </Reveal>
      </section>

      {/* ============================= SECTORS ========================== */}
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>
              <T id="home2.sectors.eyebrow">Who we work with</T>
            </Eyebrow>
            <h2
              className={`${serif} mt-5 text-4xl font-normal leading-[1.0] tracking-[-0.02em] text-navy md:text-6xl`}
            >
              <T id="home2.sectors.title1">Trusted by leaders across</T>{" "}
              <span className="text-brand-gold">
                <T id="home2.sectors.title2">every sector.</T>
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid border-t border-navy/12 sm:grid-cols-2 sm:gap-x-14">
            {sectors.map((sector, i) => {
              const Icon = sector.icon;
              const inner = (
                <div className="group flex items-center gap-5 border-b border-navy/12 py-5 transition-colors">
                  <span
                    className={`${serif} w-7 shrink-0 text-base tabular-nums text-brand-gold/70`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold transition-colors group-hover:bg-brand-gold/20">
                    <Icon size={18} strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="flex-1 text-[15px] font-medium text-navy transition-colors group-hover:text-link-teal">
                    <T id={`home2.sectors.${i}.title`}>{sector.title}</T>
                  </span>
                  {sector.href && (
                    <ArrowUpRight
                      size={16}
                      aria-hidden
                      className="shrink-0 text-link-teal opacity-0 transition group-hover:opacity-100"
                    />
                  )}
                </div>
              );
              return sector.href ? (
                <Link key={sector.title} href={sector.href} className="block">
                  {inner}
                </Link>
              ) : (
                <div key={sector.title}>{inner}</div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ============================ CASE STUDIES ===================== */}
      <section className="pt-20 md:pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>
                  <T id="home2.caseStudies.eyebrow">Client outcomes</T>
                </Eyebrow>
                <h2
                  className={`${serif} mt-5 text-4xl font-normal leading-[1.0] tracking-[-0.02em] text-navy md:text-6xl`}
                >
                  <T id="home2.caseStudies.title1">Results that speak</T>{" "}
                  <span className="text-brand-gold">
                    <T id="home2.caseStudies.title2">for themselves.</T>
                  </span>
                </h2>
              </div>
              <p className="max-w-xs text-sm text-text-secondary">
                <T id="home2.caseStudies.intro">
                  Drag or scroll to move through the work. Outcomes from when
                  policy, reputation and stakeholder pressure converge.
                </T>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Horizontal rail */}
        <div className="v2-no-scrollbar mx-auto mt-10 flex max-w-7xl snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scroll-padding-left:1.5rem]">
          {siteConfig.caseStudies.map((study, i) => (
            <article
              key={study.id}
              className="group flex w-[85vw] shrink-0 snap-start flex-col rounded-[1.5rem] border border-brand-border bg-warm-white/70 p-7 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-navy/10 sm:w-[26rem]"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
                  <span {...bind(`caseStudies.${i}.sector`)}>{study.sector}</span>
                </p>
                <span className={`${serif} text-base tabular-nums text-navy/30`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-3 sm:min-h-[8.5rem]">
                <p
                  className={`${serif} text-3xl font-normal leading-[1.05] text-navy`}
                >
                  <span {...bind(`caseStudies.${i}.outcome`)}>{study.outcome}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-mid">
                  <span {...bind(`caseStudies.${i}.outcomeSub`)}>{study.outcomeSub}</span>
                </p>
              </div>
              <hr className="my-5 border-brand-border" />
              <div className="space-y-4">
                <div className="sm:min-h-[6.5rem]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-link-teal">
                    <T id="home2.caseStudies.challengeLabel">Challenge</T>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-body">
                    <span {...bind(`caseStudies.${i}.challenge`)}>{study.challenge}</span>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-link-teal">
                    <T id="home2.caseStudies.approachLabel">Our approach</T>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-body">
                    <span {...bind(`caseStudies.${i}.approach`)}>{study.approach}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
          <div className="shrink-0 pr-1" aria-hidden />
        </div>
      </section>

      {/* =========================== TESTIMONIALS ====================== */}
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <Reveal>
          <Eyebrow tone="teal">
            <T id="home2.testimonials.eyebrow">Client endorsements</T>
          </Eyebrow>
          <h2
            className={`${serif} mt-5 max-w-3xl text-4xl font-normal leading-[1.0] tracking-[-0.02em] text-navy md:text-5xl`}
          >
            <T id="home2.testimonials.title1">Partnerships our clients</T>{" "}
            <span className="text-brand-gold">
              <T id="home2.testimonials.title2">stand behind.</T>
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {/* Featured testimonial */}
          <Reveal className="lg:col-span-2">
            <figure className="flex h-full flex-col justify-between rounded-[1.5rem] bg-navy p-8 md:p-10">
              <blockquote
                className={`${serif} text-2xl leading-[1.3] text-white md:text-[2rem]`}
              >
                &ldquo;<T id="home2.testimonials.0.quote">{testimonials[0].quote}</T>&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm uppercase tracking-[0.16em] text-brand-gold">
                <T id="home2.testimonials.0.title">{testimonials[0].title}</T>
              </figcaption>
            </figure>
          </Reveal>

          {/* Supporting testimonials */}
          {testimonials.slice(1).map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-[1.5rem] border border-brand-border bg-warm-white/70 p-6 backdrop-blur">
                <span
                  className={`${serif} text-4xl leading-none text-brand-gold/40`}
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-2 flex-1 text-[14px] leading-relaxed text-charcoal">
                  <T id={`home2.testimonials.${i + 1}.quote`}>{t.quote}</T>
                </blockquote>
                <figcaption className="mt-5 border-t border-brand-border pt-4 text-xs text-text-secondary">
                  <T id={`home2.testimonials.${i + 1}.title`}>{t.title}</T>
                </figcaption>
              </figure>
            </Reveal>
          ))}

          {/* Survey stat tile */}
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-[1.5rem] bg-brand-gold p-8 text-navy">
              <p className={`${serif} text-5xl leading-none`}>
                <Counter value={100} suffix="%" />
              </p>
              <p className="mt-3 text-[15px] font-medium leading-snug">
                <T id="home2.testimonials.surveyStat.caption">
                  of our consulting clients would recommend CRC Public Relations
                  to a peer.
                </T>
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-navy/55">
                <T id="home2.testimonials.surveyStat.source">
                  CRC Public Relations Client Survey
                </T>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== FOUNDER ========================= */}
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[24rem]">
              <div
                className="absolute -inset-3 rounded-[2rem] border border-brand-gold/35"
                aria-hidden
              />
              <Image
                {...imgBindPath("lyall.featuredPortraitSrc")}
                src={siteConfig.lyall.featuredPortraitSrc}
                alt="Lyall Mercer, co-founder and principal adviser"
                width={682}
                height={1024}
                className="relative w-full rounded-[1.5rem] object-contain shadow-2xl shadow-navy/20"
              />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-7">
            <Eyebrow tone="teal">
              <T id="home2.founder.eyebrow">Co-founder &amp; principal adviser</T>
            </Eyebrow>
            <h2
              className={`${serif} mt-5 text-5xl font-normal tracking-[-0.02em] text-navy md:text-6xl`}
            >
              <T id="home2.founder.name">Lyall Mercer</T>
            </h2>
            <div className="mt-7 space-y-5">
              <p className="text-base leading-relaxed text-text-body">
                <T id="home2.founder.bio1">
                  Lyall began his career as a journalist, writing for some of
                  Australia&apos;s leading newspapers and magazines. That
                  foundation, understanding exactly how media thinks, moves and
                  decides what becomes a story, led him into a 25 year public
                  relations career spanning every continent.
                </T>
              </p>
              <p className="text-base leading-relaxed text-text-body">
                <T id="home2.founder.bio2">
                  When you choose CRC Public Relations, you will deal with various
                  members of our team, but Lyall will always be available for you.
                  This level of expertise is why our clients choose us.
                </T>
              </p>
            </div>
            <a
              href={siteConfig.lyallMercerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-link-teal transition hover:text-navy"
            >
              <T id="home2.founder.cta">Read Lyall&apos;s full profile</T>
              <ArrowRight
                size={15}
                aria-hidden
                className="transition-transform group-hover:translate-x-1.5"
              />
            </a>
          </Reveal>
        </div>
      </section>

      {/* =============================== FAQ =========================== */}
      <section className="pt-20 md:pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <Eyebrow>
                <T id="home2.faq.eyebrow">Good to know</T>
              </Eyebrow>
              <h2
                className={`${serif} mt-5 text-4xl font-normal leading-[1.0] tracking-[-0.02em] text-navy md:text-5xl`}
              >
                <T id="home2.faq.title">Common questions.</T>
              </h2>
            </div>
          </Reveal>
          <FaqV2 />
        </div>
      </section>

      {/* ============================ FINAL CTA ======================== */}
      <section className="px-4 pb-6 pt-20 md:pt-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-navy">
          <Image
            src="/images/redesign-v2/bento-reputation.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,43,74,0.6),rgba(16,28,52,0.97))]" />
          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
            <Reveal>
              <Eyebrow tone="gold">
                <T id="home2.finalCta.eyebrow">Ready to work with us</T>
              </Eyebrow>
              <h2
                className={`${serif} mx-auto mt-6 text-4xl font-normal leading-[1.06] tracking-[-0.02em] text-white md:text-7xl`}
              >
                <T id="home2.finalCta.title1">Trust is your most valuable asset.</T>{" "}
                <span className="text-brand-gold">
                  <T id="home2.finalCta.title2">Let us help you build it.</T>
                </span>
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/70">
                <T id="home2.finalCta.body">
                  Whether you need experienced advice on a complex issue, help
                  building your public profile, a communications strategy, or
                  trusted counsel during a crisis, we are your adviser and
                  advocate. We believe in you, and we have your back.
                </T>
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <MagneticButton
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                >
                  <T id="home2.finalCta.cta1">Book a consultation</T>{" "}
                  <ArrowRight size={15} aria-hidden />
                </MagneticButton>
                <a
                  href={siteConfig.phone.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/50 px-8 py-4 text-sm font-semibold text-brand-gold transition hover:bg-brand-gold/10"
                >
                  <Phone size={15} aria-hidden />
                  {siteConfig.phone.display}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ReputationAssessmentModal
        isOpen={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
      />
    </div>
  );
}
