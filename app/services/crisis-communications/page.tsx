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
  title: "Crisis Communications PR Australia | CRC Public Relations",
  description:
    "Crisis communications counsel and 24/7 crisis response for organisations across Australia. Crisis plans, simulation exercises, spokesperson preparation, and immediate support. Call 1300 182 186.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Crisis Communications",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
  },
  description:
    "24/7 crisis communications response, crisis planning, simulation exercises, and post-crisis recovery for organisations across Australia.",
  areaServed: "AU",
  serviceType: "Crisis Communications Consulting",
};

const proofItems = [
  {
    label: "Urgent support",
    value: "24/7 access",
    detail:
      "Active crisis matters are handled by experienced advisers, not passed through a generic agency support model.",
  },
  {
    label: "Preparation",
    value: "Plan, train, test",
    detail:
      "Prepared organisations respond faster because their plans, spokespeople, and escalation pathways have already been tested.",
  },
  {
    label: "Recovery",
    value: "Opportunity",
    detail:
      "We focus not only on the present, but turning the challenge into an opportunity to build greater stakeholder trust moving forward.",
  },
] as const;

const faqs = [
  {
    question: "Do you only get involved when the crisis is already public?",
    answer:
      "No. Many organisations engage CRC Public Relations before a crisis becomes public so their plans, spokespeople, and escalation pathways are properly tested. Others call when the matter is already live and immediate support is required.",
  },
  {
    question: "What does a crisis communications engagement usually include?",
    answer:
      "Depending on the situation, it can include planning, simulations, spokesperson preparation, first-response messaging, media management, stakeholder communications, and post-crisis recovery advice. The exact mix changes by client and pressure point.",
  },
  {
    question: "Who handles the work during a high-pressure matter?",
    answer:
      "Experienced advisers. CRC Public Relations does not route crisis matters through a junior account structure. Active situations are handled directly by experienced advisers with crisis judgement and newsroom understanding.",
  },
];

export default function CrisisCommunicationsPage() {
  const aside = PAGE_HERO_ASIDES.crisisTrust;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Urgent-support top banner */}
      <div className="bg-brand-gold py-3 text-center relative z-20">
        <a
          href={siteConfig.phone.href}
          className="block font-heading font-black text-navy text-[13px]"
        >
          Need immediate crisis support? Call {siteConfig.phone.display} |
          Available 24/7
        </a>
      </div>

      {/* Unified hero: image, title & aside, proof strip, and urgent CTA */}
      <section
        id="hero-section"
        className="relative overflow-hidden bg-navy border-b border-white/5"
      >
        <div
          className="absolute inset-x-0 top-0 h-[560px] md:h-[720px] pointer-events-none"
          aria-hidden
        >
          <Image
            src="/images/services/crisis-communications/hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,43,74,0.72)] via-[rgba(26,43,74,0.92)] to-[#1A2B4A]" />
        </div>

        {/* Top block: eyebrow, title, description, CTA, aside */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 md:pt-24 pb-12 md:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-end">
            <div className="max-w-4xl">
              <p className="text-brand-gold font-sans font-medium text-xs mb-4">
                Crisis communications
              </p>
              <h1 className="font-heading font-black text-white text-4xl md:text-[56px] leading-[1.02] max-w-4xl">
                When a crisis breaks, experience is everything.
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mt-6 max-w-2xl">
                24/7 crisis response, crisis communications planning, and
                simulation exercises. When you need experienced counsel, we are
                available immediately.
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
              <p className="text-white/35 text-xs mb-4">Direct senior counsel</p>
              <div className="space-y-4">
                <div>
                  <p className="font-heading font-black text-brand-gold text-2xl">
                    {siteConfig.stats.yearsTrading}
                  </p>
                  <p className="text-white/60 text-sm">
                    Years advising leaders in high-stakes environments
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

        {/* Divider */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="h-px bg-white/10" />
        </div>

        {/* Proof strip + urgent CTA, same navy backdrop */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 md:pt-14 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-sans font-medium text-xs mb-4">
              Why CRC Public Relations
            </p>
            <h2 className="font-heading font-black text-white text-3xl">
              The first decisions in a crisis shape everything that follows.
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
            imageSrc="/images/services/crisis-communications/first-fifteen-minutes.png"
            imageAlt="Overhead view of a composed executive desk in warm afternoon light showing a printed crisis communications plan, an analogue desk clock, a leather portfolio with a fountain pen, a face-down smartphone, and a cup of coffee, suggesting disciplined preparation rather than panic"
            imagePosition="left"
            aspectClass="aspect-[4/3]"
          >
            <div className="max-w-3xl lg:max-w-none">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Being crisis-ready
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                What does it mean to be crisis-ready?
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                Crisis planning is a mindset, not a document.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  A tailored and tested crisis communications plan is essential
                  for every organisation, but it must be accompanied by a
                  readiness, both logistical and emotional, to respond to any
                  issue or crisis.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  CRC Public Relations believes that readiness means
                  understanding the value of effective, transparent
                  communication that connects with your stakeholders as soon as
                  a major issue or crisis hits, and backing this up with a
                  tested plan, prepared spokespeople, and the guidance of
                  outside crisis communications counsel.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  If you don&apos;t, there can be major ramifications. Melissa
                  Agnes, CEO of the Crisis Ready Institute in the USA (who we
                  partner with to present the Crisis Masterclass for crisis
                  leaders) defines these ramifications as the &ldquo;Crisis
                  Response Penalty&rdquo;.
                </p>
              </div>

              <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8 mt-8">
                <p className="text-brand-teal text-xs font-medium mb-4">
                  The Crisis Response Penalty
                </p>
                <blockquote className="border-l-[3px] border-brand-gold pl-5 font-heading font-black text-navy text-lg md:text-xl leading-snug">
                  &ldquo;When organisations fail to respond effectively in the
                  right timeline, the longer you wait, the more you lose
                  ownership of the narrative, the more trust erodes, and the
                  greater the material impact becomes.&rdquo;
                </blockquote>
                <p className="mt-4 pl-5 text-charcoal-mid text-sm font-sans font-medium">
                  Melissa Agnes, CEO of the Crisis Ready Institute
                </p>
              </aside>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal text-[15px] leading-relaxed">
                  But there is good news. As Melissa Agnes also notes: &ldquo;The
                  Crisis Response Penalty is preventable&hellip; when you have
                  the right mindset, skillset, and capabilities in place&rdquo;.
                </p>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  That&apos;s why preparation and the right guidance not only
                  helps to navigate through a crisis, but to turn it into an
                  opportunity to build even greater trust.
                </p>
              </div>
            </div>
          </ImageTextRow>
        </div>
      </section>

      {/* The first 15 minutes - single column section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-brand-gold text-xs font-medium mb-4">
            Urgent timeframe
          </p>
          <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
            The first 15 minutes
          </h2>
          <p className="text-navy text-lg md:text-xl leading-relaxed">
            The best scenario when a crisis hits is to have the time to respond.
            But usually this isn&apos;t possible.
          </p>

          <div className="space-y-6 mt-8">
            <p className="text-charcoal text-[15px] leading-relaxed">
              When a crisis becomes public, in this age of digital and social
              media, the first 15 minutes is a key timeframe. Too many
              organisations don&apos;t understand this and make predictable
              mistakes: they wait too long for more information, or respond
              through the wrong channel, or say more than they should before the
              facts are established. Each mistake compounds the one prior.
            </p>
            <p className="text-charcoal text-[15px] leading-relaxed">
              We help prepare you to be crisis-ready.
            </p>
          </div>

          <aside className="rounded-lg border border-brand-border bg-white p-6 md:p-8 mt-10">
            <p className="text-brand-teal text-xs font-medium mb-5">
              Common first-response failures
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-[3px] border-brand-gold pl-4">
                <p className="font-sans font-semibold text-navy text-sm mb-1">
                  Waiting for certainty
                </p>
                <p className="text-charcoal-mid text-sm leading-relaxed">
                  By the time every detail is confirmed, the narrative is often
                  already moving without you.
                </p>
              </div>

              <div className="border-l-[3px] border-brand-gold pl-4">
                <p className="font-sans font-semibold text-navy text-sm mb-1">
                  Using the wrong channel
                </p>
                <p className="text-charcoal-mid text-sm leading-relaxed">
                  Staff, stakeholders, regulators, and media rarely need the
                  same message in the same order.
                </p>
              </div>

              <div className="border-l-[3px] border-brand-gold pl-4">
                <p className="font-sans font-semibold text-navy text-sm mb-1">
                  Saying too much too soon
                </p>
                <p className="text-charcoal-mid text-sm leading-relaxed">
                  Early overstatement creates contradictions later and makes
                  recovery materially harder.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-brand-border">
              <p className="text-brand-gold text-xs font-medium mb-3">
                What better looks like
              </p>
              <p className="text-navy font-sans font-semibold text-base leading-relaxed">
                A tested plan, prepared spokespeople, and guidance from
                experienced, external crisis communications counsel.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <InlineEnquirySection
        eyebrow="Confidential enquiry"
        submitLabel="Send confidential enquiry"
        title="Need crisis communications support or preparedness advice?"
        body="Use this form for confidential advice on crisis planning, simulation exercises, spokesperson preparation, or post-crisis recovery. If the matter is already active, call us immediately instead."
        bullets={[
          "Crisis plans, simulation exercises, and spokesperson preparation",
          "Support for active incidents and board-facing matters",
          "Post-crisis recovery and stakeholder trust rebuilding",
        ]}
        defaultMessage="We need confidential crisis communications advice."
        variant="white"
        disclaimer="Confidential and reviewed by a crisis adviser."
      />

      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold font-sans font-medium text-xs mb-4">
            What serious organisations expect
          </p>
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            What serious organisations expect from crisis communications counsel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Speed with discipline",
                body: "Fast advice matters, but this doesn't mean reacting without thought and strategy.",
              },
              {
                title: "Message authenticity",
                body: "Your statements, staff updates, media responses, and other communication must connect on an emotional level.",
              },
              {
                title: "Wise guidance",
                body: "Crises are not the time to learn on the job. They require experienced judgement built from previous high-stakes situations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-brand-border bg-white p-6"
              >
                <h3 className="font-heading font-black text-navy text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal text-[15px] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three ways CRC Public Relations supports organisations through crisis */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-6">
            Three ways we support you through crisis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Crisis preparedness, before it happens
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                The best crisis response begins well before the crisis occurs.
                We work with organisations to develop crisis communications
                plans, conduct vulnerability assessments that identify the
                specific scenarios most likely to threaten your reputation, run
                crisis simulation exercises that test your people and your
                process under pressure, and train your spokespeople to perform
                at their best when the stakes are highest.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                Organisations whose people are emotionally prepared and have a
                tested crisis plan respond faster, with greater discipline, and
                with measurably better outcomes than those without one. This is
                not an opinion. It is documented consistently across every major
                crisis communications study and played out in real-life
                situations.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Active crisis response, when it is happening now
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                When a crisis is live, CRC Public Relations provides immediate
                counsel that brings order to a chaotic situation. We join your
                crisis team, establish media protocols, prepare spokespeople,
                coordinate communications across stakeholder groups, manage
                media enquiries, and provide the strategic direction that keeps
                your organisation ahead of the story.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed mt-4">
                We are available 24 hours a day, seven days a week. We do not
                pass crisis calls to juniors. Your situation is managed by
                advisers with the experience and judgment to make difficult
                calls under pressure.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Post-crisis recovery, rebuilding what matters
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed">
                The crisis itself is rarely the whole story. How an organisation
                is perceived after a crisis, whether it is seen as having handled
                itself with integrity, transparency, and accountability, shapes
                its reputation for years. We provide post-crisis communications
                strategy that rebuilds stakeholder trust, addresses the narrative
                established during the event, and positions your organisation
                for long-term recovery.
              </p>
            </div>
          </div>

          {/* Urgent callout - below the three paragraphs */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-white border-2 border-brand-gold rounded-lg p-6">
              <h3 className="font-heading font-black text-navy text-xl mb-3">
                Facing a crisis right now?
              </h3>
              <p className="text-charcoal text-[15px] leading-relaxed mb-6">
                Do not fill out a form. Call us directly, available 24 hours, 7
                days. Every call is treated with absolute confidentiality. You
                will speak to a CRC Public Relations adviser, not a
                receptionist.
              </p>
              <a
                href="tel:1300182186"
                className="block w-full text-center bg-brand-gold text-navy font-heading font-black text-xs rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
              >
                Call 1300 182 186 now
              </a>
              <p className="text-center mt-4">
                <Link
                  href="/crisis"
                  className="text-teal text-sm font-medium hover:opacity-80 transition underline"
                >
                  Or visit our dedicated crisis response page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="crisisPlanTemplate"
        title="Does your organisation have a crisis plan that leadership would trust under pressure?"
        description="Download the CRC Public Relations Crisis Communications Plan Template. It is the same framework we use with clients to define first-response ownership, message hierarchy, escalation discipline, and stakeholder sequencing before a live matter strips away thinking time."
        highlights={[
          "Built for boards and executive teams",
          "Useful before simulations and training",
          "Designed for real response pressure",
        ]}
      />

      <FAQSection
        items={faqs}
        titleText="Common questions about crisis communications support"
        columns={3}
      />

      <PageClosingCTA
        title="Preparation now is worth far more than response later."
        body="A tested crisis communications capability costs a fraction of a poorly handled incident. If your organisation needs a plan, crisis simulation, or requires other support before the next high-pressure event, talk to us."
        primaryLabel="Book a crisis preparedness consultation"
      />
    </>
  );
}
