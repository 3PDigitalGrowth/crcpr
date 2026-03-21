"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { MyPRPartnerCTA } from "@/components/shared/MyPRPartnerCTA";

const sectorCards = [
  {
    title: "ASX-listed companies",
    description:
      "Board, market, and reputation counsel when governance and valuation pressures converge.",
    href: "/clients/corporate",
  },
  {
    title: "Federal and State Government departments",
    description:
      "Stakeholder, programme, and public communications shaped for scrutiny and accountability.",
    href: "/clients/government",
  },
  {
    title: "Industry associations",
    description:
      "Member, advocacy, and governance communications for peak bodies under pressure.",
    href: "/clients/industry-associations",
  },
  {
    title: "Independent schools",
    description:
      "Parent, board, and incident communications where trust and care are inseparable.",
    href: "/clients/schools-faith",
  },
  {
    title: "Faith-based organisations",
    description:
      "Sensitive communications support where values, leadership, and community confidence must align.",
    href: "/clients/schools-faith",
  },
  {
    title: "Legal and professional services firms",
    description:
      "Authority-building, issue response, and partner-level communications for expert businesses.",
    href: "/clients/corporate",
  },
  {
    title: "Health and aged care organisations",
    description:
      "High-stakes stakeholder and reputation advice in heavily scrutinised care environments.",
    href: "/clients/corporate",
  },
  {
    title: "Pacific governments and NGOs",
    description:
      "Cross-cultural communications and stakeholder engagement across Pacific contexts.",
    href: "/pacific",
  },
] as const;

export function HomeClients() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left column, spans 5 cols */}
          <div className="lg:col-span-5">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase">
                Who We Work With
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] leading-[1.05] mt-3">
                Trusted across every sector.
              </h2>
              <p className="text-charcoal-mid text-base leading-relaxed mt-6 max-w-xl">
                Our clients range from ASX-listed companies and Federal Government
                departments to independent schools, faith-based organisations, industry
                associations, and Pacific governments. What they share is a need for
                experienced, senior advice when the stakes are highest.
              </p>
              <div className="flex flex-col gap-3 mt-8">
                <div className="rounded-xl border border-brand-border bg-navy p-5 text-left">
                  <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase mb-3">
                    Work With CRC PR
                  </p>
                  <p className="font-heading font-black text-white text-lg leading-snug">
                    Start a confidential conversation with a senior advisor.
                  </p>
                  <p className="text-white/65 text-sm leading-relaxed mt-3">
                    Tell us about the issue, sector pressure, or communications
                    challenge you are facing and we will help identify the right
                    starting point.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-5 py-3 mt-4 hover:bg-gold-light transition"
                  >
                    WORK WITH US <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>
                <MyPRPartnerCTA
                  compact
                  title="Not ready for a retainer?"
                  description="Start with My PR Partner for practical communications training, resources, and support designed for teams building capability."
                  buttonLabel="START WITH MY PR PARTNER"
                  className="text-left"
                />
              </div>
            </AnimateIn>
          </div>

          {/* Right column, sector grid, spans 7 cols */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectorCards.map((sector, i) => (
                <AnimateIn key={sector.title} delay={i * 80}>
                  <Link
                    href={sector.href}
                    className="card-border-expand block bg-off-white border border-brand-border/30 rounded-xl p-6 hover:border-brand-gold/20 hover:shadow-md hover:shadow-brand-gold/5 transition-all duration-300 group min-h-[138px]"
                  >
                    <p className="font-sans font-medium text-navy text-sm group-hover:text-brand-gold transition-colors">
                      {sector.title}
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed mt-3">
                      {sector.description}
                    </p>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
