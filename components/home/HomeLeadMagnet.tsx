"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";

const riskAreas = [
  "Media and spokesperson readiness",
  "Crisis planning and testing",
  "Stakeholder trust and relationships",
  "Digital and social media exposure",
  "Governance and board communications",
];

export function HomeLeadMagnet() {
  return (
    <section className="relative bg-warm-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-white to-off-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-teal text-xs">
                Free assessment
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-[38px] leading-[1.1] mt-3">
                How exposed is your organisation&rsquo;s reputation?
              </h2>
            </AnimateIn>
            <AnimateIn delay={150}>
              <div className="space-y-4 mt-6">
                <p className="text-text-body text-base leading-relaxed">
                  Most organisations don&rsquo;t discover their reputation
                  vulnerabilities until a crisis is already underway. Our
                  Reputation Vulnerability Assessment takes 3 minutes and
                  identifies exactly where you are exposed, across governance,
                  media, social media, stakeholder relationships, and crisis
                  preparedness.
                </p>
                <p className="text-text-body text-base leading-relaxed">
                  Used by communications directors and CEOs across Australia.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={250} className="lg:col-span-5">
            <div className="relative bg-white border border-brand-border rounded-lg p-8 card-border-expand overflow-hidden shadow-sm shadow-navy/5">
              <h3 className="text-navy font-heading font-black text-lg">
                Reputation Vulnerability Assessment
              </h3>
              <div className="mt-5 space-y-0">
                {riskAreas.map((area, i) => (
                  <AnimateIn key={area} delay={350 + i * 80} as="div">
                    <div className="flex items-center gap-3 py-2.5 border-b border-brand-border last:border-0">
                      <Check
                        className="text-brand-teal shrink-0"
                        size={16}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span className="text-text-body text-sm">{area}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
              <Link
                href="/services/reputation-management#reputation-assessment"
                className="btn-lift block bg-brand-teal text-white font-heading font-black text-sm w-full py-4 rounded-[4px] mt-6 hover:bg-link-teal transition text-center"
              >
                Start the free assessment →
              </Link>
              <p className="text-text-caption text-xs mt-3 text-center">
                3 minutes. No commitment. Results delivered by email.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
