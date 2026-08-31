"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk, Hanken_Grotesk } from "next/font/google";
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
 * Alt 5 "Silhouette": cinematic black and crimson backlit-panel concept.
 * Fully self-contained: own fonts, header, sections, footer.
 */

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const bodyFont = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BLACK = "#0C0C0C";
const PANEL = "#141414";
const CRIMSON = "#C8102E";
const WHITE = "#FFFFFF";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const PRACTICE_PANELS = [
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

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.5)" }}>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: CRIMSON }} />
      {children}
    </p>
  );
}

function CrimsonRule({ width = "2.5rem" }: { width?: string }) {
  return <span className="block h-[2px]" style={{ width, backgroundColor: CRIMSON }} />;
}

function GlowPanel({
  children,
  className = "",
  restGlow = 0.5,
  hoverGlow = 0.85,
}: {
  children: React.ReactNode;
  className?: string;
  restGlow?: number;
  hoverGlow?: number;
}) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-t-[1.75rem] border border-white/10 transition-colors duration-300 hover:border-white/25 ${className}`}
      style={{ backgroundColor: PANEL }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at 50% 118%, rgba(200,16,46,${restGlow}) 0%, rgba(200,16,46,0) 62%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120% 90% at 50% 118%, rgba(200,16,46,${hoverGlow}) 0%, rgba(200,16,46,0) 68%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}

export function Alt5() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className={bodyFont.className} style={{ backgroundColor: BLACK, color: WHITE }}>
      {/* ---------- HEADER ---------- */}
      <header
        className="sticky top-0 z-50 border-b border-white/10"
        style={{ backgroundColor: "rgba(12,12,12,0.88)", backdropFilter: "blur(10px)" }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            className="text-lg tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
            style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700 }}
          >
            CRC <span style={{ color: CRIMSON }}>Public Relations</span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
            >
              <Phone className="h-4 w-4" style={{ color: CRIMSON }} />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0C0C0C] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
            >
              Book a consultation
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-white md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
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
                <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-base font-medium text-white/80 hover:text-white">
                  {l.label}
                </Link>
              ))}
              <a href={siteConfig.phone.href} className="flex items-center gap-2 text-base font-semibold text-white">
                <Phone className="h-4 w-4" style={{ color: CRIMSON }} />
                {siteConfig.phone.display}
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#0C0C0C]"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ---------- HERO + PRACTICE PANELS ---------- */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
            style={{ backgroundColor: CRIMSON }}
          />
          <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
              <h1
                className="max-w-3xl leading-[1.02]"
                style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700, fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}
              >
                Strategic, proven
                <br />
                communications
                <br />
                advice.
              </h1>

              <p
                className="shrink-0 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.3em] md:pt-4"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                [ Boutique corporate PR ]
              </p>
            </div>

            <p className="mt-8 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              Whatever your communications objectives, you need experienced counsel you can trust.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0C0C0C] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
              >
                Book a consultation
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-2 text-sm font-semibold text-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
              >
                Start the free assessment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: CRIMSON }} />
              </Link>
            </div>

            <div className="mt-16 md:mt-20">
              <Eyebrow>Our practice areas</Eyebrow>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {PRACTICE_PANELS.map((p) => (
                  <motion.div key={p.n} {...fadeUp}>
                    <GlowPanel className="h-[20rem] md:h-[24rem]">
                      <Link
                        href={p.href}
                        className="flex h-full flex-col justify-between p-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#C8102E]"
                      >
                        <span
                          className="text-xs font-semibold tracking-[0.2em]"
                          style={{ color: "rgba(255,255,255,0.4)" }}
                        >
                          {p.n}
                        </span>
                        <div>
                          <h3
                            className="leading-[1.05]"
                            style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700, fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)" }}
                          >
                            {p.title}
                          </h3>
                          {p.blurb && (
                            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                              {p.blurb}
                            </p>
                          )}
                          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                            Explore
                            <ArrowUpRight className="h-4 w-4" style={{ color: CRIMSON }} />
                          </span>
                        </div>
                      </Link>
                    </GlowPanel>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- THE PEOPLE ---------- */}
        <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Eyebrow>{siteConfig.lyall.title}</Eyebrow>
            <h2
              className="mt-4 max-w-2xl leading-[1.05]"
              style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700, fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              You deal directly with an experienced adviser, not an account manager.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <motion.div {...fadeUp}>
                <GlowPanel className="h-[26rem] md:h-[32rem]" restGlow={0.4} hoverGlow={0.75}>
                  <div className="relative h-full">
                    <Image
                      src="/images/about/lyall-mercer-portrait.png"
                      alt={siteConfig.lyall.fullName}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top opacity-90"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-7">
                      <p
                        className="text-xl"
                        style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700 }}
                      >
                        {siteConfig.lyall.fullName}
                      </p>
                      <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                        {siteConfig.lyall.origin}
                      </p>
                    </div>
                  </div>
                </GlowPanel>
              </motion.div>

              <motion.div {...fadeUp}>
                <GlowPanel className="h-[26rem] md:h-[32rem]" restGlow={0.4} hoverGlow={0.75}>
                  <div className="relative h-full">
                    <Image
                      src="/images/about/barbara-gorogh-portrait.png"
                      alt="Barbara Gorogh"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top opacity-90"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-7">
                      <p
                        className="text-xl"
                        style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700 }}
                      >
                        Barbara Gorogh
                      </p>
                    </div>
                  </div>
                </GlowPanel>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ---------- WHY BOUTIQUE ---------- */}
        <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Eyebrow>Why a boutique firm</Eyebrow>

            <motion.blockquote {...fadeUp} className="mt-10 max-w-4xl">
              <span aria-hidden="true" className="mb-2 block text-6xl leading-none" style={{ color: CRIMSON, fontFamily: displayFont.style.fontFamily }}>
                &quot;
              </span>
              <p
                className="leading-[1.2]"
                style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 500, fontSize: "clamp(1.4rem, 3.2vw, 2.5rem)" }}
              >
                As a boutique PR firm, you deal directly with experienced advisers who take a genuine, long-term interest in your organisation. It is a partnership, and it makes a huge difference to outcomes.
              </p>
              <footer className="mt-6 flex items-center gap-3 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
                <CrimsonRule width="2rem" />
                Lyall Mercer, co-founder
              </footer>
            </motion.blockquote>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {PILLARS.map((p) => (
                <motion.div key={p.title} {...fadeUp}>
                  <div className="h-full rounded-2xl border border-white/10 p-7" style={{ backgroundColor: PANEL }}>
                    <CrimsonRule width="2.5rem" />
                    <h3 className="mt-5 text-lg font-bold leading-snug">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- PROOF ---------- */}
        <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Eyebrow>Proof</Eyebrow>

            <div className="mt-10 grid divide-y divide-white/10 border-y border-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
              {STATS.map((s) => (
                <div key={s} className="py-6 md:px-6 md:py-8">
                  <p
                    className="leading-none"
                    style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700, fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)", color: CRIMSON }}
                  >
                    {s.match(/^[0-9%+]+/)?.[0]}
                  </p>
                  <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                    {s.replace(/^[0-9%+]+\s*/, "")}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-14 text-[11px] font-semibold uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.45)" }}>
              Expert commentary from our advisers, featured in
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6">
              {siteConfig.lyall.mediaLinks.map((m) => (
                <a
                  key={m.name}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 items-center opacity-70 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8102E]"
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
            </div>
          </div>
        </section>

        {/* ---------- CASE STUDIES ---------- */}
        <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Eyebrow>Client outcomes</Eyebrow>
            <h2
              className="mt-4 max-w-2xl leading-[1.05]"
              style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700, fontSize: "clamp(1.9rem, 4vw, 3rem)" }}
            >
              Results that speak for themselves.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {siteConfig.caseStudies.map((cs) => {
                const Icon = CASE_STUDY_ICONS[cs.icon];
                return (
                  <motion.div key={cs.id} {...fadeUp}>
                    <div className="h-full rounded-2xl border border-white/10 p-8" style={{ backgroundColor: PANEL }}>
                      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: "rgba(255,255,255,0.5)" }}>
                        <Icon className="h-3.5 w-3.5" style={{ color: CRIMSON }} />
                        {cs.sector}
                      </p>
                      <p
                        className="mt-4 leading-[1.1]"
                        style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700, fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)", color: CRIMSON }}
                      >
                        {cs.outcome}
                      </p>
                      <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {cs.outcomeSub}
                      </p>
                      <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5">
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {cs.challenge}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                          {cs.approach}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- FINAL CTA ---------- */}
        <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div
              className="relative overflow-hidden rounded-[2rem] border border-white/10 px-8 py-16 md:px-16 md:py-24"
              style={{
                background: `radial-gradient(120% 140% at 50% 120%, rgba(200,16,46,0.55) 0%, rgba(200,16,46,0) 60%), #141414`,
              }}
            >
              <div className="relative z-10 mx-auto max-w-3xl text-center">
                <Eyebrow>Ready to work with us</Eyebrow>
                <h2
                  className="mx-auto mt-6 max-w-2xl leading-[1.05]"
                  style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                >
                  Trust is your most valuable asset. Let us help you build it.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Whether you need experienced advice on a complex issue, help building your public profile, a communications strategy, or trusted counsel during a crisis, we are your adviser and advocate. We believe in you, and we have your back.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                  <Link
                    href="/contact"
                    className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0C0C0C] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Book a consultation
                  </Link>
                  <a
                    href={siteConfig.phone.href}
                    className="flex items-center gap-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <Phone className="h-4 w-4" />
                    {siteConfig.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr,1fr]">
            <div>
              <p className="text-lg" style={{ fontFamily: displayFont.style.fontFamily, fontWeight: 700 }}>
                CRC <span style={{ color: CRIMSON }}>Public Relations</span>
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {siteConfig.address.street}, {siteConfig.address.city} {siteConfig.address.state}{" "}
                {siteConfig.address.postcode}, {siteConfig.address.country}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                Contact
              </p>
              <a href={siteConfig.phone.href} className="mt-4 block text-sm font-semibold">
                {siteConfig.phone.display}
              </a>
              <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                24/7 confidential crisis line
              </p>
              <a href={`mailto:${siteConfig.email.general}`} className="mt-3 block text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                {siteConfig.email.general}
              </a>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                Navigate
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs md:flex-row md:items-center md:justify-between" style={{ color: "rgba(255,255,255,0.4)" }}>
            <p>&copy; {siteConfig.copyrightYear} CRC Public Relations. All rights reserved.</p>
            <a href="https://www.3pdigital.com.au" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              Proudly supported by{" "}
              <span className="font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
                3P Digital
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
