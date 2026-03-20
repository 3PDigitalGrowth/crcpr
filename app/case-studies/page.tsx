import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CaseStudies } from "@/components/shared/CaseStudies";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title: "Client Outcomes | CRC Public Relations",
  description:
    "Anonymised case studies from CRC PR client engagements across industry associations, schools, and Pacific governments.",
};

const sectorLinks = [
  { label: "Industry Associations", href: "/clients/industry-associations" },
  { label: "Schools & Faith-Based", href: "/clients/schools-faith" },
  { label: "Pacific", href: "/pacific" },
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="CLIENT OUTCOMES"
        title="Results when the stakes are highest."
        description="Three anonymised outcomes from CRC PR client engagements."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="We protect confidentiality, but we still show the kind of outcomes our work is designed to deliver."
        items={[
          {
            label: "Advocacy",
            value: "Legislation amended",
            detail:
              "Sector advocacy supported by disciplined communications can move an outcome before the policy is final.",
          },
          {
            label: "Education",
            value: "Zero enrolment loss",
            detail:
              "In sensitive school matters, careful parent, board, and media communication can preserve confidence through recovery.",
          },
          {
            label: "Pacific",
            value: "Funding secured",
            detail:
              "Regional communications and stakeholder engagement can materially shape high-value government and development outcomes.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal-mid text-[15px] leading-relaxed">
            CRC PR does not publicise client work casually. The examples below are shown
            because senior communications counsel should still be measured by outcomes:
            changes in legislation, preservation of trust, funding secured, confidence
            protected, and pressure stabilised before the long-tail damage sets in.
          </p>
          <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
            These are anonymised snapshots of the kind of work clients engage us to do
            when the matter is commercially, politically, or reputationally significant.
          </p>
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <CaseStudies />

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {sectorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-gold font-medium text-sm hover:underline"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InlineEnquirySection
        title="Need senior counsel on a matter where the outcome genuinely matters?"
        body="If you are navigating a policy fight, a sensitive education issue, a crisis, or a stakeholder engagement challenge with real consequences, CRC PR can help shape the result."
        bullets={[
          "Strategic communication for high-stakes matters",
          "Senior advice before or during scrutiny",
          "Confidential support with clear next-step recommendations",
        ]}
        defaultMessage="We would like to discuss a high-stakes communications matter with CRC PR."
        variant="white"
      />

      <PageClosingCTA
        title="Every engagement is treated with complete confidentiality."
        body="CRC PR does not reference client work publicly without permission. The examples here are anonymised by design, but they reflect the kinds of high-stakes outcomes our clients engage us to achieve."
      />
    </>
  );
}
