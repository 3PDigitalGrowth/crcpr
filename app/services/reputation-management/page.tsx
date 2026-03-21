import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
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

const proofItems = [
  {
    label: "Exposure mapping",
    value: "Signals first",
    detail:
      "Reputation failures are usually visible in stakeholder, media, and governance signals before they become public events.",
  },
  {
    label: "Leadership clarity",
    value: "Actionable insight",
    detail:
      "We translate communications risk into a decision-ready view for executives, boards, and senior stakeholders.",
  },
  {
    label: "Long-term protection",
    value: "Disciplined monitoring",
    detail:
      "Reputation management is not a one-off campaign. It is an ongoing leadership discipline with regular review points.",
  },
] as const;

const faqs = [
  {
    question: "What is the difference between reputation management and crisis communications?",
    answer:
      "Reputation management is the longer-horizon discipline of identifying vulnerabilities, monitoring risk, and strengthening trust before a major public event occurs. Crisis communications is what happens when the issue is already live and public pressure is active.",
  },
  {
    question: "Who usually uses a reputation vulnerability assessment?",
    answer:
      "Boards, CEOs, communications leaders, and risk teams use it when they want a more realistic view of stakeholder, media, digital, and governance exposure. It is especially useful before major change, growth, scrutiny, or leadership transition.",
  },
  {
    question: "Can CRC PR help if reputation damage has already occurred?",
    answer:
      "Yes. Reputation work often starts after a trust event. In those cases we assess what caused the damage, how key stakeholders currently perceive the organisation, and what communication and behaviour changes are needed to rebuild confidence over time.",
  },
  {
    question: "Is this a one-off project or an ongoing advisory relationship?",
    answer:
      "It can be either. Some organisations want a single vulnerability assessment or recovery roadmap. Others retain CRC PR as an ongoing senior reputation partner because they want regular review points, monitoring, and strategic counsel before new issues emerge.",
  },
];

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

      <PageProofStrip
        title="Strong reputations are rarely accidental. They are managed deliberately."
        items={[...proofItems]}
      />

      {/* Opening section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium tracking-[0.16em] uppercase mb-4">
                Reputation Reality
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Reputation damage usually starts long before the headline.
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-base leading-relaxed">
                  In 2024, a single day of hostile media coverage cost an
                  ASX-listed Australian company an estimated $400&nbsp;million
                  in market capitalisation. The underlying issue had been
                  visible in their stakeholder environment for months. No one
                  had acted on the signals.
                </p>
                <p className="text-charcoal text-base leading-relaxed">
                  Reputation damage is almost always predictable in hindsight.
                  The stakeholder who became a public critic. The regulatory
                  relationship that was allowed to deteriorate. The internal
                  policy that was never communicated clearly. The media
                  relationship that was treated as transactional rather than
                  strategic.
                </p>
                <p className="text-charcoal text-base leading-relaxed">
                  CRC PR works with organisations to identify these
                  vulnerabilities before they become headlines, and to build the
                  communications frameworks and stakeholder relationships that
                  protect reputation over the long term.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium tracking-[0.16em] uppercase mb-5">
                Early Warning Signs
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Stakeholder frustration is building
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Complaints become more organised, more public, and harder to
                    contain.
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Media interest is changing shape
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Journalists move from isolated enquiries to pattern
                    recognition and sustained scrutiny.
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Leadership confidence is slipping
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Teams know a risk exists, but no one has yet aligned the
                    messages, relationships, and response plan around it.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            What reputation pressure looks like before it becomes public
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              "A regulator starts asking sharper questions and the tone changes",
              "Stakeholder frustration becomes more organised and more visible",
              "Media interest shifts from occasional enquiry to pattern recognition",
              "Leadership no longer has confidence that internal and external messages are aligned",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-brand-border bg-white p-6"
              >
                <p className="text-charcoal text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary conversion moved earlier in the flow */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase mb-4">
                Start Here
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Find out where your organisation is exposed
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-base leading-relaxed">
                  Our Reputation Vulnerability Assessment evaluates your
                  organisation across five risk areas: media readiness, crisis
                  preparedness, stakeholder trust, digital exposure, and
                  governance. It is designed to give leadership a faster,
                  clearer view of where the next trust problem is most likely to
                  emerge.
                </p>
                <p className="text-charcoal text-base leading-relaxed">
                  This is the same framework we use in professional engagements,
                  distilled into a practical self-assessment you can complete
                  now.
                </p>
              </div>

              <div className="mt-8 rounded-lg border border-brand-border bg-off-white p-6">
                <p className="text-brand-teal text-xs font-medium tracking-[0.16em] uppercase mb-4">
                  What You Get
                </p>
                <div className="space-y-4">
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      20 questions
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      A fast, practical assessment designed for leadership teams.
                    </p>
                  </div>
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      5 risk areas
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Media readiness, crisis preparedness, stakeholder trust,
                      digital exposure, and governance.
                    </p>
                  </div>
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Clear next-step view
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      A quicker read on where reputation pressure is most likely
                      to emerge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-brand-border bg-white p-6 md:p-8 shadow-[0_20px_60px_rgba(10,22,40,0.08)]">
              <ReputationAssessment embedded />
            </div>
          </div>
        </div>
      </section>

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
              Once you have completed the assessment, our advisers can walk you
              through your score and what it means for your organisation in a
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

      {/* Service detail */}
      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-brand-gold text-xs font-medium tracking-[0.16em] uppercase mb-4">
              Reputation Framework
            </p>
            <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-6 leading-tight">
              How CRC PR approaches reputation management
            </h2>
            <p className="text-charcoal text-base leading-relaxed">
              Reputation management works best when leadership can see risk
              clearly, interpret signals early, and act through a disciplined
              communications framework rather than ad hoc reaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Reputation vulnerability assessments",
                body:
                  "We conduct structured assessments of your organisation's communications posture, mapping your stakeholder landscape, reviewing your media profile, evaluating your digital footprint, and stress-testing your messaging against the issues most likely to attract scrutiny. The output is a prioritised action plan your leadership team can act on immediately.",
              },
              {
                num: "02",
                title: "Ongoing reputation monitoring and early warning",
                body:
                  "Reputation risks do not appear fully formed. They develop through a series of signals: a change in media tone, a shift in stakeholder sentiment, a pattern of regulatory correspondence. We provide ongoing monitoring and reporting that surfaces these signals early, giving your leadership team time to respond proactively rather than reactively.",
              },
              {
                num: "03",
                title: "Stakeholder perception analysis",
                body:
                  "What your stakeholders think about your organisation is often different from what you believe they think. We conduct structured stakeholder perception research, through interviews, surveys, and media analysis, that gives your leadership team an accurate picture of your current reputation and the gaps between intention and perception.",
              },
              {
                num: "04",
                title: "Reputation recovery strategy",
                body:
                  "For organisations that have experienced a significant reputation event, the path back to trust is strategic, not tactical. We develop and implement reputation recovery programmes that address the root causes of the damage, rebuild stakeholder confidence, and restore your organisation's standing, methodically and measurably.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-brand-border bg-white p-7 md:p-8"
              >
                <p className="text-brand-gold font-heading font-black text-sm tracking-[0.16em] uppercase mb-4">
                  {item.num}
                </p>
                <h3 className="font-heading font-black text-navy text-xl mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-charcoal text-base leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why most reputation management fails */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10">
            <p className="text-brand-gold text-xs font-medium tracking-[0.16em] uppercase mb-4">
              Long-Term Discipline
            </p>
            <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-6 leading-tight">
              Why most reputation management fails, and what to do differently
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg border border-brand-border bg-off-white p-7 md:p-8">
              <p className="text-brand-teal text-xs font-medium tracking-[0.16em] uppercase mb-4">
                What Usually Goes Wrong
              </p>
              <div className="space-y-6">
                <p className="text-charcoal text-base leading-relaxed">
                  Most organisations approach reputation management as a
                  reactive discipline. They invest in communications capability
                  when something goes wrong and reduce that investment when
                  things are going well. The result is a cycle of crisis,
                  recovery, and complacency that leaves the organisation
                  permanently vulnerable.
                </p>
                <div className="rounded-lg border border-brand-border bg-white p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-2">
                    Reactive cycle
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Crisis, recovery, and complacency repeats because the
                    underlying vulnerabilities are never managed systematically.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-brand-border bg-navy p-7 md:p-8">
              <p className="text-brand-gold text-xs font-medium tracking-[0.16em] uppercase mb-4">
                What Stronger Organisations Do
              </p>
              <div className="space-y-6">
                <p className="text-white/80 text-base leading-relaxed">
                  The organisations with the strongest reputations treat
                  reputation management as an ongoing strategic investment, the
                  same way they treat financial management or legal risk. They
                  maintain relationships with senior communications advisors
                  before they need them urgently. They conduct regular
                  vulnerability assessments. They test their crisis plans. They
                  build and sustain stakeholder trust deliberately.
                </p>
                <p className="text-white/80 text-base leading-relaxed">
                  CRC PR works as a long-term reputation partner for
                  organisations that have made this decision. We are not a firm
                  you call when something goes wrong. We are the firm you retain
                  so that when something does go wrong, and it will, you are
                  already prepared.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
                    <p className="font-sans font-semibold text-white text-sm mb-1">
                      Ongoing assessment
                    </p>
                    <p className="text-white/65 text-xs leading-relaxed">
                      Risks are reviewed before they become events.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
                    <p className="font-sans font-semibold text-white text-sm mb-1">
                      Prepared leadership
                    </p>
                    <p className="text-white/65 text-xs leading-relaxed">
                      Plans, messages, and advisors are already in place.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
                    <p className="font-sans font-semibold text-white text-sm mb-1">
                      Deliberate trust-building
                    </p>
                    <p className="text-white/65 text-xs leading-relaxed">
                      Reputation is managed as a standing leadership function.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

      <InlineEnquirySection
        title="Concerned about where your organisation is exposed?"
        body="If your board, executive team, or communications function needs a clearer view of reputation risk, we can help you assess the pressure points before they become a recovery project."
        bullets={[
          "Leadership-level reputation risk assessment",
          "Stakeholder and media exposure review",
          "Recovery advice for damaged trust environments",
        ]}
        defaultMessage="We would like confidential advice on our organisation's reputation risk and next steps."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about reputation management"
      />

      <PageClosingCTA
        title="Reputation damage is easier to prevent than to reverse."
        body="CRC PR works with organisations that want a realistic view of where they are exposed, what needs to be strengthened, and what their leadership team should do next."
        primaryLabel="DISCUSS YOUR REPUTATION MANAGEMENT NEEDS"
      />
    </>
  );
}
