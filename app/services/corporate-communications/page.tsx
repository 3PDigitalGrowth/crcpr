import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title:
    "Corporate Communications Consultant Australia | CRC Public Relations",
  description:
    "Senior-level corporate communications counsel for ASX-listed companies, government departments, and associations. Stakeholder engagement, media relations, executive messaging. Brisbane-based, available nationally.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Communications",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Senior-level corporate communications counsel including stakeholder engagement, media relations, executive messaging, and internal communications strategy.",
  areaServed: "AU",
  serviceType: "Corporate Communications Consulting",
};

const sectorLinks = [
  { label: "ASX-listed companies", href: "/clients/corporate" },
  { label: "Government departments", href: "/clients/government" },
  {
    label: "Industry associations",
    href: "/clients/industry-associations",
  },
  { label: "Legal and professional services", href: "/contact" },
];

export default function CorporateCommunicationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="CORPORATE COMMUNICATIONS"
        title="Corporate communications that build trust and protect value."
        description="Senior counsel for internal and external messaging, stakeholder engagement, media relations, and executive communications, delivered directly by experienced advisors."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal text-[15px] leading-relaxed">
            Effective corporate communications is not about volume. It is about
            clarity, consistency, and strategic intent, ensuring that every
            message, from every channel, reinforces your organisation&apos;s
            authority and the confidence your stakeholders place in your
            leadership.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            The challenge for most organisations is that corporate
            communications becomes reactive. Announcements are drafted in a
            hurry. Media enquiries are handled without a strategy. Stakeholder
            relationships are maintained informally, without structure. The
            result is a communications function that responds to events rather
            than shapes them.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            CRC PR works with organisations to build the systems, strategies,
            and capabilities that shift communications from reactive to
            proactive, and to provide the senior-level counsel that ensures
            every significant communication is considered, consistent, and
            designed to achieve a specific outcome.
          </p>
        </div>
      </section>

      {/* What corporate communications looks like in practice */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            What corporate communications looks like in practice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Corporate messaging and positioning
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                When your organisation needs to communicate, whether to the
                market, to government, to the community, or to its own people,
                the message must be clear, credible, and aligned with your
                strategic objectives. We develop messaging frameworks that give
                your leadership team a consistent, defensible position on every
                issue that matters.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Stakeholder engagement and communications strategy
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Every organisation has stakeholders who can either support or
                obstruct its objectives. We map your stakeholder landscape,
                identify the relationships that matter most, and design
                engagement strategies that build trust and maintain it through
                major change programs, regulatory processes, and periods of
                uncertainty.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Internal communications and change management
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                How an organisation communicates with its own people during
                change, crisis, or transition determines whether that process
                builds or erodes confidence. We develop internal communications
                programs that keep your workforce informed, aligned, and
                engaged, from board announcements to all-staff responses.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Executive communications and media positioning
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Senior leaders are the face of the organisations they run. We
                help executives develop their communications voice, prepare for
                media and stakeholder appearances, and build a public profile
                that reflects the quality of their leadership. This includes
                speechwriting, talking points development, and sustained media
                relationship management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Senior counsel, not account management */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Senior counsel, not account management
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed">
            The difference between CRC PR and a larger agency is not size. It
            is access. At most large PR firms, you brief a senior person and
            are then handed to a team of account managers and junior staff who
            execute the work. Your senior contact becomes a figurehead rather
            than an advisor.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            At CRC PR, every engagement is led by an experienced senior advisor
            from start to finish. You work directly with the person who has the
            expertise, the judgment, and the accountability for the outcome.
            This is not a service model we stumbled into. It is a deliberate
            choice. It is why our client satisfaction rate is 100%.
          </p>
          <p className="text-charcoal text-[15px] leading-relaxed mt-6">
            For organisations dealing with sensitive communications challenges,
            whether a board transition, a difficult stakeholder relationship, or
            a market-sensitive announcement, this direct access to senior
            counsel is not a preference. It is a requirement.
          </p>
        </div>
      </section>

      {/* How a corporate communications engagement begins */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            How a corporate communications engagement begins
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-off-white border border-brand-border rounded-lg p-6">
              <span className="text-brand-gold font-heading font-black text-2xl">
                1
              </span>
              <h3 className="font-heading font-black text-navy text-xl mb-3 mt-3">
                Situation assessment
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Every engagement begins with a structured assessment of your
                current communications posture: your stakeholder map, your
                media relationships, your messaging strengths and
                vulnerabilities, and the specific challenges or objectives you
                are working towards.
              </p>
            </div>

            <div className="bg-off-white border border-brand-border rounded-lg p-6">
              <span className="text-brand-gold font-heading font-black text-2xl">
                2
              </span>
              <h3 className="font-heading font-black text-navy text-xl mb-3 mt-3">
                Strategy development
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Based on the assessment, we develop a communications strategy
                that is specific to your organisation, your sector, and your
                objectives. This includes messaging frameworks, stakeholder
                engagement plans, and a calendar of communications activities.
              </p>
            </div>

            <div className="bg-off-white border border-brand-border rounded-lg p-6">
              <span className="text-brand-gold font-heading font-black text-2xl">
                3
              </span>
              <h3 className="font-heading font-black text-navy text-xl mb-3 mt-3">
                Ongoing counsel and execution
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                We work alongside your team as a senior communications partner,
                providing strategic counsel, drafting and reviewing
                communications, preparing your spokespeople, and managing your
                media relationships on an ongoing basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead magnet intro + banner */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-heading font-black text-navy text-xl mb-3">
            Is your organisation&apos;s communications strategy ready for
            scrutiny?
          </h3>
          <p className="text-charcoal text-[15px] leading-relaxed">
            Download our Crisis Communications Plan Template, the same
            framework we use with ASX-listed companies and government
            departments to prepare for the communications challenges that every
            organisation eventually faces.
          </p>
        </div>
      </section>

      <LeadMagnetBanner magnet="crisisPlanTemplate" variant="dark" />

      {/* Related sectors */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Related sectors
          </h2>
          <p className="text-charcoal text-[15px] leading-relaxed mb-6">
            We have delivered corporate communications programs across the
            following sectors. Click to explore our sector-specific approach.
          </p>
          <div className="flex flex-wrap gap-3">
            {sectorLinks.map((sector) => (
              <Link
                key={sector.label}
                href={sector.href}
                className="bg-off-white border border-brand-border rounded-[4px] px-4 py-2 text-sm text-charcoal-mid hover:border-brand-gold hover:text-navy transition"
              >
                {sector.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-heading font-black text-3xl mb-6">
              Ready to build a communications strategy that holds up under
              pressure?
            </h2>
            <p className="text-white/75 text-[15px] leading-relaxed max-w-2xl mx-auto mb-8">
              Whether you are preparing for a major announcement, navigating a
              sensitive stakeholder situation, or building a long-term
              communications capability, we can help. Every conversation with
              CRC PR begins with listening. There is no pitch, no template, no
              account team. Just senior counsel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
              >
                BOOK A CONFIDENTIAL CONSULTATION
              </Link>
              <a
                href={siteConfig.phone.href}
                className="text-white/75 font-heading font-black text-sm hover:text-brand-gold transition"
              >
                Call {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
