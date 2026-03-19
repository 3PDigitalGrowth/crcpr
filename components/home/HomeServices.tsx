import Link from "next/link";
import {
  Building2,
  Shield,
  AlertTriangle,
  Zap,
  Radio,
  Globe,
} from "lucide-react";

const iconMap = { Building2, Shield, AlertTriangle, Zap, Radio, Globe } as const;

type IconKey = keyof typeof iconMap;

const services: { icon: IconKey; title: string; slug: string; desc: string }[] = [
  {
    icon: "Building2",
    title: "Corporate Communications",
    slug: "corporate-communications",
    desc: "Strategic internal and external messaging, stakeholder communications, and media relations.",
  },
  {
    icon: "Shield",
    title: "Reputation Management",
    slug: "reputation-management",
    desc: "Vulnerability assessments, reputation protection, and issue monitoring for organisations under scrutiny.",
  },
  {
    icon: "AlertTriangle",
    title: "Issues Management",
    slug: "issues-management",
    desc: "Proactive identification and management of emerging issues before they become crises.",
  },
  {
    icon: "Zap",
    title: "Crisis Communications",
    slug: "crisis-communications",
    desc: "24/7 crisis response, coordination, and media management when it matters most.",
  },
  {
    icon: "Radio",
    title: "Media Strategy",
    slug: "media-strategy",
    desc: "Proactive media engagement, spokesperson development, and sustained media presence.",
  },
  {
    icon: "Globe",
    title: "Digital Media",
    slug: "digital-media",
    desc: "Online reputation management, social media strategy, and digital communications.",
  },
];

export function HomeServices() {
  return (
    <section className="bg-off-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase text-center">
          Full Service Offering
        </p>
        <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] text-center mt-3">
          One firm. Every communications need.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.slug}
                className="bg-white border border-brand-border/50 rounded-lg p-6 relative border-l-[3px] border-l-brand-gold"
              >
                <Icon className="text-brand-gold" size={24} strokeWidth={1.75} aria-hidden />
                <h4 className="font-heading font-black text-navy text-lg mt-3">
                  {service.title}
                </h4>
                <p className="text-charcoal-mid text-sm leading-relaxed mt-2">
                  {service.desc}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-brand-gold font-sans font-medium text-sm mt-4 inline-block hover:opacity-80 transition"
                >
                  Learn more →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
