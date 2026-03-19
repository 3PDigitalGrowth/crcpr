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
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

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

      <LeadMagnetBanner magnet="reputationAssessment" />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <CapabilityDownload />
      </div>
    </>
  );
}
