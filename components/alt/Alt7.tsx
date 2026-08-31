"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  UserCheck,
  Newspaper,
  Clock,
  Phone,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Space_Grotesk, Hanken_Grotesk } from "next/font/google";
import { siteConfig } from "@/config/site";

/* ------------------------------------------------------------------ */
/* Fonts — modernist grotesk with personality for display, plain       */
/* grotesk for body. No Instrument Serif, no condensed faces, no       */
/* Inter/Roboto, no italics.                                           */
/* ------------------------------------------------------------------ */
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--alt7-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--alt7-body",
  display: "swap",
});

/* ------------------------------------------------------------------ */
/* Palette (strict monochrome, warm editorial ground)                  */
/* ------------------------------------------------------------------ */
const GREIGE = "#E9E7E2";
const INK = "#111111";
const WHITE = "#FFFFFF";
const GREY = "#6E6B66";
const HAIR_ON_INK = "rgba(255,255,255,0.16)";
const HAIR_ON_GREIGE = "rgba(17,17,17,0.14)";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
] as const;

const PRACTICE_TILES = [
  {
    label: "Corporate Communications",
    href: "/services/corporate-communications",
    img: "/images/redesign-v2/bento-corporate.png",
  },
  {
    label: "Reputation Management",
    href: "/services/reputation-management",
    img: "/images/redesign-v2/bento-reputation.png",
  },
  {
    label: "Crisis Communications",
    href: "/services/crisis-communications",
    img: "/images/redesign-v2/bento-crisis.png",
  },
] as const;

const USP_COLUMNS = [
  {
    icon: UserCheck,
    title: "Experienced counsel, every time",
    body: "No account managers, no junior hand-offs. You work directly with advisers who have managed the situations you are facing.",
  },
  {
    icon: Newspaper,
    title: "We know how media thinks",
    body: "A foundation in journalism means we understand exactly how a story is made, moved, and decided before it ever breaks.",
  },
  {
    icon: Clock,
    title: "There when it matters",
    body: "Available 24/7 and strictly confidential. When an issue emerges, decisive counsel is one call away.",
  },
] as const;

const STATS = [
  { value: "15+", label: "years advising leaders" },
  { value: "100%", label: "client retention" },
  { value: "500+", label: "professionals trained" },
  { value: "221", label: "placements in one month" },
] as const;

/* ------------------------------------------------------------------ */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function MicroLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: GREY }}>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */

export function Alt7() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen`}
      style={{ background: GREIGE, color: INK, fontFamily: "var(--alt7-body)" }}
    >
      <style>{`
        .alt7-display { font-family: var(--alt7-display), sans-serif; font-weight: 700; }
      `}</style>

      {/* ============================ HEADER ============================ */}
      <header className="sticky top-0 z-50">
        {/* utility bar */}
        <div style={{ background: INK }}>
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-2 sm:px-8">
            <a
              href={siteConfig.phone.href}
              className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/85 hover:text-white"
            >
              {siteConfig.phone.display}
            </a>
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">
              {siteConfig.address.city} &middot; {siteConfig.address.country}
            </span>
          </div>
        </div>

        {/* main header */}
        <div style={{ background: GREIGE, borderBottom: `1px solid ${HAIR_ON_GREIGE}` }}>
          <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8">
            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/80 transition-colors hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/alt7"
              className="alt7-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl uppercase tracking-[0.06em] sm:text-3xl"
              style={{ color: INK }}
            >
              CRC
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              <Link
                href="/contact"
                className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111]/80 hover:text-[#111111]"
              >
                Contact
              </Link>
              <a
                href={siteConfig.phone.href}
                className="border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ borderColor: INK, color: INK }}
              >
                {siteConfig.phone.display}
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden"
              aria-label={menuOpen ? "Close menu" : "Menu"}
              aria-expanded={menuOpen}
              style={{ color: INK }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t px-5 pb-6 pt-4 md:hidden" style={{ borderColor: HAIR_ON_GREIGE }}>
              <nav className="flex flex-col gap-4" aria-label="Mobile">
                {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-bold uppercase tracking-[0.2em]"
                    style={{ color: INK }}
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href={siteConfig.phone.href}
                  className="mt-2 inline-block border px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ borderColor: INK, color: INK }}
                >
                  {siteConfig.phone.display}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden px-5 pt-10 sm:px-8 md:pt-4">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-1">
            <MicroLabel>Boutique corporate PR</MicroLabel>
            <MicroLabel>Australia</MicroLabel>
            <MicroLabel>New Zealand</MicroLabel>
            <MicroLabel>Pacific</MicroLabel>
          </div>

          <div className="mt-4 flex flex-col items-center md:relative md:mt-0 md:block md:min-h-[68vh]">
            <div
              aria-hidden="true"
              className="pointer-events-none order-2 select-none text-center leading-[0.82] md:order-none md:absolute md:inset-0 md:flex md:items-center md:justify-center"
            >
              <span
                className="alt7-display uppercase"
                style={{ fontSize: "clamp(5rem, 26vw, 22rem)", color: INK, opacity: 0.94 }}
              >
                Trust
              </span>
            </div>

            <div className="relative z-10 order-1 aspect-[3/5] w-[230px] sm:w-[300px] md:absolute md:bottom-0 md:left-1/2 md:order-none md:w-[360px] md:-translate-x-1/2 lg:w-[420px]">
              <Image
                src="/images/lyall-mercer-portrait.png"
                alt="Lyall Mercer, co-founder of CRC Public Relations"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 767px) 60vw, 420px"
              />
            </div>
          </div>

          <Reveal className="relative z-20 mx-auto mt-6 max-w-2xl pb-16 text-center md:mt-8 md:pb-24">
            <p className="text-sm leading-relaxed sm:text-base" style={{ color: "#3A3A3A" }}>
              Trust is your most valuable asset. Let us help you build it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ background: INK }}
              >
                Book a consultation
              </Link>
              <Link
                href="/services"
                className="border px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ borderColor: INK, color: INK }}
              >
                View all services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================= PRACTICE TILES ======================= */}
      <section className="px-5 py-16 sm:px-8 md:py-20" style={{ background: INK }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-3" style={{ background: HAIR_ON_INK }}>
            {PRACTICE_TILES.map((t, i) => (
              <Reveal key={t.href} delay={i * 0.08}>
                <div className="flex h-full flex-col" style={{ background: INK }}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={t.img}
                      alt=""
                      fill
                      className="object-cover grayscale"
                      sizes="(max-width: 639px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                      {t.label}
                    </span>
                    <Link
                      href={t.href}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      Explore <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================== RESULTS: EDITORIAL SPLIT + RAIL ================== */}
      <section className="px-5 py-20 sm:px-8 md:py-28" style={{ background: GREIGE }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <h2
                className="alt7-display uppercase leading-[0.98]"
                style={{ fontSize: "clamp(2rem, 4.6vw, 3.6rem)", color: INK }}
              >
                Results that
                <br />
                speak for themselves.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="relative aspect-[4/3] w-full">
              <Image
                src="/images/case-studies/hero.webp"
                alt=""
                fill
                className="object-cover grayscale"
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </Reveal>
          </div>

          <div className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {siteConfig.caseStudies.map((s, i) => (
              <Reveal
                key={s.id}
                delay={i * 0.06}
                className="min-w-[280px] max-w-[280px] shrink-0 snap-start border p-6 sm:min-w-[320px] sm:max-w-[320px]"
              >
                <div className="h-full" style={{ borderColor: HAIR_ON_GREIGE }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GREY }}>
                    {s.sector}
                  </p>
                  <p
                    className="alt7-display mt-4 leading-[1.1]"
                    style={{ fontSize: "1.4rem", color: INK }}
                  >
                    {s.outcome}
                  </p>
                  <hr className="my-4" style={{ borderColor: HAIR_ON_GREIGE }} />
                  <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                    {s.challenge}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ QUOTE BAND ============================ */}
      <section className="border-y px-5 py-20 text-center sm:px-8 md:py-28" style={{ borderColor: HAIR_ON_GREIGE, background: GREIGE }}>
        <Reveal className="mx-auto max-w-3xl">
          <p
            className="leading-[1.3]"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.1rem)", color: INK }}
          >
            &ldquo;As a boutique PR firm, you deal directly with experienced
            advisers who take a genuine, long-term interest in your
            organisation. It is a partnership, and it makes a huge difference
            to outcomes.&rdquo;
          </p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em]" style={{ color: GREY }}>
            Lyall Mercer, co-founder
          </p>
        </Reveal>
      </section>

      {/* ============================ USP ROW ============================ */}
      <section className="px-5 py-16 sm:px-8 md:py-20" style={{ background: WHITE }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            {USP_COLUMNS.map((u, i) => {
              const Icon = u.icon;
              return (
                <Reveal key={u.title} delay={i * 0.06} className="border-t pt-6" >
                  <div style={{ borderColor: HAIR_ON_GREIGE }}>
                    <Icon size={22} strokeWidth={1.5} style={{ color: INK }} aria-hidden="true" />
                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em]" style={{ color: INK }}>
                      {u.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: GREY }}>
                      {u.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={0.24} className="border-t pt-6">
              <div style={{ borderColor: HAIR_ON_GREIGE }}>
                <Phone size={22} strokeWidth={1.5} style={{ color: INK }} aria-hidden="true" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em]" style={{ color: INK }}>
                  24/7 confidential crisis line
                </p>
                <a
                  href={siteConfig.phone.href}
                  className="mt-2 inline-block text-sm font-bold underline decoration-black/25 underline-offset-4 hover:decoration-black"
                  style={{ color: INK }}
                >
                  {siteConfig.phone.display}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ STATS ============================ */}
      <section className="border-t px-5 py-16 sm:px-8 md:py-20" style={{ borderColor: HAIR_ON_GREIGE, background: GREIGE }}>
        <Reveal className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <span className="alt7-display block leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: INK }}>
                  {s.value}
                </span>
                <span className="mt-2 block text-xs font-bold uppercase tracking-[0.14em]" style={{ color: GREY }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============================ FOUNDER STRIP ============================ */}
      <section className="px-5 py-16 sm:px-8 md:py-20" style={{ background: WHITE }}>
        <Reveal className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 sm:flex-row sm:items-center">
          <div className="relative aspect-square w-28 shrink-0 overflow-hidden sm:w-32">
            <Image
              src="/images/about/lyall-mercer-portrait.png"
              alt="Lyall Mercer"
              fill
              className="object-cover object-top grayscale"
              sizes="128px"
            />
          </div>
          <div className="text-center sm:text-left">
            <MicroLabel>Co-founder &amp; principal adviser</MicroLabel>
            <p className="alt7-display mt-1 text-xl" style={{ color: INK }}>
              Lyall Mercer
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
              Lyall began his career as a journalist, writing for some of
              Australia&rsquo;s leading newspapers and magazines. That
              foundation, understanding exactly how media thinks, moves and
              decides what becomes a story, led him into a 25 year public
              relations career spanning every continent.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.16em] underline decoration-black/25 underline-offset-4 hover:decoration-black"
              style={{ color: INK }}
            >
              Read Lyall&rsquo;s full profile
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ==================== FINAL CTA + FOOTER (BLACK) ==================== */}
      <section className="px-5 pt-20 sm:px-8 md:pt-28" style={{ background: INK }}>
        <div className="mx-auto max-w-[1000px] text-center">
          <Reveal>
            <MicroLabel>
              <span style={{ color: "rgba(255,255,255,0.6)" }}>Ready to work with us</span>
            </MicroLabel>
            <h2
              className="alt7-display mx-auto mt-4 max-w-3xl uppercase leading-[1.05] text-white"
              style={{ fontSize: "clamp(1.9rem, 4.2vw, 3.1rem)" }}
            >
              Trust is your most valuable asset. Let us help you build it.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Whether you need experienced advice on a complex issue, help
              building your public profile, a communications strategy, or
              trusted counsel during a crisis, we are your adviser and
              advocate. We believe in you, and we have your back.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/contact"
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                style={{ background: WHITE }}
              >
                Book a consultation
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Phone size={16} aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-[1400px] border-t pt-14" style={{ borderColor: HAIR_ON_INK }}>
          <div className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-3">
            <div>
              <span className="alt7-display text-xl uppercase text-white">CRC</span>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city} {siteConfig.address.state}{" "}
                {siteConfig.address.postcode}
                <br />
                {siteConfig.address.country}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">Contact</p>
              <p className="mt-4 text-sm text-white/70">
                <a href={siteConfig.phone.href} className="hover:text-white">
                  {siteConfig.phone.display}
                </a>
              </p>
              <p className="mt-2 text-sm text-white/70">
                <a href={`mailto:${siteConfig.email.general}`} className="hover:text-white">
                  {siteConfig.email.general}
                </a>
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">Navigate</p>
              <nav className="mt-4 flex flex-col gap-2" aria-label="Footer">
                <Link href="/" className="text-sm text-white/70 hover:text-white">Home</Link>
                {[...NAV_LINKS, { label: "Contact", href: "/contact" }].map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: HAIR_ON_INK }}>
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
                className="text-white/55 underline decoration-white/30 underline-offset-4 hover:text-white"
              >
                3P Digital
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
