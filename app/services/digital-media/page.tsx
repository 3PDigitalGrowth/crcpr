import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PAGE_HERO_ASIDES } from "@/config/pageHeroAsides";
import { siteConfig } from "@/config/site";
import { T } from "@/components/editable";

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

export default function DigitalMediaPage() {
  const aside = PAGE_HERO_ASIDES.mediaEditorial;

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
            src="/images/services/digital-media/hero.webp"
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
                <T id="services-digital-media.t1">
                Digital media and online reputation
                </T>
              </p>
              <h1 className="font-heading font-black text-white text-4xl md:text-[56px] leading-[1.02] max-w-4xl">
                <T id="services-digital-media.t2">
                The digital media age puts more pressure on your reputation.
                </T>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mt-6 max-w-2xl">
                <T id="services-digital-media.t3">
                Your &lsquo;owned media&rsquo; &mdash; digital and social media
                channels &mdash; carries your messages and news. It&apos;s also
                where reputations are increasingly won and lost.
                </T>
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
                >
                  <T id="services-digital-media.t4">
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
              <p className="text-white/35 text-xs mb-4"><T id="services-digital-media.t52">Direct strategic counsel</T></p>
              <div className="space-y-4">
                <div>
                  <p className="font-heading font-black text-brand-gold text-2xl">
                    {siteConfig.stats.yearsTrading}
                  </p>
                  <p className="text-white/60 text-sm">
                    <T id="services-digital-media.t5">
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
              <T id="services-digital-media.t6">
              Why CRC Public Relations
              </T>
            </p>
            <h2 className="font-heading font-black text-white text-3xl">
              <T id="services-digital-media.t7">
              Online reputation management has a shorter fuse.
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
                  <T id={`services-digital-media.proofItems.${__ti}.label`}>{item.label}</T>
                </p>
                <p className="font-heading font-black text-white text-2xl">
                  <T id={`services-digital-media.proofItems.${__ti}.value`}>{item.value}</T>
                </p>
                <p className="text-sm leading-relaxed mt-3 text-white/60">
                  <T id={`services-digital-media.proofItems.${__ti}.detail`}>{item.detail}</T>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_360px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                <T id="services-digital-media.t8">
                Digital reputation reality
                </T>
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                <T id="services-digital-media.t9">
                Issues that can damage your reputation often break online
                first.
                </T>
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                <T id="services-digital-media.t10">
                The channel has changed, but the consequence has not. A digital
                flare-up can move into mainstream coverage before leadership has
                agreed what happened or who should respond.
                </T>
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-digital-media.t11">
                  Ten years ago, a corporate reputation crisis typically began
                  with a phone call from a journalist. Today, it is more likely
                  to begin with a tweet, a LinkedIn post, or a one-star Google
                  review that gets picked up by a media outlet monitoring social
                  media for stories.
                  </T>
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-digital-media.t12">
                  The speed of the digital environment has not made traditional
                  PR expertise less relevant. It has made it more urgent. The
                  communications disciplines that determine how a reputation
                  crisis unfolds, message clarity, stakeholder management,
                  spokesperson preparation, narrative control, are the same in
                  digital channels as they are in traditional media. What
                  changes is the timeframe. What used to take days now takes
                  minutes.
                  </T>
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-digital-media.t13">
                  When you engage us, you get corporate communications and
                  crisis expertise applied to digital channels, not as a social
                  media agency, but as communications advisers who understand
                  how digital and traditional media interact, and how to manage
                  your reputation across both simultaneously.
                  </T>
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                <T id="services-digital-media.t14">
                What changes online
                </T>
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-digital-media.t15">
                    Instant communication
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="services-digital-media.t16">
                    Everyone has access, and issues often start as negative
                    posts, reviews, screenshots, allegations, or comments.
                    </T>
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-digital-media.t17">
                    Timing is reduced
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="services-digital-media.t18">
                    People can share posts or add comments in seconds, reducing
                    the time available to assess, evaluate, and respond
                    strategically.
                    </T>
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-digital-media.t19">
                    Channels interact
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="services-digital-media.t20">
                    What starts online spreads not only online but can quickly
                    spill into mainstream media, resulting in stakeholder
                    concern.
                    </T>
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
                <T id="services-digital-media.t21">
                Early warning signs
                </T>
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                <T id="services-digital-media.t22">
                How does it happen?
                </T>
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                <T id="services-digital-media.t23">
                Many organisations don&apos;t safeguard against the
                vulnerabilities of digital and social media. They don&apos;t
                have the right controls or policies, and don&apos;t respond
                effectively.
                </T>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {[
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
                <T id="services-digital-media.t24">
                Resilient organisations have
                </T>
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-digital-media.t25">
                    A clear communications posture
                    </T>
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-digital-media.t26">
                    Active monitoring across key channels
                    </T>
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-digital-media.t27">
                    An agreed digital escalation model
                    </T>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <InlineEnquirySection copyId="services-digital-media"
        title="Need a digital reputation review?"
        body="If your organisation needs better monitoring, stronger governance, or a clearer response plan for online issues, CRC Public Relations can help you assess the exposure and tighten the system."
        bullets={[
          "Digital reputation and social governance reviews",
          "Online issue and escalation planning",
          "Experienced advice for social and review-driven reputation pressure",
        ]}
        defaultMessage="We would like a digital reputation review and advice on our online communications risks."
        variant="white"
      />

      {/* Digital communications services */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            <T id="services-digital-media.t28">
            Digital communications services
            </T>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                <T id="services-digital-media.t29">
                Online and social media management and monitoring
                </T>
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                <T id="services-digital-media.t30">
                Communication is two way, speaking and listening. We listen to
                what others are saying about you and to you, by monitoring your
                online presence across news media, social platforms, and review
                sites. By tracking sentiment, we help you identify and respond
                to issues before they escalate. We can also manage your social
                media and review responses as part of an overall communications
                strategy that positions you as a trusted voice while protecting
                your reputation.
                </T>
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                <T id="services-digital-media.t31">
                Social media strategy and policies
                </T>
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                <T id="services-digital-media.t32">
                Social media presents an opportunity to present your messaging
                to stakeholders in a way that supports your overall objectives,
                and a risk to your reputation if these platforms are not
                managed well. We help you develop social media policies that
                provide your team with clear guidelines around what to comment
                on, how to respond, when to escalate, and any approval process.
                We also assist to create policies for staff behaviour on their
                personal social media accounts that may impact your
                organisation.
                </T>
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                <T id="services-digital-media.t33">
                Digital crisis response
                </T>
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                <T id="services-digital-media.t34">
                If a social media issue arises, an immediate response and
                strategy is required to contain the issue and prevent it from
                escalating and causing damage to your reputation. While the
                core messaging may be the same as a response to stakeholders
                across other channels, it must consider the faster-moving and
                more vitriolic nature of social media. We provide immediate
                digital crisis counsel, and can manage the response across your
                platforms in coordination with your communications team.
                </T>
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                <T id="services-digital-media.t35">
                Content strategy
                </T>
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                <T id="services-digital-media.t36">
                Just as mainstream media presents an opportunity to become a
                trusted voice of authority in your industry, so does your
                &lsquo;owned media&rsquo;, including blogs, websites, and
                social media. The more trust earned, the more resilient you
                are when a negative issue arises. We work with organisations to
                develop content strategies across all platforms that build this
                authority over time, positioning you in a positive way and
                ensuring your communication is heard by all stakeholders.
                </T>
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
                <T id="services-digital-media.t37">
                The difference
                </T>
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                <T id="services-digital-media.t38">
                Reputation management for the digital age
                </T>
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                <T id="services-digital-media.t39">
                We live in a digital world and have now entered the world of
                artificial intelligence. While technology and how we communicate
                is changing, the need for organisations to build trust with
                stakeholders, effectively communicate their message, and
                protect their reputation is not. When issues arise and
                reputations are impacted, people are hurt.
                </T>
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-digital-media.t40">
                  The market is full of digital agencies and social media
                  managers who claim expertise in online reputation management.
                  Most of them understand platforms. Few understand
                  communications strategy. Almost none have walked business
                  leaders and owners through high-profile crises or understand
                  the impact these have.
                  </T>
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-digital-media.t41">
                  CRC Public Relations is not a digital agency. We are a
                  corporate communications and reputation firm that understands
                  our clients&apos; need to communicate authentically in the
                  digital age. When you retain CRC Public Relations for digital
                  reputation management, you are retaining the same experienced
                  counsel and gaining the same crisis experience that we bring
                  to every other part of our work.
                  </T>
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  <T id="services-digital-media.t42">
                  The platforms are different. The expertise required is the
                  same.
                  </T>
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                <T id="services-digital-media.t43">
                What clients actually need
                </T>
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-digital-media.t44">
                    Effective communications counsel
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="services-digital-media.t45">
                    Advice that understands the potential and vulnerability of
                    digital media.
                    </T>
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-digital-media.t46">
                    Journalistic judgment
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="services-digital-media.t47">
                    A realistic view on what becomes a story, how the media
                    operates, and what can escalate an issue.
                    </T>
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="services-digital-media.t48">
                    Crisis experience
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="services-digital-media.t49">
                    Proven results across a multitude of issues and industries
                    when the stakes are high.
                    </T>
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-brand-border">
                <p className="text-brand-gold text-xs font-medium mb-3">
                  <T id="services-digital-media.t50">
                  Bottom line
                  </T>
                </p>
                <p className="text-navy font-sans font-semibold text-base leading-relaxed">
                  <T id="services-digital-media.t51">
                  The platforms are different. The reputational stakes are not.
                  </T>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

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

      <FAQSection copyId="services-digital-media"
        items={faqs}
        titleText="Common questions about digital reputation management"
        expandable={false}
      />

      <PageClosingCTA copyId="services-digital-media"
        title="Your organisation is being talked about online right now."
        body="The real question is whether you know where the pressure points are and whether your team is ready to respond with discipline. We help you manage digital reputation with the same rigour you expect in every other high-stakes communication setting."
        primaryLabel="Book a digital reputation review"
      />
    </>
  );
}
