import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Media Strategy",
  description:
    "Proactive media engagement, spokesperson development, and sustained media presence.",
};

const activities = [
  "Media strategy development",
  "Journalist and editor relationship management",
  "Media training and spokesperson preparation",
  "Press release and media content creation",
  "Media monitoring and reporting",
  "Op-ed and thought leadership placement",
  "Broadcast media preparation",
];

const sectors = [
  "ASX-listed companies",
  "Industry associations",
  "Government departments",
  "Legal and professional services",
];

export default function MediaStrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="MEDIA STRATEGY"
        title="Build a media presence that commands attention."
        description="Proactive media engagement, spokesperson development, and sustained media presence."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="text-charcoal text-base leading-relaxed">
                Media coverage is not accidental. Organisations that command
                sustained, credible media presence do so because they have a
                deliberate strategy, and the relationships, content, and
                preparation to execute it. CRC PR develops and implements media
                strategies that position your organisation as a trusted, go-to
                voice in your sector.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                Our media strategy work spans the full engagement cycle: from
                identifying the right journalists and editors, to crafting
                compelling narratives, to preparing your spokespeople for
                interviews across print, broadcast, and digital media. We build
                relationships with newsrooms, not through volume, but through
                relevance and credibility.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                For organisations seeking to elevate their public profile,
                respond to industry developments, or establish thought
                leadership, our senior advisors bring decades of media
                experience, including extensive backgrounds in journalism,
                to every engagement.
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

      <LeadMagnetBanner magnet="mediaInterviewGuide" variant="dark" />

      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="text-white font-heading font-black text-xl hover:text-brand-gold transition"
          >
            Discuss your media strategy needs →
          </Link>
        </div>
      </section>
    </>
  );
}
