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
  title:
    "Online Reputation Management Australia | CRC Public Relations",
  description:
    "Specialist online reputation management, digital crisis response, and social media strategy for Australian organisations. The same PR expertise, applied to digital channels.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Reputation Management",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "Specialist online reputation management, digital crisis response, and social media strategy for Australian organisations.",
  areaServed: "AU",
  serviceType: "Online Reputation Management",
};

const proofItems = [
  {
    label: "Digital exposure",
    value: "Minutes, not days",
    detail:
      "Online issues escalate faster than traditional media stories, which is why monitoring and response discipline matter so much.",
  },
  {
    label: "Strategic approach",
    value: "Reputation first",
    detail:
      "We do not treat digital channels as a content exercise. We treat them as reputation environments that require governance and judgement.",
  },
  {
    label: "Channel control",
    value: "Platform-aware",
    detail:
      "Response decisions vary by channel, audience, and severity. Not every online attack deserves the same public answer.",
  },
] as const;

const faqs = [
  {
    question: "Is online reputation management different from traditional PR?",
    answer:
      "The channels are different, but the underlying reputation needs are the same. Digital environments can escalate issues faster and expose weak policies and procedures.",
  },
  {
    question: "Can CRC Public Relations help with social media issues that are starting to escalate?",
    answer:
      "Yes. We help organisations deal with issues that can damage their reputation and create the right responses that align with their overall objectives.",
  },
  {
    question: "Do you operate like a social media agency?",
    answer:
      "No. CRC Public Relations approaches digital channels from a communications and reputation perspective, not a volume-content or community-management model. The emphasis is judgement, brand authority, and reputation protection.",
  },
  {
    question: "What kinds of digital risks do you usually assess?",
    answer:
      "Typical risks include weak internal social policies and accountability, poor monitoring, inconsistent messaging, slow escalation of issues, poor online reviews, and issues that are likely to create wider media coverage.",
  },
];

const warningItems = [
  {
    title: "Weak or no policies",
    body: "No policies for organisation or personal (staff) social media accounts, or proofing process.",
  },
  {
    title: "Slow or no monitoring",
    body: "Pressure builds in comments, reviews, and screenshots before anyone realises.",
  },
  {
    title: "Unclear escalation",
    body: "There are no clear procedures or guidelines for when to respond, hold, delete, or escalate.",
  },
  {
    title: "Delayed decisions",
    body: "By the time leadership is briefed the issue has evolved or widened in impact, or there is no response.",
  },
];

/* Chambers port (17 Nov 2026). Copy is unchanged from the previous page; the
   generated imagery was dropped. */

const P = "services-digital-media";


export default function DigitalMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        copyId={P}
        asidePreset="mediaEditorial"
        eyebrow="Digital media and online reputation"
        title="The digital media age puts more pressure on your reputation."
        description="Your 'owned media' (digital and social media channels) carries your messages and news. It's also where reputations are increasingly won and lost."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        copyId={P}
        variant="navy"
        title="Online reputation management has a shorter fuse."
        items={[...proofItems]}
      />

      {/* ---------- DIGITAL REPUTATION REALITY ---------- */}
      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t8`}>Digital reputation reality</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t9`}>Issues that can damage your reputation often break online first.</T>
            </H2>
            <p className="mt-6 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id={`${P}.t10`}>
                The channel has changed, but the consequence has not. A digital flare-up can move into mainstream
                coverage before leadership has agreed what happened or who should respond.
              </T>
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t11`}>
                  Ten years ago, a corporate reputation crisis typically began with a phone call from a journalist.
                  Today, it is more likely to begin with a tweet, a LinkedIn post, or a one-star Google review that
                  gets picked up by a media outlet monitoring social media for stories.
                </T>
              </p>
              <p>
                <T id={`${P}.t12`}>
                  The speed of the digital environment has not made traditional PR expertise less relevant. It has made
                  it more urgent. The communications disciplines that determine how a reputation crisis unfolds,
                  message clarity, stakeholder management, spokesperson preparation, narrative control, are the same in
                  digital channels as they are in traditional media. What changes is the timeframe. What used to take
                  days now takes minutes.
                </T>
              </p>
              <p>
                <T id={`${P}.t13`}>
                  When you engage us, you get corporate communications and crisis expertise applied to digital
                  channels, not as a social media agency, but as communications advisers who understand how digital and
                  traditional media interact, and how to manage your reputation across both simultaneously.
                </T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <FramedPhoto src={MEDIA.socialMediaPhone} alt="Social media apps open on a phone" className="mb-6" />
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t14`}>What changes online</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t15", "Instant communication", "t16", "Everyone has access, and issues often start as negative posts, reviews, screenshots, allegations, or comments."],
                  ["t17", "Timing is reduced", "t18", "People can share posts or add comments in seconds, reducing the time available to assess, evaluate, and respond strategically."],
                  ["t19", "Channels interact", "t20", "What starts online spreads not only online but can quickly spill into mainstream media, resulting in stakeholder concern."],
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

      {/* ---------- EARLY WARNING SIGNS ---------- */}
      <Section tone="base" className="pb-11 pt-4 md:pb-14 md:pt-6">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
            <div>
              <Eyebrow>
                <T id={`${P}.t21`}>Early warning signs</T>
              </Eyebrow>
              <H2 className="mt-3">
                <T id={`${P}.t22`}>How does it happen?</T>
              </H2>
              <p className="mt-6 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
                <T id={`${P}.t23`}>
                  Many organisations don&apos;t safeguard against the vulnerabilities of digital and social media. They
                  don&apos;t have the right controls or policies, and don&apos;t respond effectively.
                </T>
              </p>
            </div>
            <Reveal className="lg:pt-10">
              <aside className="kit-r border border-line p-6 md:p-8">
                <Eyebrow>
                  <T id={`${P}.t24`}>Resilient organisations have</T>
                </Eyebrow>
                <div className="mt-5 divide-y divide-[var(--line)]">
                  {[
                    ["t25", "A clear communications posture"],
                    ["t26", "Active monitoring across key channels"],
                    ["t27", "An agreed digital escalation model"],
                  ].map(([tid, title]) => (
                    <p key={tid} className="kit-display py-4 text-[15px] uppercase first:pt-0 last:pb-0">
                      <T id={`${P}.${tid}`}>{title}</T>
                    </p>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-x-14 md:grid-cols-2">
            {warningItems.map((item) => (
              <div key={item.title} className="border-t border-line py-6">
                <h3 className="kit-display text-[15px] uppercase leading-snug">{item.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <InlineEnquirySection
        copyId={P}
        title="Need a digital reputation review?"
        body="If your organisation needs better monitoring, stronger governance, or a clearer response plan for online issues, CRC Public Relations can help you assess the exposure and tighten the system."
        bullets={[
          "Digital reputation and social governance reviews",
          "Online issue and escalation planning",
          "Experienced advice for social and review-driven reputation pressure",
        ]}
        defaultMessage="We would like a digital reputation review and advice on our online communications risks."
      />

      {/* ---------- DIGITAL COMMUNICATIONS SERVICES ---------- */}
      <Section tone="base" className="pb-11 pt-4 md:pb-14 md:pt-6">
        <Container>
          <H2 className="max-w-3xl">
            <T id={`${P}.t28`}>Digital communications services</T>
          </H2>
          <div className="mt-8 grid gap-x-14 md:grid-cols-2">
            {[
              ["t29", "Online and social media management and monitoring", "t30", "Communication is two way, speaking and listening. We listen to what others are saying about you and to you, by monitoring your online presence across news media, social platforms, and review sites. By tracking sentiment, we help you identify and respond to issues before they escalate. We can also manage your social media and review responses as part of an overall communications strategy that positions you as a trusted voice while protecting your reputation."],
              ["t31", "Social media strategy and policies", "t32", "Social media presents an opportunity to present your messaging to stakeholders in a way that supports your overall objectives, and a risk to your reputation if these platforms are not managed well. We help you develop social media policies that provide your team with clear guidelines around what to comment on, how to respond, when to escalate, and any approval process. We also assist to create policies for staff behaviour on their personal social media accounts that may impact your organisation."],
              ["t33", "Digital crisis response", "t34", "If a social media issue arises, an immediate response and strategy is required to contain the issue and prevent it from escalating and causing damage to your reputation. While the core messaging may be the same as a response to stakeholders across other channels, it must consider the faster-moving and more vitriolic nature of social media. We provide immediate digital crisis counsel, and can manage the response across your platforms in coordination with your communications team."],
              ["t35", "Content strategy", "t36", "Just as mainstream media presents an opportunity to become a trusted voice of authority in your industry, so does your 'owned media', including blogs, websites, and social media. The more trust earned, the more resilient you are when a negative issue arises. We work with organisations to develop content strategies across all platforms that build this authority over time, positioning you in a positive way and ensuring your communication is heard by all stakeholders."],
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

      {/* ---------- THE DIFFERENCE ---------- */}
      <Section tone="base" className="pb-11 pt-4 md:pb-14 md:pt-6">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id={`${P}.t37`}>The difference</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id={`${P}.t38`}>Reputation management for the digital age</T>
            </H2>
            <p className="mt-6 text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id={`${P}.t39`}>
                We live in a digital world and have now entered the world of artificial intelligence. While technology
                and how we communicate is changing, the need for organisations to build trust with stakeholders,
                effectively communicate their message, and protect their reputation is not. When issues arise and
                reputations are impacted, people are hurt.
              </T>
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                <T id={`${P}.t40`}>
                  The market is full of digital agencies and social media managers who claim expertise in online
                  reputation management. Most of them understand platforms. Few understand communications strategy.
                  Almost none have walked business leaders and owners through high-profile crises or understand the
                  impact these have.
                </T>
              </p>
              <p>
                <T id={`${P}.t41`}>
                  CRC Public Relations is not a digital agency. We are a corporate communications and reputation firm
                  that understands our clients&apos; need to communicate authentically in the digital age. When you
                  retain CRC Public Relations for digital reputation management, you are retaining the same experienced
                  counsel and gaining the same crisis experience that we bring to every other part of our work.
                </T>
              </p>
              <p>
                <T id={`${P}.t42`}>The platforms are different. The expertise required is the same.</T>
              </p>
            </div>
          </div>
          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id={`${P}.t43`}>What clients actually need</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t44", "Effective communications counsel", "t45", "Advice that understands the potential and vulnerability of digital media."],
                  ["t46", "Journalistic judgment", "t47", "A realistic view on what becomes a story, how the media operates, and what can escalate an issue."],
                  ["t48", "Crisis experience", "t49", "Proven results across a multitude of issues and industries when the stakes are high."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4 first:pt-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`${P}.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`${P}.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-2 border-l-[3px] border-[var(--k-blue)] pl-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  <T id={`${P}.t50`}>Bottom line</T>
                </p>
                <p className="mt-2 text-base font-bold leading-snug">
                  <T id={`${P}.t51`}>The platforms are different. The reputational stakes are not.</T>
                </p>
              </div>
            </aside>
          </Reveal>
        </Container>
      </Section>

      <LeadMagnetBanner
        magnet="reputationAssessment"
        opensAssessment
        title="How exposed is your organisation's digital reputation?"
        description="Our Reputation Vulnerability Assessment includes a digital exposure lens covering monitoring, governance, escalation, and online trust risks. It is a fast way to identify where your organisation is currently overconfident or underprepared."
        highlights={[
          "Includes digital exposure review",
          "Useful for communications and risk leaders",
          "Turns online risk into practical next steps",
        ]}
      />

      <FAQSection
        copyId={P}
        items={faqs}
        titleText="Common questions about digital reputation management"
        expandable={false}
      />

      <PageClosingCTA
        copyId={P}
        title="Your organisation is being talked about online right now."
        body="The real question is whether you know where the pressure points are and whether your team is ready to respond with discipline. We help you manage digital reputation with the same rigour you expect in every other high-stakes communication setting."
        primaryLabel="Book a digital reputation review"
      />
    </>
  );
}
