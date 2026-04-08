import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title: "Sector Expertise",
  description:
    "We work with companies, family businesses, government departments, industry associations, independent schools, and organisations across every sector.",
};

const sectors = [
  {
    title: "Industry associations",
    body: "Regulatory crisis, member communications, board governance, public affairs, and advocacy campaigns for Australia's peak bodies and associations.",
    href: "/clients/industry-associations",
    magnetKey: "associationCrisisGuide" as const,
  },
  {
    title: "Schools & faith-based organisations",
    body: "Parent communications, media management, governance support, and crisis response for independent schools, Catholic schools, and faith-based organisations.",
    href: "/clients/schools-faith",
    magnetKey: "schoolsPlaybook" as const,
  },
  {
    title: "Companies & family businesses",
    body: "Direct, senior-level communications counsel and reputation management for owners, directors, and executives of companies, family businesses, and professional services firms.",
    href: "/clients/corporate",
    magnetKey: "crisisPlanTemplate" as const,
  },
  {
    title: "Government",
    body: "Federal and state government departments, statutory authorities, and public sector organisations requiring strategic communications and stakeholder engagement.",
    href: "/clients/government",
    magnetKey: "crisisPlanTemplate" as const,
  },
];

const proofItems = [
  {
    label: "Sector depth",
    value: "Not generic PR",
    detail:
      "We work best where sector complexity shapes the communications problem as much as the message itself.",
  },
  {
    label: "Leadership access",
    value: "Senior-only",
    detail:
      "Clients work directly with experienced advisers who understand high-stakes governance, media, and stakeholder pressure.",
  },
  {
    label: "Preparedness",
    value: "Proof and process",
    detail:
      "Each sector approach is informed by real-world issues, crisis response, and the practical needs of leadership teams under pressure.",
  },
] as const;

const faqs = [
  {
    question: "Which sectors does CRC Public Relations work with most often?",
    answer:
      "CRC Public Relations works most often with corporate organisations, government departments and authorities, industry associations, schools and faith-based organisations, and clients operating across the Pacific. The common thread is high-stakes communication rather than industry category alone.",
  },
  {
    question: "Do you adapt your advice by sector, or is it the same service everywhere?",
    answer:
      "The advisory model stays consistent, direct senior counsel, but the stakeholder logic, proof points, protocol, and communication sequence change materially by sector. That is why sector expertise matters.",
  },
  {
    question: "What if our situation crosses more than one sector?",
    answer:
      "That is common. Many matters involve overlapping pressures such as governance, regulation, media, and community trust. We help identify which audience and risk dynamics matter most, then build the communication approach around that reality.",
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sector expertise"
        title="Deep expertise across every sector."
        description="We work directly with CEOs, directors, and senior executives who recognise the value of experienced counsel and treat reputation as a strategic asset. No junior handoff, no layers."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="The communications challenge changes by sector. The stakes do not."
        items={[...proofItems]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_360px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Why sector context matters
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                The communications challenge changes with the environment around it.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                Sector expertise matters because stakeholder expectations,
                governance realities, and the likely points of reputational
                pressure change dramatically between a company, a government
                agency, a peak body, or a school.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  A message that feels disciplined in one environment can be
                  tone-deaf in another.
                </p>
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  We work best in sectors where communication is inseparable
                  from trust, authority, and strategic judgement. That is why
                  the pages below are organised around leadership pressure
                  points rather than broad industry labels.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                What changes by sector
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Stakeholder expectations
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The audience that matters most, and what they need to hear,
                    differs sharply by sector.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Governance realities
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Listed, public, member-based, and community institutions all
                    carry different approval paths and accountability pressures.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Pressure points
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The reputational flashpoints are rarely identical, even when
                    the communication discipline required is equally high.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map(({ title, body, href, magnetKey }) => {
            const magnet = siteConfig.leadMagnets[magnetKey];
            return (
              <article
                key={href}
                className="bg-off-white border border-brand-border/50 rounded-lg p-8"
              >
                <h3 className="font-heading font-black text-navy text-xl">
                  {title}
                </h3>
                <p className="text-charcoal-mid text-[15px] leading-relaxed mt-3">
                  {body}
                </p>
                <Link
                  href={href}
                  className="text-brand-gold font-sans font-medium text-sm mt-6 inline-block hover:opacity-90 transition-opacity"
                >
                  Explore {title.toLowerCase()} →
                </Link>
                <p className="text-charcoal-mid/80 text-xs leading-relaxed mt-4">
                  Free resource: {magnet.title}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <InlineEnquirySection
        title="Need advice tailored to your sector?"
        body="If your situation is shaped by sector-specific governance, stakeholder, or community pressures, we can help you work out the right starting point and the right communication approach."
        bullets={[
          "Sector-aware message and stakeholder strategy",
          "Direct senior counsel for high-stakes matters",
          "Help identifying the right service and first move",
        ]}
        defaultMessage="We would like sector-specific communications advice."
        variant="white"
      />

      <LeadMagnetBanner
        magnet="crisisPlanTemplate"
        variant="light"
        title="Need a practical framework before the next pressure point arrives?"
        description="Download the CRC Public Relations Crisis Communications Plan Template, a useful starting point for leadership teams across sectors that need clearer escalation, stronger message discipline, and more confidence under scrutiny."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about CRC Public Relations' sector expertise"
      />

      <PageClosingCTA
        title="Ready to discuss your communications needs?"
        body="If you are working through a sector-specific issue, an emerging reputation risk, or a pressure point that needs senior judgment, we can help you work out the right next step."
        secondaryLabel="Explore My PR Partner"
        secondaryHref={siteConfig.myPrPartnerUrl}
        secondaryDescription="CRC Public Relations' training and support platform for communications teams, practitioners, and leaders who want practical guidance between major advisory engagements."
      />
    </>
  );
}
