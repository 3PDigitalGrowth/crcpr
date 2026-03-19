import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Issues Management",
  description:
    "Proactive identification and management of emerging issues before they escalate.",
};

const activities = [
  "Issue identification and monitoring",
  "Stakeholder mapping and analysis",
  "Key message development",
  "Media strategy for emerging issues",
  "Government and regulatory engagement",
  "Community and public affairs",
  "Post-issue review and strategy",
];

const sectors = [
  "Government departments",
  "Industry associations",
  "Health and aged care",
  "Faith-based organisations",
];

export default function IssuesManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="ISSUES MANAGEMENT"
        title="Get ahead of the issue before it becomes a crisis."
        description="Proactive identification and management of emerging issues before they escalate."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="text-charcoal text-base leading-relaxed">
                Most organisational crises do not begin as crises. They begin as
                issues: regulatory shifts, stakeholder concerns, emerging media
                interest, and internal policy failures that escalate because they
                are not identified or managed early enough. CRC PR specialises
                in the early detection and strategic management of issues before
                they reach crisis point.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                Our issues management approach begins with a comprehensive
                environmental scan: mapping stakeholders, monitoring media and
                political landscapes, and identifying the pressure points that
                could damage your organisation&apos;s reputation. We then
                develop targeted messaging, engagement strategies, and escalation
                protocols that give your leadership team the tools to respond
                with precision.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                Whether the issue is regulatory, political, community-driven, or
                internal, we bring the strategic discipline and communications
                expertise needed to contain it, and the senior counsel to guide
                your organisation through the process with confidence.
              </p>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-heading font-black text-navy text-lg mb-6">
                What we do
              </h3>
              <ul className="space-y-4">
                {activities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="text-brand-gold shrink-0 mt-0.5"
                      size={18}
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span className="text-charcoal text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-heading font-black text-navy text-lg mb-4">
            Related sectors
          </h3>
          <div className="flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="bg-off-white border border-brand-border rounded-[4px] px-3 py-1 text-sm text-charcoal-mid"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnetBanner magnet="crisisPlanTemplate" variant="dark" />

      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="text-white font-heading font-black text-xl hover:text-brand-gold transition"
          >
            Discuss your issues management needs →
          </Link>
        </div>
      </section>
    </>
  );
}
