"use client";

import Link from "next/link";
import {
  Building2,
  Shield,
  AlertTriangle,
  Zap,
  Radio,
  Globe,
  ArrowRight,
} from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";

const iconMap = {
  Building2,
  Shield,
  AlertTriangle,
  Zap,
  Radio,
  Globe,
} as const;

type IconKey = keyof typeof iconMap;

const remainingServices: {
  icon: IconKey;
  title: string;
  slug: string;
  desc: string;
}[] = [
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
    <section className="bg-off-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn>
          <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase text-left">
            Full service offering
          </p>
          <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] leading-[1.05] mt-3">
            One firm. Every
            <br />
            communications need.
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 auto-rows-fr">
          <AnimateIn className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <Link
              href="/services/crisis-communications"
              className="group block h-full"
            >
              <div className="relative bg-white border border-brand-border rounded-lg p-8 h-full flex flex-col justify-between min-h-[320px] card-border-expand overflow-hidden shadow-sm shadow-navy/5">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-warm-white to-off-white opacity-100" />
                <div className="relative z-10">
                  <Zap className="text-brand-gold" size={28} strokeWidth={1.75} aria-hidden />
                  <h3 className="font-heading font-black text-navy text-xl mt-4">
                    Crisis Communications
                  </h3>
                  <p className="text-text-body text-[15px] leading-relaxed mt-3">
                    24/7 crisis response, coordination, and media management when
                    it matters most. We have been in the room when it matters most.
                  </p>
                </div>
                <div className="relative z-10 mt-6">
                  <span className="text-link-teal font-sans font-medium text-sm group-hover:text-navy group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                    Learn more <ArrowRight size={14} aria-hidden />
                  </span>
                </div>
              </div>
            </Link>
          </AnimateIn>

          {remainingServices.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimateIn key={service.slug} delay={(i + 1) * 100}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <div className="bg-white rounded-lg p-6 h-full border border-brand-border shadow-sm shadow-navy/5 hover:shadow-md transition-all duration-300">
                    <Icon
                      className="text-brand-gold"
                      size={22}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <h4 className="font-heading font-black text-navy text-lg mt-3">
                      {service.title}
                    </h4>
                    <p className="text-charcoal-mid text-sm leading-relaxed mt-2">
                      {service.desc}
                    </p>
                    <span className="text-link-teal font-sans font-medium text-sm mt-4 inline-flex items-center gap-2 group-hover:text-navy group-hover:gap-3 transition-all">
                      Learn more <ArrowRight size={14} aria-hidden />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
