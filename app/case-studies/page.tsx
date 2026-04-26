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
    "Anonymised case studies from CRC Public Relations client engagements across industry associations, schools, and government.",
};

const sectorLinks = [
  { label: "Industry Associations", href: "/clients/industry-associations" },
  { label: "Schools & Faith-Based", href: "/clients/schools-faith" },
  { label: "Government", href: "/clients/government" },
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        asidePreset="anonymisedOutcomes"
        eyebrow="Client outcomes"
        title="Results when the stakes are highest."
        description="Three anonymised outcomes from CRC Public Relations client engagements."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        heroImage={{
          src: "/images/case-studies/hero.webp",
          alt: "Australian Parliament House at dusk with warm interior light against a deep blue sky",
        }}
      />

      <PageProofStrip
        title="These examples are anonymised, but they still show the outcomes our work is designed to deliver."
        items={[
          {
            label: "National industry association",
            value: "Legislation scrapped",
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
            label: "Government",
            value: "Funding secured",
            detail:
              "Strategic communications and stakeholder engagement can materially shape high-value government and development outcomes.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Why we show these
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Measurable outcomes from high-stakes work.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                We do not publicise client work casually. The examples below are
                here because communications counsel should still be judged
                by what changed—not by visibility alone.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  That means changes in legislation, preservation of trust,
                  funding secured, confidence protected, and pressure
                  stabilised before the long-tail damage sets in.
                </p>
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  These are anonymised snapshots of the kind of work clients
                  engage us to do when the matter is commercially, politically,
                  or reputationally significant.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                What the outcomes show
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Strategic communication moves outcomes
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The value is not noise or visibility. It is what changed
                    because the communication strategy held.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Anonymised by design
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Names and identifying detail stay private so the focus stays
                    on the result, not on who the client was.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Stakes are real
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The matters shown here involve real policy, reputational,
                    and organisational consequences.
                  </p>
                </div>
              </div>
            </aside>
          </div>
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
        title="Need counsel on a matter where the outcome genuinely matters?"
        body="If you are navigating a policy fight, a sensitive education issue, a crisis, or a stakeholder engagement challenge with real consequences, we can help shape the result."
        bullets={[
          "Strategic communication for high-stakes matters",
          "Experienced advice before or during scrutiny",
          "Clear next-step recommendations from experienced advisers",
        ]}
        defaultMessage="We would like to discuss a high-stakes communications matter with CRC Public Relations."
        variant="white"
      />

      <PageClosingCTA
        title="Outcomes matter more than headlines."
        body="The examples here are anonymised, but they reflect the kinds of policy, reputational, and organisational results clients engage us to pursue when the stakes are real."
      />
    </>
  );
}
