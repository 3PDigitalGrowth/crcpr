"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimateIn } from "@/components/shared/AnimateIn";

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
                <Link
                  href="/contact"
                  className="btn-lift inline-flex items-center gap-2 text-brand-gold font-sans font-medium text-sm hover:gap-3 transition-all"
                >
                  Work with us <ArrowRight size={14} />
                </Link>
                <a
                  href={siteConfig.myPrPartnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift inline-flex items-center gap-2 text-brand-teal font-sans font-medium text-sm hover:gap-3 transition-all"
                >
                  Not ready for a retainer? Start with My PR Partner{" "}
                  <ArrowRight size={14} />
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Right column, sector grid, spans 7 cols */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-3">
              {siteConfig.sectors.map((sector, i) => (
                <AnimateIn key={sector} delay={i * 80}>
                  <div className="card-border-expand bg-off-white border border-brand-border/30 rounded-lg p-5 hover:border-brand-gold/20 hover:shadow-md hover:shadow-brand-gold/5 transition-all duration-300 group">
                    <p className="font-sans font-medium text-navy text-sm group-hover:text-brand-gold transition-colors">
                      {sector}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
