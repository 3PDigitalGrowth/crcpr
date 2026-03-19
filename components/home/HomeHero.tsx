"use client";

import Link from "next/link";
import { Phone, Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";

const stats = [
  { value: siteConfig.stats.yearsTrading, label: "Years Experience" },
  { value: siteConfig.stats.continents, label: "Global Reach" },
  { value: siteConfig.stats.clientRetention, label: "Client Satisfaction" },
  { value: siteConfig.stats.professionsTrained, label: "Professionals Trained" },
];

const pillars = [
  {
    letter: "C",
    word: "Corporate",
    desc: "Communicate effectively with every stakeholder, internal and external.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    href: "/services/corporate-communications",
  },
  {
    letter: "R",
    word: "Reputation",
    desc: "Assess vulnerabilities and protect what matters, before and after an issue surfaces.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    href: "/services/reputation-management",
  },
  {
    letter: "C",
    word: "Crisis",
    desc: "Guide your organisation through a crisis, and be prepared before it arrives.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    href: "/crisis",
  },
];

function CRCAccentBar() {
  return (
    <div
      className="relative bg-[#0F1F36] border-t border-white/[0.06]"
      role="list"
      aria-label="CRC Public Relations core practice areas"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.07]">
          {pillars.map((pillar) => (
            <Link
              key={pillar.word}
              href={pillar.href}
              role="listitem"
              className="flex items-start gap-3 px-0 md:px-5 py-3.5 group transition-colors duration-150 hover:bg-white/[0.03] first:md:pl-0 last:md:pr-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold/50"
            >
              <span
                className="font-heading font-black text-brand-gold text-2xl leading-none mt-0.5 w-5 flex-shrink-0 select-none"
                aria-hidden="true"
              >
                {pillar.letter}
              </span>

              <div className="flex-shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                {pillar.icon}
              </div>

              <div className="min-w-0">
                <p className="font-heading font-black text-white text-sm tracking-wide mb-1 group-hover:text-brand-gold transition-colors">
                  {pillar.word}
                </p>
                <p className="text-white/35 text-xs leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HomeHero() {
  const capabilityAvailable = siteConfig.capabilityStatement.available;
  const capabilityHref = capabilityAvailable
    ? `/downloads/${siteConfig.capabilityStatement.fileName}`
    : siteConfig.capabilityStatement.requestUrl;

  return (
    <section
      id="hero-section"
      className="relative flex flex-col bg-gradient-to-b from-navy via-navy to-navy-mid overflow-hidden"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <div className="hero-accent-line" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.5) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative flex-1 max-w-7xl mx-auto px-6 w-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center flex-1 pt-12 pb-8 lg:pt-16 lg:pb-10">
          <div className="lg:col-span-7 relative z-10">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase">
                Boutique Corporate PR · Brisbane · Australia · The Pacific
              </p>
            </AnimateIn>

            <AnimateIn delay={150}>
              <h1 className="font-heading font-black text-white text-4xl md:text-6xl lg:text-[64px] leading-[0.95] mt-4">
                We protect
                <br />
                what you&rsquo;ve
                <br />
                built.
              </h1>
            </AnimateIn>

            <AnimateIn delay={300}>
              <p className="text-[rgba(245,242,236,0.75)] text-base lg:text-lg leading-relaxed max-w-[480px] mt-4">
                CRC Public Relations is a boutique corporate PR firm trusted by
                companies, governments, associations, and organisations across
                Australia, the Pacific, and internationally, when reputation,
                issues, and crises demand experienced, senior advice.
              </p>
            </AnimateIn>

            <AnimateIn delay={450}>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  href="/contact"
                  className="btn-lift inline-flex items-center justify-center gap-2 bg-brand-gold text-navy font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-6 py-3 hover:bg-gold-light transition"
                >
                  <Phone className="size-4" strokeWidth={2} aria-hidden />
                  Book a Confidential Consultation
                </Link>
                {capabilityAvailable ? (
                  <a
                    href={capabilityHref}
                    download
                    className="btn-lift inline-flex items-center justify-center gap-2 border border-brand-gold/50 text-brand-gold font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-6 py-3 hover:bg-brand-gold/10 transition"
                  >
                    <Download className="size-4" strokeWidth={2} aria-hidden />
                    Download Capability Statement
                  </a>
                ) : (
                  <Link
                    href={capabilityHref}
                    className="btn-lift inline-flex items-center justify-center gap-2 border border-brand-gold/50 text-brand-gold font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-6 py-3 hover:bg-brand-gold/10 transition"
                  >
                    <Download className="size-4" strokeWidth={2} aria-hidden />
                    Request Capability Statement
                  </Link>
                )}
              </div>
            </AnimateIn>

            <AnimateIn delay={600}>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-sans font-medium text-white/40 text-[11px] tracking-widest uppercase">
                  Lyall Mercer: As Seen In
                </p>
                <div className="flex flex-wrap gap-5 mt-2">
                  {siteConfig.lyall.mediaLinks.map((link, i) => (
                    <AnimateIn
                      key={link.name}
                      delay={700 + i * 100}
                      as="span"
                      className="inline-block"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading font-black text-white/25 text-sm hover:text-white/50 transition"
                      >
                        {link.name}
                      </a>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>

          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
            <PortraitPlaceholder size="lg" className="mx-auto" />
          </div>
        </div>
      </div>

      <CRCAccentBar />

      <div className="relative bg-[#0F1F36]">
        <div className="max-w-7xl mx-auto px-6 border-t border-white/[0.08] py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 120}>
                <div
                  className={
                    i < 3 ? "lg:border-r lg:border-white/[0.08]" : ""
                  }
                >
                  <AnimatedCounter
                    value={stat.value}
                    className="font-heading font-black text-brand-gold text-2xl lg:text-3xl"
                  />
                  <p className="font-sans font-medium text-white/40 text-[10px] tracking-widest uppercase mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
