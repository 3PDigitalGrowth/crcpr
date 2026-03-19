import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Government Communications & PR",
  description:
    "Strategic communications, stakeholder engagement, and crisis response for Federal and State government departments, statutory authorities, and public sector organisations.",
};

const services = [
  "Strategic communications planning and narrative design",
  "Ministerial and executive office communications support",
  "Stakeholder mapping and engagement frameworks",
  "Public sector crisis and issues management",
  "Campaigns, public information, and consent-building",
  "Coordination across agencies and delivery partners",
  "Media, parliamentary, and community liaison",
];

export default function GovernmentClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="GOVERNMENT"
        title="Government communications and stakeholder engagement"
        description="Strategic communications counsel for Federal and State government departments, statutory authorities, and public sector organisations."
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6 text-charcoal-mid text-[15px] leading-relaxed">
            <p>
              Government organisations must communicate with authority, accuracy,
              and empathy — often while managing competing stakeholder interests,
              statutory obligations, and intense media attention. The public sector
              environment demands discipline: clear accountabilities, defensible
              messaging, and readiness when programs or incidents attract scrutiny.
            </p>
            <p>
              CRC PR supports departments, agencies, and authorities with
              communications strategy that respects machinery-of-government
              realities. We help leaders anticipate friction points, align internal
              and external narratives, and engage communities and industry with
              clarity and respect.
            </p>
            <p>
              From ministerial announcements to operational incidents and complex
              reform agendas, we provide experienced counsel — including crisis
              response when confidence in public institutions is on the line.
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

      <LeadMagnetBanner magnet="crisisPlanTemplate" />

      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="font-heading font-black text-white text-2xl md:text-3xl">
            Discuss your government communications needs →
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
