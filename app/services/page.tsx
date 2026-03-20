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
    title: "Corporate Communications",
    slug: "corporate-communications",
    description:
      "Strategic counsel for internal and external messaging. We help organisations communicate with clarity, consistency, and authority across stakeholders, media, and the public.",
  },
  {
    icon: "Shield",
    title: "Reputation Management",
    slug: "reputation-management",
    description:
      "Your reputation is your most valuable asset. We assess vulnerabilities, monitor threats, and build strategies that protect what matters most, before and after issues surface.",
  },
  {
    icon: "AlertTriangle",
    title: "Issues Management",
    slug: "issues-management",
    description:
      "Proactive identification and management of emerging issues. We help organisations get ahead of potential crises with early intervention, stakeholder mapping, and strategic messaging.",
  },
  {
    icon: "Zap",
    title: "Crisis Communications",
    slug: "crisis-communications",
    description:
      "24/7 crisis response, media management, and communications coordination. We have been in the room when it matters most, guiding organisations through the most significant challenges.",
  },
  {
    icon: "Radio",
    title: "Media Strategy",
    slug: "media-strategy",
    description:
      "Proactive media engagement, spokesperson preparation, and sustained media presence. We help organisations build and maintain relationships with journalists and editors.",
  },
  {
    icon: "Globe",
    title: "Digital Media",
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
      "Every service is delivered with direct access to experienced advisors rather than a junior account structure.",
  },
  {
    label: "High-stakes focus",
    value: "Pressure-tested",
    detail:
      "CRC PR is strongest where reputation, governance, stakeholder confidence, or urgent response genuinely matter.",
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
    question: "How do we know which CRC PR service is the right starting point?",
    answer:
      "Most clients arrive with a situation rather than a neatly labelled service category. We help identify whether the immediate need is strategic communications counsel, issues management, crisis support, media strategy, reputation work, or a blend of several services.",
  },
  {
    question: "Do you provide standalone project support as well as ongoing counsel?",
    answer:
      "Yes. Some clients need support around a single matter, announcement, or review. Others want an ongoing senior advisory relationship. The structure depends on the situation, the pace, and the level of internal capability.",
  },
  {
    question: "Are all services led by senior advisors?",
    answer:
      "Yes. CRC PR is structured around direct senior counsel. There is no separate junior account model for complex or sensitive work.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="FULL SERVICE OFFERING"
        title="Corporate communications and PR services."
        description="CRC PR provides senior-level counsel across the full spectrum of corporate communications. Every engagement is led by experienced advisors who work directly with your leadership team."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="The service mix changes by client. The standard of counsel does not."
        items={[...proofItems]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal-mid text-[15px] leading-relaxed">
            Most organisations do not need more communications activity. They need
            clearer judgement about what matters, which stakeholders carry the greatest
            risk or influence, and what sequence of communication will hold up under
            scrutiny. That is why CRC PR&apos;s services are designed around pressure points,
            not agency departments.
          </p>
          <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
            Some clients come to us because a crisis is already active. Others need a
            stronger media position, sharper executive messaging, better reputation
            visibility, or earlier intervention around an emerging issue. The right
            service is usually the one that gives leadership more control sooner.
          </p>
        </div>
      </section>

      <InlineEnquirySection
        title="Not sure which service is the right starting point?"
        body="That is common. Many clients come to CRC PR with a situation rather than a neatly labelled service category. We can help identify the right starting point and the right next step."
        bullets={[
          "Sensitive matters needing senior communications judgement",
          "Preparation before a major announcement or issue escalates",
          "Reputation, media, crisis, and stakeholder communication advice",
        ]}
        defaultMessage="We would like advice on which CRC PR service is the right starting point for our situation."
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
        description="Start with the CRC PR Reputation Vulnerability Assessment. It gives leadership a fast view of media, stakeholder, governance, crisis, and digital exposure so the next decision is based on evidence rather than instinct."
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <CapabilityDownload />
      </div>

      <FAQSection
        items={faqs}
        titleText="Common questions about CRC PR services"
      />

      <PageClosingCTA
        title="Not sure which service is the right starting point?"
        body="That is common. Many clients come to CRC PR with a situation rather than a neatly labelled service category. We can help you identify the right starting point and the right next step."
      />
    </>
  );
}
