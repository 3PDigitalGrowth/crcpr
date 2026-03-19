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
  { value: siteConfig.stats.clientRetention, label: "Client Retention" },
  { value: siteConfig.stats.professionsTrained, label: "Professionals Trained" },
];

export function HomeHero() {
  const capabilityAvailable = siteConfig.capabilityStatement.available;
  const capabilityHref = capabilityAvailable
    ? `/downloads/${siteConfig.capabilityStatement.fileName}`
    : siteConfig.capabilityStatement.requestUrl;

  return (
    <section id="hero-section" className="relative min-h-screen bg-gradient-to-b from-navy via-navy to-navy-mid overflow-hidden">
      <div className="hero-accent-line" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.5) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[85vh] py-24 lg:py-32">
          <div className="lg:col-span-7 relative z-10">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase">
                Boutique Corporate PR · Brisbane · Australia · The Pacific
              </p>
            </AnimateIn>

            <AnimateIn delay={150}>
              <h1 className="font-heading font-black text-white text-5xl md:text-[72px] leading-[0.95] mt-6">
                We protect
                <br />
                what you&rsquo;ve
                <br />
                built.
              </h1>
            </AnimateIn>

            <AnimateIn delay={300}>
              <p className="text-[rgba(245,242,236,0.75)] text-[19px] leading-relaxed max-w-[480px] mt-6">
                CRC Public Relations is a boutique corporate PR firm trusted by
                companies, governments, associations, and organisations across
                Australia, the Pacific, and internationally, when reputation,
                issues, and crises demand experienced, senior advice.
              </p>
            </AnimateIn>

            <AnimateIn delay={450}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="btn-lift inline-flex items-center justify-center gap-2 bg-brand-gold text-navy font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
                >
                  <Phone className="size-4" strokeWidth={2} aria-hidden />
                  Book a Confidential Consultation
                </Link>
                {capabilityAvailable ? (
                  <a
                    href={capabilityHref}
                    download
                    className="btn-lift inline-flex items-center justify-center gap-2 border border-brand-gold/50 text-brand-gold font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-brand-gold/10 transition"
                  >
                    <Download className="size-4" strokeWidth={2} aria-hidden />
                    Download Capability Statement
                  </a>
                ) : (
                  <Link
                    href={capabilityHref}
                    className="btn-lift inline-flex items-center justify-center gap-2 border border-brand-gold/50 text-brand-gold font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-brand-gold/10 transition"
                  >
                    <Download className="size-4" strokeWidth={2} aria-hidden />
                    Request Capability Statement
                  </Link>
                )}
              </div>
            </AnimateIn>

            <AnimateIn delay={600}>
              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="font-sans font-medium text-white/40 text-[11px] tracking-widest uppercase">
                  Lyall Mercer: As Seen In
                </p>
                <div className="flex flex-wrap gap-6 mt-3">
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
                        className="font-heading font-black text-white/25 text-[15px] hover:text-white/50 transition"
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

        <div className="border-t border-white/[0.08] py-10 -mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 120}>
                <div
                  className={
                    i < 3 ? "lg:border-r lg:border-white/[0.08]" : ""
                  }
                >
                  <AnimatedCounter
                    value={stat.value}
                    className="font-heading font-black text-brand-gold text-4xl"
                  />
                  <p className="font-sans font-medium text-white/40 text-[11px] tracking-widest uppercase mt-2">
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
