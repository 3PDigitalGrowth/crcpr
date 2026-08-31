"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Archivo_Black, Hanken_Grotesk } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Phone,
  Scale,
  Building2,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Alt 1 "Signal": black, paper white, signal red editorial concept.
 * Fully self-contained: own fonts, header, sections, footer.
 */

const displayFont = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bodyFont = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const INK = "#0A0A0A";
const PAPER = "#F7F6F3";
const RED = "#E02B20";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const PRACTICE_ROWS = [
  {
    n: "01",
    title: "Corporate Communications",
    blurb: null as string | null,
    href: "/services/corporate-communications",
  },
  {
    n: "02",
    title: "Reputation Management",
    blurb: null as string | null,
    href: "/services/reputation-management",
  },
  {
    n: "03",
    title: "Crisis Communications",
    blurb:
      "We help you prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
    href: "/services/crisis-communications",
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
  "15+ years advising leaders",
  "100% client retention",
  "500+ professionals trained",
  "221 placements in one month",
];

const CASE_STUDY_ICONS = { Scale, Building2, GraduationCap, Landmark } as const;

function GhostTitle({
  children,
  tone = "dark",
  align = "left",
}: {
  children: string;
  tone?: "dark" | "light";
  align?: "left" | "right" | "center";
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 select-none whitespace-nowrap leading-none ${
        align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
      }`}
      style={{
        fontFamily: displayFont.style.fontFamily,
        fontSize: "clamp(4.5rem, 15vw, 14rem)",
        color: tone === "dark" ? "rgba(10,10,10,0.06)" : "rgba(247,246,243,0.07)",
        letterSpacing: "-0.02em",
      }}
    >
      {children}
    </span>
  );
}

function Eyebrow({ children, tone = "dark" }: { children: string; tone?: "dark" | "light" }) {
  return (
    <p
      className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em]"
      style={{ color: tone === "dark" ? "#5A5652" : "rgba(247,246,243,0.6)" }}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: RED }} />
      {children}
    </p>
  );
}

function RedRule({ width = "3rem" }: { width?: string }) {
  return <span className="block h-[3px]" style={{ width, backgroundColor: RED }} />;
}

function MediaMarquee() {
  const shouldReduceMotion = useReducedMotion();
  const links = siteConfig.lyall.mediaLinks;
  const loop = [...links, ...links];

  return (
    <div className="relative overflow-hidden border-t border-white/10 py-8">
      <motion.div
        className="flex w-max items-center gap-14"
        animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          shouldReduceMotion ? undefined : { duration: 26, repeat: Infinity, ease: "linear" }
        }
      >
        {loop.map((m, i) => (
          <a
            key={`${m.name}-${i}`}
            href={m.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center opacity-75 grayscale transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.logoSrc}
              alt={m.name}
              className={
                m.tone === "mono"
                  ? "h-6 w-auto object-contain"
                  : "h-7 w-auto rounded-sm bg-white px-2 py-1 object-contain"
              }
              style={m.tone === "mono" ? { filter: "invert(1) brightness(1.8)" } : undefined}
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
}

export function Alt1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className={bodyFont.className} style={{ backgroundColor: PAPER, color: INK }}>
      {/* ---------- HEADER ---------- */}
      <header
        className="sticky top-0 z-50 border-b border-white/10"
        style={{ backgroundColor: "rgba(10,10,10,0.92)", backdropFilter: "blur(8px)" }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            className="text-lg font-semibold uppercase tracking-[0.08em] text-[#F7F6F3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
            style={{ fontFamily: displayFont.style.fontFamily }}
          >
            CRC <span style={{ color: RED }}>PR</span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
            >
              <Phone className="h-4 w-4" style={{ color: RED }} />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/contact"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
              style={{ backgroundColor: PAPER }}
            >
              Book a consultation
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-white md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
            aria-label={menuOpen ? "Close menu" : "Menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-6 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-white/80 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <a href={siteConfig.phone.href} className="flex items-center gap-2 text-base font-semibold text-white">
                <Phone className="h-4 w-4" style={{ color: RED }} />
                {siteConfig.phone.display}
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-[#0A0A0A]"
                style={{ backgroundColor: PAPER }}
              >
                Book a consultation
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section style={{ backgroundColor: INK, color: PAPER }} className="relative overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: "rgba(247,246,243,0.55)" }}
            >
              Boutique corporate PR &middot; Australia &middot; New Zealand &middot; Pacific
            </p>

            <h1
              className="mt-8 leading-[0.98]"
              style={{
                fontFamily: displayFont.style.fontFamily,
                fontSize: "clamp(2rem, 8vw, 6.75rem)",
                textTransform: "uppercase",
              }}
            >
              <span className="block">Strategic,</span>
              <span className="block" style={{ color: RED, textDecoration: "underline", textUnderlineOffset: "0.1em" }}>
                proven
              </span>
              <span className="block">communications advice.</span>
            </h1>

            <div className="mt-10 grid max-w-3xl gap-4 md:grid-cols-2 md:gap-8">
              <p className="text-base leading-relaxed" style={{ color: "rgba(247,246,243,0.78)" }}>
                Whatever your communications objectives, you need experienced counsel you can trust.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(247,246,243,0.78)" }}>
                We are your trusted adviser and advocate, and we believe in you.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
                style={{ backgroundColor: PAPER }}
              >
                Book a consultation
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
                style={{ color: "rgba(247,246,243,0.85)" }}
              >
                Start the free assessment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: RED }} />
              </Link>
            </div>
          </div>

          {/* greyscale photography strip */}
          <div className="grid grid-cols-2 gap-[2px] border-t border-white/10 bg-white/10">
            <div className="relative aspect-[4/3] md:aspect-[16/9]">
              <Image
                src="/images/homepage/MyPrPartnerHeadshots2025-14.jpg"
                alt="CRC Public Relations advisers"
                fill
                sizes="50vw"
                className="object-cover"
                style={{ filter: "grayscale(1) contrast(1.05)" }}
                priority
              />
            </div>
            <div className="relative aspect-[4/3] md:aspect-[16/9]">
              <Image
                src="/images/redesign-v2/bento-corporate.png"
                alt="Corporate communications advisory session"
                fill
                sizes="50vw"
                className="object-cover"
                style={{ filter: "grayscale(1) contrast(1.05)" }}
              />
            </div>
          </div>

          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <p
              className="pt-8 text-center text-[11px] font-semibold uppercase tracking-[0.28em] md:text-left"
              style={{ color: "rgba(247,246,243,0.45)" }}
            >
              Expert commentary from our advisers, featured in
            </p>
          </div>

          <MediaMarquee />
        </section>

        {/* ---------- PRACTICE AREAS ---------- */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <GhostTitle align="right">REPUTATION</GhostTitle>
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <Eyebrow>Our practice areas</Eyebrow>
            <h2
              className="mt-4 max-w-2xl leading-[1.02]"
              style={{ fontFamily: displayFont.style.fontFamily, fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Corporate. Reputation. Crisis.
            </h2>

            <div className="mt-16 border-t" style={{ borderColor: "rgba(10,10,10,0.12)" }}>
              {PRACTICE_ROWS.map((row) => (
                <motion.div key={row.n} {...fadeUp}>
                  <Link
                    href={row.href}
                    className="group grid grid-cols-[3rem,1fr] items-center gap-6 border-b py-8 transition-colors hover:bg-black/[0.03] md:grid-cols-[5rem,1fr,auto] md:gap-10 md:py-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#E02B20]"
                    style={{ borderColor: "rgba(10,10,10,0.12)" }}
                  >
                    <span
                      className="text-sm font-semibold"
                      style={{ color: RED, fontFamily: displayFont.style.fontFamily }}
                    >
                      {row.n}
                    </span>
                    <div>
                      <h3
                        className="leading-[1.02]"
                        style={{
                          fontFamily: displayFont.style.fontFamily,
                          fontSize: "clamp(1.5rem, 3.4vw, 2.75rem)",
                          textTransform: "uppercase",
                        }}
                      >
                        {row.title}
                      </h3>
                      {row.blurb && (
                        <p className="mt-3 max-w-xl text-sm leading-relaxed md:text-base" style={{ color: "#5A5652" }}>
                          {row.blurb}
                        </p>
                      )}
                    </div>
                    <span className="col-span-2 mt-4 flex items-center gap-2 text-sm font-semibold md:col-span-1 md:mt-0">
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: RED }} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- WHY BOUTIQUE ---------- */}
        <section className="relative overflow-hidden border-t py-24 md:py-32" style={{ borderColor: "rgba(10,10,10,0.12)" }}>
          <GhostTitle align="left">TRUST</GhostTitle>
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <Eyebrow>Why a boutique firm</Eyebrow>

            <motion.blockquote {...fadeUp} className="mt-10 max-w-4xl">
              <span
                aria-hidden="true"
                className="mb-2 block text-6xl leading-none"
                style={{ color: RED, fontFamily: displayFont.style.fontFamily }}
              >
                &quot;
              </span>
              <p
                className="leading-[1.15]"
                style={{ fontFamily: displayFont.style.fontFamily, fontSize: "clamp(1.5rem, 3.6vw, 2.75rem)" }}
              >
                As a boutique PR firm, you deal directly with experienced advisers who take a genuine, long-term interest in your organisation. It is a partnership, and it makes a huge difference to outcomes.
              </p>
              <footer className="mt-6 flex items-center gap-3 text-sm font-semibold" style={{ color: "#5A5652" }}>
                <RedRule width="2rem" />
                Lyall Mercer, co-founder
              </footer>
            </motion.blockquote>

            <div className="mt-20 grid gap-10 border-t pt-12 md:grid-cols-3 md:gap-12" style={{ borderColor: "rgba(10,10,10,0.12)" }}>
              {PILLARS.map((p) => (
                <motion.div key={p.title} {...fadeUp}>
                  <RedRule width="2rem" />
                  <h3 className="mt-5 text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "#5A5652" }}>
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- PROOF ---------- */}
        <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: INK, color: PAPER }}>
          <GhostTitle tone="light" align="center">RESULTS</GhostTitle>
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <Eyebrow tone="light">{siteConfig.mediaReachSnapshot.intro.eyebrow}</Eyebrow>

            <div className="mt-12 grid divide-y divide-white/10 border-y border-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
              {STATS.map((s) => (
                <div key={s} className="py-6 md:px-6 md:py-8">
                  <p
                    className="leading-none"
                    style={{ fontFamily: displayFont.style.fontFamily, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: RED }}
                  >
                    {s.match(/^[0-9%+]+/)?.[0]}
                  </p>
                  <p className="mt-2 text-sm" style={{ color: "rgba(247,246,243,0.75)" }}>
                    {s.replace(/^[0-9%+]+\s*/, "")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-[1.1fr,1fr] md:gap-16">
              <motion.h3
                {...fadeUp}
                className="leading-[1.05]"
                style={{ fontFamily: displayFont.style.fontFamily, fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)" }}
              >
                {siteConfig.mediaReachSnapshot.intro.headline}
              </motion.h3>
              <motion.div {...fadeUp} className="flex flex-col gap-4">
                {siteConfig.mediaReachSnapshot.intro.body.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed md:text-base" style={{ color: "rgba(247,246,243,0.78)" }}>
                    {p}
                  </p>
                ))}
                <p className="mt-2 text-xs" style={{ color: "rgba(247,246,243,0.45)" }}>
                  {siteConfig.mediaReachSnapshot.caveat}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ---------- CASE STUDIES ---------- */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <Eyebrow>Client outcomes</Eyebrow>
            <h2
              className="mt-4 max-w-2xl leading-[1.02]"
              style={{ fontFamily: displayFont.style.fontFamily, fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Results that speak for themselves.
            </h2>

            <div className="mt-16 border-t" style={{ borderColor: "rgba(10,10,10,0.12)" }}>
              {siteConfig.caseStudies.map((cs, i) => {
                const Icon = CASE_STUDY_ICONS[cs.icon];
                return (
                  <motion.div
                    key={cs.id}
                    {...fadeUp}
                    className="grid grid-cols-[3rem,1fr] gap-6 border-b py-10 md:grid-cols-[5rem,1fr,1fr] md:gap-10"
                    style={{ borderColor: "rgba(10,10,10,0.12)" }}
                  >
                    <span
                      className="text-sm font-semibold"
                      style={{ color: RED, fontFamily: displayFont.style.fontFamily }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: "#5A5652" }}>
                        <Icon className="h-3.5 w-3.5" style={{ color: RED }} />
                        {cs.sector}
                      </p>
                      <p
                        className="mt-3 leading-[1.05]"
                        style={{ fontFamily: displayFont.style.fontFamily, fontSize: "clamp(1.4rem, 2.8vw, 2rem)" }}
                      >
                        {cs.outcome}
                      </p>
                      <p className="mt-2 text-sm" style={{ color: "#5A5652" }}>
                        {cs.outcomeSub}
                      </p>
                    </div>
                    <div className="col-span-2 mt-4 flex flex-col gap-3 md:col-span-1 md:mt-0">
                      <p className="text-sm leading-relaxed" style={{ color: "#5A5652" }}>
                        {cs.challenge}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#5A5652" }}>
                        {cs.approach}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- FOUNDER ---------- */}
        <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: INK, color: PAPER }}>
          <GhostTitle tone="light" align="left">ADVISERS</GhostTitle>
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <Eyebrow tone="light">{siteConfig.lyall.title}</Eyebrow>

            <div className="mt-12 grid gap-12 md:grid-cols-[0.8fr,1.2fr] md:gap-20">
              <motion.div {...fadeUp} className="relative aspect-[3/4] w-full max-w-sm overflow-hidden">
                <Image
                  src={siteConfig.lyall.featuredPortraitSrc}
                  alt={siteConfig.lyall.fullName}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                  style={{ filter: "grayscale(1) contrast(1.05)" }}
                />
                <div className="absolute bottom-0 left-0 top-0" style={{ width: "3px", backgroundColor: RED }} />
              </motion.div>

              <motion.div {...fadeUp}>
                <h2
                  className="leading-none"
                  style={{ fontFamily: displayFont.style.fontFamily, fontSize: "clamp(2rem, 4.5vw, 3.5rem)", textTransform: "uppercase" }}
                >
                  {siteConfig.lyall.fullName}
                </h2>
                <p className="mt-2 text-sm" style={{ color: "rgba(247,246,243,0.6)" }}>
                  {siteConfig.lyall.origin}
                </p>

                <div className="mt-8 flex flex-col gap-4 max-w-2xl">
                  <p className="text-sm leading-relaxed md:text-base" style={{ color: "rgba(247,246,243,0.82)" }}>
                    Lyall began his career as a journalist, writing for some of Australia&apos;s leading newspapers and magazines. That foundation, understanding exactly how media thinks, moves and decides what becomes a story, led him into a 25 year public relations career spanning every continent.
                  </p>
                  <p className="text-sm leading-relaxed md:text-base" style={{ color: "rgba(247,246,243,0.82)" }}>
                    When you choose CRC Public Relations, you will deal with various members of our team, but Lyall will always be available for you. This level of expertise is why our clients choose us.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t pt-6" style={{ borderColor: "rgba(247,246,243,0.15)" }}>
                  <RedRule width="2rem" />
                  <p className="text-sm italic" style={{ color: "rgba(247,246,243,0.55)" }}>
                    &quot;You have 15 minutes to respond before you start to lose control of the message.&quot;
                  </p>
                </div>

                <Link
                  href="/about"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
                >
                  Read Lyall&apos;s full profile
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: RED }} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ---------- FINAL CTA ---------- */}
        <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32" style={{ backgroundColor: INK, color: PAPER }}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: RED }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
            <Eyebrow tone="light">Ready to work with us</Eyebrow>
            <h2
              className="mt-6 max-w-4xl leading-[1.02]"
              style={{ fontFamily: displayFont.style.fontFamily, fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Trust is your most valuable asset. Let us help you build it.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed" style={{ color: "rgba(247,246,243,0.78)" }}>
              Whether you need experienced advice on a complex issue, help building your public profile, a communications strategy, or trusted counsel during a crisis, we are your adviser and advocate. We believe in you, and we have your back.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
                style={{ backgroundColor: PAPER }}
              >
                Book a consultation
              </Link>
              <a
                href={siteConfig.phone.href}
                className="flex items-center gap-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E02B20]"
              >
                <Phone className="h-4 w-4" style={{ color: RED }} />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer style={{ backgroundColor: INK, color: PAPER }} className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr,1fr]">
            <div>
              <p
                className="text-lg uppercase tracking-[0.08em]"
                style={{ fontFamily: displayFont.style.fontFamily }}
              >
                CRC <span style={{ color: RED }}>PR</span>
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(247,246,243,0.6)" }}>
                {siteConfig.address.street}, {siteConfig.address.city} {siteConfig.address.state}{" "}
                {siteConfig.address.postcode}, {siteConfig.address.country}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: "rgba(247,246,243,0.45)" }}>
                Contact
              </p>
              <a href={siteConfig.phone.href} className="mt-4 block text-sm font-semibold">
                {siteConfig.phone.display}
              </a>
              <p className="mt-1 text-xs" style={{ color: "rgba(247,246,243,0.45)" }}>
                24/7 confidential crisis line
              </p>
              <a href={`mailto:${siteConfig.email.general}`} className="mt-3 block text-sm" style={{ color: "rgba(247,246,243,0.75)" }}>
                {siteConfig.email.general}
              </a>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: "rgba(247,246,243,0.45)" }}>
                Navigate
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm" style={{ color: "rgba(247,246,243,0.75)" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs md:flex-row md:items-center md:justify-between" style={{ color: "rgba(247,246,243,0.4)" }}>
            <p>&copy; {siteConfig.copyrightYear} CRC Public Relations. All rights reserved.</p>
            <a
              href="https://www.3pdigital.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Proudly supported by{" "}
              <span className="font-semibold" style={{ color: "rgba(247,246,243,0.6)" }}>
                3P Digital
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
