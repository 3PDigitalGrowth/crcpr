import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CrisisContactForm } from "@/components/crisis/CrisisContactForm";
import { CrisisHero } from "@/components/crisis/CrisisHero";
import { CrisisServices } from "@/components/crisis/CrisisServices";
import { CrisisFAQ } from "@/components/crisis/CrisisFAQ";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Crisis Communications Australia | 24/7 Senior Response | CRC Public Relations",
  },
  description:
    "Immediate crisis communications support for Australian organisations. Senior advisors available 24/7. Crisis plans, simulation exercises, media management, and post-crisis recovery. Call 1300 182 186.",
};

const steps = [
  {
    num: "1",
    heading: "You speak to a senior advisor immediately.",
    body: "Every call is answered by, or returned within minutes to, a senior CRC Public Relations advisor with direct experience in crisis communications. You do not speak to a receptionist, a junior account manager, or an answering service. If the situation is live, we are with you from the first contact.",
  },
  {
    num: "2",
    heading: "We establish the facts and your exposure.",
    body: "Before any external communications are prepared, we establish what is known, what is unknown, and what the likely media and stakeholder behaviour will be in the coming hours. We assess your exposure honestly and give you a clear-eyed view of your options, not a reassuring one.",
  },
  {
    num: "3",
    heading: "We draft your first response.",
    body: "Your first public communication, whether a statement, a media callback, an internal message to staff, or a board briefing, is the most important communication you will make. We draft it. We test it against every hard question a journalist might ask. We prepare your spokesperson to deliver it with authority.",
  },
  {
    num: "4",
    heading: "We stay with you.",
    body: "Crisis communications is not a one-call service. We remain engaged throughout, managing media, monitoring coverage, advising on each subsequent communication, and steering your organisation's response until your reputation is stable. Every engagement is treated with absolute confidentiality.",
  },
];

const trustColumns = [
  {
    Icon: Shield,
    heading: "25 years of crisis experience.",
    body: "Lyall Mercer began his career as a journalist before building one of Australasia's most respected crisis communications practices over the past 25 years. He has advised companies, governments, associations, sporting figures, and senior executives through some of Australia's most significant public crises. You are not our first crisis.",
  },
  {
    Icon: Lock,
    heading: "Absolute confidentiality.",
    body: "Everything shared with CRC Public Relations is treated with complete confidentiality. We do not reference client engagements without explicit written permission. Our advisors operate with the same professional discretion as legal counsel. We have never, and will never, disclose the identity of a client in crisis.",
  },
  {
    Icon: Globe,
    heading: "Available anywhere, anytime.",
    body: "We manage crisis communications across Australia, New Zealand, and the Pacific. We work by phone, video, and in person, wherever you are, whenever you need us. Our 24/7 availability is genuine: every call during a live crisis is answered or returned within minutes by a senior advisor, regardless of the hour.",
  },
];

const outcomeCards = [
  {
    sector: "Industry association",
    outcome: "Legislation amended.",
    detail:
      "A national peak body facing a Federal Government proposal that would have fundamentally altered the operating environment for its 800+ member organisations. CRC Public Relations developed the communications strategy, prepared the executive officer for parliamentary and media engagement, and coordinated a coalition of member voices across a tight legislative timeline. Key provisions unfavourable to members were removed before the bill passed. Media coverage shifted from hostile to measured within six weeks.",
  },
  {
    sector: "Independent school",
    outcome: "Zero enrolment loss.",
    detail:
      "A prominent independent school facing a serious safeguarding incident that became public before the school could communicate proactively with its community. Parent confidence was at immediate risk. CRC Public Relations provided immediate crisis counsel, drafted a coordinated parent communications plan, prepared the principal for media enquiries, and worked alongside legal counsel to ensure all messaging was defensible and empathetic. No students withdrew. Parent trust surveys conducted six months later showed confidence in leadership had increased.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Crisis Communications",
  provider: {
    "@type": "ProfessionalService",
    name: "CRC Public Relations",
    url: "https://crcpr.com.au",
    telephone: siteConfig.phone.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postcode,
      addressCountry: "AU",
    },
  },
  description:
    "24/7 crisis communications support for Australian organisations. Crisis prevention, active crisis response, simulation exercises, and post-crisis recovery.",
  areaServed: ["AU", "NZ", "PG", "FJ"],
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone.display,
      contactType: "emergency",
      availabilityStarts: "00:00",
      availabilityEnds: "23:59",
      daysOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can CRC Public Relations respond to an active crisis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Immediately. Every crisis call is answered by, or returned within minutes to, a senior CRC Public Relations advisor, regardless of the hour. During business hours, our target response is within 15 minutes of first contact. For after-hours situations, we return calls within the hour. We do not have a crisis hotline answered by junior staff. The phone number is Lyall Mercer's or a senior advisor's direct line.",
      },
    },
    {
      "@type": "Question",
      name: "What types of crises does CRC Public Relations handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have managed crisis communications across every sector and severity level, including: safety and operational incidents, governance and board disputes, regulatory investigations and inquiries, media exposés and investigative journalism, safeguarding disclosures in schools and faith-based organisations, industrial disputes and employee relations crises, social media pile-ons and digital reputation attacks, and Pacific-specific cultural and political crises. If your situation involves your reputation, we have experience with it.",
      },
    },
    {
      "@type": "Question",
      name: "Is everything I share with CRC Public Relations confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Everything shared with CRC Public Relations, including the fact that you contacted us, is treated with complete confidentiality. We do not reference client engagements without explicit written permission. Our advisors operate with the same professional discretion as legal counsel. We have turned away opportunities to be quoted in media articles about clients we have worked with, because we do not believe our clients' confidentiality should serve our profile.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with organisations outside Brisbane?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CRC Public Relations works with clients across Australia, Sydney, Melbourne, Canberra, Perth, regional Queensland, and interstate, as well as New Zealand and across the Pacific. We manage most crisis engagements remotely via phone and video, and travel for in-person work when the situation requires it. Geography has never been a barrier to a CRC Public Relations engagement.",
      },
    },
    {
      "@type": "Question",
      name: "What is a crisis communications plan and does my organisation need one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A crisis communications plan is a tested, documented framework that defines who is responsible for what, how decisions are made under pressure, how you communicate with each stakeholder group, and how you engage with media during a crisis. If your organisation does not have a tested plan, meaning one that has been exercised by your actual team within the last 12 months, you are not prepared for a crisis. Most organisations discover this at the worst possible moment.",
      },
    },
  ],
};

export default function CrisisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Gold bar + Hero */}
      <CrisisHero />

      {/* 2. What happens when you call, answers the urgent visitor's question immediately */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold font-sans font-medium text-xs mb-4">
            When you call
          </p>
          <h2 className="font-heading font-black text-navy text-[38px] leading-tight">
            What happens in the first hour.
          </h2>
          <p className="text-charcoal text-[17px] leading-[1.75] max-w-2xl mt-5 mb-12">
            In 25 years of crisis communications practice, CRC Public Relations founder Lyall
            Mercer has observed one consistent truth: the organisations that
            navigate crises well are not the ones that never face them. They are
            the ones that had senior counsel on the phone before the first
            journalist called.
          </p>
          <p className="text-charcoal text-[17px] leading-[1.75] max-w-2xl mb-12">
            Here is what happens when you contact CRC Public Relations during an active
            crisis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-off-white border border-brand-border rounded-lg p-6"
              >
                <div className="flex items-start gap-5">
                  <span className="font-heading font-black text-brand-gold text-[48px] leading-none select-none">
                    {step.num}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-heading font-black text-navy text-lg mb-2">
                      {step.heading}
                    </h3>
                    <p className="text-charcoal text-[15px] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact form, urgent visitor converts here */}
      <CrisisContactForm />

      {/* 4. Service cards, planner's journey begins */}
      <CrisisServices />

      {/* 5. Trust authority block, credentials layer */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustColumns.map((col) => (
              <div key={col.heading}>
                <col.Icon
                  className="text-brand-gold mb-5"
                  size={28}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="font-heading font-black text-white text-[17px] mb-3">
                  {col.heading}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {col.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Case outcomes, proof layer */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold font-sans font-medium text-xs mb-4">
            Client outcomes
          </p>
          <h2 className="font-heading font-black text-navy text-4xl leading-tight">
            The measure of crisis communications is what happens after.
          </h2>
          <p className="text-charcoal-mid text-base leading-relaxed max-w-2xl mt-4 mb-12">
            We do not discuss client engagements without permission. These
            outcomes represent the standard of work we bring to every crisis
            engagement.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {outcomeCards.map((card) => (
              <div
                key={card.outcome}
                className="bg-white border border-brand-border rounded-lg p-8"
              >
                <p className="text-brand-gold text-[9px] font-medium mb-3">
                  {card.sector}
                </p>
                <h3 className="font-heading font-black text-navy text-2xl mb-4">
                  {card.outcome}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/case-studies"
              className="text-brand-teal font-sans font-medium text-sm hover:underline underline-offset-2"
            >
              → Read more about how we work
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Lead magnet, mid-funnel capture for the "not yet" planner */}
      <LeadMagnetBanner magnet="crisisPlanTemplate" />

      {/* 8. FAQ, objection handling and SEO */}
      <CrisisFAQ />

      {/* 9. Closing CTA, final catch-all */}
      <PageClosingCTA
        eyebrow="When the stakes are high"
        title="If the matter is live, call now. If the next one is coming, prepare now."
        body="CRC Public Relations supports organisations in both situations: urgent response when the issue is active, and disciplined preparation before pressure arrives. Both begin with a confidential conversation."
        primaryLabel="Book a crisis preparedness consultation"
      />
    </>
  );
}
