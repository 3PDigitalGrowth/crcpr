"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { Space_Grotesk, Space_Mono, Hanken_Grotesk } from "next/font/google";
import { siteConfig } from "@/config/site";

/* ---------------------------------------------------------------------- */
/* Fonts                                                                    */
/* ---------------------------------------------------------------------- */

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--alt12-display",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--alt12-mono",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--alt12-body",
  display: "swap",
});

/* ---------------------------------------------------------------------- */
/* Palette                                                                  */
/* ---------------------------------------------------------------------- */

const OUTER = "#060606";
const PANEL = "#0B0B0B";
const LIME = "#D6FF3D";
const GREY = "#8B8B85";
const BORDER = "rgba(255,255,255,0.08)";

/* ---------------------------------------------------------------------- */
/* Data                                                                      */
/* ---------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

type LedgerRow = {
  n: string;
  title: string;
  href: string;
  blurb?: string;
};

const LEDGER: LedgerRow[] = [
  {
    n: "/01",
    title: "Corporate Communications",
    href: "/services/corporate-communications",
  },
  {
    n: "/02",
    title: "Reputation Management",
    href: "/services/reputation-management",
  },
  {
    n: "/03",
    title: "Crisis Communications",
    href: "/services/crisis-communications",
    blurb:
      "We help you prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
  },
  {
    n: "/04",
    title: "Media relations & strategy",
    href: "/services/media-strategy",
    blurb: "Proactive presence and trusted relationships",
  },
  {
    n: "/05",
    title: "Issues management",
    href: "/services/issues-management",
    blurb: "Get ahead before issues become crises",
  },
  {
    n: "/06",
    title: "Digital media",
    href: "/services/digital-media",
    blurb: "Online reputation and social strategy",
  },
];

const PILLARS = [
  {
    title: "Experienced counsel, every time",
    body: "No account managers, no junior hand-offs. You work directly with advisers who have managed the situations you are facing.",
  },
  {
    title: "We know how media thinks",
    body: "A foundation in journalism means we understand exactly how a story is made, moved, and decided before it ever breaks.",
  },
  {
    title: "There when it matters",
    body: "Available 24/7 and strictly confidential. When an issue emerges, decisive counsel is one call away.",
  },
];

const STATS = [
  { value: siteConfig.stats.yearsTrading, label: "years advising leaders" },
  { value: siteConfig.stats.clientRetention, label: "client retention" },
  {
    value: siteConfig.stats.professionsTrained,
    label: "professionals trained",
  },
  {
    value: String(siteConfig.mediaReachSnapshot.total),
    label: "placements in one month",
  },
];

/** Splits a stat value into its numeral body and trailing glyph ("+", "%"). */
function splitStat(value: string): { main: string; glyph: string } {
  const match = value.match(/^(.*?)([+%]?)$/);
  if (!match) return { main: value, glyph: "" };
  return { main: match[1], glyph: match[2] };
}

/* ---------------------------------------------------------------------- */
/* Deterministic pixel-scatter field (seeded, no runtime Math.random)      */
/* ---------------------------------------------------------------------- */

function mulberry32(seed: number) {
  let s = seed;
  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const seededRandom = mulberry32(1902);
const PIXELS = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: seededRandom() * 100,
  y: 58 + seededRandom() * 38,
  size: 3 + Math.round(seededRandom() * 3),
  delay: seededRandom() * 2.6,
  duration: 1.8 + seededRandom() * 2.2,
}));

/* ---------------------------------------------------------------------- */
/* Header                                                                    */
/* ---------------------------------------------------------------------- */

function WireHeader() {
  return (
    <header
      className="flex items-center justify-between gap-4 px-5 py-6 md:px-10"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      <Link
        href="/alt12"
        className="text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{ fontFamily: "var(--alt12-display)" }}
      >
        CRC <span style={{ color: GREY }}>Public Relations</span>
      </Link>

      <nav
        className="hidden items-center gap-1 text-[11px] uppercase tracking-[0.18em] md:flex"
        style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-3 py-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            / {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/contact"
        className="rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{ backgroundColor: LIME, fontFamily: "var(--alt12-mono)" }}
      >
        Send message
      </Link>
    </header>
  );
}

/* ---------------------------------------------------------------------- */
/* Footer                                                                    */
/* ---------------------------------------------------------------------- */

function WireFooter() {
  return (
    <footer
      className="px-5 py-14 md:px-10"
      style={{ borderTop: `1px solid ${BORDER}` }}
    >
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <p
            className="text-base font-semibold text-white"
            style={{ fontFamily: "var(--alt12-display)" }}
          >
            CRC Public Relations
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: GREY }}>
            Boutique corporate PR · Australia · New Zealand · Pacific
          </p>
        </div>

        <div>
          <p
            className="text-[11px] uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
          >
            / Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href={siteConfig.phone.href} className="hover:text-white">
                {siteConfig.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="hover:text-white"
              >
                {siteConfig.email.general}
              </a>
            </li>
            <li style={{ color: GREY }}>
              {siteConfig.address.street}, {siteConfig.address.city}{" "}
              {siteConfig.address.state} {siteConfig.address.postcode}
            </li>
          </ul>
        </div>

        <div>
          <p
            className="text-[11px] uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
          >
            / Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p
            className="text-[11px] uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
          >
            / 24/7 confidential crisis line
          </p>
          <a
            href={siteConfig.phone.href}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:opacity-75"
          >
            <Phone className="h-4 w-4" style={{ color: LIME }} />
            {siteConfig.phone.display}
          </a>
        </div>
      </div>

      <div
        className="mt-12 flex flex-col gap-3 pt-6 text-xs md:flex-row md:items-center md:justify-between"
        style={{ borderTop: `1px solid ${BORDER}`, color: GREY }}
      >
        <p>
          © {siteConfig.copyrightYear} CRC Public Relations. All rights
          reserved.
        </p>
        <p>
          Proudly supported by{" "}
          <a
            href="https://www.3pdigital.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/20 underline-offset-4 hover:text-white"
          >
            3P Digital
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------------- */
/* Main component                                                            */
/* ---------------------------------------------------------------------- */

export function Alt12() {
  const reduceMotion = useReducedMotion();

  return (
    <div style={{ backgroundColor: OUTER }} className="min-h-screen md:py-6 lg:py-10">
      <div
        className={`${display.variable} ${mono.variable} ${body.variable} mx-auto max-w-[1600px] overflow-hidden md:rounded-[32px]`}
        style={{
          backgroundColor: PANEL,
          border: `1px solid ${BORDER}`,
          fontFamily: "var(--alt12-body)",
          color: "#F2F2EF",
        }}
      >
        <WireHeader />

        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20">
          <p
            className="max-w-xs text-justify text-[11px] leading-relaxed"
            style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
          >
            Whatever your communications objectives, you need experienced
            counsel you can trust.
          </p>

          <h1
            className="mt-10 max-w-4xl text-[2.6rem] font-medium leading-[1.05] text-white sm:text-6xl md:mt-16 md:text-7xl"
            style={{ fontFamily: "var(--alt12-display)" }}
          >
            Strategic, proven communications advice.
          </h1>

          <p
            className="mt-8 text-[11px] uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--alt12-mono)", color: LIME }}
          >
            Boutique corporate PR · Australia · New Zealand · Pacific
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-black transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ backgroundColor: LIME, fontFamily: "var(--alt12-mono)" }}
            >
              &gt; Book a consultation | _
            </Link>
            <Link
              href="/services"
              className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ fontFamily: "var(--alt12-mono)" }}
            >
              View all services
            </Link>
          </div>

          {/* deterministic pixel-scatter field */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {PIXELS.map((p) =>
              reduceMotion ? (
                <div
                  key={p.id}
                  className="absolute"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                    backgroundColor: LIME,
                    opacity: 0.45,
                  }}
                />
              ) : (
                <motion.div
                  key={p.id}
                  className="absolute"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                    backgroundColor: LIME,
                  }}
                  animate={{ opacity: [0.12, 0.85, 0.12] }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )
            )}
          </div>
        </section>

        {/* SERVICE LEDGER */}
        <section
          className="px-5 py-20 md:px-10 md:py-28"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
          >
            / Services
          </p>

          <div className="mt-10" style={{ borderTop: `1px solid ${BORDER}` }}>
            {LEDGER.map((row) => (
              <Link
                key={row.n}
                href={row.href}
                className="group grid grid-cols-[3rem_1fr_2.5rem] items-center gap-4 px-2 py-7 transition-colors hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-[-4px] md:grid-cols-[4rem_1fr_3rem] md:gap-8 md:py-9"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <span
                  className="text-xs md:text-sm"
                  style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
                >
                  {row.n}
                </span>
                <span className="text-right">
                  <span
                    className="block text-xl font-medium leading-tight text-white sm:text-2xl md:text-3xl"
                    style={{ fontFamily: "var(--alt12-display)" }}
                  >
                    {row.title}
                  </span>
                  {row.blurb && (
                    <span
                      className="mt-2 block text-xs leading-relaxed sm:text-sm"
                      style={{ color: GREY }}
                    >
                      {row.blurb}
                    </span>
                  )}
                </span>
                <span className="flex items-center justify-end gap-1" aria-hidden="true">
                  <span
                    className="h-1.5 w-1.5 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ backgroundColor: LIME }}
                  />
                  <span
                    className="h-1.5 w-1.5 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ backgroundColor: LIME }}
                  />
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-10 inline-flex items-center gap-2 border px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{
              borderColor: BORDER,
              fontFamily: "var(--alt12-mono)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = LIME;
              e.currentTarget.style.borderColor = LIME;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = BORDER;
            }}
          >
            &gt; View all services | _
          </Link>
        </section>

        {/* CASE STUDIES */}
        <section
          className="px-5 py-20 md:px-10 md:py-28"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
          >
            / Client outcomes
          </p>
          <h2
            className="mt-4 text-2xl font-medium text-white md:text-4xl"
            style={{ fontFamily: "var(--alt12-display)" }}
          >
            Results that speak for themselves.
          </h2>

          <div className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: BORDER }}>
            {siteConfig.caseStudies.map((cs) => (
              <div key={cs.id} className="p-7 md:p-8" style={{ backgroundColor: PANEL }}>
                <p
                  className="text-[10px] uppercase tracking-[0.18em]"
                  style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
                >
                  {cs.sector}
                </p>
                <p
                  className="mt-5 text-lg font-medium uppercase leading-snug text-white md:text-xl"
                  style={{ fontFamily: "var(--alt12-display)" }}
                >
                  {cs.outcome}
                </p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: GREY }}>
                  {cs.challenge}
                </p>
              </div>
            ))}

            <Link
              href="/case-studies"
              className="group flex flex-col items-start justify-center gap-4 p-7 transition-colors hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-[-4px] sm:col-span-2 md:p-8"
              style={{ backgroundColor: PANEL }}
            >
              <span
                className="text-lg font-medium text-white md:text-xl"
                style={{ fontFamily: "var(--alt12-display)" }}
              >
                Case Studies
              </span>
              <span
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--alt12-mono)", color: LIME }}
              >
                Explore
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </section>

        {/* WHY BOUTIQUE */}
        <section
          className="px-5 py-20 md:px-10 md:py-28"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
          >
            / Why a boutique firm
          </p>
          <blockquote
            className="mt-6 max-w-3xl text-2xl font-medium leading-snug text-white md:text-3xl"
            style={{ fontFamily: "var(--alt12-display)" }}
          >
            &ldquo;As a boutique PR firm, you deal directly with experienced
            advisers who take a genuine, long-term interest in your
            organisation. It is a partnership, and it makes a huge difference
            to outcomes.&rdquo;
          </blockquote>
          <p className="mt-5 text-sm font-semibold" style={{ color: GREY }}>
            Lyall Mercer, co-founder
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="pt-5" style={{ borderTop: `1px solid ${BORDER}` }}>
                <p
                  className="text-[11px] uppercase tracking-[0.15em]"
                  style={{ fontFamily: "var(--alt12-mono)", color: LIME }}
                >
                  / {pillar.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: GREY }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* STATS + MEDIA */}
        <section
          className="px-5 py-20 md:px-10 md:py-28"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => {
              const { main, glyph } = splitStat(stat.value);
              return (
                <div key={stat.label}>
                  <p
                    className="text-4xl font-medium text-white md:text-5xl"
                    style={{ fontFamily: "var(--alt12-display)" }}
                  >
                    {main}
                    {glyph && <span style={{ color: LIME }}>{glyph}</span>}
                  </p>
                  <p className="mt-2 text-sm leading-snug" style={{ color: GREY }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 md:mt-20">
            <p
              className="text-[11px] uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
            >
              Expert commentary from our advisers, featured in
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              {siteConfig.lyall.mediaLinks.map((outlet) => (
                <div
                  key={outlet.name}
                  className="relative h-5 w-20 opacity-40 transition-opacity hover:opacity-80"
                  style={{ filter: "brightness(0) invert(1)" }}
                >
                  <Image
                    src={outlet.logoSrc}
                    alt={outlet.name}
                    fill
                    sizes="80px"
                    className="object-contain object-left"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section
          className="px-5 py-20 md:px-10 md:py-28"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
            <div
              className="relative aspect-[3/4] w-full overflow-hidden"
              style={{ border: `1px solid ${BORDER}` }}
            >
              <Image
                src="/images/about/lyall-mercer-portrait.png"
                alt="Lyall Mercer, co-founder of CRC Public Relations"
                fill
                sizes="(min-width: 768px) 35vw, 90vw"
                className="object-cover object-top grayscale"
              />
            </div>
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.18em]"
                style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
              >
                / Co-founder &amp; principal adviser
              </p>
              <h2
                className="mt-3 text-3xl font-medium text-white md:text-4xl"
                style={{ fontFamily: "var(--alt12-display)" }}
              >
                Lyall Mercer
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                Lyall began his career as a journalist, writing for some of
                Australia&rsquo;s leading newspapers and magazines. That
                foundation, understanding exactly how media thinks, moves and
                decides what becomes a story, led him into a 25 year public
                relations career spanning every continent.
              </p>
              <Link
                href="/about/lyall-mercer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:text-[#D6FF3D] focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Read Lyall&rsquo;s full profile
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="px-5 py-24 text-center md:px-10 md:py-32"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.18em]"
            style={{ fontFamily: "var(--alt12-mono)", color: GREY }}
          >
            / Ready to work with us
          </p>
          <h2
            className="mx-auto mt-6 max-w-2xl text-3xl font-medium leading-tight text-white md:text-5xl"
            style={{ fontFamily: "var(--alt12-display)" }}
          >
            Trust is your most valuable asset. Let us help you build it.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            Whether you need experienced advice on a complex issue, help
            building your public profile, a communications strategy, or
            trusted counsel during a crisis, we are your adviser and
            advocate. We believe in you, and we have your back.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ backgroundColor: LIME, fontFamily: "var(--alt12-mono)" }}
            >
              &gt; Book a consultation | _
            </Link>
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-2 text-sm font-semibold text-white hover:opacity-75"
            >
              <Phone className="h-4 w-4" style={{ color: LIME }} />
              {siteConfig.phone.display}
            </a>
          </div>
        </section>

        <WireFooter />
      </div>
    </div>
  );
}
