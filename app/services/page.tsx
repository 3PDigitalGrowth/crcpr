import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Shield,
  AlertTriangle,
  Zap,
  Radio,
  Globe,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CapabilityDownload } from "@/components/shared/CapabilityDownload";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title: "Corporate PR Services",
  description:
    "Full-service corporate communications, reputation management, crisis response, issues management, media strategy, and digital media services.",
};

const iconMap = { Building2, Shield, AlertTriangle, Zap, Radio, Globe } as const;

type IconKey = keyof typeof iconMap;

const services: {
  icon: IconKey;
  title: string;
  slug: string;
  description: string;
}[] = [
  {
    icon: "Building2",
    title: "Corporate communications",
    slug: "corporate-communications",
    description:
      "Strategic counsel for internal and external messaging. We help organisations communicate with clarity, consistency, and authority across stakeholders, media, and the public.",
  },
  {
    icon: "Shield",
    title: "Reputation management",
    slug: "reputation-management",
    description:
      "Your reputation is your most valuable asset. We assess vulnerabilities, monitor threats, and build strategies that protect what matters most, before and after issues surface.",
  },
  {
    icon: "AlertTriangle",
    title: "Issues management",
    slug: "issues-management",
    description:
      "Proactive identification and management of emerging issues. We help organisations get ahead of potential crises with early intervention, stakeholder mapping, and strategic messaging.",
  },
  {
    icon: "Zap",
    title: "Crisis communications",
    slug: "crisis-communications",
    description:
      "24/7 crisis response, media management, and communications coordination. We have been in the room when it matters most, guiding organisations through the most significant challenges.",
  },
  {
    icon: "Radio",
    title: "Media strategy",
    slug: "media-strategy",
    description:
      "Proactive media engagement, spokesperson preparation, and sustained media presence. We help organisations build and maintain relationships with journalists and editors.",
  },
  {
    icon: "Globe",
    title: "Digital media",
    slug: "digital-media",
    description:
      "Online reputation management, social media strategy, and digital communications. We help organisations navigate the digital landscape with authority.",
  },
];

const proofItems = [
  {
    label: "Senior access",
    value: "Direct counsel",
    detail:
      "Every service is delivered with direct access to experienced advisers rather than a junior account structure.",
  },
  {
    label: "High-stakes focus",
    value: "Pressure-tested",
    detail:
      "CRC Public Relations is strongest where reputation, governance, stakeholder confidence, or urgent response genuinely matter.",
  },
  {
    label: "Practical outcomes",
    value: "Strategy to action",
    detail:
      "The work spans planning, message development, spokesperson readiness, issue management, and execution under pressure.",
  },
] as const;

const faqs = [
  {
    question: "How do we know which CRC Public Relations service is the right starting point?",
    answer:
      "Most clients arrive with a situation rather than a neatly labelled service category. We help identify whether the immediate need is strategic communications counsel, issues management, crisis support, media strategy, reputation work, or a blend of several services.",
  },
  {
    question: "Do you provide standalone project support as well as ongoing counsel?",
    answer:
      "Yes. Some clients need support around a single matter, announcement, or review. Others want an ongoing senior advisory relationship. The structure depends on the situation, the pace, and the level of internal capability.",
  },
  {
    question: "Are all services led by senior advisers?",
    answer:
      "Yes. CRC Public Relations is structured around direct senior counsel. There is no separate junior account model for complex or sensitive work.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        asidePreset="strategicIntegrated"
        eyebrow="Full service offering"
        title="Corporate communications and PR services."
        description="We provide senior-level counsel across the full spectrum of corporate communications. Every engagement is led by experienced advisers who work directly with you, not through an account management layer."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        heroImage={{
          src: "/images/services/corporate-communications/hero.webp",
          alt: "Australian boardroom prepared for a leadership meeting in warm morning light",
        }}
      />

      <PageProofStrip
        title="The service mix changes by client. The standard of counsel does not."
        items={[...proofItems]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_360px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                How we think about services
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Better judgement matters more than more activity.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                Most organisations do not need more communications activity.
                They need clearer judgement about what matters, which
                stakeholders carry the greatest risk or influence, and what
                sequence of communication will hold up under scrutiny.
              </p>

              <div className="space-y-6 mt-8">
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  That is why CRC Public Relations&apos; services are designed around
                  pressure points, not agency departments.
                </p>
                <p className="text-charcoal-mid text-[15px] leading-relaxed">
                  Some clients come to us because a crisis is already active.
                  Others need a stronger media position, sharper executive
                  messaging, better reputation visibility, or earlier
                  intervention around an emerging issue. The right service is
                  usually the one that gives leadership more control sooner.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                What the right starting point solves
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Clearer priorities
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Focus on what matters most rather than adding more
                    communication for its own sake.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Better stakeholder sequencing
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Decide who needs to hear what, and in what order, before
                    pressure compounds.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Faster control
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The right service is usually the one that gives leadership
                    more control sooner.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <InlineEnquirySection
        title="Not sure which service is the right starting point?"
        body="That is common. Many clients come to CRC Public Relations with a situation rather than a neatly labelled service category. We can help identify the right starting point and the right next step."
        bullets={[
          "Sensitive matters needing senior communications judgement",
          "Preparation before a major announcement or issue escalates",
          "Reputation, media, crisis, and stakeholder communication advice",
        ]}
        defaultMessage="We would like advice on which CRC Public Relations service is the right starting point for our situation."
        variant="white"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div
                  key={service.slug}
                  className="bg-off-white border border-brand-border/50 rounded-lg p-8"
                >
                  <Icon
                    className="text-brand-gold"
                    size={28}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <h3 className="font-heading font-black text-navy text-xl mt-4">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-mid text-sm leading-relaxed mt-3">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-brand-gold font-sans font-medium text-sm mt-5 inline-block hover:opacity-80 transition"
                  >
                    Learn more →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <LeadMagnetBanner
        magnet="reputationAssessment"
        title="Want a clearer view of where your organisation is exposed?"
        description="Start with the CRC Public Relations Reputation Vulnerability Assessment. It gives leadership a fast view of media, stakeholder, governance, crisis, and digital exposure so the next decision is based on evidence rather than instinct."
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <CapabilityDownload />
      </div>

      <FAQSection
        items={faqs}
        titleText="Common questions about CRC Public Relations services"
      />

      <PageClosingCTA
        title="Not sure which service is the right starting point?"
        body="That is common. Many clients come to us with a situation rather than a neatly labelled service category. We can help you identify the right starting point and the right next step."
      />
    </>
  );
}
