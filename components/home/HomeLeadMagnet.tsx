"use client";

import Link from "next/link";
import { Check } from "lucide-react";

const riskAreas = [
  "Media and spokesperson readiness",
  "Crisis planning and testing",
  "Stakeholder trust and relationships",
  "Digital and social media exposure",
  "Governance and board communications",
];

export function HomeLeadMagnet() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-3">
            <p className="font-sans font-medium text-brand-teal text-xs tracking-[0.14em] uppercase">
              Free Assessment
            </p>
            <h2 className="text-white font-heading font-black text-3xl mt-2">
              How exposed is your organisation&rsquo;s reputation?
            </h2>
            <div className="text-white/70 text-base leading-relaxed mt-4 space-y-4">
              <p>
                Most organisations don&rsquo;t discover their reputation
                vulnerabilities until a crisis is already underway. Our
                Reputation Vulnerability Assessment takes 3 minutes and
                identifies exactly where you are exposed — across governance,
                media, social media, stakeholder relationships, and crisis
                preparedness.
              </p>
              <p>
                Used by communications directors and CEOs across Australia.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-2">
            <div className="bg-navy-mid border border-brand-gold/20 rounded-lg p-6">
              <p className="text-white font-heading font-black text-lg">
                Reputation Vulnerability Assessment
              </p>

              <div className="mt-4 space-y-0">
                {riskAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 text-white/70 text-sm py-2"
                  >
                    <Check
                      className="text-brand-teal shrink-0"
                      size={16}
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    {area}
                  </div>
                ))}
              </div>

              <Link
                href="/services/reputation-management"
                className="block bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase w-full py-4 rounded-[4px] mt-6 hover:bg-gold-light transition text-center"
              >
                Start the Free Assessment →
              </Link>
              <p className="text-white/50 text-xs mt-3">
                3 minutes. No commitment. Results delivered by email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
