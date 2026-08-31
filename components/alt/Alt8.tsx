"use client";

import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Clock,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Newspaper,
  Phone,
  Quote,
  Scale,
  X,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--alt8-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--alt8-body",
});

const INK = "#131313";
const OFFWHITE = "#F4F3F0";
const GREY = "#6F6C68";
const PERSIMMON = "#E8552F";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const practiceChips = [
  { label: "Corporate Communications", accent: false },
  { label: "Reputation Management", accent: false },
  { label: "Crisis Communications", accent: true },
];

type Practice = {
  eyebrow: string;
  heading: string;
  blurb?: string;
  href: string;
  image: string;
};

const practices: Practice[] = [
  {
    eyebrow: "Practice one",
    heading: "Corporate Communications",
    href: "/services/corporate-communications",
    image: "/images/redesign-v2/bento-corporate.png",
  },
  {
    eyebrow: "Practice two",
    heading: "Reputation Management",
    href: "/services/reputation-management",
    image: "/images/redesign-v2/bento-reputation.png",
  },
  {
    eyebrow: "Practice three",
    heading: "Crisis Communications",
    blurb:
      "We help you prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
    href: "/services/crisis-communications",
    image: "/images/redesign-v2/bento-crisis.png",
  },
];

const specialists = [
  {
    title: "Media relations & strategy",
    body: "Proactive presence and trusted relationships",
    href: "/services/media-strategy",
  },
  {
    title: "Issues management",
    body: "Get ahead before issues become crises",
    href: "/services/issues-management",
  },
  {
    title: "Digital media",
    body: "Online reputation and social strategy",
    href: "/services/digital-media",
  },
];

const pillars: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; body: string }[] = [
  {
    icon: Award,
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
];

const caseStudyIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Scale,
  Building2,
  GraduationCap,
  Landmark,
};

const testimonials = [
  {
    quote:
      "CRC Public Relations has helped us generate major, ongoing, national exposure and ensure that our message is widely heard.",
    attribution: "CEO, national industry association with 14,000 members",
  },
  {
    quote:
      "The invaluable customer relations support from CRC Public Relations helps ensure a high level of trust in, and growth for, our chain of more than 50 restaurants.",
    attribution: "Director, hospitality sector",
  },
  {
    quote: "100% of our consulting clients would recommend CRC Public Relations to a peer.",
    attribution: "CRC Public Relations Client Survey",
  },
];

const sectors = [
  "Companies & family businesses",
  "Local & state government",
  "Industry & professional associations",
  "Independent & faith-based schools",
  "Legal & professional services",
  "Child care, aged care & health",
  "Pacific islands",
  "Hospitality",
  "High profile individuals",
];

export function Alt8() {
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen`}
      style={{ backgroundColor: OFFWHITE, color: INK, fontFamily: "var(--alt8-body)" }}
    >
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
        <div
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 shadow-sm sm:px-6"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E4E2DC" }}
        >
          <Link
            href="/"
            className="whitespace-nowrap text-base font-bold tracking-tight sm:text-lg"
            style={{ fontFamily: "var(--alt8-display)" }}
          >
            CRC&nbsp;PR
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {navLinks.slice(1, -1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ color: GREY }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="hidden rounded transition-colors sm:inline focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ color: GREY }}
            >
              {siteConfig.phone.display}
            </a>
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 sm:inline-flex"
              style={{ backgroundColor: INK }}
            >
              Contact
            </Link>
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
          <div
            className="mx-auto mt-2 max-w-6xl rounded-3xl border p-4 shadow-sm md:hidden"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#E4E2DC" }}
          >
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
              <a href={siteConfig.phone.href} className="rounded-xl px-3 py-2.5" style={{ color: GREY }}>
                {siteConfig.phone.display}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ---------- Hero ---------- */}
      <section className="relative px-4 pb-10 pt-10 sm:px-6 sm:pt-14 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <p
            className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] sm:text-xs"
            style={{ color: GREY }}
          >
            Boutique corporate PR &middot; Australia &middot; New Zealand &middot; Pacific
          </p>

          <div className="relative mt-6 select-none sm:mt-8">
            <h1
              className="text-center font-extrabold uppercase leading-[0.82] tracking-tight"
              style={{
                fontFamily: "var(--alt8-display)",
                fontSize: "clamp(4.5rem, 20vw, 15rem)",
              }}
              aria-hidden="true"
            >
              TRUST
            </h1>

            {/* Desktop: thin photo band crossing the middle of the word, letters
                stay visible above and below (the reference's signature move). */}
            <div
              className="absolute left-1/2 top-1/2 z-10 hidden w-[86%] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-xl md:block"
              style={{ height: "clamp(4rem, 8vw, 6.5rem)" }}
            >
              <Image
                src="/images/homepage/MyPrPartnerHeadshots2025-14.jpg"
                alt="The CRC Public Relations advisory team"
                fill
                sizes="700px"
                className="object-cover object-[50%_30%]"
                style={{ filter: "grayscale(0.25) contrast(1.05)" }}
                priority
              />
            </div>
            {/* Mobile: photo sits under the word instead of over it. */}
            <div className="relative mx-auto mt-4 h-44 w-full max-w-md overflow-hidden rounded-2xl shadow-xl md:hidden">
              <Image
                src="/images/homepage/MyPrPartnerHeadshots2025-14.jpg"
                alt="The CRC Public Relations advisory team"
                fill
                sizes="90vw"
                className="object-cover object-[50%_30%]"
                style={{ filter: "grayscale(0.25) contrast(1.05)" }}
                priority
              />
            </div>

            <span className="sr-only">TRUST</span>

            {/* floating chips: desktop */}
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <motion.div
                {...(reduceMotion
                  ? {}
                  : { animate: { y: [0, -8, 0] }, transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const } })}
                className="pointer-events-auto absolute left-0 top-4"
              >
                <Chip label={practiceChips[0].label} accent={false} />
              </motion.div>
              <motion.div
                {...(reduceMotion
                  ? {}
                  : { animate: { y: [0, 10, 0] }, transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const } })}
                className="pointer-events-auto absolute right-0 top-8"
              >
                <Chip label={practiceChips[1].label} accent={false} />
              </motion.div>
              <motion.div
                {...(reduceMotion
                  ? {}
                  : { animate: { y: [0, -6, 0] }, transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const } })}
                className="pointer-events-auto absolute bottom-2 right-6"
              >
                <Chip label={practiceChips[2].label} accent />
              </motion.div>
            </div>
          </div>

          {/* chips: mobile */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:hidden">
            {practiceChips.map((c) => (
              <Chip key={c.label} label={c.label} accent={c.accent} />
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center sm:mt-14">
            <p
              className="text-xl font-semibold leading-tight sm:text-2xl md:text-3xl"
              style={{ fontFamily: "var(--alt8-display)" }}
            >
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: PERSIMMON,
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                }}
              >
                Trust
              </span>{" "}
              is your most valuable asset. Let us help you build it.
            </p>
            <p className="mt-4 text-sm sm:text-base" style={{ color: GREY }}>
              Whatever your communications objectives, you need experienced counsel you can
              trust.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: INK }}
              >
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                View all services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Second display line ---------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <motion.h2
          {...fadeUp()}
          className="mx-auto max-w-4xl text-center leading-[1.05] tracking-tight"
          style={{
            fontFamily: "var(--alt8-display)",
            fontWeight: 800,
            fontSize: "clamp(1.9rem, 5.4vw, 3.75rem)",
          }}
        >
          We are your trusted adviser and advocate, and we believe in you.
        </motion.h2>
      </section>

      {/* ---------- Stats row (the one proof moment) ---------- */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {[
            "15+ years advising leaders",
            "100% client retention",
            "500+ professionals trained",
            "221 placements in one month",
          ].map((s, i) => (
            <motion.div
              key={s}
              {...fadeUp(i * 0.08)}
              className="rounded-2xl border bg-white p-5 text-center sm:p-6"
              style={{ borderColor: "#E4E2DC" }}
            >
              <p
                className="leading-tight"
                style={{ fontFamily: "var(--alt8-display)", fontWeight: 800, fontSize: "1.05rem" }}
              >
                {s}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- Practice areas ---------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: GREY }}>
              Our practice areas
            </p>
            <h2
              className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl"
              style={{ fontFamily: "var(--alt8-display)" }}
            >
              Corporate. Reputation. Crisis.
            </h2>
          </div>

          <div className="mt-14 flex flex-col gap-16 sm:gap-20">
            {practices.map((p, i) => (
              <motion.div
                key={p.heading}
                {...fadeUp()}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={p.image}
                    alt={p.heading}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: GREY }}>
                    {p.eyebrow}
                  </p>
                  <h3
                    className="mt-3 text-2xl font-extrabold uppercase tracking-tight sm:text-4xl"
                    style={{ fontFamily: "var(--alt8-display)" }}
                  >
                    {p.heading}
                  </h3>
                  {p.blurb && (
                    <p className="mt-4 max-w-md text-base" style={{ color: GREY }}>
                      {p.blurb}
                    </p>
                  )}
                  <Link
                    href={p.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Explore <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* specialist trio */}
          <div className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-3">
            {specialists.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(i * 0.08)}
                className="rounded-2xl border bg-white p-6"
                style={{ borderColor: "#E4E2DC" }}
              >
                <h4 className="text-base font-bold">{s.title}</h4>
                <p className="mt-2 text-sm" style={{ color: GREY }}>
                  {s.body}
                </p>
                <Link
                  href={s.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Explore <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why boutique ---------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: GREY }}>
              Why a boutique firm
            </p>
            <motion.blockquote
              {...fadeUp()}
              className="mx-auto mt-5 max-w-3xl text-xl font-medium leading-snug sm:text-2xl"
              style={{ fontFamily: "var(--alt8-display)" }}
            >
              <Quote className="mx-auto mb-3 h-6 w-6 opacity-40" aria-hidden="true" />
              &ldquo;As a boutique PR firm, you deal directly with experienced advisers who take
              a genuine, long-term interest in your organisation. It is a partnership, and it
              makes a huge difference to outcomes.&rdquo;
            </motion.blockquote>
            <p className="mt-4 text-sm font-semibold" style={{ color: GREY }}>
              Lyall Mercer, co-founder
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp(i * 0.08)}
                className="rounded-2xl border bg-white p-7 text-center"
                style={{ borderColor: "#E4E2DC" }}
              >
                <p.icon className="mx-auto h-6 w-6" aria-hidden="true" />
                <h4 className="mt-4 text-base font-bold">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: GREY }}>
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Case studies ---------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: GREY }}>
              Client outcomes
            </p>
            <h2
              className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl"
              style={{ fontFamily: "var(--alt8-display)" }}
            >
              Results that speak for themselves.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {siteConfig.caseStudies.map((cs, i) => {
              const Icon = caseStudyIcons[cs.icon] ?? Scale;
              return (
                <motion.div
                  key={cs.id}
                  {...fadeUp(i * 0.06)}
                  className="rounded-3xl border bg-white p-7 sm:p-8"
                  style={{ borderColor: "#E4E2DC" }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" aria-hidden="true" style={{ color: GREY }} />
                    <span
                      className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                      style={{ borderColor: "#E4E2DC", color: GREY }}
                    >
                      {cs.sector}
                    </span>
                  </div>
                  <p
                    className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl"
                    style={{ fontFamily: "var(--alt8-display)" }}
                  >
                    {cs.outcome}
                  </p>
                  <p className="mt-2 text-sm" style={{ color: GREY }}>
                    {cs.outcomeSub}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed">{cs.challenge}</p>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: GREY }}>
                    {cs.approach}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: GREY }}>
              Client endorsements
            </p>
            <h2
              className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl"
              style={{ fontFamily: "var(--alt8-display)" }}
            >
              Partnerships our clients stand behind.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.attribution}
                {...fadeUp(i * 0.08)}
                className="rounded-3xl p-7 text-white sm:p-8"
                style={{ backgroundColor: INK }}
              >
                <Quote className="h-5 w-5 opacity-60" aria-hidden="true" />
                <p className="mt-4 text-sm leading-relaxed sm:text-base">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide opacity-70">
                  {t.attribution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Sectors ---------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            className="text-2xl font-extrabold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--alt8-display)" }}
          >
            Trusted by leaders across every sector.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {sectors.map((s) => (
              <span
                key={s}
                className="rounded-full border px-4 py-2 text-xs font-medium sm:text-sm"
                style={{ borderColor: "#DAD7CF", color: GREY }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Media logos ---------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm" style={{ color: GREY }}>
            Expert commentary from our advisers, featured in
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {siteConfig.lyall.mediaLinks.map((m) => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0 focus-visible:outline-2 focus-visible:outline-offset-4"
                aria-label={m.name}
              >
                <Image src={m.logoSrc} alt={m.name} width={96} height={32} className="h-6 w-auto object-contain sm:h-7" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quiet invitation bar ---------- */}
      <section className="px-4 pb-6 sm:px-6">
        <div
          className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 rounded-3xl border bg-white px-6 py-8 text-center sm:flex-row sm:text-left"
          style={{ borderColor: "#E4E2DC" }}
        >
          <div>
            <p className="text-lg font-bold sm:text-xl" style={{ fontFamily: "var(--alt8-display)" }}>
              Ready to work with us?
            </p>
            <p className="mt-1 text-xs" style={{ color: GREY }}>
              24/7 confidential crisis line: {siteConfig.phone.display}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: INK }}
          >
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="mt-6 px-4 pb-10 pt-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 border-t pt-10 sm:grid-cols-3" style={{ borderColor: "#DAD7CF" }}>
            <div>
              <p className="text-sm font-bold">CRC Public Relations</p>
              <p className="mt-3 flex items-start gap-2 text-sm" style={{ color: GREY }}>
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.address.street}, {siteConfig.address.city}{" "}
                {siteConfig.address.state} {siteConfig.address.postcode}
              </p>
              <a
                href={siteConfig.phone.href}
                className="mt-2 flex items-center gap-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: GREY }}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
              <a
                href={`mailto:${siteConfig.email.general}`}
                className="mt-2 flex items-center gap-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: GREY }}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {siteConfig.email.general}
              </a>
            </div>

            <nav className="flex flex-col gap-2 text-sm">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="w-fit rounded transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ color: GREY }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="sm:text-right">
              <p className="text-xs" style={{ color: GREY }}>
                &copy; {siteConfig.copyrightYear} CRC Public Relations. All rights reserved.
              </p>
              <a
                href="https://www.3pdigital.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ color: GREY }}
                onMouseEnter={(e) => (e.currentTarget.style.color = PERSIMMON)}
                onMouseLeave={(e) => (e.currentTarget.style.color = GREY)}
              >
                Proudly supported by 3P Digital
              </a>
            </div>
          </div>

          {/* giant footer wordmark */}
          <div className="mt-10 overflow-hidden text-center sm:mt-14">
            <p
              className="whitespace-nowrap font-extrabold uppercase leading-none tracking-tight"
              style={{
                fontFamily: "var(--alt8-display)",
                fontSize: "clamp(2.75rem, 17vw, 13rem)",
              }}
            >
              CRC&nbsp;PR
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Chip({ label, accent }: { label: string; accent: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border bg-white px-3.5 py-1.5 text-[11px] font-semibold shadow-sm sm:text-xs"
      style={{ borderColor: accent ? PERSIMMON : "#DAD7CF" }}
    >
      {accent && <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: PERSIMMON }} />}
      {label}
    </span>
  );
}
