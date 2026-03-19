import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Sector Expertise",
  description:
    "CRC Public Relations works with ASX-listed companies, government departments, industry associations, independent schools, and organisations across every sector.",
};

const sectors = [
  {
    title: "Industry Associations",
    body: "Regulatory crisis, member communications, board governance, public affairs, and advocacy campaigns for Australia's peak bodies and associations.",
    href: "/clients/industry-associations",
    magnetKey: "associationCrisisGuide" as const,
  },
  {
    title: "Schools & Faith-Based Organisations",
    body: "Parent communications, media management, governance support, and crisis response for independent schools, Catholic schools, and faith-based organisations.",
    href: "/clients/schools-faith",
    magnetKey: "schoolsPlaybook" as const,
  },
  {
    title: "Corporate",
    body: "ASX-listed companies, professional services firms, and private enterprises requiring senior-level communications counsel and reputation management.",
    href: "/clients/corporate",
    magnetKey: "crisisPlanTemplate" as const,
  },
  {
    title: "Government",
    body: "Federal and state government departments, statutory authorities, and public sector organisations requiring strategic communications and stakeholder engagement.",
    href: "/clients/government",
    magnetKey: "crisisPlanTemplate" as const,
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="SECTOR EXPERTISE"
        title="Deep expertise across every sector."
        description="We don't take on every client. We work best with organisations that recognise the value of senior-level counsel and treat reputation as a strategic asset."
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map(({ title, body, href, magnetKey }) => {
            const magnet = siteConfig.leadMagnets[magnetKey];
            return (
              <article
                key={href}
                className="bg-off-white border border-brand-border/50 rounded-lg p-8"
              >
                <h3 className="font-heading font-black text-navy text-xl">
                  {title}
                </h3>
                <p className="text-charcoal-mid text-[15px] leading-relaxed mt-3">
                  {body}
                </p>
                <Link
                  href={href}
                  className="text-brand-gold font-sans font-medium text-sm mt-6 inline-block hover:opacity-90 transition-opacity"
                >
                  Explore {title.toLowerCase()} →
                </Link>
                <p className="text-charcoal-mid/80 text-xs leading-relaxed mt-4">
                  Free resource: {magnet.title}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="font-heading font-black text-white text-2xl md:text-3xl">
            Ready to discuss your communications needs?
          </h3>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase px-8 py-4 rounded-[4px] hover:bg-gold-light transition"
            >
              Book a consultation →
            </Link>
            <a
              href={siteConfig.myPrPartnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal font-sans font-medium text-sm hover:opacity-80 transition"
            >
              Explore My PR Partner →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
