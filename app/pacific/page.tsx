import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: "Pacific Communications Advisory",
  description:
    "Pacific communications consultancy. CRC PR is the only Australian corporate PR firm with a deep Pacific practice, offering government relations, development communications, and crisis response across the Pacific Islands.",
};

const PACIFIC_NATIONS = [
  "Cook Islands",
  "Federated States of Micronesia",
  "Fiji",
  "French Polynesia",
  "Kiribati",
  "Nauru",
  "New Caledonia",
  "Niue",
  "Palau",
  "Papua New Guinea",
  "Republic of Marshall Islands",
  "Samoa",
  "Solomon Islands",
  "Tonga",
  "Tuvalu",
  "Vanuatu",
  "New Zealand",
] as const;

const SERVICE_AREAS = [
  {
    title: "Government Relations",
    body: "Strategic counsel for Pacific Island governments engaging with international partners, donor agencies, and regional bodies. We help navigate complex multilateral environments with precision and cultural sensitivity.",
  },
  {
    title: "Development Communications",
    body: "Communications strategy for development projects, international NGOs, and aid programs operating across the Pacific. We ensure that development messaging is clear, culturally appropriate, and effective.",
  },
  {
    title: "Cross-Cultural PR and Stakeholder Engagement",
    body: "Understanding Pacific cultures, protocols, and communication styles is essential. We bring deep experience in cross-cultural engagement that ensures your message is heard and respected.",
  },
  {
    title: "Crisis Communications: Pacific Region",
    body: "Crisis response across the Pacific requires a unique approach. We provide immediate, culturally informed crisis communications support anywhere in the region.",
  },
] as const;

export default function PacificPage() {
  return (
    <>
      <PageHero
        eyebrow="PACIFIC ADVISORY"
        title="Pacific Communications and PR Advisory"
        description="CRC PR is the only Australian corporate PR firm with deep, sustained expertise across the Pacific Islands. We work with governments, NGOs, development partners, and private organisations across the region."
        ctaLabel="WORK WITH US IN THE PACIFIC"
        ctaHref="/contact"
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl">
            Operating across the Pacific
          </h2>
          <p className="text-charcoal-mid text-base mt-4">
            CRC PR has worked with clients and stakeholders across the following
            Pacific Island nations:
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {PACIFIC_NATIONS.map((nation) => (
              <span
                key={nation}
                className="bg-off-white border border-brand-border rounded-[4px] px-4 py-2 text-sm text-navy font-sans font-medium"
              >
                {nation}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_AREAS.map((card) => (
            <div
              key={card.title}
              className="bg-white border-l-[3px] border-brand-gold rounded-lg p-8"
            >
              <h3 className="font-heading font-black text-navy text-xl">
                {card.title}
              </h3>
              <p className="text-charcoal-mid text-[15px] leading-relaxed mt-3">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <LeadMagnetBanner magnet="pacificGuide" />

      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Link
            href="/contact"
            className="inline-block bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase px-8 py-4 rounded-[4px] hover:bg-gold-light transition"
          >
            Work with us in the Pacific →
          </Link>
        </div>
      </section>
    </>
  );
}
