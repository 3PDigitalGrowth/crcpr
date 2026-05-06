import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageTextRow } from "@/components/layout/ImageTextRow";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PAGE_HERO_ASIDES } from "@/config/pageHeroAsides";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Issues Management PR Australia | CRC Public Relations",
  description:
    "Proactive issues management for organisations facing emerging media, regulatory, or stakeholder threats. Specialist PR counsel in Brisbane, available nationally. Call 1300 182 186.",
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
    label: "Stakeholder focus",
    value: "Prioritised messaging",
    detail:
      "We discuss and identify who matters most and what communication sequence will reduce escalation.",
  },
  {
    label: "Outside perspective",
    value: "Evaluation of impact",
    detail:
      "We provide invaluable, objective outside input that evaluates the potential of escalation, meaning the right strategy is taken.",
  },
] as const;

const faqs = [
  {
    question: "How do we know whether a matter is still an issue or already a crisis?",
    answer:
      "It depends on the scale of impact and your organisation's capacity for effective response. An issue can be handled by the management team while the organisation continues its normal operations without major disruption. A crisis stops business as usual to some extent, requires immediate escalation to leadership, and threatens material impact on people, operations, public reputation, and finances.",
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
  const aside = PAGE_HERO_ASIDES.strategicIntegrated;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Unified hero: image, title & aside, proof strip */}
      <section
        id="hero-section"
        className="relative overflow-hidden bg-navy border-b border-white/5"
      >
        <div
          className="absolute inset-x-0 top-0 h-[560px] md:h-[720px] pointer-events-none"
          aria-hidden
        >
          <Image
            src="/images/services/issues-management/hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,43,74,0.72)] via-[rgba(26,43,74,0.92)] to-[#1A2B4A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 md:pt-24 pb-12 md:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-end">
            <div className="max-w-4xl">
              <p className="text-brand-gold font-sans font-medium text-xs mb-4">
                Issues management
              </p>
              <h1 className="font-heading font-black text-white text-4xl md:text-[56px] leading-[1.02] max-w-4xl">
                Get ahead of the issue before the media does.
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mt-6 max-w-2xl">
                We help you identify, monitor, and strategically manage emerging
                issues before they reach crisis point. Experienced counsel
                available nationally.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
                >
                  Book a consultation
                </Link>
                <a
                  href={siteConfig.phone.href}
                  className="text-brand-gold text-sm font-heading font-black hover:text-gold-light transition-colors"
                >
                  Or call {siteConfig.phone.display}
                </a>
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.03] rounded-lg p-6 backdrop-blur-[2px]">
              <p className="text-white/35 text-xs mb-4">Direct strategic counsel</p>
              <div className="space-y-4">
                <div>
                  <p className="font-heading font-black text-brand-gold text-2xl">
                    {siteConfig.stats.yearsTrading}
                  </p>
                  <p className="text-white/60 text-sm">
                    Years serving organisations across Australia and the Pacific
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="font-heading font-black text-white text-lg">
                    {aside.title}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mt-1">
                    {aside.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="h-px bg-white/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 md:pt-14 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-sans font-medium text-xs mb-4">
              Why CRC Public Relations
            </p>
            <h2 className="font-heading font-black text-white text-3xl">
              The cost of delay is almost always higher than the cost of early
              action.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {proofItems.map((item) => (
              <div
                key={`${item.label}-${item.value}`}
                className="border border-white/10 bg-white/[0.03] rounded-lg p-6"
              >
                <p className="text-brand-gold text-xs font-medium mb-3">
                  {item.label}
                </p>
                <p className="font-heading font-black text-white text-2xl">
                  {item.value}
                </p>
                <p className="text-sm leading-relaxed mt-3 text-white/60">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ImageTextRow
            imageSrc="/images/services/issues-management/escalation-window.png"
            imageAlt="Close-up of an executive's hands annotating a printed stakeholder briefing document at a walnut desk in warm afternoon light, with a stakeholder map diagram, analogue desk clock, laptop showing a muted dashboard, and coffee cup visible — suggesting calm strategic assessment during the escalation window before an issue becomes a crisis"
            imagePosition="left"
          >
            <div className="max-w-3xl lg:max-w-none">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Escalation window
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                An issue is not a crisis. Strategic management ensures it
                doesn&apos;t become one.
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Most organisational crises are not sudden events. They are
                  issues that were allowed to escalate: a complaint that
                  wasn&apos;t handled correctly, a management mistake, a missed
                  vulnerability, an oversight, a client who became a public
                  critic, a social media post that was ignored, a staff
                  complaint that became a media story. The difference between
                  an issue and a crisis is almost always time, and the strategic
                  choices made within that time.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  We work in the space between an emerging issue and a full
                  crisis, providing the counsel, monitoring capability, and
                  stakeholder management that can arrest an escalation before it
                  becomes unmanageable.
                </p>
              </div>
              <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8 mt-8">
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
                      Judgement under pressure
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      Making decisions that reduce escalation rather than amplify
                      it.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </ImageTextRow>
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
                What issues require our services?
              </h2>
              <div className="space-y-5">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Any issue that can escalate into a crisis that stops business
                  as usual and threatens material impact on your operations,
                  reputation, and bottom line. These can be in any form.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  The best way to identify potential impact is to seek external
                  communications counsel. Internal management and staff are
                  often too close to the situation to clearly evaluate the
                  potential, and an outside perspective is vital.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  It is common to both over-estimate and under-estimate the
                  possible ramifications of an issue.
                </p>
              </div>
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

          <p className="text-brand-gold text-xs font-medium mt-14 mb-5">
            Common categories, in order
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Staff or whistleblower matters",
                body: "Staff or whistleblower complaints or allegations with a clear reputational dimension",
              },
              {
                title: "Community or member opposition",
                body: "Community or member concerns including social media complaints, online reviews, or opposition that is escalating",
              },
              {
                title: "Emerging media pattern",
                body: "A pattern of media enquiries that suggests a larger story is building",
              },
              {
                title: "Regulatory attention",
                body: "Regulatory attention or correspondence starting to change tone",
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
                Issue identification, evaluation, and monitoring
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                The first step is for us to evaluate the possibility of both
                escalation and containment, and the potential ramifications and
                reputational damage. This requires detailed information and
                regular updates from you, while we will also actively monitor
                media and social media. Once we are aware of the situation,
                stakeholder and media activity, and other relevant factors, we
                can create an effective strategy to deal with the issue.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Stakeholder strategic engagement
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Every issue has a stakeholder landscape: the groups whose
                reaction to the issue will determine its trajectory. We map
                these stakeholders, assess their likely positions, and design
                engagement strategies that either contain the issue or build
                the coalitions needed to manage it. Many issues can avoid
                external media attention through effective stakeholder
                communication, while others require media management.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Messaging development
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                While you can&apos;t control what others say, you can take
                control of your own narrative. While you deal with the
                operational side of an issue, we create a consistent position
                that supports your actions and prevents or minimises further
                escalation, with messaging that is authentic and able to be
                held to scrutiny. We develop that position and, if needed,
                prepare your spokespeople to deliver it with authority.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Escalation protocols and crisis readiness
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                While the overwhelming majority of issues are contained,
                we&apos;ve learnt by experience to expect the unexpected. We
                create a strategy that prepares your leadership team for any
                escalation, new information, or actions of others. This way,
                if a situation escalates, your organisation responds with
                discipline rather than improvisation.
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
                Most crises were predictable
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Drawing on extensive crisis communications experience, CRC
                  Public Relations co-founder Lyall Mercer has consistently
                  observed that many significant reputation events were
                  predictable, not in their exact form, but in their general
                  shape.
                </p>
              </div>

              <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8 mt-8">
                <p className="text-brand-teal text-xs font-medium mb-4">
                  In Lyall Mercer&apos;s words
                </p>
                <blockquote className="border-l-[3px] border-brand-gold pl-5 font-heading font-black text-navy text-lg md:text-xl leading-snug">
                  &ldquo;There have been multiple occasions when I have
                  predicted a crisis years before it happened, because I could
                  clearly recognise the risk, yet the client at the time
                  didn&apos;t listen or act. Then when it all went wrong, I was
                  called upon to lead the client through the crisis that they
                  shouldn&apos;t have even had to deal with. I can only provide
                  my counsel. In the end, it&apos;s the client&apos;s decision
                  to act. But I can state with absolute authority that if in
                  these situations the clients had acted, it would have saved
                  them massive losses. In one case, I&apos;m talking about more
                  than one hundred million dollars in lost revenue and
                  extensive international reputational damage.&rdquo;
                </blockquote>
                <p className="mt-4 pl-5 text-charcoal-mid text-sm font-sans font-medium">
                  Lyall Mercer, CRC Public Relations co-founder
                </p>
              </aside>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  The organisations that manage issues successfully are not
                  lucky. They have invested in the right advice, monitoring
                  systems, stakeholder relationships, and a culture of seeking
                  communications counsel early, not after the story breaks.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Retaining CRC Public Relations for issues management is not
                  an admission that your organisation has a problem. It is a
                  recognition that every organisation has potential issues, and
                  that the cost of managing them proactively is a fraction of
                  the cost of managing them once they have become crises.
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
              </div>
            </aside>
          </div>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="crisisPlanTemplate"
        variant="dark"
        title="Does your organisation have an escalation protocol for emerging issues?"
        description="Download the CRC Public Relations Crisis Communications Plan Template. It includes the escalation framework and decision triggers our issues-management clients use to decide when a developing matter can still be contained and when it requires immediate leadership response."
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
        expandable={false}
      />

      <PageClosingCTA
        title="Watching an issue develop? Do not wait for public escalation."
        body="The organisations that handle issues best engage communications counsel while the situation is still shapeable. If you are seeing early warning signs, we can help you assess the exposure and decide what to do next."
      />
    </>
  );
}
