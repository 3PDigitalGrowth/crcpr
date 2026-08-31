"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Scale,
  Building2,
  GraduationCap,
  Landmark,
  Menu,
  X,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { Archivo, Public_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";

/* ------------------------------------------------------------------ */
/* Fonts — heavy wide grotesk for display, plain grotesk for body.     */
/* No Instrument Serif, no condensed faces, no Inter/Roboto.           */
/* ------------------------------------------------------------------ */
const display = Archivo({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--alt4-display",
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--alt4-body",
  display: "swap",
});

/* ------------------------------------------------------------------ */
/* Palette (strict monochrome)                                        */
/* ------------------------------------------------------------------ */
const INK = "#111111";
const WHITE = "#FFFFFF";
const GREY = "#8A8A8A";
const GREY_LINE = "rgba(255,255,255,0.18)";
const INK_LINE = "rgba(17,17,17,0.14)";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

const CASE_STUDY_ICONS: Record<string, LucideIcon> = {
  Scale,
  Building2,
  GraduationCap,
  Landmark,
};

const PILLARS = [
  {
    n: "01",
    title: "Experienced counsel, every time",
    body: "No account managers, no junior hand-offs. You work directly with advisers who have managed the situations you are facing.",
  },
  {
    n: "02",
    title: "We know how media thinks",
    body: "A foundation in journalism means we understand exactly how a story is made, moved, and decided before it ever breaks.",
  },
  {
    n: "03",
    title: "There when it matters",
    body: "Available 24/7 and strictly confidential. When an issue emerges, decisive counsel is one call away.",
  },
] as const;

const SERVICE_CARDS = [
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
  {
    label: "Media Training",
    href: "/media-training",
    img: "/images/media-training/hero.webp",
  },
] as const;

const STATS = [
  { value: "15+", label: "years advising leaders" },
  { value: "100%", label: "client retention" },
  { value: "500+", label: "professionals trained" },
  { value: "221", label: "placements in one month" },
] as const;

/* ------------------------------------------------------------------ */
/* Reveal — scroll entrance, respects prefers-reduced-motion           */
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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, on = "light" }: { children: ReactNode; on?: "light" | "dark" }) {
  return (
    <p
      className="text-[11px] font-bold uppercase tracking-[0.28em]"
      style={{ color: on === "dark" ? GREY : "#5A5A5A" }}
    >
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */

export function Alt4() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen`}
      style={{ background: WHITE, color: INK, fontFamily: "var(--alt4-body)" }}
    >
      <style>{`
        .alt4-display { font-family: var(--alt4-display), sans-serif; font-weight: 900; }
      `}</style>

      {/* ============================ HEADER ============================ */}
      <header
        className="sticky top-0 z-50"
        style={{ background: INK, borderBottom: `1px solid ${GREY_LINE}` }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/alt4" className="flex items-center gap-3">
            <Image
              src="/images/crc-logo.png"
              alt=""
              width={32}
              height={32}
              className="h-7 w-7 object-contain invert"
              aria-hidden="true"
            />
            <span
              className="alt4-display text-sm uppercase tracking-[0.2em] text-white sm:text-base"
            >
              CRC Public Relations
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-white/85 underline decoration-transparent decoration-2 underline-offset-8 transition-colors hover:text-white hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={siteConfig.phone.href}
              className="border border-white/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {siteConfig.phone.display}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/15 px-5 pb-6 pt-2 md:hidden" style={{ background: INK }}>
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-[0.2em] text-white/90"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={siteConfig.phone.href}
                className="mt-2 inline-block border border-white/40 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-white"
              >
                {siteConfig.phone.display}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ============================ HERO ============================ */}
      <section style={{ background: INK }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 md:py-24 lg:py-28">
            <Reveal>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: GREY }}>
                Boutique corporate PR · Australia · New Zealand · Pacific
              </p>
              <h1
                className="alt4-display uppercase leading-[0.98] text-white"
                style={{ fontSize: "clamp(2rem, 5.4vw, 4.4rem)", letterSpacing: "-0.01em" }}
              >
                Strategic,
                <br className="hidden md:block" /> proven
                <br className="hidden md:block" /> communications
                <br className="hidden md:block" /> advice.
              </h1>
              <p className="mt-8 max-w-md text-base leading-relaxed" style={{ color: GREY }}>
                Whatever your communications objectives, you need experienced
                counsel you can trust.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="border border-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Book a consultation &gt;
                </Link>
                <Link
                  href="/services"
                  className="border px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white/85 transition-colors hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  style={{ borderColor: "rgba(255,255,255,0.35)" }}
                >
                  View all services &gt;
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative h-[340px] md:h-auto md:min-h-[560px]">
            <Image
              src="/images/homepage/MyPrPartnerHeadshots2025-14.jpg"
              alt="CRC Public Relations advisers"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ====================== WHY A BOUTIQUE FIRM ====================== */}
      <section className="px-5 py-20 sm:px-8 md:py-28" style={{ background: WHITE }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Eyebrow>Why a boutique firm</Eyebrow>
            <h2
              className="alt4-display mt-3 uppercase leading-[0.95]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3.1rem)", color: INK }}
            >
              Why a boutique firm
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div style={{ borderTop: `1px solid ${INK_LINE}` }} className="pt-6">
                  <span
                    className="alt4-display block leading-none"
                    style={{ fontSize: "clamp(3.2rem, 7vw, 5.5rem)", color: INK }}
                  >
                    {p.n}
                  </span>
                  <h3 className="mt-5 text-lg font-bold" style={{ color: INK }}>
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed" style={{ color: "#5A5A5A" }}>
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SERVICES ============================ */}
      <section className="px-5 py-20 sm:px-8 md:py-28" style={{ background: INK }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Eyebrow on="dark">Our practice areas</Eyebrow>
            <h2
              className="alt4-display mt-3 uppercase leading-[0.95] text-white"
              style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.4rem)" }}
            >
              Corporate. Reputation. Crisis.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px sm:grid-cols-2" style={{ background: GREY_LINE }}>
            {SERVICE_CARDS.map((c, i) => (
              <Reveal key={c.href} delay={i * 0.08} className="relative aspect-[4/3]">
                <div className="relative h-full w-full" style={{ background: INK }}>
                  <Image
                    src={c.img}
                    alt=""
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 639px) 100vw, 50vw"
                  />
                  <div
                    className="absolute left-0 top-0 px-4 py-3"
                    style={{ background: WHITE }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-[0.14em]"
                      style={{ color: INK }}
                    >
                      {c.label}
                    </span>
                  </div>
                  <Link
                    href={c.href}
                    className="absolute bottom-4 left-4 border border-white bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    Explore &gt;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== QUOTE + GROUPED STATS ==================== */}
      <section className="px-5 py-20 sm:px-8 md:py-28" style={{ background: WHITE }}>
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <p
              className="alt4-display leading-[1.15]"
              style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)", color: INK }}
            >
              &ldquo;As a boutique PR firm, you deal directly with experienced
              advisers who take a genuine, long-term interest in your
              organisation. It is a partnership, and it makes a huge
              difference to outcomes.&rdquo;
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em]" style={{ color: "#5A5A5A" }}>
              Lyall Mercer, co-founder
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t md:grid-cols-4"
              style={{ borderColor: INK_LINE }}
            >
              {STATS.map((s) => (
                <div key={s.label} className="border-l pl-5 pt-8 first:border-l-0 first:pl-0" style={{ borderColor: INK_LINE }}>
                  <span className="alt4-display block leading-none" style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)", color: INK }}>
                    {s.value}
                  </span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.14em]" style={{ color: "#5A5A5A" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================= MEDIA LOGOS STRIP ======================= */}
      <section className="border-t px-5 py-14 sm:px-8" style={{ borderColor: INK_LINE, background: WHITE }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: "#5A5A5A" }}>
              Expert commentary from our advisers, featured in
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {siteConfig.lyall.mediaLinks.map((m) => (
                <span key={m.name} className="relative h-6 w-24 opacity-70 grayscale sm:h-7 sm:w-28">
                  <Image src={m.logoSrc} alt={m.name} fill className="object-contain" sizes="120px" />
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ CASE STUDIES ============================ */}
      <section className="px-5 py-20 sm:px-8 md:py-28" style={{ background: INK }}>
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <Eyebrow on="dark">Client outcomes</Eyebrow>
            <h2
              className="alt4-display mt-3 uppercase leading-[0.95] text-white"
              style={{ fontSize: "clamp(1.9rem, 4.4vw, 3.4rem)" }}
            >
              Results that speak for themselves.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {siteConfig.caseStudies.map((s, i) => {
              const Icon = CASE_STUDY_ICONS[s.icon] ?? Building2;
              return (
                <Reveal key={s.id} delay={i * 0.08}>
                  <div className="h-full border p-7" style={{ borderColor: "rgba(255,255,255,0.28)" }}>
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="text-white/70" aria-hidden="true" />
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
                        {s.sector}
                      </p>
                    </div>
                    <p className="alt4-display mt-5 uppercase leading-[1.05] text-white" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}>
                      {s.outcome}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{s.outcomeSub}</p>
                    <hr className="my-6 border-white/15" />
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                          The challenge
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/70">{s.challenge}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                          Our approach
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/70">{s.approach}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ FOUNDER ============================ */}
      <section className="px-5 py-20 sm:px-8 md:py-28" style={{ background: WHITE }}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal className="relative aspect-[4/5] w-full max-w-md">
            <Image
              src="/images/about/lyall-mercer-portrait.png"
              alt="Lyall Mercer, co-founder of CRC Public Relations"
              fill
              className="object-cover object-top grayscale"
              sizes="(max-width: 767px) 100vw, 480px"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Co-founder &amp; principal adviser</Eyebrow>
            <h2 className="alt4-display mt-3 uppercase leading-[0.95]" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)", color: INK }}>
              Lyall Mercer
            </h2>
            <p className="mt-3 text-sm font-semibold" style={{ color: "#5A5A5A" }}>
              {siteConfig.lyall.origin}
            </p>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed" style={{ color: "#3A3A3A" }}>
              Lyall began his career as a journalist, writing for some of
              Australia&rsquo;s leading newspapers and magazines. That
              foundation, understanding exactly how media thinks, moves and
              decides what becomes a story, led him into a 25 year public
              relations career spanning every continent.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed" style={{ color: "#3A3A3A" }}>
              When you choose CRC Public Relations, you will deal with
              various members of our team, but Lyall will always be
              available for you. This level of expertise is why our clients
              choose us.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block border px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              style={{ borderColor: INK, color: INK }}
            >
              Read Lyall&rsquo;s full profile &gt;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============================ FINAL CTA ============================ */}
      <section className="px-5 py-20 sm:px-8 md:py-28" style={{ background: INK }}>
        <div className="mx-auto max-w-[1000px] text-center">
          <Reveal>
            <Eyebrow on="dark">
              <span className="inline-block">Ready to work with us</span>
            </Eyebrow>
            <h2
              className="alt4-display mx-auto mt-4 max-w-3xl uppercase leading-[1.02] text-white"
              style={{ fontSize: "clamp(2rem, 4.6vw, 3.4rem)" }}
            >
              Trust is your most valuable asset. Let us help you build it.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed" style={{ color: GREY }}>
              Whether you need experienced advice on a complex issue, help
              building your public profile, a communications strategy, or
              trusted counsel during a crisis, we are your adviser and
              advocate. We believe in you, and we have your back.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/contact"
                className="border border-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book a consultation &gt;
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
      </section>

      {/* ============================ FOOTER ============================ */}
      <footer className="border-t px-5 py-14 sm:px-8" style={{ borderColor: GREY_LINE, background: INK }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <span className="alt4-display text-sm uppercase tracking-[0.2em] text-white">
                CRC Public Relations
              </span>
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
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-white/45">
                24/7 confidential crisis line
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">Navigate</p>
              <nav className="mt-4 flex flex-col gap-2" aria-label="Footer">
                <Link href="/" className="text-sm text-white/70 hover:text-white">Home</Link>
                {NAV_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: GREY_LINE }}>
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
      </footer>
    </div>
  );
}
