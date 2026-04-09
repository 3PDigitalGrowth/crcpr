import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title:
    "Corporate Communications Consultant Australia | CRC Public Relations",
  description:
    "Senior-level corporate communications counsel for companies, government departments, and associations. Stakeholder engagement, media relations, executive messaging. Brisbane-based, available nationally.",
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
  { label: "Companies & family businesses", href: "/clients/corporate" },
  { label: "Government departments", href: "/clients/government" },
  {
    label: "Industry associations",
    href: "/clients/industry-associations",
  },
  { label: "Legal and professional services", href: "/contact" },
];

const proofItems = [
  {
    label: "Board confidence",
    value: "Senior-led",
    detail:
      "Every engagement is led by a senior adviser who understands board scrutiny, market sensitivity, and stakeholder risk.",
  },
  {
    label: "Communication discipline",
    value: "Message first",
    detail:
      "We build messaging frameworks that hold across leadership, media, staff, regulators, and critical external stakeholders.",
  },
  {
    label: "Real-world pressure",
    value: "High-stakes ready",
    detail:
      "We support sensitive announcements, leadership transitions, difficult stakeholder matters, and media-facing moments where precision matters.",
  },
] as const;

const faqs = [
  {
    question: "When should an organisation bring in external corporate communications counsel?",
    answer:
      "Usually earlier than leadership expects. The best time is before a board decision becomes public, before a stakeholder issue hardens, and before an executive appearance or announcement is locked in. External counsel is most valuable when message architecture, sequencing, and stakeholder reaction still have room to be shaped.",
  },
  {
    question: "Do you work directly with boards, CEOs, and general counsel?",
    answer:
      "Yes. CRC Public Relations is structured around direct senior access. We routinely support chairs, CEOs, general counsel, and executive teams on matters where governance, reputation, and communication are tightly connected.",
  },
  {
    question: "What kinds of matters does corporate communications support usually cover?",
    answer:
      "Typical matters include leadership transitions, restructures, major announcements, difficult stakeholder issues, sensitive internal communications, market-facing messaging, and communications planning around regulatory or public scrutiny. The common factor is that the message needs to hold under pressure.",
  },
  {
    question: "How is this different from a larger PR agency retainer?",
    answer:
      "The difference is direct access and judgement. At CRC Public Relations, the people you brief are the people doing the advisory work. There is no junior handoff and no large account structure sitting between leadership and the advice.",
  },
];

export default function CorporateCommunicationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Corporate communications"
        title="Corporate communications that build trust and protect value."
        description="We work directly with your leadership team to ensure every message, whether to the board, staff, stakeholders, or media, is precise, credible, and effective. You deal with experienced senior advisers, not account managers."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="Corporate communications is not content production. It is strategic control."
        items={[...proofItems]}
      />

      {/* High-clarity explainer */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Strategic clarity
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Effective corporate communications is about control, consistency,
                and strategic intent.
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Effective corporate communications is not about volume. It is
                  about clarity, consistency, and strategic intent, ensuring
                  that every message, from every channel, reinforces your
                  organisation&apos;s authority and the confidence your
                  stakeholders place in your leadership.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  The challenge for most organisations is that corporate
                  communications becomes reactive. Announcements are drafted in
                  a hurry. Media enquiries are handled without a strategy.
                  Stakeholder relationships are maintained informally, without
                  structure. The result is a communications function that
                  responds to events rather than shapes them.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  We work with your leadership team to build the systems,
                  strategies, and capabilities that shift communications from
                  reactive to proactive, ensuring every significant
                  communication is considered, consistent, and designed to
                  achieve a specific outcome.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                What strong corporate communications looks like
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Message discipline
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Leadership, media, staff, and stakeholder communications all
                    support the same strategic position.
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Planned sequencing
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The right audiences hear the right message in the right
                    order, before pressure starts to define the narrative.
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Senior oversight
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Important communications are shaped with judgement, not
                    improvised under time pressure.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Process section moved earlier to match crisis flow */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold font-sans font-medium text-xs mb-4">
            When you engage CRC Public Relations
          </p>
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            How a corporate communications engagement begins
          </h2>
          <p className="max-w-2xl text-charcoal text-[15px] leading-relaxed">
            The immediate objective is not more communications activity. It is a clearer
            picture of what your organisation needs to say, to whom, in what order, and
            under what level of scrutiny. That discipline is what prevents sensitive
            communications work from becoming reactive, inconsistent, or unnecessarily exposed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white border border-brand-border rounded-lg p-6">
              <span className="text-brand-gold font-heading font-black text-2xl">
                1
              </span>
              <h3 className="font-heading font-black text-navy text-xl mb-3 mt-3">
                Situation assessment
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                We assess your communications posture, stakeholder landscape, current
                messages, and the specific decision or pressure point your leadership
                team is navigating.
              </p>
            </div>

            <div className="bg-white border border-brand-border rounded-lg p-6">
              <span className="text-brand-gold font-heading font-black text-2xl">
                2
              </span>
              <h3 className="font-heading font-black text-navy text-xl mb-3 mt-3">
                Message and stakeholder sequence
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                We define the messages that need to hold across leadership, staff,
                media, regulators, and other critical stakeholders, then sequence those
                communications so confidence is built rather than diluted.
              </p>
            </div>

            <div className="bg-white border border-brand-border rounded-lg p-6">
              <span className="text-brand-gold font-heading font-black text-2xl">
                3
              </span>
              <h3 className="font-heading font-black text-navy text-xl mb-3 mt-3">
                Ongoing senior counsel
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                We stay close to the matter, reviewing drafts, preparing spokespeople,
                pressure-testing language, and advising leadership as the situation
                evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InlineEnquirySection
        title="Need senior communications counsel on a sensitive matter?"
        body="Use this form if you are preparing a significant announcement, managing a board or stakeholder issue, or want an experienced external adviser to review your communications posture before the pressure arrives."
        bullets={[
          "Executive and board communication support",
          "Stakeholder engagement planning and message discipline",
          "Sensitive media and internal communication advice",
        ]}
        defaultMessage="We need senior corporate communications support for an upcoming matter."
      />

      {/* Service detail */}
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
                major change programmes, regulatory processes, and periods of
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
                programmes that keep your workforce informed, aligned, and
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

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_360px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Common failure point
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-6 leading-tight">
                Where corporate communications usually breaks down
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Most organisations do not suffer from a complete lack of
                  communication activity. They suffer from fragmentation. The
                  board is briefed one way. Staff hear something slightly
                  different. External stakeholders receive a message shaped by
                  operational convenience rather than strategic intent. Media
                  responses are drafted under time pressure and end up sounding
                  defensive or incomplete.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  That fragmentation is expensive. It weakens confidence,
                  complicates leadership decision-making, and creates avoidable
                  risk around major announcements, disputes, restructures, and
                  sensitive governance matters. The firms winning trust in
                  difficult environments are the ones that treat corporate
                  communications as a disciplined leadership function, not an
                  afterthought once the decision has already been made.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                Signs communication has fragmented
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Inconsistent internal and external messaging
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Different audiences hear different versions of the same
                    decision, which weakens trust quickly.
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Reactive media handling
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Responses are shaped by urgency and exposure, not by a clear
                    strategic position.
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Leadership decisions lose force
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Good decisions still underperform when the communications
                    discipline behind them is weak.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-lg border border-brand-border bg-off-white p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-10 items-start">
              <div className="rounded-lg bg-navy p-6 md:p-7">
                <p className="text-brand-gold text-xs font-medium mb-4">
                  CRC Public Relations model
                </p>
                <h2 className="font-heading font-black text-white text-2xl leading-tight mb-4">
                  Senior counsel, not account management
                </h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Sensitive communications work needs direct access to judgement,
                  accountability, and experienced strategic advice.
                </p>
              </div>

              <div className="max-w-3xl">
                <div className="space-y-6">
                  <p className="text-charcoal text-[15px] leading-relaxed">
                    The difference between CRC Public Relations and a larger agency is not
                    size. It is access. At most large PR firms, you brief a
                    senior person and are then handed to a team of account
                    managers and junior staff who execute the work. Your senior
                    contact becomes a figurehead rather than an adviser.
                  </p>
                  <p className="text-charcoal text-[15px] leading-relaxed">
                    At CRC Public Relations, every engagement is led by an experienced senior
                    adviser from start to finish. You work directly with the
                    person who has the expertise, the judgment, and the
                    accountability for the outcome. This is not a service model
                    we stumbled into. It is a deliberate choice. It is why our
                    client satisfaction rate is 100%.
                  </p>
                  <p className="text-charcoal text-[15px] leading-relaxed">
                    For organisations dealing with sensitive communications
                    challenges, whether a board transition, a difficult
                    stakeholder relationship, or a market-sensitive
                    announcement, this direct access to senior counsel is not a
                    preference. It is a requirement.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="rounded-lg bg-white border border-brand-border p-5">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Direct senior access
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      The adviser you brief is the adviser shaping the work.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white border border-brand-border p-5">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Consistent judgement
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Strategic direction does not get diluted through layers of
                      delegation.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white border border-brand-border p-5">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      Clear accountability
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      One senior team owns the thinking, the advice, and the
                      outcome.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof and next-step resource */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-sans font-medium text-xs mb-4">
              Related sectors
            </p>
            <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
              Sector experience that shapes the advice.
            </h2>
            <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
              CRC Public Relations has delivered corporate communications programmes across a
              range of high-stakes sectors. Explore the pages below to see how
              our approach changes when the operating environment, stakeholder
              pressure, and communications risks are different.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {sectorLinks.map((sector) => (
              <Link
                key={sector.label}
                href={sector.href}
                className="rounded-xl border border-brand-border bg-white p-5 text-sm text-charcoal-mid hover:border-brand-gold hover:text-navy hover:-translate-y-0.5 transition"
              >
                <p className="font-sans font-semibold text-navy text-base leading-snug">
                  {sector.label}
                </p>
                <p className="text-charcoal-mid text-sm mt-2">
                  Explore CRC Public Relations&apos; sector-specific communications approach.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="crisisPlanTemplate"
        variant="dark"
        title="Is your organisation's communications strategy ready for scrutiny?"
        description="Download the CRC Public Relations Crisis Communications Plan Template, the framework we use with listed companies, government departments, and associations to define escalation pathways, stakeholder sequencing, and message discipline before pressure arrives."
        highlights={[
          "Useful for boards and executive teams",
          "Clarifies escalation and approval pathways",
          "Built for real stakeholder pressure",
        ]}
        whatYouGetBody="A practical framework for leadership teams that need stronger communications control before the next sensitive matter becomes public."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about corporate communications support"
      />

      <PageClosingCTA
        title="Ready to build a communications strategy that holds up under pressure?"
        body="Whether you are preparing for a major announcement, navigating a sensitive stakeholder situation, or building long-term communications capability, CRC Public Relations provides direct access to senior counsel from the first conversation."
      />
    </>
  );
}
