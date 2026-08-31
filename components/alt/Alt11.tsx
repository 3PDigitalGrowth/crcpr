"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { Schibsted_Grotesk } from "next/font/google";
import { siteConfig } from "@/config/site";

/* ---------------------------------------------------------------------- */
/* Fonts                                                                    */
/* ---------------------------------------------------------------------- */

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--alt11-grotesk",
  display: "swap",
});

/* ---------------------------------------------------------------------- */
/* Data                                                                    */
/* ---------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
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

const PRACTICES = [
  {
    title: "Corporate Communications",
    href: "/services/corporate-communications",
    image: "/images/redesign-v2/bento-corporate.png",
  },
  {
    title: "Reputation Management",
    href: "/services/reputation-management",
    image: "/images/redesign-v2/bento-reputation.png",
  },
  {
    title: "Crisis Communications",
    href: "/services/crisis-communications",
    image: "/images/redesign-v2/bento-crisis.png",
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

/* ---------------------------------------------------------------------- */
/* Motion helper                                                           */
/* ---------------------------------------------------------------------- */

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
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

function NightdeskHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-10">
        <Link
          href="/alt11"
          className="text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          CRC Public Relations
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.phone.href}
          className="flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{siteConfig.phone.display}</span>
        </a>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------------- */
/* Footer                                                                   */
/* ---------------------------------------------------------------------- */

function NightdeskFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-14 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-white">
              CRC Public Relations
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              Boutique corporate PR · Australia · New Zealand · Pacific
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-white/50">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
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
              <li className="text-white/50">
                {siteConfig.address.street}, {siteConfig.address.city}{" "}
                {siteConfig.address.state} {siteConfig.address.postcode}
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white/50">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white/50">
              24/7 confidential crisis line
            </p>
            <a
              href={siteConfig.phone.href}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/70"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone.display}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
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
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------------- */
/* Main component                                                          */
/* ---------------------------------------------------------------------- */

export function Alt11() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`${grotesk.variable} min-h-screen bg-black text-white`}
      style={{ fontFamily: "var(--alt11-grotesk)" }}
    >
      <NightdeskHeader />

      {/* HERO */}
      <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden md:h-[94vh]">
        {reduceMotion ? (
          <Image
            src="/images/redesign-v2/hero-ambient.png"
            alt="CRC Public Relations advisers in conversation"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <>
            <video
              className="absolute inset-0 hidden h-full w-full object-cover md:block"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/redesign-v2/hero-ambient.png"
            >
              <source src="/images/redesign/hero.mp4" type="video/mp4" />
            </video>
            <Image
              src="/images/redesign-v2/hero-ambient.png"
              alt="CRC Public Relations advisers in conversation"
              fill
              priority
              sizes="100vw"
              className="object-cover md:hidden"
            />
          </>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 md:px-10 md:pb-24">
          <p className="max-w-md text-sm text-white/75 md:text-base">
            Boutique corporate PR · Australia · New Zealand · Pacific
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
            Strategic, proven communications advice.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            Whatever your communications objectives, you need experienced
            counsel you can trust.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Book a consultation
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1400px]">
        {/* STATEMENT 2 */}
        <section className="px-5 py-24 md:px-10 md:py-36">
          <Reveal>
            <p className="max-w-4xl text-3xl font-medium leading-[1.15] text-white sm:text-5xl md:text-6xl">
              We are your trusted adviser and advocate, and we believe in
              you.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-16 md:mt-24">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/homepage/MyPrPartnerHeadshots2025-14.jpg"
                alt="The CRC Public Relations advisory team"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* STATEMENT 3 + PILLARS */}
        <section className="px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="max-w-4xl text-3xl font-medium leading-[1.15] text-white sm:text-5xl md:text-6xl">
              You deal directly with an experienced adviser, not an account
              manager.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-3 md:gap-14">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="border-t border-white/15 pt-6">
                  <h3 className="text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PRACTICES */}
        <section className="px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="text-sm text-white/50">Our practice areas</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Corporate. Reputation. Crisis.
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col gap-6">
            {PRACTICES.map((practice, i) => (
              <Reveal key={practice.title} delay={i * 0.06}>
                <Link
                  href={practice.href}
                  className="group relative block h-[300px] w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:h-[360px]"
                >
                  <Image
                    src={practice.image}
                    alt={practice.title}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-end justify-between gap-6 p-7 md:p-10">
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">
                      {practice.title}
                    </h3>
                    <span className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROOF MOMENT */}
        <section className="border-y border-white/10 px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="text-sm text-white/50">
              Expert commentary from our advisers, featured in
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5">
              {siteConfig.lyall.mediaLinks.map((outlet) => (
                <div
                  key={outlet.name}
                  className="relative h-6 w-24 opacity-50 transition-opacity hover:opacity-90"
                  style={{ filter: "brightness(0) invert(1)" }}
                >
                  <Image
                    src={outlet.logoSrc}
                    alt={outlet.name}
                    fill
                    sizes="96px"
                    className="object-contain object-left"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-20 md:mt-24">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-semibold text-white md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-20 md:mt-24">
            <p className="max-w-3xl text-3xl font-medium leading-[1.15] text-white sm:text-4xl md:text-5xl">
              {siteConfig.mediaReachSnapshot.intro.headline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              {siteConfig.mediaReachSnapshot.intro.body[0]}
            </p>
            <p className="mt-4 text-xs text-white/35">
              {siteConfig.mediaReachSnapshot.caveat}
            </p>
          </Reveal>
        </section>

        {/* CASE STUDIES RAIL */}
        <section className="py-24 md:py-32">
          <Reveal className="px-5 md:px-10">
            <p className="text-sm text-white/50">Client outcomes</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Results that speak for themselves.
            </h2>
          </Reveal>

          <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 md:px-10 [-webkit-overflow-scrolling:touch]">
            {siteConfig.caseStudies.map((cs) => (
              <Link
                key={cs.id}
                href="/case-studies"
                className="w-[85vw] max-w-[420px] shrink-0 snap-start rounded-2xl border border-white/15 bg-black p-8 transition-colors hover:border-white/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:w-[420px]"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                  {cs.sector}
                </p>
                <p className="mt-6 text-2xl font-semibold leading-snug text-white md:text-3xl">
                  {cs.outcome}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/50">
                  {cs.challenge}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-white/70">
                  View
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FOUNDER */}
        <section className="px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-20">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-black">
                <Image
                  src="/images/lyall-mercer-portrait.png"
                  alt="Lyall Mercer, co-founder of CRC Public Relations"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-contain object-bottom"
                />
              </div>
              <div>
                <p className="text-sm text-white/50">
                  Co-founder &amp; principal adviser
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                  Lyall Mercer
                </h2>
                <p className="mt-2 text-sm text-white/45">
                  Former journalist and Australasia&rsquo;s leading crisis
                  communications adviser.
                </p>
                <p className="mt-8 text-base leading-relaxed text-white/70 md:text-lg">
                  Lyall began his career as a journalist, writing for some of
                  Australia&rsquo;s leading newspapers and magazines. That
                  foundation, understanding exactly how media thinks, moves
                  and decides what becomes a story, led him into a 25 year
                  public relations career spanning every continent.
                </p>
                <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                  When you choose CRC Public Relations, you will deal with
                  various members of our team, but Lyall will always be
                  available for you. This level of expertise is why our
                  clients choose us.
                </p>
                <p className="mt-8 border-l-2 border-white/20 pl-5 text-base leading-relaxed text-white/50">
                  &ldquo;You have 15 minutes to respond before you start to
                  lose control of the message.&rdquo;
                </p>
                <Link
                  href="/about/lyall-mercer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Read Lyall&rsquo;s full profile
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-24 md:px-10 md:pb-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] md:aspect-[21/9]">
                <Image
                  src="/images/redesign/boardroom-aerial.png"
                  alt="Boardroom aerial view"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.45) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-16">
                  <p className="text-sm text-white/70">Ready to work with us</p>
                  <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                    Trust is your most valuable asset. Let us help you build
                    it.
                  </h2>
                  <div className="mt-9 flex flex-wrap items-center gap-5">
                    <Link
                      href="/contact"
                      className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      Book a consultation
                    </Link>
                    <a
                      href={siteConfig.phone.href}
                      className="flex items-center gap-2 text-sm font-medium text-white hover:opacity-75"
                    >
                      <Phone className="h-4 w-4" />
                      {siteConfig.phone.display}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <NightdeskFooter />
    </div>
  );
}
