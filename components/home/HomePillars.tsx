"use client";

import Link from "next/link";
import { Building2, Shield, AlertCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimateIn } from "@/components/shared/AnimateIn";

export function HomePillars() {
  return (
    <section className="relative bg-off-white py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-navy-mid/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="font-sans font-medium text-brand-gold text-xs text-left">
            Our practice areas
          </p>
          <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] leading-[1.05] mt-3">
            Corporate. Reputation.
            <br />
            Crisis.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16">
          <AnimateIn className="lg:col-span-7">
            <div className="relative bg-white border border-brand-border rounded-lg p-10 h-full card-border-expand group shadow-sm shadow-navy/5">
              <div className="h-[3px] bg-brand-gold w-16 group-hover:w-full transition-all duration-700 mb-8" />
              <Building2
                className="text-brand-gold"
                size={36}
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="font-heading font-black text-navy text-2xl mt-5">
                Corporate Communications
              </h3>
              <p className="text-charcoal-mid text-base leading-relaxed mt-4 max-w-lg">
                Strategic counsel for internal and external communications.
                Stakeholder engagement, media relations, brand positioning, and
                corporate messaging, handled with the precision that key
                stakeholders expect.
              </p>
              <Link
                href="/services/corporate-communications"
                className="inline-flex items-center gap-2 text-link-teal font-sans font-medium text-sm mt-6 group-hover:text-navy group-hover:gap-3 transition-all"
              >
                Explore corporate communications{" "}
                <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </AnimateIn>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <AnimateIn delay={150}>
              <div className="relative bg-white border border-brand-border rounded-lg p-8 card-border-expand group shadow-sm shadow-navy/5">
                <div className="h-[3px] bg-brand-gold w-12 group-hover:w-full transition-all duration-700 mb-6" />
                <Shield
                  className="text-brand-gold"
                  size={28}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="font-heading font-black text-navy text-xl mt-4">
                  Reputation Management
                </h3>
                <p className="text-charcoal-mid text-[15px] leading-relaxed mt-3">
                  Your reputation is your most valuable asset. We help you
                  assess vulnerabilities, protect against emerging threats, and
                  maintain the trust of every audience that matters.
                </p>
                <Link
                  href="/services/reputation-management"
                  className="inline-flex items-center gap-2 text-link-teal font-sans font-medium text-sm mt-6 group-hover:text-navy group-hover:gap-3 transition-all"
                >
                  Explore reputation management{" "}
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="relative bg-white border border-brand-border rounded-lg p-8 card-border-expand group shadow-sm shadow-navy/5">
                <div className="h-[3px] bg-brand-gold w-12 group-hover:w-full transition-all duration-700 mb-6" />
                <AlertCircle
                  className="text-brand-gold"
                  size={28}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="font-heading font-black text-navy text-xl mt-4">
                  Crisis Communications
                </h3>
                <p className="text-charcoal-mid text-[15px] leading-relaxed mt-3">
                  When a crisis breaks, the first 15 minutes define the outcome.
                  We have been in the room when it matters most. 24/7.
                  Confidential. Decisive.
                </p>
                <Link
                  href="/services/crisis-communications"
                  className="inline-flex items-center gap-2 text-link-teal font-sans font-medium text-sm mt-6 group-hover:text-navy group-hover:gap-3 transition-all"
                >
                  Explore crisis communications{" "}
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn>
          <div className="mt-20 md:mt-28 mb-4 max-w-3xl mx-auto text-center">
            <div className="w-12 h-[2px] bg-brand-gold mx-auto mb-8" />
            <blockquote className="font-heading font-black text-navy text-xl md:text-[28px] leading-snug tracking-tight">
              &ldquo;Being boutique and personal means you deal directly with
              experienced advisers who take a genuine, long-term interest in your
              organisation.&rdquo;
            </blockquote>
            <p className="font-sans font-medium text-text-secondary text-sm mt-6 tracking-wide">
              {siteConfig.lyall.fullName}, Founder
            </p>
            <div className="w-12 h-[2px] bg-brand-gold mx-auto mt-8" />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
