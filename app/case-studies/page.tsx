import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CaseStudies } from "@/components/shared/CaseStudies";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { MediaReachSnapshot } from "@/components/shared/MediaReachSnapshot";
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
        title="Results when the needs are great and the stakes are high."
        description="Four outcomes from CRC Public Relations client engagements."
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
              "In sensitive school matters, careful parent, staff and media communication can preserve confidence through recovery.",
          },
          {
            label: "Government",
            value: "Funding secured",
            detail:
              "Strategic communications and stakeholder engagement can materially shape high-value government and development outcomes.",
          },
          {
            label: "Legal firm",
            value: "Revenue generated",
            detail:
              "A proactive, strategic and well-executed media strategy can built trust, drive new clients and increase revenue.",
          },
        ]}
      />

      <MediaReachSnapshot />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Why we show these
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Measurable outcomes based on expert counsel.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                Because we prioritise the confidentiality of our clients, we
                don&rsquo;t publicise their details. While we can point to
                countless examples of successful outcomes, we have outlined
                four here. We list them to make one important point:
              </p>

              <p className="font-heading font-black text-brand-gold text-2xl md:text-3xl leading-tight mt-6">
                What matters are results!
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  Many of our clients have been working with us for more than
                  a decade, some from the time we commenced in 2010. They stay
                  with us because we bring results, and through results we have
                  built strong relationships and are now part of their team.
                  We are proud of our record but we are always striving to be
                  better, more creative and more proactive.
                </p>
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  Results mean different things to each client. To some
                  it&rsquo;s generating public profile that builds enormous
                  trust with their clients, potential clients and other
                  stakeholders who are vital to their success. To others,
                  it&rsquo;s using media engagement to help them achieve other
                  objectives.
                </p>
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  Of course sometimes media isn&rsquo;t even part of the
                  strategy. They may need to build trust with their
                  &lsquo;publics&rsquo; (stakeholders) through direct
                  engagement, or to be guided through a challenging issue and
                  ensure it doesn&rsquo;t escalate.
                </p>
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  Others may need to navigate through a major issue or crisis
                  and deal with adversarial stakeholders, social media
                  warriors, or media. Every time, no matter the need, we stand
                  beside you.
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
                    because of the communication strategy adopted.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Not all PR agencies are the same
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Choosing a PR agency isn&rsquo;t about how slick their
                    marketing is, or their promises. It&rsquo;s about
                    relationship and results.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Stakes are real
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The matters shown here involve real people and policy,
                    reputational, and organisational consequences.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <CaseStudies
            columnsClassName="md:grid-cols-2 xl:grid-cols-4"
            extra={[
              {
                id: "legal-revenue",
                sector: "Legal firm",
                outcome: "Revenue generated.",
                outcomeSub:
                  "A proactive, strategic and well-executed media strategy can built trust, drive new clients and increase revenue.",
              },
            ]}
          />

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
        body="Whatever your communications need, sensitive issue, or stakeholder engagement challenge with real consequences, we can help shape the result."
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
