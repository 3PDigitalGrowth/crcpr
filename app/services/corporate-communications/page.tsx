import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Corporate Communications",
  description:
    "Strategic internal and external messaging, stakeholder engagement, media relations, and brand positioning, handled by senior advisors.",
};

const activities = [
  "Corporate messaging and positioning",
  "Stakeholder engagement strategy",
  "Internal communications planning",
  "Media relations and media management",
  "Executive communications and speechwriting",
  "Brand communications strategy",
  "Annual report and corporate publication support",
];

const sectors = [
  "ASX-listed companies",
  "Government departments",
  "Industry associations",
  "Legal and professional services",
];

export default function CorporateCommunicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="CORPORATE COMMUNICATIONS"
        title="Strategic communications that build trust."
        description="Internal and external messaging, stakeholder engagement, media relations, and brand positioning, handled by senior advisors."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="text-charcoal text-base leading-relaxed">
                Effective corporate communications is the foundation of
                organisational trust. Whether addressing internal teams, external
                stakeholders, investors, or the media, every message must
                reinforce your organisation&apos;s authority and credibility.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                CRC PR provides senior-level counsel for every aspect of
                corporate communications, from developing communications
                strategies and stakeholder engagement frameworks to managing
                media relationships and crafting executive messaging.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                We work directly with your leadership team, providing the
                strategic thinking and hands-on execution that complex
                communications challenges demand. Our approach is always
                tailored, always confidential, and always focused on protecting
                and enhancing your reputation.
              </p>
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
            {sectors.map((sector) => (
              <span
                key={sector}
                className="bg-off-white border border-brand-border rounded-[4px] px-3 py-1 text-sm text-charcoal-mid"
              >
                {sector}
              </span>
            ))}
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
            Discuss your corporate communications needs →
          </Link>
        </div>
      </section>
    </>
  );
}
