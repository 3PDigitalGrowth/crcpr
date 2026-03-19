import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Digital Media",
  description:
    "Online reputation management, social media strategy, and digital communications.",
};

const activities = [
  "Social media strategy and management",
  "Online reputation monitoring",
  "Digital crisis response",
  "Content strategy and creation",
  "Website communications strategy",
  "Digital stakeholder engagement",
  "Social media policy development",
];

const sectors = [
  "ASX-listed companies",
  "Independent schools",
  "Industry associations",
  "Health and aged care",
];

export default function DigitalMediaPage() {
  return (
    <>
      <PageHero
        eyebrow="DIGITAL MEDIA"
        title="Navigate the digital landscape with authority."
        description="Online reputation management, social media strategy, and digital communications."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="text-charcoal text-base leading-relaxed">
                The digital environment has fundamentally changed the speed and
                scale at which reputations are built and destroyed.
                Organisations that treat digital communications as an
                afterthought, or delegate it to junior teams, leave
                themselves exposed. CRC PR provides senior-level digital
                communications counsel for organisations that take their online
                presence seriously.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                Our digital media services cover the full spectrum: from
                developing social media strategies aligned with organisational
                objectives, to monitoring online sentiment and managing digital
                reputation risks, to executing rapid digital crisis response
                when negative content escalates. We bring the same strategic
                rigour to digital channels that we apply to traditional media.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                For organisations navigating regulatory scrutiny, public
                controversy, or stakeholder activism online, we provide the
                frameworks, policies, and tactical support needed to maintain
                control of your digital narrative and to respond with
                authority when that narrative is challenged.
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
            Discuss your digital media needs →
          </Link>
        </div>
      </section>
    </>
  );
}
