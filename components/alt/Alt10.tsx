"use client";

import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sora, Hanken_Grotesk } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  X,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--alt10-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--alt10-body",
});

const FOG = "#EEF0F2";
const INK = "#101114";
const PERI = "#B9C6F2";
const LAVENDER = "#D7DCF6";
const PERI_DEEP = "#4C5FBF";
const MUTED = "#5B5F6A";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

type Practice = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  heading: string;
  blurb?: string;
  href: string;
};

const practices: Practice[] = [
  {
    icon: Building2,
    heading: "Corporate Communications",
    href: "/services/corporate-communications",
  },
  {
    icon: ShieldCheck,
    heading: "Reputation Management",
    href: "/services/reputation-management",
  },
  {
    icon: AlertTriangle,
    heading: "Crisis Communications",
    blurb:
      "We help you prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
    href: "/services/crisis-communications",
  },
];

const caseStudyIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Scale,
  Building2,
  GraduationCap,
  Landmark,
};

export function Alt10() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen overflow-x-hidden`}
      style={{ backgroundColor: FOG, color: INK, fontFamily: "var(--alt10-body)" }}
    >
      {/* ---------- Cropped word band ---------- */}
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: INK, height: "clamp(6.5rem, 24vh, 11rem)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="whitespace-nowrap font-bold uppercase text-white"
            style={{
              fontFamily: "var(--alt10-display)",
              fontSize: "clamp(6rem, 26vw, 19rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.02em",
            }}
          >
            Reputation
          </span>
        </div>
        <span className="sr-only">Reputation</span>
      </div>

      {/* ---------- Floating frame ---------- */}
      <div
        className="relative z-10 mx-auto -mt-10 max-w-[1320px] rounded-[1.75rem] border shadow-2xl sm:-mt-16 sm:rounded-[2.5rem] md:-mt-24 md:rounded-[3rem]"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E3E7EE" }}
      >
        {/* mini nav */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5">
          <Link
            href="/"
            className="whitespace-nowrap text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--alt10-display)" }}
          >
            CRC Public Relations
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ color: MUTED }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:inline-flex"
              style={{ backgroundColor: FOG, color: INK }}
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {siteConfig.phone.display}
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t px-5 py-4 md:hidden" style={{ borderColor: "#E3E7EE" }}>
            <nav className="flex flex-col gap-1 text-sm font-medium">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2.5 transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {l.label}
                </Link>
              ))}
              <a href={siteConfig.phone.href} className="rounded-xl px-3 py-2.5" style={{ color: MUTED }}>
                {siteConfig.phone.display}
              </a>
            </nav>
          </div>
        )}

        {/* ---------- Hero ---------- */}
        <section className="relative px-5 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-10">
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: MUTED }}
          >
            Boutique corporate PR &middot; Australia &middot; New Zealand &middot; Pacific
          </p>

          <div className="mt-6 hidden max-w-xs text-right text-xs leading-relaxed sm:ml-auto sm:block" style={{ color: MUTED }}>
            Whatever your communications objectives, you need{" "}
            <span className="font-semibold" style={{ color: INK }}>
              experienced counsel
            </span>{" "}
            you can{" "}
            <span className="font-semibold" style={{ color: INK }}>
              trust
            </span>
            .
          </div>

          <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
            <motion.div {...fadeUp()}>
              <h1
                className="leading-[0.98] tracking-tight"
                style={{
                  fontFamily: "var(--alt10-display)",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5.6vw, 4.25rem)",
                }}
              >
                <span className="block">Strategic,</span>
                <span className="block">proven</span>
                <span className="block">communications</span>
                <span className="block">advice.</span>
              </h1>

              <p className="mt-6 max-w-sm text-sm sm:hidden" style={{ color: MUTED }}>
                Whatever your communications objectives, you need experienced counsel you can
                trust.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: INK }}
              >
                Book a consultation
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="relative">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/6]"
                style={{ backgroundColor: FOG }}
              >
                <Image
                  src="/images/redesign/hero-meeting.png"
                  alt="CRC Public Relations advisers in a strategy meeting"
                  fill
                  sizes="(min-width: 768px) 560px, 90vw"
                  className="object-cover"
                  priority
                />
                {/* diagonal corner notch */}
                <div
                  className="absolute right-0 top-0 h-14 w-14 sm:h-20 sm:w-20"
                  style={{
                    backgroundColor: "#FFFFFF",
                    clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                  }}
                  aria-hidden="true"
                />

                {/* glass caption card */}
                <div
                  className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 p-4 text-white backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5"
                  style={{ backgroundColor: "rgba(16,17,20,0.55)" }}
                >
                  <p className="text-xs leading-relaxed sm:text-sm">
                    &ldquo;We are your trusted adviser and advocate, and we believe in
                    you.&rdquo;
                  </p>
                  <div className="mt-3 flex gap-1.5" aria-hidden="true">
                    <span className="h-1.5 w-4 rounded-full bg-white" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-2 right-5 hidden flex-col items-center gap-1.5 sm:right-8 sm:flex">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border"
              style={{ borderColor: "#E3E7EE" }}
              aria-hidden="true"
            >
              <motion.span
                {...(reduceMotion
                  ? {}
                  : { animate: { y: [0, 4, 0] }, transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" as const } })}
                className="flex"
              >
                <ArrowDown className="h-4 w-4" />
              </motion.span>
            </span>
          </div>
        </section>

        {/* ---------- About / why boutique panel ---------- */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <motion.div
            {...fadeUp()}
            className="rounded-[1.75rem] p-7 sm:rounded-[2.25rem] sm:p-12"
            style={{ backgroundColor: PERI }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "#1E2A5E" }}
            >
              Why a boutique firm
            </p>
            <blockquote
              className="mt-5 max-w-2xl leading-snug"
              style={{
                fontFamily: "var(--alt10-display)",
                fontWeight: 600,
                fontSize: "clamp(1.25rem, 2.6vw, 1.9rem)",
                color: "#151B33",
              }}
            >
              &ldquo;As a boutique PR firm, you deal directly with experienced advisers who take
              a genuine, long-term interest in your organisation. It is a partnership, and it
              makes a huge difference to outcomes.&rdquo;
            </blockquote>
            <p className="mt-5 text-sm font-semibold" style={{ color: "#1E2A5E" }}>
              Lyall Mercer, co-founder
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ color: INK }}
            >
              Explore <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </section>

        {/* ---------- Practices ---------- */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: MUTED }}>
              Our practice areas
            </p>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl"
              style={{ fontFamily: "var(--alt10-display)" }}
            >
              Corporate. Reputation. Crisis.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {practices.map((p, i) => (
              <motion.div
                key={p.heading}
                {...fadeUp(i * 0.08)}
                className="flex flex-col rounded-[1.75rem] p-7 shadow-sm"
                style={{ backgroundColor: FOG }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
                  aria-hidden="true"
                >
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.heading}</h3>
                {p.blurb && (
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>
                    {p.blurb}
                  </p>
                )}
                <Link
                  href={p.href}
                  className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Explore <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ---------- Proof (one lavender panel) ---------- */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <motion.div
            {...fadeUp()}
            className="rounded-[1.75rem] p-7 sm:rounded-[2.25rem] sm:p-12"
            style={{ backgroundColor: LAVENDER }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#2C3667" }}>
              {siteConfig.mediaReachSnapshot.intro.eyebrow}
            </p>
            <h2
              className="mt-4 max-w-2xl leading-tight"
              style={{
                fontFamily: "var(--alt10-display)",
                fontWeight: 600,
                fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)",
                color: "#151B33",
              }}
            >
              {siteConfig.mediaReachSnapshot.intro.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed sm:text-base" style={{ color: "#2C3667" }}>
              {siteConfig.mediaReachSnapshot.intro.body[0]}
            </p>
            <p className="mt-3 text-xs" style={{ color: "#2C3667", opacity: 0.75 }}>
              {siteConfig.mediaReachSnapshot.caveat}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                "15+ years advising leaders",
                "100% client retention",
                "500+ professionals trained",
                "221 placements in one month",
              ].map((s) => (
                <div key={s} className="rounded-2xl bg-white/70 p-4 text-center">
                  <p
                    className="text-sm font-bold leading-tight"
                    style={{ fontFamily: "var(--alt10-display)", color: "#151B33" }}
                  >
                    {s}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-6" style={{ borderColor: "rgba(21,27,51,0.15)" }}>
              <p className="text-xs" style={{ color: "#2C3667" }}>
                Expert commentary from our advisers, featured in
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
                {siteConfig.lyall.mediaLinks.map((m) => (
                  <a
                    key={m.name}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 focus-visible:outline-2 focus-visible:outline-offset-4"
                    aria-label={m.name}
                  >
                    <Image
                      src={m.logoSrc}
                      alt={m.name}
                      width={90}
                      height={30}
                      className="h-5 w-auto object-contain sm:h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ---------- Case studies rail ---------- */}
        <section className="pb-16 sm:pb-24">
          <div className="px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: MUTED }}>
              Client outcomes
            </p>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl"
              style={{ fontFamily: "var(--alt10-display)" }}
            >
              Results that speak for themselves.
            </h2>
          </div>

          <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8 [&::-webkit-scrollbar]:hidden">
            {siteConfig.caseStudies.map((cs) => {
              const Icon = caseStudyIcons[cs.icon] ?? Scale;
              return (
                <div
                  key={cs.id}
                  className="w-[280px] shrink-0 snap-start rounded-[1.75rem] border p-6 sm:w-[320px] sm:p-7"
                  style={{ borderColor: "#E3E7EE" }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" aria-hidden="true" style={{ color: "#2C3667" }} />
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: LAVENDER, color: "#151B33" }}
                    >
                      {cs.sector}
                    </span>
                  </div>
                  <p
                    className="mt-5 text-xl font-bold leading-tight"
                    style={{ fontFamily: "var(--alt10-display)" }}
                  >
                    {cs.outcome}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                    {cs.challenge}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------- People ---------- */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              {...fadeUp()}
              className="group rounded-[1.75rem] p-6 transition-shadow hover:shadow-lg sm:p-7"
              style={{ backgroundColor: FOG }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/lyall-mercer-portrait.png"
                  alt="Lyall Mercer, co-founder of CRC Public Relations"
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
                Co-founder & principal adviser
              </p>
              <h3 className="mt-1 text-xl font-bold" style={{ fontFamily: "var(--alt10-display)" }}>
                Lyall Mercer
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                Lyall began his career as a journalist, writing for some of Australia&apos;s
                leading newspapers and magazines. That foundation, understanding exactly how
                media thinks, moves and decides what becomes a story, led him into a 25 year
                public relations career spanning every continent.
              </p>
              <a
                href={siteConfig.lyallMercerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Read Lyall&apos;s full profile <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.1)}
              className="group rounded-[1.75rem] p-6 transition-shadow hover:shadow-lg sm:p-7"
              style={{ backgroundColor: FOG }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/about/barbara-gorogh-portrait.png"
                  alt="Barbara Gorogh, CRC Public Relations"
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 text-xl font-bold" style={{ fontFamily: "var(--alt10-display)" }}>
                Barbara Gorogh
              </h3>
            </motion.div>
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="px-5 pb-10 sm:px-8 sm:pb-14">
          <motion.div
            {...fadeUp()}
            className="rounded-[1.75rem] p-8 text-center text-white sm:rounded-[2.25rem] sm:p-14"
            style={{ backgroundColor: INK }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] opacity-70">
              Ready to work with us
            </p>
            <h2
              className="mx-auto mt-4 max-w-2xl leading-tight"
              style={{
                fontFamily: "var(--alt10-display)",
                fontWeight: 600,
                fontSize: "clamp(1.6rem, 3.6vw, 2.75rem)",
              }}
            >
              Trust is your most valuable asset. Let us help you build it.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-75 sm:text-base">
              Whether you need experienced advice on a complex issue, help building your public
              profile, a communications strategy, or trusted counsel during a crisis, we are
              your adviser and advocate. We believe in you, and we have your back.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: INK }}
              >
                Book a consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-[10px] font-normal uppercase tracking-wide opacity-60">
                    24/7 confidential crisis line
                  </span>
                  {siteConfig.phone.display}
                </span>
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ---------- Footer (below the frame, on fog) ---------- */}
      <footer className="px-4 pb-10 pt-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 border-t pt-10 sm:grid-cols-3" style={{ borderColor: "#D7DCE4" }}>
            <div>
              <p className="text-sm font-bold">CRC Public Relations</p>
              <p className="mt-3 flex items-start gap-2 text-sm" style={{ color: MUTED }}>
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.address.street}, {siteConfig.address.city}{" "}
                {siteConfig.address.state} {siteConfig.address.postcode}
              </p>
              <a
                href={siteConfig.phone.href}
                className="mt-2 flex items-center gap-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: MUTED }}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="mt-2 flex items-center gap-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: MUTED }}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.email.general}
              </a>
            </div>

            <nav className="flex flex-col gap-2 text-sm">
              <Link
                href="/"
                className="w-fit rounded transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: MUTED }}
              >
                Home
              </Link>
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="w-fit rounded transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ color: MUTED }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="sm:text-right">
              <p className="text-xs" style={{ color: MUTED }}>
                &copy; {siteConfig.copyrightYear} CRC Public Relations. All rights reserved.
              </p>
              <a
                href="https://www.3pdigital.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: MUTED }}
                onMouseEnter={(e) => (e.currentTarget.style.color = PERI_DEEP)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                Proudly supported by 3P Digital
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
