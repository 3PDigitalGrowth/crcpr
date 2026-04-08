import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title:
    "Online Reputation Management Australia | CRC Public Relations",
  description:
    "Senior-level online reputation management, digital crisis response, and social media strategy for Australian organisations. The same PR expertise, applied to digital channels.",
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
    "Senior-level online reputation management, digital crisis response, and social media strategy for Australian organisations.",
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
      "The channels are different, but the underlying reputation discipline is the same. Digital environments simply compress the timeframe and make weak governance or slow decision-making visible much faster.",
  },
  {
    question: "Can CRC Public Relations help with social media issues that are starting to escalate?",
    answer:
      "Yes. We help organisations assess whether the issue needs acknowledgement, containment, escalation, or silence, then align the digital response with the broader communications and stakeholder position.",
  },
  {
    question: "Do you operate like a social media agency?",
    answer:
      "No. CRC Public Relations approaches digital channels from a senior communications and reputation perspective, not a volume-content or community-management model. The emphasis is judgement, escalation, and brand authority.",
  },
  {
    question: "What kinds of digital risks do you usually assess?",
    answer:
      "Typical risks include weak approval pathways, poor monitoring, inconsistent tone of voice, slow escalation, review-site pressure, executive social exposure, and digital issues that are likely to spill into mainstream media coverage.",
  },
];

export default function DigitalMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Digital media and online reputation"
        title="Your reputation doesn't stop at the newsroom door."
        description="Online reputation management, social media strategy, and digital crisis response. Senior PR counsel applied to the digital channels where reputations are increasingly won and lost."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="Online reputation management is reputation management, with a shorter fuse."
        items={[...proofItems]}
      />

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_360px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Digital reputation reality
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Reputation pressure now breaks online first.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                The channel has changed, but the consequence has not. A digital
                flare-up can move into mainstream coverage before leadership has
                agreed what happened or who should respond.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  Ten years ago, a corporate reputation crisis typically began
                  with a phone call from a journalist. Today, it is more likely
                  to begin with a tweet, a LinkedIn post, or a one-star Google
                  review that gets picked up by a media outlet monitoring social
                  media for stories.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  The speed of the digital environment has not made traditional
                  PR expertise less relevant. It has made it more urgent. The
                  communications disciplines that determine how a reputation
                  crisis unfolds, message clarity, stakeholder management,
                  spokesperson preparation, narrative control, are the same in
                  digital channels as they are in traditional media. What
                  changes is the timeframe. What used to take days now takes
                  minutes.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  CRC Public Relations applies its 25 years of corporate communications and
                  crisis expertise to digital channels, not as a social media
                  agency, but as a senior communications adviser that
                  understands how digital and traditional media interact, and
                  how to manage your reputation across both simultaneously.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                What changes online
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Signals appear earlier
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Issues often start as posts, reviews, screenshots, or
                    comments long before a journalist calls.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Response windows collapse
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The time available to assess, align, and answer is measured
                    in minutes rather than days.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Channels interact
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Digital pressure rarely stays contained. Online attention can
                    quickly spill into mainstream media and stakeholder concern.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold font-sans font-medium text-xs mb-4">
                Early warning signs
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                What digital reputation pressure usually looks like
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                It rarely begins as a fully formed crisis. More often, it shows
                up as process weakness, delayed judgment, and no shared view on
                when digital noise has become a reputational risk.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {[
                  {
                    title: "Weak governance",
                    body: "No clear ownership of digital channels, approvals, or reputational decision-making.",
                  },
                  {
                    title: "Slow monitoring",
                    body: "Pressure builds in comments, reviews, and screenshots before anyone senior sees it.",
                  },
                  {
                    title: "Unclear escalation",
                    body: "Teams do not share a clear threshold for when to respond, hold, or escalate.",
                  },
                  {
                    title: "Late executive visibility",
                    body: "By the time leadership is briefed, the issue has often been live longer than realised.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-brand-border bg-white p-6"
                  >
                    <p className="font-sans font-semibold text-navy text-base mb-2">
                      {item.title}
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                Resilient organisations have
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    A clear communications posture
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Active monitoring across key channels
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    An agreed digital escalation model
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <InlineEnquirySection
        title="Need a digital reputation review?"
        body="If your organisation needs better monitoring, stronger governance, or a clearer response plan for online issues, CRC Public Relations can help you assess the exposure and tighten the system."
        bullets={[
          "Digital reputation and social governance reviews",
          "Online issue and escalation planning",
          "Senior advice for social and review-driven reputation pressure",
        ]}
        defaultMessage="We would like a digital reputation review and advice on our online communications risks."
        variant="white"
      />

      {/* Digital communications services */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Digital communications services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Online reputation monitoring and management
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                We establish systematic monitoring of your organisation&apos;s
                online presence across news media, social platforms, review
                sites, and forums, tracking sentiment, identifying emerging
                threats, and providing the early-warning capability that allows
                you to respond before a digital issue becomes a media story. We
                also work with organisations on strategies to build positive
                digital presence that creates resilience against future
                reputation threats.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Social media strategy and governance
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                A social media strategy that is not aligned with your
                organisation&apos;s communications posture and risk profile is a
                liability. We help organisations develop social media strategies
                that reflect their brand authority, define the topics they should
                and should not comment on, and establish the governance
                frameworks, including approval workflows, escalation protocols,
                and crisis response procedures, that protect against the most
                common social media risks.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Digital crisis response
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                When a social media incident escalates, whether it is a viral
                negative post, an organised pile-on, or a digital petition, the
                response framework is the same as for a traditional media
                crisis: fast, disciplined, and strategically directed. We
                provide immediate digital crisis counsel, prepare holding
                statements for digital channels, advise on whether to engage or
                not engage, and manage the response across platforms in
                coordination with your communications team.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Content strategy and online authority
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                Organisations with strong online authority, consistent,
                substantive digital content that establishes them as trusted
                voices in their sector, are significantly more resilient to
                reputation attacks than organisations with thin or inconsistent
                digital presence. We work with organisations to develop content
                strategies that build this authority over time, including
                executive thought leadership, corporate commentary, and digital
                publication planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital reputation management is still reputation management */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_360px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                The difference
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Digital reputation management is still reputation management.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                Platform knowledge matters, but it is not enough. The harder
                problem is judgment: knowing how trust is won, damaged, and
                protected when pressure moves quickly and publicly.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  The market is full of digital agencies and social media
                  managers who claim expertise in online reputation management.
                  Most of them understand platforms. Fewer of them understand
                  reputation: the strategic, relational, and communicative
                  disciplines that determine whether an organisation emerges
                  from a crisis with its trust intact.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  CRC Public Relations is not a digital agency. We are a corporate
                  communications and reputation firm that has developed the
                  digital capability our clients need because the digital
                  environment now demands it. When you retain CRC Public Relations for
                  digital reputation management, you are retaining the same
                  senior-level counsel, the same journalistic judgment, and
                  the same crisis experience that we bring to our traditional
                  media work.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  The platforms are different. The expertise required is the
                  same.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                What clients actually need
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Senior communications counsel
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Advice that connects digital response to the broader
                    stakeholder and media position.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Journalistic judgment
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    A realistic view on what becomes a story, what gets ignored,
                    and what can make matters worse.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Crisis experience
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Tested response discipline when the issue is moving faster
                    than internal decision-making.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-brand-border">
                <p className="text-brand-gold text-xs font-medium mb-3">
                  Bottom line
                </p>
                <p className="text-navy font-sans font-semibold text-base leading-relaxed">
                  The platforms are different. The reputational stakes are not.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="reputationAssessment"
        title="How exposed is your organisation's digital reputation?"
        description="Our Reputation Vulnerability Assessment includes a digital exposure lens covering monitoring, governance, escalation, and online trust risks. It is a fast way to identify where your organisation is currently overconfident or underprepared."
        highlights={[
          "Includes digital exposure review",
          "Useful for communications and risk leaders",
          "Turns online risk into practical next steps",
        ]}
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about digital reputation management"
      />

      <PageClosingCTA
        title="Your organisation is being talked about online right now."
        body="The real question is whether you know where the pressure points are and whether your team is ready to respond with discipline. CRC Public Relations helps organisations manage digital reputation with the same rigour they expect in every other high-stakes communication setting."
        primaryLabel="Book a digital reputation review"
      />
    </>
  );
}
