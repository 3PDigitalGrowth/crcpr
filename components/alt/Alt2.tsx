"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Alt 2 "Chambers" — a mounted-print homepage concept: the whole page sits
 * inside a dark espresso frame around a warm cream canvas, with an oversized
 * uppercase display headline and a numbered practice-area stack as the
 * signature move. Fully self-contained per docs/alt-redesign/BRIEF.md.
 */

const ESPRESSO = "#191512";
const CREAM = "#EDE8DF";
const INK = "#23201B";
const OXBLOOD = "#7A2E22";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: "normal",
  variable: "--font-alt2-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-alt2-body",
  display: "swap",
});

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
] as const;

const practiceAreas: {
  n: string;
  name: string;
  href: string;
  blurb?: string;
}[] = [
  {
    n: "01",
    name: "Corporate Communications",
    href: "/services/corporate-communications",
  },
  {
    n: "02",
    name: "Reputation Management",
    href: "/services/reputation-management",
  },
  {
    n: "03",
    name: "Crisis Communications",
    href: "/services/crisis-communications",
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
  hidden: { opacity: 0, y: 28 },
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
      animate="visible"
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.28em]"
      style={{ color: OXBLOOD }}
    >
      {children}
    </p>
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
      className="relative z-30 flex items-center justify-between gap-4 px-5 py-6 sm:px-8 md:px-12 lg:px-16"
      style={{ borderBottom: `1px solid ${INK}1a` }}
    >
      <Link
        href="/"
        className="font-[var(--font-alt2-display)] text-sm font-bold uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{ color: INK, outlineColor: OXBLOOD }}
      >
        CRC Public Relations
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] font-medium uppercase tracking-[0.1em] transition-colors hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{ color: INK, outlineColor: OXBLOOD }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={siteConfig.phone.href}
          className="hidden items-center gap-1.5 text-[13px] font-semibold tracking-wide sm:flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ color: INK, outlineColor: OXBLOOD }}
        >
          <Phone className="size-3.5" aria-hidden />
          {siteConfig.phone.display}
        </a>
        <Link
          href="/contact"
          className="rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ background: OXBLOOD, color: CREAM, outlineColor: INK }}
        >
          Book a consultation
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-full p-2 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ color: INK, outlineColor: OXBLOOD }}
          aria-label={menuOpen ? "Close menu" : "Menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="absolute left-0 right-0 top-full z-40 flex flex-col gap-1 px-5 py-4 shadow-lg md:hidden"
          style={{ background: CREAM, borderBottom: `1px solid ${INK}1a` }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium uppercase tracking-wide focus-visible:outline focus-visible:outline-2"
              style={{ color: INK, outlineColor: OXBLOOD }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function Alt2() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen p-2.5 sm:p-4 md:p-6 lg:p-10`}
      style={{ background: ESPRESSO, fontFamily: "var(--font-alt2-body)" }}
    >
      <div
        className="overflow-hidden rounded-2xl md:rounded-[2rem] lg:rounded-[2.5rem]"
        style={{ background: CREAM, color: INK }}
      >
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Hero */}
        <section className="px-5 pb-10 pt-10 sm:px-8 md:px-12 md:pb-14 md:pt-16 lg:px-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-3xl">
              <SectionEyebrow>
                Boutique corporate PR · Australia · New Zealand · Pacific
              </SectionEyebrow>
              <h1
                className="mt-4 font-[var(--font-alt2-display)] font-bold uppercase leading-[0.94] tracking-[-0.01em] text-[8.4vw] md:text-[6.4vw] lg:text-[5.4vw]"
                style={{ color: INK }}
              >
                Strategic,
                <br />
                Proven
                <br />
                Communications
                <br />
                Advice.
              </h1>
            </Reveal>

            <Reveal
              delay={0.15}
              className="flex max-w-sm flex-col gap-4 text-right lg:pb-2"
            >
              <p className="text-[15px] leading-relaxed" style={{ color: `${INK}cc` }}>
                Whatever your communications objectives, you need experienced
                counsel you can trust.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: `${INK}cc` }}>
                We are your trusted adviser and advocate, and we believe in
                you.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Inset photograph */}
        <Reveal className="px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl md:aspect-[21/9] md:rounded-2xl">
            <Image
              src="/images/homepage/MyPrPartnerHeadshots2025-14.jpg"
              alt="The CRC Public Relations advisory team"
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover"
              style={{ filter: "sepia(0.08) saturate(1.05)" }}
              priority
            />
          </div>
        </Reveal>

        {/* Our practice areas — numbered stack */}
        <section className="px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
          <Reveal>
            <SectionEyebrow>Our practice areas</SectionEyebrow>
            <h2 className="mt-3 font-[var(--font-alt2-display)] text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              Corporate. Reputation. Crisis.
            </h2>
          </Reveal>

          <div className="mt-10">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.n} delay={i * 0.08}>
                <Link
                  href={area.href}
                  className="group -mt-px block border-t py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:py-8"
                  style={{ borderColor: `${INK}26`, outlineColor: OXBLOOD }}
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-8">
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span
                        className="font-[var(--font-alt2-display)] text-sm font-semibold"
                        style={{ color: OXBLOOD }}
                      >
                        {area.n}.
                      </span>
                      <span
                        className="font-[var(--font-alt2-display)] font-bold uppercase leading-[0.92] tracking-tight text-[7.6vw] transition-transform duration-300 group-hover:translate-x-2 sm:text-[7vw] md:text-[4.4vw] lg:text-[3.6vw]"
                        style={{ color: INK }}
                      >
                        {area.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 md:max-w-xs md:justify-end md:text-right">
                      {area.blurb && (
                        <p className="text-sm leading-relaxed" style={{ color: `${INK}b3` }}>
                          {area.blurb}
                        </p>
                      )}
                      <ArrowUpRight
                        className="hidden size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:block"
                        style={{ color: OXBLOOD }}
                        aria-hidden
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
            <div className="border-t" style={{ borderColor: `${INK}26` }} aria-hidden />
          </div>
        </section>

        {/* Our team */}
        <section className="px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
          <Reveal>
            <SectionEyebrow>Our team</SectionEyebrow>
            <h2 className="mt-3 font-[var(--font-alt2-display)] text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              The people behind the advice.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0.05} className="lg:-translate-y-6">
              <div
                className="h-full overflow-hidden rounded-2xl shadow-xl"
                style={{ background: "#fff", border: `1px solid ${INK}1f` }}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={siteConfig.lyall.portraitSrc}
                    alt={siteConfig.lyall.fullName}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className={siteConfig.lyall.portraitObjectClassName}
                  />
                </div>
                <div className="p-5">
                  <p className="font-[var(--font-alt2-display)] text-lg font-bold">
                    {siteConfig.lyall.fullName}
                  </p>
                  <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: OXBLOOD }}>
                    {siteConfig.lyall.title}
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed" style={{ color: `${INK}b3` }}>
                    Lyall began his career as a journalist, writing for some
                    of Australia&rsquo;s leading newspapers and magazines.
                    That foundation, understanding exactly how media thinks,
                    moves and decides what becomes a story, led him into a 25
                    year public relations career spanning every continent.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="flex h-full flex-col justify-center rounded-2xl p-6"
                style={{ background: CREAM, border: `1px solid ${INK}26` }}
              >
                <p className="text-[14.5px] leading-relaxed" style={{ color: `${INK}d9` }}>
                  When you choose CRC Public Relations, you will deal with
                  various members of our team, but Lyall will always be
                  available for you. This level of expertise is why our
                  clients choose us.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div
                className="flex h-full flex-col justify-center gap-4 rounded-2xl p-6"
                style={{ background: CREAM, border: `1px solid ${INK}26` }}
              >
                <p className="text-[14.5px] leading-relaxed" style={{ color: `${INK}d9` }}>
                  {siteConfig.lyall.origin}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold uppercase tracking-[0.1em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                  style={{ color: OXBLOOD, outlineColor: OXBLOOD }}
                >
                  Read Lyall&rsquo;s full profile
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                className="h-full overflow-hidden rounded-2xl"
                style={{ background: "#fff", border: `1px solid ${INK}1f` }}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/about/barbara-gorogh-portrait.png"
                    alt="Barbara Gorogh"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <p className="font-[var(--font-alt2-display)] text-lg font-bold">
                    Barbara Gorogh
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Proof strip */}
        <Reveal className="px-5 py-14 sm:px-8 md:px-12 lg:px-16">
          <div
            className="grid grid-cols-2 divide-x divide-y md:grid-cols-4 md:divide-y-0"
            style={{ borderTop: `1px solid ${INK}26`, borderBottom: `1px solid ${INK}26` }}
          >
            {proofStats.map((stat) => (
              <div key={stat.label} className="px-4 py-6 text-center" style={{ borderColor: `${INK}26` }}>
                <p className="font-[var(--font-alt2-display)] text-3xl font-bold sm:text-4xl" style={{ color: OXBLOOD }}>
                  {stat.n}
                </p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.08em]" style={{ color: `${INK}99` }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials */}
        <section className="px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16">
          <Reveal>
            <SectionEyebrow>Client endorsements</SectionEyebrow>
            <h2 className="mt-3 font-[var(--font-alt2-display)] text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              Partnerships our clients stand behind.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.attribution} delay={i * 0.08}>
                <div
                  className="flex h-full flex-col justify-between gap-6 rounded-2xl p-6"
                  style={{ background: CREAM, border: `1px solid ${INK}26` }}
                >
                  <p className="text-[15px] leading-relaxed" style={{ color: `${INK}e6` }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-[12.5px] font-semibold uppercase tracking-[0.06em]" style={{ color: OXBLOOD }}>
                    {t.attribution}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Case studies — numbered editorial list */}
        <section className="px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Client outcomes</SectionEyebrow>
              <h2 className="mt-3 font-[var(--font-alt2-display)] text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                Results that speak for themselves.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold uppercase tracking-[0.1em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ color: OXBLOOD, outlineColor: OXBLOOD }}
            >
              Explore
              <ArrowUpRight className="size-3.5" aria-hidden />
            </Link>
          </Reveal>

          <div className="mt-10">
            {siteConfig.caseStudies.map((cs, i) => (
              <Reveal key={cs.id} delay={i * 0.06}>
                <div
                  className="-mt-px grid grid-cols-1 gap-3 border-t py-7 md:grid-cols-[3rem_1fr_2fr] md:items-baseline md:gap-8"
                  style={{ borderColor: `${INK}26` }}
                >
                  <span
                    className="font-[var(--font-alt2-display)] text-sm font-semibold"
                    style={{ color: OXBLOOD }}
                  >
                    0{i + 1}.
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: `${INK}80` }}>
                      {cs.sector}
                    </p>
                    <p className="mt-1 font-[var(--font-alt2-display)] text-2xl font-bold sm:text-3xl">
                      {cs.outcome}
                    </p>
                  </div>
                  <div className="grid gap-2 text-[13.5px] leading-relaxed sm:grid-cols-2" style={{ color: `${INK}b3` }}>
                    <p>{cs.challenge}</p>
                    <p>{cs.approach}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t" style={{ borderColor: `${INK}26` }} aria-hidden />
          </div>
        </section>

        {/* Final CTA band */}
        <Reveal className="px-2.5 pb-2.5 sm:px-4 sm:pb-4 md:px-6 md:pb-6 lg:px-10 lg:pb-10">
          <div
            className="rounded-2xl px-6 py-14 text-center sm:px-10 sm:py-16 md:rounded-[1.75rem] md:py-20"
            style={{ background: ESPRESSO, color: CREAM }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "#C79A87" }}
            >
              Ready to work with us
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-[var(--font-alt2-display)] text-3xl font-bold leading-[1.05] sm:text-4xl md:text-5xl">
              Trust is your most valuable asset. Let us help you build it.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed" style={{ color: `${CREAM}b3` }}>
              Whether you need experienced advice on a complex issue, help
              building your public profile, a communications strategy, or
              trusted counsel during a crisis, we are your adviser and
              advocate. We believe in you, and we have your back.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ background: OXBLOOD, color: CREAM, outlineColor: CREAM }}
              >
                Book a consultation
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center gap-2 text-[13.5px] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ color: CREAM, outlineColor: CREAM }}
              >
                <Phone className="size-4" aria-hidden />
                24/7 confidential crisis line · {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="px-5 py-10 sm:px-8 md:px-12 lg:px-16" style={{ borderTop: `1px solid ${INK}26` }}>
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <p className="font-[var(--font-alt2-display)] text-sm font-bold uppercase tracking-[0.12em]">
                CRC Public Relations
              </p>
              <address className="mt-3 text-[13.5px] not-italic leading-relaxed" style={{ color: `${INK}99` }}>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city} {siteConfig.address.state}{" "}
                {siteConfig.address.postcode}
                <br />
                {siteConfig.address.country}
              </address>
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="mt-3 inline-block text-[13.5px] focus-visible:outline focus-visible:outline-2"
                style={{ color: `${INK}99`, outlineColor: OXBLOOD }}
              >
                {siteConfig.email.general}
              </a>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium uppercase tracking-[0.08em] focus-visible:outline focus-visible:outline-2"
                  style={{ color: `${INK}b3`, outlineColor: OXBLOOD }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div
            className="mt-8 flex flex-col gap-3 pt-6 text-[12px] sm:flex-row sm:items-center sm:justify-between"
            style={{ borderTop: `1px solid ${INK}1a`, color: `${INK}80` }}
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
                style={{ outlineColor: OXBLOOD }}
              >
                3P Digital
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
