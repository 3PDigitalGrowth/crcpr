import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title: "Issues Management PR Australia | CRC Public Relations",
  description:
    "Proactive issues management for organisations facing emerging media, regulatory, or stakeholder threats. Senior PR counsel in Brisbane, available nationally. Call 1300 182 186.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Issues Management",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Proactive issues management and strategic counsel for organisations facing emerging media, regulatory, or stakeholder threats across Australia.",
  areaServed: "AU",
  serviceType: "Issues Management Consulting",
};

const proofItems = [
  {
    label: "Timing advantage",
    value: "Earlier intervention",
    detail:
      "The earlier a developing issue is assessed, the more options leadership retains to shape the outcome.",
  },
  {
    label: "Stakeholder control",
    value: "Mapped and prioritised",
    detail:
      "We identify who matters most, how they are likely to move, and what communication sequence will reduce escalation.",
  },
  {
    label: "Escalation discipline",
    value: "Clear thresholds",
    detail:
      "Issues management works best when leadership knows exactly when a matter stays internal and when it becomes a crisis response.",
  },
] as const;

const faqs = [
  {
    question: "How do we know whether a matter is still an issue or already a crisis?",
    answer:
      "The distinction usually comes down to public exposure, pace, and stakeholder consequences. If a matter is still shapeable, with time to assess exposure, align messages, and engage key stakeholders before the story hardens, it is usually still an issues-management engagement. If the matter is already public and media or stakeholder pressure is active, it has likely crossed into crisis response.",
  },
  {
    question: "What does CRC Public Relations actually do in an issues-management engagement?",
    answer:
      "We assess the exposure, map the stakeholder environment, define escalation thresholds, develop defensible messaging, and advise leadership on the communication sequence most likely to reduce escalation. The work is both strategic and practical.",
  },
  {
    question: "Can issues management help even if the organisation is already under some scrutiny?",
    answer:
      "Yes. Many matters arrive when the first signals are already visible but the outcome is still shapeable. Early scrutiny does not automatically mean the organisation has lost control. What matters is whether leadership acts with enough speed and discipline from that point.",
  },
  {
    question: "Do you work alongside legal, regulatory, and executive teams?",
    answer:
      "Yes. Issues management is rarely only a communications matter. We often work alongside general counsel, risk teams, executive leadership, and operational stakeholders so the public position is aligned with the wider response.",
  },
];

export default function IssuesManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Issues management"
        title="Get ahead of the issue before the media does."
        description="Proactive identification, monitoring, and strategic management of emerging issues, before they reach crisis point. Senior counsel available nationally."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="The cost of delay is almost always higher than the cost of early action."
        items={[...proofItems]}
      />

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Escalation window
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                An issue is not yet a crisis. Strategic management is what keeps
                it that way.
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Most organisational crises are not sudden events. They are
                  issues that were allowed to escalate: a regulatory concern
                  that became a formal inquiry, a staff complaint that became a
                  media story, a community concern that became an organised
                  campaign. The difference between an issue and a crisis is
                  almost always time, and the strategic choices made within that
                  time.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  CRC Public Relations specialises in the space between an emerging issue and
                  a full crisis, providing the senior counsel, monitoring
                  capability, and stakeholder management that can arrest an
                  escalation before it becomes unmanageable.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                What changes the outcome
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Earlier recognition
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Spotting the reputational dimension before it becomes public
                    or formalised.
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Better sequencing
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Engaging leadership, stakeholders, and external audiences in
                    the right order.
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Senior judgement under pressure
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Making decisions that reduce escalation rather than amplify
                    it.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Common engagements
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-6 leading-tight">
                Typical issues we are engaged to contain
              </h2>
              <p className="text-charcoal text-[15px] leading-relaxed">
                The most damaging issues are rarely the loudest at the start. They
                usually begin as patterns, shifts in tone, or early signals that a
                matter is becoming harder to contain.
              </p>
            </div>

            <aside className="rounded-lg border border-brand-border bg-white p-6 md:p-7">
              <p className="text-brand-teal text-xs font-medium mb-4">
                Why these matter
              </p>
              <p className="text-charcoal-mid text-sm leading-relaxed">
                Each of these issues can still be managed early, but once the tone,
                visibility, or stakeholder coordination changes, the cost of
                containment rises sharply.
              </p>
            </aside>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              {
                title: "Regulatory attention",
                body: "Regulatory attention or correspondence starting to change tone",
              },
              {
                title: "Staff or whistleblower matters",
                body: "Staff or whistleblower complaints with a clear reputational dimension",
              },
              {
                title: "Community or member opposition",
                body: "Community or member concerns moving from private frustration to organised opposition",
              },
              {
                title: "Emerging media pattern",
                body: "A pattern of media enquiries that suggests a larger story is building",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className="rounded-lg border border-brand-border bg-white p-6 md:p-7 shadow-[0_12px_40px_rgba(10,22,40,0.04)]"
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="h-[2px] w-16 bg-brand-gold rounded-full" aria-hidden="true" />
                  <p className="text-brand-gold font-heading font-black text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="font-heading font-black text-navy text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* High-clarity process section earlier in flow */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold font-sans font-medium text-xs mb-4">
            What happens next
          </p>
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            What issues management looks like in practice
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Issue identification and environmental scanning
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                We conduct systematic monitoring of media, social media,
                government activity, regulatory correspondence, and stakeholder
                behaviour to identify the signals that indicate an emerging
                issue. Most issues announce themselves through patterns of media
                enquiry, regulatory letters, or shifts in stakeholder sentiment
                well before they become public. We are watching for those signals
                on your behalf.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Stakeholder mapping and strategic engagement
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Every issue has a stakeholder landscape: the groups whose
                reaction to the issue will determine its trajectory. We map
                these stakeholders, assess their likely positions, and design
                engagement strategies that either contain the issue or build the
                coalitions needed to manage it. Getting to key stakeholders
                before media do is often the single most important action in
                issues management.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Messaging development and narrative control
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                When an issue is developing, your organisation needs a
                consistent, defensible position, one that can be held under
                media scrutiny, in front of regulators, and in conversations
                with your board. We develop that position, test it against the
                hardest questions, and prepare your spokespeople to deliver it
                with authority.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Escalation protocols and crisis readiness
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                The transition from issue to crisis is rarely clean. We build
                escalation protocols that give your leadership team a clear
                decision framework: the triggers that move a situation from
                issues management to crisis response, and the actions that
                follow each trigger. This way, when a situation escalates, your
                organisation responds with discipline rather than improvisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InlineEnquirySection
        title="Watching something develop?"
        body="If your team is seeing signals that a matter could escalate, engage early. The right response now can prevent unnecessary media, stakeholder, and regulatory pressure later."
        bullets={[
          "Rapid issue assessment and escalation advice",
          "Stakeholder mapping and message discipline",
          "Support before the matter becomes a live crisis",
        ]}
        defaultMessage="We are monitoring an emerging issue and would like confidential advice on next steps."
      />

      {/* Predictability and issue-to-crisis comparison */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_360px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Predictability matters
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-6 leading-tight">
                Eighty per cent of crises were predictable
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  In 25 years of advising organisations through crises, CRC Public Relations
                  founder Lyall Mercer has consistently observed that the vast
                  majority of significant reputation events were predictable,
                  not in their exact form, but in their general shape. They
                  were visible in monitoring data, in stakeholder feedback, in
                  regulatory correspondence, in the pattern of media enquiries
                  that preceded the story.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  The organisations that manage issues successfully are not
                  lucky. They have invested in monitoring systems, stakeholder
                  relationships, and the habit of escalating concerns to senior
                  communications counsel early, not after the story breaks.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Retaining CRC Public Relations for issues management is not an admission
                  that your organisation has a problem. It is a recognition
                  that every organisation has potential issues, and that the
                  cost of managing them proactively is a fraction of the cost of
                  managing them once they have become crises.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                Key distinction
              </p>
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                Issues management is not the same as crisis communications
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-brand-border bg-white p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Issues management
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Proactive work while the matter is still developing and the
                    outcome is still shapeable.
                  </p>
                </div>
                <div className="rounded-lg border border-brand-border bg-white p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Crisis communications
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Reactive work once the event is public and the organisation
                    is under active pressure.
                  </p>
                </div>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  CRC Public Relations provides both. But the organisations that need crisis
                  communications least are the ones that have invested most in
                  issues management.
                </p>
                <Link
                  href="/insights/issues-management-vs-crisis-communications"
                  className="inline-block text-teal text-[15px] font-medium hover:opacity-80 transition"
                >
                  Read our guide to the difference →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="crisisPlanTemplate"
        variant="dark"
        title="Does your organisation have an escalation protocol for emerging issues?"
        description="Download the CRC Public Relations Crisis Communications Plan Template. It includes the escalation framework and decision triggers our issues-management clients use to decide when a developing matter can still be contained and when it requires immediate senior response."
        highlights={[
          "Clarifies issue-to-crisis thresholds",
          "Useful for executive and risk teams",
          "Built around real escalation pressure",
        ]}
        whatYouGetBody="A practical framework for identifying ownership, escalation triggers, stakeholder sequencing, and first-response discipline before the matter becomes public."
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about issues management"
      />

      <PageClosingCTA
        title="Watching an issue develop? Do not wait for public escalation."
        body="The organisations that handle issues best engage senior communications counsel while the situation is still shapeable. If you are seeing early warning signs, we can help you assess the exposure and decide what to do next."
      />
    </>
  );
}
