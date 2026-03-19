import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ReputationAssessment } from "@/components/shared/ReputationAssessment";

export const metadata: Metadata = {
  title: "Reputation Management Consultants Australia",
  description:
    "Vulnerability assessments, reputation protection, and issue monitoring for organisations under scrutiny.",
};

const activities = [
  "Reputation vulnerability assessments",
  "Reputation monitoring and reporting",
  "Stakeholder perception analysis",
  "Issues identification and early warning",
  "Reputation recovery strategy",
  "Board and executive reputation counsel",
  "Online reputation management",
];

const sectors = [
  "ASX-listed companies",
  "Industry associations",
  "Health and aged care",
  "Independent schools",
];

export default function ReputationManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="REPUTATION MANAGEMENT"
        title="Protect your most valuable asset."
        description="Vulnerability assessments, reputation protection, and issue monitoring for organisations under scrutiny."
        ctaLabel="BOOK A CONSULTATION"
        ctaHref="/contact"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <p className="text-charcoal text-base leading-relaxed">
                Reputation risk does not announce itself. By the time a story
                breaks, an employee posts, or a regulator issues a notice, the
                window for proactive management has closed. CRC PR works with
                organisations to identify vulnerabilities, assess exposure, and
                build the frameworks needed to protect reputation over the long
                term.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                Our approach begins with a structured vulnerability assessment:
                a forensic review of your organisation&apos;s communications
                posture, stakeholder relationships, media profile, and digital
                footprint. We map the risks, quantify the exposure, and deliver
                a prioritised action plan that your leadership team can execute
                immediately.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6">
                For organisations already under scrutiny, we provide discreet,
                senior-level counsel on reputation recovery, managing media
                narratives, rebuilding stakeholder confidence, and ensuring
                internal alignment during periods of intense external pressure.
              </p>
              <p className="text-charcoal text-base leading-relaxed mt-6 border-l-[3px] border-brand-gold pl-4 italic text-charcoal-mid">
                Try our interactive Reputation Vulnerability Assessment below,
                or explore the full tool on our{" "}
                <a
                  href="#reputation-assessment"
                  className="text-brand-gold hover:opacity-80 transition underline"
                >
                  dedicated assessment page
                </a>
                .
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

      <ReputationAssessment />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy rounded-lg p-8">
            <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase mb-3">NEXT STEP</p>
            <h3 className="font-heading font-black text-white text-2xl mb-3">Want to discuss your results?</h3>
            <p className="text-white/70 text-base mb-6">
              Once you&apos;ve completed the assessment, our advisers can walk you through your score and what it means for your organisation in a confidential, no-obligation conversation.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase px-6 py-3 rounded-[4px] hover:bg-gold-light transition">
              Book a confidential consultation →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="text-white font-heading font-black text-xl hover:text-brand-gold transition"
          >
            Discuss your reputation management needs →
          </Link>
        </div>
      </section>
    </>
  );
}
