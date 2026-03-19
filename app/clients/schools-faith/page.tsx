import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Schools & Faith-Based Organisations PR",
  description:
    "Crisis communications, parent engagement, and media management for independent schools, Catholic schools, and faith-based organisations.",
};

const services = [
  "Crisis communications and incident response",
  "Parent and community communications",
  "Media relations and spokesperson support",
  "Social media and online reputation",
  "Board and governance communications",
  "Stakeholder engagement for school communities",
  "Issues management and reputation protection",
];

export default function SchoolsFaithPage() {
  return (
    <>
      <PageHero
        eyebrow="SCHOOLS & FAITH-BASED ORGANISATIONS"
        title="Communications for schools and faith-based organisations"
        description="Specialist crisis response, parent communications, and media management for school leaders and faith-based organisations."
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6 text-charcoal-mid text-[15px] leading-relaxed">
            <p>
              Schools and faith-based organisations operate under intense scrutiny.
              Parents, alumni, regulators, and the media expect clarity, compassion,
              and consistency — especially when an incident unfolds. Effective
              crisis communications protect students, staff, and the trust your
              community places in your leadership.
            </p>
            <p>
              CRC PR supports principals, boards, and executive teams across
              independent, Catholic, and faith-based settings. We help you navigate
              sensitive disclosures, coordinate parent channels, and manage media
              attention without losing sight of pastoral duty and legal
              obligations.
            </p>
            <p>
              From social media storms to governance questions and complex
              stakeholder dynamics, we provide disciplined messaging, rehearsal for
              spokespeople, and a calm, senior presence at the point of decision —
              so your organisation can respond with judgment as well as speed.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-3">
              {services.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-charcoal-mid text-[15px] leading-snug"
                >
                  <Check
                    className="size-5 shrink-0 text-brand-gold mt-0.5"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <LeadMagnetBanner magnet="schoolsPlaybook" />

      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="font-heading font-black text-white text-2xl md:text-3xl">
            Discuss your school or organisation&apos;s communications needs →
          </h3>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase px-8 py-4 rounded-[4px] hover:bg-gold-light transition"
          >
            Book a consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
