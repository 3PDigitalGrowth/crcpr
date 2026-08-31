"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Figtree, Hanken_Grotesk } from "next/font/google";
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Alt 9 "Gallery" — a light, gallery-white homepage in the spirit of an
 * office-furniture "stories of success" showcase: a rotating circular badge,
 * a case-study carousel, and a scrolling ticker as the signature moves.
 * Fully self-contained per docs/alt-redesign/BRIEF.md.
 */

const INK = "#141414";
const SAND = "#F1E9DC";
const CARD = "#E9DDCB";
const WHITE = "#FFFFFF";

const display = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: "normal",
  variable: "--font-alt9-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-alt9-body",
  display: "swap",
});

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
] as const;

const practices: { name: string; href: string; icon: typeof Building2; blurb?: string }[] = [
  {
    name: "Corporate Communications",
    href: "/services/corporate-communications",
    icon: Building2,
  },
  {
    name: "Reputation Management",
    href: "/services/reputation-management",
    icon: ShieldCheck,
  },
  {
    name: "Crisis Communications",
    href: "/services/crisis-communications",
    icon: ShieldAlert,
    blurb:
      "We help you prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
  },
];

const proofStats = [
  { n: "15+", label: "years advising leaders" },
  { n: "100%", label: "client retention" },
  { n: "500+", label: "professionals trained" },
  { n: "221", label: "placements in one month" },
] as const;

const featuredPillars = [
  {
    title: "Experienced counsel, every time",
    text: "No account managers, no junior hand-offs. You work directly with advisers who have managed the situations you are facing.",
  },
  {
    title: "There when it matters",
    text: "Available 24/7 and strictly confidential. When an issue emerges, decisive counsel is one call away.",
  },
] as const;

const caseStudyImages: Record<string, string> = {
  "legal-firm-class-action": "/images/clients/corporate/editorial-advisory-chairs.png",
  "legislation-amended": "/images/clients/industry-associations/editorial-auditorium.png",
  "zero-enrolment-loss": "/images/clients/schools-faith/editorial-campus.png",
  "funding-secured": "/images/clients/government/editorial-civic.png",
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <header
      className="relative z-30 flex items-center justify-between gap-4 border-b px-5 py-6 sm:px-8 lg:px-12"
      style={{ borderColor: `${INK}14`, background: WHITE, color: INK }}
    >
      <Link
        href="/"
        className="font-[var(--font-alt9-display)] text-sm font-semibold uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{ outlineColor: INK }}
      >
        CRC Public Relations
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] font-medium uppercase tracking-[0.06em] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{ outlineColor: INK }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={siteConfig.phone.href}
          className="hidden items-center gap-1.5 text-[13px] font-medium sm:flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ outlineColor: INK }}
        >
          <Phone className="size-3.5" aria-hidden />
          {siteConfig.phone.display}
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12.5px] font-semibold uppercase tracking-[0.06em] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ background: INK, color: WHITE, outlineColor: INK }}
        >
          Book a consultation
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-full p-2 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ outlineColor: INK }}
          aria-label={menuOpen ? "Close menu" : "Menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="absolute left-0 right-0 top-full z-40 flex flex-col gap-1 border-b px-5 py-4 shadow-lg md:hidden"
          style={{ background: WHITE, borderColor: `${INK}14` }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium uppercase tracking-wide focus-visible:outline focus-visible:outline-2"
              style={{ outlineColor: INK }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

/** Slowly rotating circular badge, paused for prefers-reduced-motion. */
function RotatingBadge() {
  const reduce = useReducedMotion();
  const badgeText =
    "BOOK A CONSULTATION • CRC PUBLIC RELATIONS • BOOK A CONSULTATION • CRC PUBLIC RELATIONS • ";

  return (
    <Link
      href="/contact"
      aria-label="Book a consultation"
      className="absolute -right-3 -top-3 z-20 flex size-24 items-center justify-center rounded-full shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:-right-6 sm:-top-6 sm:size-32"
      style={{ outlineColor: WHITE }}
    >
      <style>{`
        @keyframes alt9BadgeSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        style={reduce ? undefined : { animation: "alt9BadgeSpin 22s linear infinite" }}
      >
        <defs>
          <path id="alt9-badge-circle" d="M 100,100 m -84,0 a 84,84 0 1,1 168,0 a 84,84 0 1,1 -168,0" />
        </defs>
        <circle cx="100" cy="100" r="99" fill={INK} />
        <text fill={WHITE} fontSize="11.5" letterSpacing="1.5" fontFamily="var(--font-alt9-body)">
          <textPath href="#alt9-badge-circle">{badgeText}</textPath>
        </text>
      </svg>
      <ArrowUpRight className="pointer-events-none absolute size-7" style={{ color: WHITE }} aria-hidden />
    </Link>
  );
}

/** CSS marquee, replaced by a static line under prefers-reduced-motion. */
function Marquee({ text }: { text: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <p className="whitespace-nowrap text-center text-[13px] font-semibold uppercase tracking-[0.14em]" style={{ color: WHITE }}>
        {text}
      </p>
    );
  }

  return (
    <div className="flex w-max" style={{ animation: "alt9Marquee 26s linear infinite" }}>
      <style>{`
        @keyframes alt9Marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      {[0, 1].map((rep) => (
        <span
          key={rep}
          aria-hidden={rep === 1}
          className="flex shrink-0 items-center gap-8 pr-8 text-[13px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: WHITE }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              {text}
              <span aria-hidden>•</span>
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}

export function Alt9() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const caseStudies = siteConfig.caseStudies;
  const active = caseStudies[activeCase];

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen`}
      style={{ background: WHITE, color: INK, fontFamily: "var(--font-alt9-body)" }}
    >
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Hero */}
      <section className="px-5 pb-4 pt-16 sm:px-8 lg:px-12 lg:pt-24">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h1
            className="font-[var(--font-alt9-display)] font-light uppercase leading-[1.02] tracking-[0.01em] text-[11vw] sm:text-[7.5vw] lg:text-[4.6vw]"
            style={{ color: INK }}
          >
            Strategic, proven
            <br />
            communications advice.
          </h1>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-xs text-right sm:max-w-sm lg:ml-auto lg:mr-0">
          <p className="text-[14.5px] leading-relaxed" style={{ color: `${INK}99` }}>
            Whatever your communications objectives, you need experienced
            counsel you can trust.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto mt-10 max-w-6xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:aspect-[21/9]">
            <Image
              src="/images/redesign/boardroom-aerial.png"
              alt="CRC Public Relations client boardroom"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <RotatingBadge />
        </Reveal>
      </section>

      {/* Featured in */}
      <Reveal className="px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: `${INK}80` }}>
          Expert commentary from our advisers, featured in
        </p>
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {siteConfig.lyall.mediaLinks.map((outlet) => (
            <span key={outlet.name} className="relative h-6 w-24 opacity-50 grayscale">
              <Image
                src={outlet.logoSrc}
                alt={outlet.name}
                fill
                sizes="96px"
                className="object-contain"
              />
            </span>
          ))}
        </div>
      </Reveal>

      {/* Case study carousel */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20" style={{ background: SAND }}>
        <Reveal className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: `${INK}80` }}>
              Client outcomes
            </p>
            <h2 className="mt-2 font-[var(--font-alt9-display)] text-3xl font-light uppercase tracking-tight sm:text-4xl">
              Results that speak for themselves.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCase((i) => (i - 1 + caseStudies.length) % caseStudies.length)}
              className="inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ border: `1px solid ${INK}33`, outlineColor: INK }}
              aria-label="Back"
            >
              <ChevronLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setActiveCase((i) => (i + 1) % caseStudies.length)}
              className="inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ border: `1px solid ${INK}33`, outlineColor: INK }}
              aria-label="Next"
            >
              <ChevronRight className="size-4" aria-hidden />
            </button>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal delay={0.05} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              key={active.id}
              src={caseStudyImages[active.id]}
              alt={active.sector}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: `${INK}80` }}>
              {active.sector}
            </p>
            <p className="mt-2 font-[var(--font-alt9-display)] text-3xl font-medium sm:text-4xl">
              {active.outcome}
            </p>
            <p className="mt-5 text-[14px] leading-relaxed" style={{ color: `${INK}99` }}>
              {active.challenge}
            </p>
            <p className="mt-3 text-[14px] leading-relaxed" style={{ color: `${INK}99` }}>
              {active.approach}
            </p>
            <Link
              href="/case-studies"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.06em] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ background: INK, color: WHITE, outlineColor: INK }}
            >
              View all case studies
              <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-wrap gap-3">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              type="button"
              onClick={() => setActiveCase(i)}
              className="relative h-16 w-24 overflow-hidden rounded-lg transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{
                opacity: i === activeCase ? 1 : 0.45,
                outline: i === activeCase ? `2px solid ${INK}` : undefined,
                outlineColor: INK,
              }}
              aria-label={`Show ${cs.sector} case study`}
              aria-current={i === activeCase}
            >
              <Image
                src={caseStudyImages[cs.id]}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Trusted by leaders — split feature */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Reveal className="mx-auto max-w-6xl text-center">
          <h2 className="font-[var(--font-alt9-display)] text-3xl font-light uppercase tracking-tight sm:text-4xl">
            Trusted by leaders across every sector.
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-8">
          <Reveal className="lg:text-right">
            <h3 className="font-[var(--font-alt9-display)] text-lg font-medium">
              {featuredPillars[0].title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: `${INK}99` }}>
              {featuredPillars[0].text}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mx-auto w-full max-w-xs">
            <div className="relative aspect-square w-full overflow-hidden rounded-full" style={{ background: CARD }}>
              <Image
                src="/images/redesign/interview.png"
                alt="CRC Public Relations client interview"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.06em] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ background: INK, color: WHITE, outlineColor: INK }}
              >
                Book a consultation
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <h3 className="font-[var(--font-alt9-display)] text-lg font-medium">
              {featuredPillars[1].title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: `${INK}99` }}>
              {featuredPillars[1].text}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="overflow-hidden py-4" style={{ background: INK }}>
        <Marquee text="WE ARE YOUR TRUSTED ADVISER AND ADVOCATE" />
      </div>

      {/* Practices */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Reveal className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: `${INK}80` }}>
            Our practice areas
          </p>
          <h2 className="mt-2 font-[var(--font-alt9-display)] text-3xl font-light uppercase tracking-tight sm:text-4xl">
            Corporate. Reputation. Crisis.
          </h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-3">
          {practices.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.name} delay={i * 0.08}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col rounded-2xl p-7 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{ background: CARD, outlineColor: INK }}
                >
                  <Icon className="size-6" style={{ color: INK }} aria-hidden />
                  <h3 className="mt-5 font-[var(--font-alt9-display)] text-xl font-medium">
                    {p.name}
                  </h3>
                  {p.blurb && (
                    <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: `${INK}99` }}>
                      {p.blurb}
                    </p>
                  )}
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] transition-transform group-hover:translate-x-1"
                    style={{ color: INK }}
                  >
                    Explore
                    <ArrowRight className="size-3.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Grouped stats */}
      <Reveal className="px-5 pb-16 sm:px-8 lg:px-12">
        <div
          className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y md:grid-cols-4 md:divide-y-0"
          style={{ borderTop: `1px solid ${INK}1f`, borderBottom: `1px solid ${INK}1f` }}
        >
          {proofStats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center" style={{ borderColor: `${INK}1f` }}>
              <p className="font-[var(--font-alt9-display)] text-4xl font-light">{stat.n}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.08em]" style={{ color: `${INK}99` }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Footer */}
      <footer className="px-5 pb-10 pt-14 sm:px-8 lg:px-12" style={{ background: SAND }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-[var(--font-alt9-display)] text-lg font-medium uppercase tracking-tight">
                CRC Public Relations
              </p>
              <p className="mt-3 max-w-[16rem] text-[13.5px] leading-relaxed" style={{ color: `${INK}80` }}>
                Boutique corporate PR · Australia · New Zealand · Pacific
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: `${INK}80` }}>
                Navigate
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13.5px] focus-visible:outline focus-visible:outline-2" style={{ outlineColor: INK }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: `${INK}80` }}>
                Practice areas
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {practices.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-[13.5px] focus-visible:outline focus-visible:outline-2" style={{ outlineColor: INK }}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: `${INK}80` }}>
                Contact
              </p>
              <a href={siteConfig.phone.href} className="mt-4 block text-[15px] font-semibold focus-visible:outline focus-visible:outline-2" style={{ outlineColor: INK }}>
                {siteConfig.phone.display}
              </a>
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="mt-2 block text-[13.5px] focus-visible:outline focus-visible:outline-2"
                style={{ color: `${INK}99`, outlineColor: INK }}
              >
                {siteConfig.email.general}
              </a>
              <address className="mt-3 text-[13.5px] not-italic leading-relaxed" style={{ color: `${INK}80` }}>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city} {siteConfig.address.state}{" "}
                {siteConfig.address.postcode}
              </address>
            </div>
          </div>

          <div
            className="mt-12 flex flex-col gap-3 pt-6 text-[12px] sm:flex-row sm:items-center sm:justify-between"
            style={{ borderTop: `1px solid ${INK}1f`, color: `${INK}80` }}
          >
            <p>
              &copy; {siteConfig.copyrightYear} CRC Public Relations. All
              rights reserved.
            </p>
            <p>
              Proudly supported by{" "}
              <a
                href="https://www.3pdigital.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-dotted underline-offset-2 focus-visible:outline focus-visible:outline-2"
                style={{ outlineColor: INK }}
              >
                3P Digital
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
