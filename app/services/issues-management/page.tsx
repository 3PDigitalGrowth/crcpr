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
import { T } from "@/components/editable";

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
                <T id="services-issues-management.t1">
                Issues management
                </T>
              </p>
              <h1 className="font-heading font-black text-white text-4xl md:text-[56px] leading-[1.02] max-w-4xl">
                <T id="services-issues-management.t2">
                Get ahead of the issue before the media does.
                </T>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mt-6 max-w-2xl">
                <T id="services-issues-management.t3">
                We help you identify, monitor, and strategically manage emerging
                issues before they reach crisis point. Experienced counsel
                available nationally.
                </T>
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
                >
                  <T id="services-issues-management.t4">
                  Book a consultation
                  </T>
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
              <p className="text-white/35 text-xs mb-4"><T id="services-issues-management.t52">Direct strategic counsel</T></p>
              <div className="space-y-4">
                <div>
                  <p className="font-heading font-black text-brand-gold text-2xl">
                    {siteConfig.stats.yearsTrading}
                  </p>
                  <p className="text-white/60 text-sm">
                    <T id="services-issues-management.t5">
                    Years serving organisations across Australia and the Pacific
                    </T>
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
              <T id="services-issues-management.t6">
              Why CRC Public Relations
              </T>
            </p>
            <h2 className="font-heading font-black text-white text-3xl">
              <T id="services-issues-management.t7">
              The cost of delay is almost always higher than the cost of early
              action.
              </T>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {proofItems.map((item, __ti) => (
              <div
                key={`${item.label}-${item.value}`}
                className="border border-white/10 bg-white/[0.03] rounded-lg p-6"
              >
                <p className="text-brand-gold text-xs font-medium mb-3">
                  <T id={`services-issues-management.proofItems.${__ti}.label`}>{item.label}</T>
                </p>
                <p className="font-heading font-black text-white text-2xl">
                  <T id={`services-issues-management.proofItems.${__ti}.value`}>{item.value}</T>
                </p>
                <p className="text-sm leading-relaxed mt-3 text-white/60">
                  <T id={`services-issues-management.proofItems.${__ti}.detail`}>{item.detail}</T>
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
                <T id="services-issues-management.t8">
                Escalation window
                </T>
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                <T id="services-issues-management.t9">
                An issue is not a crisis. Strategic management ensures it
                doesn&apos;t become one.
                </T>
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-issues-management.t10">
                  Most organisational crises are not sudden events. They are
                  issues that were allowed to escalate: a complaint that
                  wasn&apos;t handled correctly, a management mistake, a missed
                  vulnerability, an oversight, a client who became a public
                  critic, a social media post that was ignored, a staff
                  complaint that became a media story. The difference between
                  an issue and a crisis is almost always time, and the strategic
                  choices made within that time.
                  </T>
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-issues-management.t11">
                  We work in the space between an emerging issue and a full
                  crisis, providing the counsel, monitoring capability, and
                  stakeholder management that can arrest an escalation before it
                  becomes unmanageable.
                  </T>
                </p>
              </div>
              <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8 mt-8">
                <p className="text-brand-teal text-xs font-medium mb-5">
                  <T id="services-issues-management.t12">
                  What changes the outcome
                  </T>
                </p>
                <div className="space-y-4">
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      <T id="services-issues-management.t13">
                      Earlier recognition
                      </T>
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      <T id="services-issues-management.t14">
                      Spotting the reputational dimension before it becomes public
                      or formalised.
                      </T>
                    </p>
                  </div>
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      <T id="services-issues-management.t15">
                      Better sequencing
                      </T>
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      <T id="services-issues-management.t16">
                      Engaging leadership, stakeholders, and external audiences in
                      the right order.
                      </T>
                    </p>
                  </div>
                  <div className="border-l-[3px] border-brand-gold pl-4">
                    <p className="font-sans font-semibold text-navy text-sm mb-1">
                      <T id="services-issues-management.t17">
                      Judgement under pressure
                      </T>
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      <T id="services-issues-management.t18">
                      Making decisions that reduce escalation rather than amplify
                      it.
                      </T>
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
                <T id="services-issues-management.t19">
                Common engagements
                </T>
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-6 leading-tight">
                <T id="services-issues-management.t20">
                What issues require our services?
                </T>
              </h2>
              <div className="space-y-5">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-issues-management.t21">
                  Any issue that can escalate into a crisis that stops business
                  as usual and threatens material impact on your operations,
                  reputation, and bottom line. These can be in any form.
                  </T>
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-issues-management.t22">
                  The best way to identify potential impact is to seek external
                  communications counsel. Internal management and staff are
                  often too close to the situation to clearly evaluate the
                  potential, and an outside perspective is vital.
                  </T>
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-issues-management.t23">
                  It is common to both over-estimate and under-estimate the
                  possible ramifications of an issue.
                  </T>
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-white p-6 md:p-7">
              <p className="text-brand-teal text-xs font-medium mb-4">
                <T id="services-issues-management.t24">
                Why these matter
                </T>
              </p>
              <p className="text-charcoal-mid text-sm leading-relaxed">
                <T id="services-issues-management.t25">
                Each of these issues can still be managed early, but once the tone,
                visibility, or stakeholder coordination changes, the cost of
                containment rises sharply.
                </T>
              </p>
            </aside>
          </div>

          <p className="text-brand-gold text-xs font-medium mt-14 mb-5">
            <T id="services-issues-management.t26">
            Common categories, in order
            </T>
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
            <T id="services-issues-management.t27">
            What happens next
            </T>
          </p>
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            <T id="services-issues-management.t28">
            What issues management looks like in practice
            </T>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                <T id="services-issues-management.t29">
                Issue identification, evaluation, and monitoring
                </T>
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                <T id="services-issues-management.t30">
                The first step is for us to evaluate the possibility of both
                escalation and containment, and the potential ramifications and
                reputational damage. This requires detailed information and
                regular updates from you, while we will also actively monitor
                media and social media. Once we are aware of the situation,
                stakeholder and media activity, and other relevant factors, we
                can create an effective strategy to deal with the issue.
                </T>
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                <T id="services-issues-management.t31">
                Stakeholder strategic engagement
                </T>
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                <T id="services-issues-management.t32">
                Every issue has a stakeholder landscape: the groups whose
                reaction to the issue will determine its trajectory. We map
                these stakeholders, assess their likely positions, and design
                engagement strategies that either contain the issue or build
                the coalitions needed to manage it. Many issues can avoid
                external media attention through effective stakeholder
                communication, while others require media management.
                </T>
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                <T id="services-issues-management.t33">
                Messaging development
                </T>
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                <T id="services-issues-management.t34">
                While you can&apos;t control what others say, you can take
                control of your own narrative. While you deal with the
                operational side of an issue, we create a consistent position
                that supports your actions and prevents or minimises further
                escalation, with messaging that is authentic and able to be
                held to scrutiny. We develop that position and, if needed,
                prepare your spokespeople to deliver it with authority.
                </T>
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                <T id="services-issues-management.t35">
                Escalation protocols and crisis readiness
                </T>
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                <T id="services-issues-management.t36">
                While the overwhelming majority of issues are contained,
                we&apos;ve learnt by experience to expect the unexpected. We
                create a strategy that prepares your leadership team for any
                escalation, new information, or actions of others. This way,
                if a situation escalates, your organisation responds with
                discipline rather than improvisation.
                </T>
              </p>
            </div>
          </div>
        </div>
      </section>

      <InlineEnquirySection copyId="services-issues-management"
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
                <T id="services-issues-management.t37">
                Predictability matters
                </T>
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-6 leading-tight">
                <T id="services-issues-management.t38">
                Most crises were predictable
                </T>
              </h2>
              <div className="space-y-6">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-issues-management.t39">
                  Drawing on extensive crisis communications experience, CRC
                  Public Relations co-founder Lyall Mercer has consistently
                  observed that many significant reputation events were
                  predictable, not in their exact form, but in their general
                  shape.
                  </T>
                </p>
              </div>

              <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8 mt-8">
                <p className="text-brand-teal text-xs font-medium mb-4">
                  <T id="services-issues-management.t40">
                  In Lyall Mercer&apos;s words
                  </T>
                </p>
                <blockquote className="border-l-[3px] border-brand-gold pl-5 font-heading font-black text-navy text-lg md:text-xl leading-snug">
                  <T id="services-issues-management.t41">
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
                  </T>
                </blockquote>
                <p className="mt-4 pl-5 text-charcoal-mid text-sm font-sans font-medium">
                  <T id="services-issues-management.t42">
                  Lyall Mercer, CRC Public Relations co-founder
                  </T>
                </p>
              </aside>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-issues-management.t43">
                  The organisations that manage issues successfully are not
                  lucky. They have invested in the right advice, monitoring
                  systems, stakeholder relationships, and a culture of seeking
                  communications counsel early, not after the story breaks.
                  </T>
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-issues-management.t44">
                  Retaining CRC Public Relations for issues management is not
                  an admission that your organisation has a problem. It is a
                  recognition that every organisation has potential issues, and
                  that the cost of managing them proactively is a fraction of
                  the cost of managing them once they have become crises.
                  </T>
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                <T id="services-issues-management.t45">
                Key distinction
                </T>
              </p>
              <h3 className="font-heading font-black text-navy text-xl mb-4">
                <T id="services-issues-management.t46">
                Issues management is not the same as crisis communications
                </T>
              </h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-brand-border bg-white p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-issues-management.t47">
                    Issues management
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="services-issues-management.t48">
                    Proactive work while the matter is still developing and the
                    outcome is still shapeable.
                    </T>
                  </p>
                </div>
                <div className="rounded-lg border border-brand-border bg-white p-5">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-issues-management.t49">
                    Crisis communications
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="services-issues-management.t50">
                    Reactive work once the event is public and the organisation
                    is under active pressure.
                    </T>
                  </p>
                </div>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-issues-management.t51">
                  CRC Public Relations provides both. But the organisations that need crisis
                  communications least are the ones that have invested most in
                  issues management.
                  </T>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="crisisReadinessChecklist"
        variant="dark"
        whatYouGetBody="The essential crisis readiness checklist — 30 questions with an action plan for every gap."
        highlights={[
          "30 questions across readiness areas",
          "Action plan guidance for every gap",
          "Used by Australian leadership teams",
        ]}
      />

      <FAQSection copyId="services-issues-management"
        items={faqs}
        titleText="Common questions about issues management"
        expandable={false}
      />

      <PageClosingCTA copyId="services-issues-management"
        title="Watching an issue develop? Do not wait for public escalation."
        body="The organisations that handle issues best engage communications counsel while the situation is still shapeable. If you are seeing early warning signs, we can help you assess the exposure and decide what to do next."
      />
    </>
  );
}
