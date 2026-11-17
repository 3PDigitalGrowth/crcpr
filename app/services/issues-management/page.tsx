import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";
import { FramedPhoto } from "@/components/altkit/media";
import { MEDIA } from "@/components/altkit/data";

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

const categories = [
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
];

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated imagery was dropped. */

const P = "services-issues-management";


export default function IssuesManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        photo={{ src: MEDIA.bandInterviewMicrophones, alt: "A reporter holding a microphone out for an interview" }}
        copyId={P}
        asidePreset="strategicIntegrated"
        eyebrow="Issues management"
        title="Get ahead of the issue before the media does."
        description="We help you identify, monitor, and strategically manage emerging issues before they reach crisis point. Experienced counsel available nationally."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        copyId={P}
        variant="navy"
        title="The cost of delay is almost always higher than the cost of early action."
        items={[...proofItems]}
      />

      {/* ---------- ESCALATION WINDOW ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t8`}>Escalation window</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t9`}>An issue is not a crisis. Strategic management ensures it doesn&apos;t become one.</T>
            </H2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t10`}>
                  Most organisational crises are not sudden events. They are issues that were allowed to escalate: a
                  complaint that wasn&apos;t handled correctly, a management mistake, a missed vulnerability, an
                  oversight, a client who became a public critic, a social media post that was ignored, a staff
                  complaint that became a media story. The difference between an issue and a crisis is almost always
                  time, and the strategic choices made within that time.
                </T>
              </p>
              <p>
                <T id={`${P}.t11`}>
                  We work in the space between an emerging issue and a full crisis, providing the counsel, monitoring
                  capability, and stakeholder management that can arrest an escalation before it becomes
                  unmanageable.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <FramedPhoto src={MEDIA.newsOnPhone} alt="A news site open on a phone in a busy street" className="mb-6" />
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t12`}>What changes the outcome</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t13", "Earlier recognition", "t14", "Spotting the reputational dimension before it becomes public or formalised."],
                  ["t15", "Better sequencing", "t16", "Engaging leadership, stakeholders, and external audiences in the right order."],
                  ["t17", "Judgement under pressure", "t18", "Making decisions that reduce escalation rather than amplify it."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4 first:pt-0 last:pb-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`${P}.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`${P}.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- COMMON ENGAGEMENTS ---------- */}
      <Section tone="base" className="pb-11 pt-4 md:pb-14 md:pt-6">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
            <div>
              <Eyebrow>
                <T id={`${P}.t19`}>Common engagements</T>
              </Eyebrow>
              <H2 className="mt-3">
                <T id={`${P}.t20`}>What issues require our services?</T>
              </H2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
                <p>
                  <T id={`${P}.t21`}>
                    Any issue that can escalate into a crisis that stops business as usual and threatens material
                    impact on your operations, reputation, and bottom line. These can be in any form.
                  </T>
                </p>
                <p>
                  <T id={`${P}.t22`}>
                    The best way to identify potential impact is to seek external communications counsel. Internal
                    management and staff are often too close to the situation to clearly evaluate the potential, and an
                    outside perspective is vital.
                  </T>
                </p>
                <p>
                  <T id={`${P}.t23`}>It is common to both over-estimate and under-estimate the possible ramifications of an issue.</T>
                </p>
              </div>
            </div>
            <Reveal className="lg:pt-10">
              <aside className="kit-r border border-line p-6 md:p-8">
                <Eyebrow>
                  <T id={`${P}.t24`}>Why these matter</T>
                </Eyebrow>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  <T id={`${P}.t25`}>
                    Each of these issues can still be managed early, but once the tone, visibility, or stakeholder
                    coordination changes, the cost of containment rises sharply.
                  </T>
                </p>
              </aside>
            </Reveal>
          </div>

          <p className="kit-display mt-12 text-[15px] uppercase text-accent">
            <T id={`${P}.t26`}>Common categories, in order</T>
          </p>
          <div className="mt-4 border-t border-line">
            {categories.map((item, i) => (
              <div
                key={item.title}
                className="grid gap-2 border-b border-line py-6 md:grid-cols-[3rem,1fr,1.5fr] md:items-baseline md:gap-8"
              >
                <span className="kit-display text-sm text-accent">{`0${i + 1}.`}</span>
                <h3 className="kit-display text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- IN PRACTICE ---------- */}
      <Section tone="base" className="pb-11 pt-4 md:pb-14 md:pt-6">
        <Container>
          <Eyebrow>
            <T id={`${P}.t27`}>What happens next</T>
          </Eyebrow>
          <H2 className="mt-3 max-w-3xl">
            <T id={`${P}.t28`}>What issues management looks like in practice</T>
          </H2>
          <div className="mt-8 grid gap-x-14 md:grid-cols-2">
            {[
              ["t29", "Issue identification, evaluation, and monitoring", "t30", "The first step is for us to evaluate the possibility of both escalation and containment, and the potential ramifications and reputational damage. This requires detailed information and regular updates from you, while we will also actively monitor media and social media. Once we are aware of the situation, stakeholder and media activity, and other relevant factors, we can create an effective strategy to deal with the issue."],
              ["t31", "Stakeholder strategic engagement", "t32", "Every issue has a stakeholder landscape: the groups whose reaction to the issue will determine its trajectory. We map these stakeholders, assess their likely positions, and design engagement strategies that either contain the issue or build the coalitions needed to manage it. Many issues can avoid external media attention through effective stakeholder communication, while others require media management."],
              ["t33", "Messaging development", "t34", "While you can't control what others say, you can take control of your own narrative. While you deal with the operational side of an issue, we create a consistent position that supports your actions and prevents or minimises further escalation, with messaging that is authentic and able to be held to scrutiny. We develop that position and, if needed, prepare your spokespeople to deliver it with authority."],
              ["t35", "Escalation protocols and crisis readiness", "t36", "While the overwhelming majority of issues are contained, we've learnt by experience to expect the unexpected. We create a strategy that prepares your leadership team for any escalation, new information, or actions of others. This way, if a situation escalates, your organisation responds with discipline rather than improvisation."],
            ].map(([tid, title, bid, body]) => (
              <div key={tid} className="border-t border-line py-6">
                <h3 className="kit-display text-[15px] uppercase leading-snug">
                  <T id={`${P}.${tid}`}>{title}</T>
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                  <T id={`${P}.${bid}`}>{body}</T>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <InlineEnquirySection
        copyId={P}
        title="Watching something develop?"
        body="If your team is seeing signals that a matter could escalate, engage early. The right response now can prevent unnecessary media, stakeholder, and regulatory pressure later."
        bullets={[
          "Rapid issue assessment and escalation advice",
          "Stakeholder mapping and message discipline",
          "Support before the matter becomes a live crisis",
        ]}
        defaultMessage="We are monitoring an emerging issue and would like confidential advice on next steps."
      />

      {/* ---------- PREDICTABILITY ---------- */}
      <Section tone="base" className="pb-11 pt-4 md:pb-14 md:pt-6">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t37`}>Predictability matters</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t38`}>Most crises were predictable</T>
            </H2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              <T id={`${P}.t39`}>
                Drawing on extensive crisis communications experience, CRC Public Relations co-founder Lyall Mercer has
                consistently observed that many significant reputation events were predictable, not in their exact
                form, but in their general shape.
              </T>
            </p>

            <figure className="mt-8">
              <Eyebrow>
                <T id={`${P}.t40`}>In Lyall Mercer&apos;s words</T>
              </Eyebrow>
              <blockquote className="mt-4 border-l-[3px] border-[var(--k-blue)] pl-5 text-lg font-semibold leading-snug">
                <T id={`${P}.t41`}>
                  &quot;There have been multiple occasions when I have predicted a crisis years before it happened,
                  because I could clearly recognise the risk, yet the client at the time didn&apos;t listen or act.
                  Then when it all went wrong, I was called upon to lead the client through the crisis that they
                  shouldn&apos;t have even had to deal with. I can only provide my counsel. In the end, it&apos;s the
                  client&apos;s decision to act. But I can state with absolute authority that if in these situations
                  the clients had acted, it would have saved them massive losses. In one case, I&apos;m talking about
                  more than one hundred million dollars in lost revenue and extensive international reputational
                  damage.&quot;
                </T>
              </blockquote>
              <figcaption className="mt-3 pl-5 text-sm font-medium text-muted">
                <T id={`${P}.t42`}>Lyall Mercer, CRC Public Relations co-founder</T>
              </figcaption>
            </figure>

            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t43`}>
                  The organisations that manage issues successfully are not lucky. They have invested in the right
                  advice, monitoring systems, stakeholder relationships, and a culture of seeking communications
                  counsel early, not after the story breaks.
                </T>
              </p>
              <p>
                <T id={`${P}.t44`}>
                  Retaining CRC Public Relations for issues management is not an admission that your organisation has a
                  problem. It is a recognition that every organisation has potential issues, and that the cost of
                  managing them proactively is a fraction of the cost of managing them once they have become crises.
                </T>
              </p>
            </div>
          </div>

          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t45`}>Key distinction</T>
              </Eyebrow>
              <h3 className="kit-display mt-3 text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">
                <T id={`${P}.t46`}>Issues management is not the same as crisis communications</T>
              </h3>
              <div className="mt-5 divide-y divide-[var(--line)] border-y border-line">
                {[
                  ["t47", "Issues management", "t48", "Proactive work while the matter is still developing and the outcome is still shapeable."],
                  ["t49", "Crisis communications", "t50", "Reactive work once the event is public and the organisation is under active pressure."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4">
                    <p className="text-base font-bold">
                      <T id={`${P}.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`${P}.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                <T id={`${P}.t51`}>
                  CRC Public Relations provides both. But the organisations that need crisis communications least are
                  the ones that have invested most in issues management.
                </T>
              </p>
            </aside>
          </Reveal>
        </Container>
      </Section>

      <LeadMagnetBanner
        magnet="crisisReadinessChecklist"
        variant="dark"
        whatYouGetBody="The essential crisis readiness checklist: 30 questions with an action plan for every gap."
        highlights={[
          "30 questions across readiness areas",
          "Action plan guidance for every gap",
          "Used by Australian leadership teams",
        ]}
      />

      <FAQSection
        copyId={P}
        items={faqs}
        titleText="Common questions about issues management"
        expandable={false}
      />

      <PageClosingCTA
        copyId={P}
        title="Watching an issue develop? Do not wait for public escalation."
        body="The organisations that handle issues best engage communications counsel while the situation is still shapeable. If you are seeing early warning signs, we can help you assess the exposure and decide what to do next."
      />
    </>
  );
}
