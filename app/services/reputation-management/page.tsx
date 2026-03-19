import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { ReputationAssessment } from "@/components/shared/ReputationAssessment";

export const metadata: Metadata = {
  title:
    "Reputation Management Consultants Australia | CRC Public Relations",
  description:
    "Reputation vulnerability assessments, monitoring, and long-term reputation protection for ASX-listed companies, associations, and government organisations. Direct access to senior advisors.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reputation Management",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Reputation vulnerability assessments, stakeholder perception analysis, ongoing monitoring, and reputation recovery strategy for organisations across Australia.",
  areaServed: "AU",
  serviceType: "Reputation Management Consulting",
};

const sectorLinks = [
  { label: "ASX-Listed Companies", href: "/clients/corporate" },
  { label: "Industry Associations", href: "/clients/industry-associations" },
  { label: "Government", href: "/clients/government" },
  { label: "Schools & Faith-Based", href: "/clients/schools-faith" },
] as const;

export default function ReputationManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="REPUTATION MANAGEMENT"
        title="Your reputation is your most valuable asset. Protect it before you need to."
        description="Vulnerability assessments, stakeholder perception analysis, reputation monitoring, and long-term reputation protection for organisations that cannot afford to find out they were exposed the hard way."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      {/* Opening section */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal text-base leading-relaxed">
            In 2024, a single day of hostile media coverage cost an ASX-listed
            Australian company an estimated $400&nbsp;million in market
            capitalisation. The underlying issue had been visible in their
            stakeholder environment for months. No one had acted on the signals.
          </p>
          <p className="text-charcoal text-base leading-relaxed mt-6">
            Reputation damage is almost always predictable in hindsight. The
            stakeholder who became a public critic. The regulatory relationship
            that was allowed to deteriorate. The internal policy that was never
            communicated clearly. The media relationship that was treated as
            transactional rather than strategic.
          </p>
          <p className="text-charcoal text-base leading-relaxed mt-6">
            CRC PR works with organisations to identify these vulnerabilities
            before they become headlines, and to build the communications
            frameworks and stakeholder relationships that protect reputation over
            the long term.
          </p>
        </div>
      </section>

      {/* How CRC PR approaches reputation management */}
      <section className="bg-off-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-12">
            How CRC PR approaches reputation management
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Reputation vulnerability assessments
              </h3>
              <p className="text-charcoal text-base leading-relaxed">
                We conduct structured assessments of your organisation&apos;s
                communications posture, mapping your stakeholder landscape,
                reviewing your media profile, evaluating your digital footprint,
                and stress-testing your messaging against the issues most likely
                to attract scrutiny. The output is a prioritised action plan your
                leadership team can act on immediately.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Ongoing reputation monitoring and early warning
              </h3>
              <p className="text-charcoal text-base leading-relaxed">
                Reputation risks do not appear fully formed. They develop through
                a series of signals: a change in media tone, a shift in
                stakeholder sentiment, a pattern of regulatory correspondence. We
                provide ongoing monitoring and reporting that surfaces these
                signals early, giving your leadership team time to respond
                proactively rather than reactively.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Stakeholder perception analysis
              </h3>
              <p className="text-charcoal text-base leading-relaxed">
                What your stakeholders think about your organisation is often
                different from what you believe they think. We conduct structured
                stakeholder perception research, through interviews, surveys, and
                media analysis, that gives your leadership team an accurate
                picture of your current reputation and the gaps between intention
                and perception.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Reputation recovery strategy
              </h3>
              <p className="text-charcoal text-base leading-relaxed">
                For organisations that have experienced a significant reputation
                event, the path back to trust is strategic, not tactical. We
                develop and implement reputation recovery programs that address
                the root causes of the damage, rebuild stakeholder confidence,
                and restore your organisation&apos;s standing, methodically and
                measurably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why most reputation management fails */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-8">
            Why most reputation management fails, and what to do differently
          </h2>
          <p className="text-charcoal text-base leading-relaxed">
            Most organisations approach reputation management as a reactive
            discipline. They invest in communications capability when something
            goes wrong and reduce that investment when things are going well. The
            result is a cycle of crisis, recovery, and complacency that leaves
            the organisation permanently vulnerable.
          </p>
          <p className="text-charcoal text-base leading-relaxed mt-6">
            The organisations with the strongest reputations treat reputation
            management as an ongoing strategic investment, the same way they
            treat financial management or legal risk. They maintain relationships
            with senior communications advisors before they need them urgently.
            They conduct regular vulnerability assessments. They test their
            crisis plans. They build and sustain stakeholder trust deliberately.
          </p>
          <p className="text-charcoal text-base leading-relaxed mt-6">
            CRC PR works as a long-term reputation partner for organisations
            that have made this decision. We are not a firm you call when
            something goes wrong. We are the firm you retain so that when
            something does go wrong, and it will, you are already prepared.
          </p>
        </div>
      </section>

      {/* Start here: assessment intro */}
      <section className="bg-off-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-8">
            Start here: find out where your organisation is exposed
          </h2>
          <p className="text-charcoal text-base leading-relaxed">
            Our Reputation Vulnerability Assessment is a 20-question tool that
            evaluates your organisation across five risk areas: media readiness,
            crisis preparedness, stakeholder trust, digital exposure, and
            governance. It takes three minutes and produces a scored risk profile
            that your leadership team can act on immediately.
          </p>
          <p className="text-charcoal text-base leading-relaxed mt-6">
            This is the same framework we use in our professional engagements,
            distilled into a self-assessment you can complete right now.
          </p>
        </div>
      </section>

      <ReputationAssessment />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy rounded-lg p-8">
            <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase mb-3">
              NEXT STEP
            </p>
            <h3 className="font-heading font-black text-white text-2xl mb-3">
              Want to discuss your results?
            </h3>
            <p className="text-white/70 text-base mb-6">
              Once you&apos;ve completed the assessment, our advisers can walk
              you through your score and what it means for your organisation in a
              confidential, no-obligation conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase px-6 py-3 rounded-[4px] hover:bg-gold-light transition"
            >
              Book a confidential consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Related sectors */}
      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-heading font-black text-navy text-lg mb-4">
            Related sectors
          </h3>
          <div className="flex flex-wrap gap-3">
            {sectorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-off-white border border-brand-border rounded-[4px] px-3 py-1 text-sm text-charcoal-mid hover:text-brand-gold hover:border-brand-gold transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="text-white font-heading font-black text-xl hover:text-brand-gold transition"
          >
            Discuss your reputation management needs →
          </Link>
        </div>
      </section>
    </>
  );
}
