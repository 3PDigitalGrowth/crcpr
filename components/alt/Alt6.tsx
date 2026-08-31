"use client";

import { useState, type ReactNode, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  Building2,
  ShieldCheck,
  ShieldAlert,
  Newspaper,
  ClipboardCheck,
  Smartphone,
} from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Alt 6 "Porcelain" — a warm, editorial personal-brand style homepage: soft
 * porcelain and blush-sand tints, an espresso-ink display serif, and
 * rounded-arch photo masks as the signature move. Fully self-contained per
 * docs/alt-redesign/BRIEF.md.
 */

const PORCELAIN = "#F6F1EA";
const BLUSH = "#EFE6DA";
const INK = "#2B211A";
const BRONZE = "#8C6A4A";
const DEEP_ESPRESSO = "#241B15";

const display = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  axes: ["opsz"],
  variable: "--font-alt6-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-alt6-body",
  display: "swap",
});

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
] as const;

const practices: {
  name: string;
  href: string;
  icon: typeof Building2;
  blurb?: string;
}[] = [
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

const specialistServices: { name: string; blurb: string; href: string; icon: typeof Newspaper }[] = [
  {
    name: "Media relations & strategy",
    blurb: "Proactive presence and trusted relationships",
    href: "/services/media-strategy",
    icon: Newspaper,
  },
  {
    name: "Issues management",
    blurb: "Get ahead before issues become crises",
    href: "/services/issues-management",
    icon: ClipboardCheck,
  },
  {
    name: "Digital media",
    blurb: "Online reputation and social strategy",
    href: "/services/digital-media",
    icon: Smartphone,
  },
];

const pillars = [
  {
    n: "01",
    title: "Experienced counsel, every time",
    text: "No account managers, no junior hand-offs. You work directly with advisers who have managed the situations you are facing.",
  },
  {
    n: "02",
    title: "We know how media thinks",
    text: "A foundation in journalism means we understand exactly how a story is made, moved, and decided before it ever breaks.",
  },
  {
    n: "03",
    title: "There when it matters",
    text: "Available 24/7 and strictly confidential. When an issue emerges, decisive counsel is one call away.",
  },
] as const;

const testimonials = [
  {
    quote:
      "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
    attribution: "CEO, national industry association with 14,000 members",
  },
  {
    quote:
      "CRC Public Relations developed a crisis communications plan for our schools and has assisted many of our member schools across Australia to communicate effectively when issues have arisen.",
    attribution: "Executive Officer, Christian schools sector",
  },
  {
    quote:
      "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
    attribution: "Director, hospitality sector",
  },
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Reveal({
  children,
  className,
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className} style={style}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.26em]"
      style={{ color: BRONZE }}
    >
      {children}
    </p>
  );
}

/** Arch mask: full radius on the top two corners only. */
function ArchImage({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-t-[50%] ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={priority}
      />
    </div>
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
      className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-6 sm:px-8 lg:px-10"
      style={{ color: INK }}
    >
      <Link
        href="/"
        className="font-[var(--font-alt6-display)] text-xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{ outlineColor: BRONZE }}
      >
        CRC Public Relations
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[14px] font-medium transition-colors hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{ outlineColor: BRONZE }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={siteConfig.phone.href}
          className="hidden items-center gap-1.5 text-[13.5px] font-medium sm:flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ outlineColor: BRONZE }}
        >
          <Phone className="size-3.5" aria-hidden />
          {siteConfig.phone.display}
        </a>
        <Link
          href="/contact"
          className="rounded-full px-5 py-2.5 text-[13px] font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ background: INK, color: PORCELAIN, outlineColor: BRONZE }}
        >
          Book a consultation
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-full p-2 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ outlineColor: BRONZE }}
          aria-label={menuOpen ? "Close menu" : "Menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="absolute left-0 right-0 top-full z-40 flex flex-col gap-1 px-5 py-4 shadow-lg md:hidden"
          style={{ background: PORCELAIN, borderTop: `1px solid ${INK}1a` }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium focus-visible:outline focus-visible:outline-2"
              style={{ outlineColor: BRONZE }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function Alt6() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen`}
      style={{ background: PORCELAIN, color: INK, fontFamily: "var(--font-alt6-body)" }}
    >
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Boutique corporate PR · Australia · New Zealand · Pacific</Eyebrow>
            <h1 className="mt-5 font-[var(--font-alt6-display)] text-[12.4vw] font-semibold leading-[1.03] tracking-tight sm:text-[8vw] lg:text-[3.6vw]">
              Strategic, proven communications advice.
            </h1>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed" style={{ color: `${INK}b3` }}>
              Whatever your communications objectives, you need experienced
              counsel you can trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full px-7 py-3.5 text-[13.5px] font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ background: INK, color: PORCELAIN, outlineColor: BRONZE }}
              >
                Book a consultation
              </Link>
              <Link
                href="/contact"
                className="rounded-full px-7 py-3.5 text-[13.5px] font-semibold transition-colors hover:bg-[#2B211A0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ border: `1.5px solid ${INK}40`, color: INK, outlineColor: BRONZE }}
              >
                Start the free assessment
              </Link>
            </div>

            <div className="mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: `${INK}80` }}>
                Expert commentary from our advisers, featured in
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
                {siteConfig.lyall.mediaLinks.map((outlet) => (
                  <span key={outlet.name} className="relative h-6 w-20 opacity-60 grayscale">
                    <Image
                      src={outlet.logoSrc}
                      alt={outlet.name}
                      fill
                      sizes="80px"
                      className="object-contain object-left"
                    />
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-md">
            <ArchImage
              src={siteConfig.lyall.portraitSrc}
              alt={siteConfig.lyall.fullName}
              className="aspect-[4/5] w-full"
              priority
            />
            <div
              className="absolute -bottom-6 -left-6 max-w-[13rem] rounded-2xl p-4 shadow-xl sm:-left-10"
              style={{ background: "#fff", border: `1px solid ${INK}1a` }}
            >
              <p className="font-[var(--font-alt6-display)] text-base font-semibold">
                {siteConfig.lyall.fullName}
              </p>
              <p className="mt-0.5 text-[12px]" style={{ color: BRONZE }}>
                {siteConfig.lyall.title}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About split: arched photo + pull-quote */}
      <section className="px-5 py-16 sm:px-8 lg:py-24" style={{ background: BLUSH }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 lg:px-2">
          <Reveal className="order-2 lg:order-1">
            <Eyebrow>Why a boutique firm</Eyebrow>
            <blockquote className="mt-5 font-[var(--font-alt6-display)] text-2xl font-medium leading-snug sm:text-3xl">
              &ldquo;As a boutique PR firm, you deal directly with experienced
              advisers who take a genuine, long-term interest in your
              organisation. It is a partnership, and it makes a huge
              difference to outcomes.&rdquo;
            </blockquote>
            <p className="mt-5 text-[13.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: BRONZE }}>
              Lyall Mercer, co-founder
            </p>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <ArchImage
              src="/images/about/mid-journalism.webp"
              alt="Lyall Mercer at work"
              className="mx-auto aspect-[4/5] w-full max-w-sm"
            />
          </Reveal>
        </div>
      </section>

      {/* How we can help */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <Reveal>
          <Eyebrow>Our practice areas</Eyebrow>
          <h2 className="mt-3 font-[var(--font-alt6-display)] text-3xl font-semibold sm:text-4xl">
            Corporate. Reputation. Crisis.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {practices.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.name} delay={i * 0.08}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col rounded-[1.75rem] rounded-t-[3.5rem] p-7 transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{ background: PORCELAIN, border: `1px solid ${INK}1a`, outlineColor: BRONZE }}
                >
                  <span
                    className="inline-flex size-12 items-center justify-center rounded-full"
                    style={{ background: `${BRONZE}1f`, color: BRONZE }}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-[var(--font-alt6-display)] text-xl font-semibold">
                    {p.name}
                  </h3>
                  {p.blurb && (
                    <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: `${INK}99` }}>
                      {p.blurb}
                    </p>
                  )}
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold uppercase tracking-[0.08em] transition-transform group-hover:translate-x-1"
                    style={{ color: BRONZE }}
                  >
                    Explore
                    <ArrowRight className="size-3.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {specialistServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.name} delay={i * 0.06}>
                <Link
                  href={s.href}
                  className="flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-[#2B211A08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{ border: `1px solid ${INK}14`, outlineColor: BRONZE }}
                >
                  <Icon className="size-5 shrink-0" style={{ color: BRONZE }} aria-hidden />
                  <span>
                    <span className="block text-[14px] font-semibold">{s.name}</span>
                    <span className="block text-[12.5px]" style={{ color: `${INK}80` }}>
                      {s.blurb}
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why boutique pillars */}
      <section className="px-5 py-16 sm:px-8 lg:py-24" style={{ background: BLUSH }}>
        <div className="mx-auto max-w-7xl lg:px-2">
          <Reveal>
            <Eyebrow>Why a boutique firm</Eyebrow>
            <h2 className="mt-3 font-[var(--font-alt6-display)] text-3xl font-semibold sm:text-4xl">
              What that means for you.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <span
                  className="inline-flex size-11 items-center justify-center rounded-full text-[13px] font-semibold"
                  style={{ background: INK, color: PORCELAIN }}
                >
                  {p.n}
                </span>
                <h3 className="mt-4 font-[var(--font-alt6-display)] text-xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: `${INK}99` }}>
                  {p.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — deep espresso band */}
      <section className="px-5 py-16 sm:px-8 lg:py-24" style={{ background: DEEP_ESPRESSO, color: PORCELAIN }}>
        <div className="mx-auto max-w-7xl lg:px-2">
          <Reveal>
            <Eyebrow>Client endorsements</Eyebrow>
            <h2 className="mt-3 font-[var(--font-alt6-display)] text-3xl font-semibold sm:text-4xl">
              Partnerships our clients stand behind.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.attribution} delay={i * 0.08}>
                <div
                  className="flex h-full flex-col justify-between gap-6 rounded-2xl p-6"
                  style={{ background: "#ffffff0d", border: "1px solid #ffffff1f" }}
                >
                  <p className="text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-[12.5px] font-semibold uppercase tracking-[0.06em]" style={{ color: "#C9AE93" }}>
                    {t.attribution}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10 text-center">
            <p className="font-[var(--font-alt6-display)] text-2xl font-medium sm:text-3xl">
              &ldquo;100% of our consulting clients would recommend CRC
              Public Relations to a peer.&rdquo;
            </p>
            <p className="mt-3 text-[12.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: "#C9AE93" }}>
              CRC Public Relations Client Survey
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case studies — two-up */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <Reveal>
          <Eyebrow>Client outcomes</Eyebrow>
          <h2 className="mt-3 font-[var(--font-alt6-display)] text-3xl font-semibold sm:text-4xl">
            Results that speak for themselves.
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {siteConfig.caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 0.06}>
              <div
                className="flex h-full flex-col rounded-[1.75rem] p-7"
                style={{ background: BLUSH, border: `1px solid ${INK}14` }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: BRONZE }}>
                  {cs.sector}
                </p>
                <p className="mt-2 font-[var(--font-alt6-display)] text-2xl font-semibold">
                  {cs.outcome}
                </p>
                <p className="mt-4 text-[13.5px] leading-relaxed" style={{ color: `${INK}99` }}>
                  {cs.challenge}
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed" style={{ color: `${INK}99` }}>
                  {cs.approach}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking CTA panel */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <Reveal
          className="grid grid-cols-1 items-center gap-10 rounded-[2rem] p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-14"
          style={{ background: BLUSH }}
        >
          <div>
            <Eyebrow>Ready to work with us</Eyebrow>
            <h2 className="mt-4 font-[var(--font-alt6-display)] text-3xl font-semibold leading-tight sm:text-4xl">
              Trust is your most valuable asset. Let us help you build it.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: `${INK}99` }}>
              Whether you need experienced advice on a complex issue, help
              building your public profile, a communications strategy, or
              trusted counsel during a crisis, we are your adviser and
              advocate. We believe in you, and we have your back.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="rounded-full px-7 py-3.5 text-[13.5px] font-semibold transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ background: INK, color: PORCELAIN, outlineColor: BRONZE }}
              >
                Book a consultation
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center gap-2 text-[13.5px] font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ color: INK, outlineColor: BRONZE }}
              >
                <Phone className="size-4" aria-hidden />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
          <ArchImage
            src="/images/about/editorial-advisory-chairs.png"
            alt="CRC Public Relations advisory meeting"
            className="mx-auto aspect-[4/5] w-full max-w-sm"
          />
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="px-5 pb-10 pt-14 sm:px-8 lg:px-10" style={{ borderTop: `1px solid ${INK}14` }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-[var(--font-alt6-display)] text-lg font-semibold">
                CRC Public Relations
              </p>
              <p className="mt-3 max-w-[16rem] text-[13.5px] leading-relaxed" style={{ color: `${INK}80` }}>
                Boutique corporate PR · Australia · New Zealand · Pacific
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRONZE }}>
                Navigate
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[13.5px] focus-visible:outline focus-visible:outline-2" style={{ outlineColor: BRONZE }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRONZE }}>
                Practice areas
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {practices.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-[13.5px] focus-visible:outline focus-visible:outline-2" style={{ outlineColor: BRONZE }}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: BRONZE }}>
                Contact
              </p>
              <a href={siteConfig.phone.href} className="mt-4 block text-[15px] font-semibold focus-visible:outline focus-visible:outline-2" style={{ outlineColor: BRONZE }}>
                {siteConfig.phone.display}
              </a>
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="mt-2 block text-[13.5px] focus-visible:outline focus-visible:outline-2"
                style={{ color: `${INK}99`, outlineColor: BRONZE }}
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
            style={{ borderTop: `1px solid ${INK}14`, color: `${INK}80` }}
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
                style={{ outlineColor: BRONZE }}
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
