"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  Landmark,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Siren,
  X,
  type LucideIcon,
} from "lucide-react";
import { Sora, Hanken_Grotesk } from "next/font/google";
import { siteConfig } from "@/config/site";

/* ---------------------------------------------------------------------- */
/* Fonts — module scope per next/font/google requirements                 */
/* ---------------------------------------------------------------------- */

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--alt3-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--alt3-body",
  display: "swap",
});

/* ---------------------------------------------------------------------- */
/* Palette                                                                 */
/* ---------------------------------------------------------------------- */

const INK = "#141210";
const CARD = "#1D1A17";
const ORANGE = "#FF6B2C";
const PAPER = "#F5F1EC";

/* ---------------------------------------------------------------------- */
/* Data                                                                    */
/* ---------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

type Practice = {
  title: string;
  href: string;
  icon: LucideIcon;
  blurb?: string;
};

const PRACTICES: Practice[] = [
  {
    title: "Corporate Communications",
    href: "/services/corporate-communications",
    icon: Building2,
  },
  {
    title: "Reputation Management",
    href: "/services/reputation-management",
    icon: ShieldCheck,
  },
  {
    title: "Crisis Communications",
    href: "/services/crisis-communications",
    icon: Siren,
    blurb:
      "We help you prevent, prepare for and strategically manage crises. 24/7. Confidential. Decisive.",
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

const TESTIMONIALS = [
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
  {
    quote:
      "100% of our consulting clients would recommend CRC Public Relations to a peer.",
    attribution: "CRC Public Relations Client Survey",
  },
];

const CASE_STUDY_ICONS: Record<string, LucideIcon> = {
  Scale,
  Building2,
  GraduationCap,
  Landmark,
};

const CASE_STUDY_IMAGES: Record<string, string> = {
  "legal-firm-class-action": "/images/clients/corporate/hero.webp",
  "legislation-amended": "/images/clients/industry-associations/hero-conference.png",
  "zero-enrolment-loss": "/images/clients/schools-faith/hero.webp",
  "funding-secured": "/images/clients/government/hero.webp",
};

/* ---------------------------------------------------------------------- */
/* Motion helper                                                           */
/* ---------------------------------------------------------------------- */

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------------- */
/* Header                                                                   */
/* ---------------------------------------------------------------------- */

function EmberHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md"
      style={{ backgroundColor: "rgba(20,18,16,0.82)" }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/alt3"
          className="alt3-display font-bold tracking-tight text-[#F5F1EC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B2C]"
          style={{ fontSize: "1.15rem" }}
        >
          CRC{" "}
          <span className="font-[500] text-[#9A948C]">Public Relations</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#F5F1EC]/75 transition-colors hover:text-[#FF6B2C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B2C]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={siteConfig.phone.href}
            className="flex items-center gap-2 text-sm font-semibold text-[#F5F1EC] transition-colors hover:text-[#FF6B2C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B2C]"
          >
            <Phone className="h-4 w-4" style={{ color: ORANGE }} />
            {siteConfig.phone.display}
          </a>
          <Link
            href="/contact"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#141210] transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B2C]"
            style={{ backgroundColor: ORANGE }}
          >
            Book a consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close" : "Menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-[#F5F1EC] md:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B2C]"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#F5F1EC]/85"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-2 text-base font-semibold text-[#F5F1EC]"
            >
              <Phone className="h-4 w-4" style={{ color: ORANGE }} />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full px-5 py-3 text-center text-sm font-semibold text-[#141210]"
              style={{ backgroundColor: ORANGE }}
            >
              Book a consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------------------------------------------- */
/* Footer                                                                   */
/* ---------------------------------------------------------------------- */

function EmberFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="alt3-display font-bold text-lg text-[#F5F1EC]">
              CRC <span className="font-[500] text-[#9A948C]">Public Relations</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#9A948C]">
              Boutique corporate PR · Australia · New Zealand · Pacific
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A948C]">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#F5F1EC]/80">
              <li>
                <a href={siteConfig.phone.href} className="hover:text-[#FF6B2C]">
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email.general}`}
                  className="hover:text-[#FF6B2C]"
                >
                  {siteConfig.email.general}
                </a>
              </li>
              <li className="text-[#9A948C]">
                {siteConfig.address.street}, {siteConfig.address.city}{" "}
                {siteConfig.address.state} {siteConfig.address.postcode}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A948C]">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#F5F1EC]/80">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#FF6B2C]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A948C]">
              24/7 confidential crisis line
            </p>
            <a
              href={siteConfig.phone.href}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#F5F1EC] hover:text-[#FF6B2C]"
            >
              <Phone className="h-4 w-4" style={{ color: ORANGE }} />
              {siteConfig.phone.display}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#9A948C] md:flex-row md:items-center md:justify-between">
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
              className="text-[#9A948C] underline decoration-white/20 underline-offset-4 hover:text-[#FF6B2C]"
            >
              3P Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------------- */
/* Main component                                                          */
/* ---------------------------------------------------------------------- */

export function Alt3() {
  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen`}
      style={{
        backgroundColor: INK,
        color: PAPER,
        fontFamily: "var(--alt3-body)",
      }}
    >
      <style>{`.alt3-display { font-family: var(--alt3-display); }`}</style>

      <EmberHeader />

      <main className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* HERO CARD */}
        <section className="pt-8 md:pt-12">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[28px] border border-white/5 p-6 md:p-14"
              style={{ backgroundColor: CARD }}
            >
              <div className="grid gap-10 md:grid-cols-2 md:gap-14">
                <div className="flex flex-col justify-center">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.25em]"
                    style={{ color: ORANGE }}
                  >
                    Boutique corporate PR · Australia · New Zealand · Pacific
                  </p>
                  <h1
                    className="alt3-display mt-5 text-[2.6rem] font-[800] leading-[1.02] tracking-tight md:text-6xl lg:text-[4.2rem]"
                    style={{ color: PAPER }}
                  >
                    Strategic, <span style={{ color: ORANGE }}>proven</span>{" "}
                    communications advice.
                  </h1>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-[#F5F1EC]/70 md:text-lg">
                    Whatever your communications objectives, you need
                    experienced counsel you can trust.
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="group flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold text-[#141210] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B2C]"
                      style={{ backgroundColor: ORANGE }}
                    >
                      Book a consultation
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#141210] text-[#FF6B2C] transition-transform group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                    <Link
                      href="/services"
                      className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[#F5F1EC] transition-colors hover:border-[#FF6B2C] hover:text-[#FF6B2C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B2C]"
                    >
                      View all services
                    </Link>
                  </div>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] md:aspect-auto">
                  <Image
                    src="/images/about/lyall-mercer-portrait.png"
                    alt="Lyall Mercer, co-founder of CRC Public Relations"
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover object-top grayscale contrast-125"
                    priority
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(255,107,44,0.88) 0%, rgba(255,107,44,0.35) 45%, rgba(20,18,16,0.15) 100%)",
                      mixBlendMode: "color",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(20,18,16,0.55) 0%, rgba(20,18,16,0) 40%)",
                    }}
                  />
                </div>
              </div>

              {/* trust strip */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7 md:mt-14">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A948C]">
                  Expert commentary from our advisers, featured in
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  {siteConfig.lyall.mediaLinks.map((outlet) => (
                    <div
                      key={outlet.name}
                      className="relative h-5 w-20 opacity-45 transition-opacity hover:opacity-90"
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
            </div>
          </Reveal>
        </section>

        {/* PRACTICES */}
        <section className="mt-20 md:mt-28">
          <Reveal>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: ORANGE }}
            >
              Our practice areas
            </p>
            <h2 className="alt3-display mt-4 text-3xl font-[700] leading-tight md:text-5xl">
              Corporate. Reputation. Crisis.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRACTICES.map((practice, i) => {
              const Icon = practice.icon;
              return (
                <Reveal key={practice.title} delay={i * 0.08}>
                  <div
                    className="flex h-full flex-col justify-between rounded-[20px] border border-white/5 p-8"
                    style={{ backgroundColor: CARD }}
                  >
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
                        <Icon className="h-5 w-5" style={{ color: ORANGE }} />
                      </span>
                      <h3 className="alt3-display mt-6 text-xl font-[700] text-[#F5F1EC]">
                        {practice.title}
                      </h3>
                      {practice.blurb && (
                        <p className="mt-3 text-sm leading-relaxed text-[#9A948C]">
                          {practice.blurb}
                        </p>
                      )}
                    </div>
                    <Link
                      href={practice.href}
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-[#F5F1EC] transition-colors hover:border-[#FF6B2C] hover:text-[#FF6B2C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B2C]"
                    >
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ABOUT SPLIT CARD */}
        <section className="mt-20 md:mt-28">
          <Reveal>
            <div
              className="rounded-[28px] border border-white/5 p-8 md:p-14"
              style={{ backgroundColor: CARD }}
            >
              <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.25em]"
                    style={{ color: ORANGE }}
                  >
                    Why a boutique firm
                  </p>
                  <blockquote className="alt3-display mt-6 text-2xl font-[600] leading-snug text-[#F5F1EC] md:text-3xl">
                    &ldquo;As a boutique PR firm, you deal directly with
                    experienced advisers who take a genuine, long-term
                    interest in your organisation. It is a partnership, and it
                    makes a huge difference to outcomes.&rdquo;
                  </blockquote>
                  <p className="mt-5 text-sm font-semibold text-[#9A948C]">
                    Lyall Mercer, co-founder
                  </p>
                </div>

                <div className="divide-y divide-white/10">
                  {PILLARS.map((pillar) => (
                    <div key={pillar.title} className="py-5 first:pt-0 last:pb-0">
                      <h3 className="alt3-display text-lg font-[700] text-[#F5F1EC]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#9A948C]">
                        {pillar.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CASE STUDIES GALLERY */}
        <section className="mt-20 md:mt-28">
          <Reveal>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: ORANGE }}
            >
              Client outcomes
            </p>
            <h2 className="alt3-display mt-4 text-3xl font-[700] leading-tight md:text-5xl">
              Results that speak for themselves.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {siteConfig.caseStudies.map((cs, i) => {
              const Icon = CASE_STUDY_ICONS[cs.icon] ?? Building2;
              const image = CASE_STUDY_IMAGES[cs.id];
              return (
                <Reveal key={cs.id} delay={i * 0.06}>
                  <Link
                    href="/case-studies"
                    className="group relative block aspect-[4/3] overflow-hidden rounded-[20px] border border-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B2C]"
                  >
                    {image && (
                      <Image
                        src={image}
                        alt={cs.sector}
                        fill
                        sizes="(min-width: 768px) 45vw, 90vw"
                        className="object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    )}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-60"
                      style={{
                        background:
                          "linear-gradient(0deg, rgba(20,18,16,0.92) 0%, rgba(20,18,16,0.55) 45%, rgba(255,107,44,0.25) 100%)",
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <span
                        className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#141210]"
                        style={{ backgroundColor: ORANGE }}
                      >
                        <Icon className="h-3 w-3" />
                        {cs.sector}
                      </span>
                      <h3 className="alt3-display mt-4 text-2xl font-[700] text-[#F5F1EC] md:text-3xl">
                        {cs.outcome}
                      </h3>
                      <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold text-[#F5F1EC]">
                        View
                        <ArrowUpRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* STATS BAND */}
        <section className="mt-20 md:mt-28">
          <Reveal>
            <div
              className="rounded-[28px] border border-white/5 p-8 md:p-14"
              style={{ backgroundColor: CARD }}
            >
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="alt3-display text-4xl font-[800] md:text-5xl"
                      style={{ color: ORANGE }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-[#9A948C]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-20 md:mt-28">
          <Reveal>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: ORANGE }}
            >
              Client endorsements
            </p>
            <h2 className="alt3-display mt-4 text-3xl font-[700] leading-tight md:text-5xl">
              Partnerships our clients stand behind.
            </h2>
          </Reveal>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.attribution} delay={i * 0.05}>
                <div className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
                  <p className="text-lg leading-relaxed text-[#F5F1EC] md:text-xl">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="whitespace-nowrap text-sm font-semibold text-[#9A948C]">
                    {t.attribution}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="my-20 md:my-28">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[28px] border border-white/5 p-10 text-center md:p-20"
              style={{ backgroundColor: CARD }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 100% at 50% 120%, rgba(255,107,44,0.35) 0%, rgba(255,107,44,0) 60%)",
                }}
              />
              <div className="relative">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{ color: ORANGE }}
                >
                  Ready to work with us
                </p>
                <h2 className="alt3-display mx-auto mt-6 max-w-3xl text-3xl font-[800] leading-tight text-[#F5F1EC] md:text-5xl">
                  Trust is your most valuable asset. Let us help you build it.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#F5F1EC]/70 md:text-lg">
                  Whether you need experienced advice on a complex issue, help
                  building your public profile, a communications strategy, or
                  trusted counsel during a crisis, we are your adviser and
                  advocate. We believe in you, and we have your back.
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="group flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold text-[#141210] transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF6B2C]"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Book a consultation
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#141210] text-[#FF6B2C] transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <a
                    href={siteConfig.phone.href}
                    className="flex items-center gap-2 text-sm font-semibold text-[#F5F1EC] hover:text-[#FF6B2C]"
                  >
                    <Phone className="h-4 w-4" style={{ color: ORANGE }} />
                    {siteConfig.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <EmberFooter />
    </div>
  );
}
