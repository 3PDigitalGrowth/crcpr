import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Crisis Communications",
  description:
    "24/7 crisis response, coordination, and media management when it matters most.",
};

const activities = [
  "24/7 crisis response and management",
  "Crisis communications planning",
  "Media management during crisis",
  "Stakeholder communications coordination",
  "Spokesperson preparation and support",
  "Crisis simulation exercises",
  "Post-crisis review and reputation recovery",
];

export default function CrisisCommunicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="CRISIS COMMUNICATIONS"
        title="When the first 15 minutes define everything."
        description="24/7 crisis response, coordination, and media management when it matters most."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="text-charcoal text-base leading-relaxed">
                Crisis does not operate on business hours. When a critical
                incident unfolds, whether a safety failure, a regulatory
                action, a media exposé, or an internal disclosure, the
                organisation&apos;s response in the first minutes determines the
                trajectory of the entire event. CRC PR provides immediate,
                senior-level crisis communications support when it matters most.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                We have managed crisis communications for organisations across
                every sector and every level of severity. Our role is to bring
                order to chaos: coordinating internal response teams,
                establishing media protocols, preparing spokespeople, and
                managing stakeholder communications under extreme time pressure.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                Beyond immediate response, we work with organisations on crisis
                preparedness, developing crisis communications plans, running
                simulation exercises, and training leadership teams to respond
                with discipline and authority when the pressure is at its
                highest.
              </p>

              <div className="mt-8 bg-off-white border border-brand-gold/30 rounded-lg p-6">
                <p className="text-navy font-heading font-black text-base">
                  Need immediate crisis support?
                </p>
                <p className="text-charcoal text-sm leading-relaxed mt-2">
                  Visit our dedicated{" "}
                  <Link
                    href="/crisis"
                    className="text-brand-gold font-medium hover:opacity-80 transition underline"
                  >
                    crisis response page
                  </Link>{" "}
                  or call{" "}
                  <a
                    href={siteConfig.phone.href}
                    className="text-brand-gold font-medium hover:opacity-80 transition underline"
                  >
                    {siteConfig.phone.display}
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-heading font-black text-navy text-lg mb-6">
                What we do
              </h3>
              <ul className="space-y-4">
                {activities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="text-brand-gold shrink-0 mt-0.5"
                      size={18}
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span className="text-charcoal text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-heading font-black text-navy text-lg mb-4">
            Related sectors
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="bg-off-white border border-brand-border rounded-[4px] px-3 py-1 text-sm text-charcoal-mid">
              All sectors: crisis is universal
            </span>
          </div>
        </div>
      </section>

      <LeadMagnetBanner magnet="crisisPlanTemplate" variant="dark" />

      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="text-white font-heading font-black text-xl hover:text-brand-gold transition"
          >
            Discuss your crisis communications needs →
          </Link>
        </div>
      </section>
    </>
  );
}
