import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { CaseStudies } from "@/components/shared/CaseStudies";

export const metadata: Metadata = {
  title: "Client Outcomes | CRC Public Relations",
  description:
    "Anonymised case studies from CRC PR client engagements across industry associations, schools, and Pacific governments.",
};

const sectorLinks = [
  { label: "Industry Associations", href: "/clients/industry-associations" },
  { label: "Schools & Faith-Based", href: "/clients/schools-faith" },
  { label: "Pacific", href: "/pacific" },
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Results when the stakes are highest."
        description="Three anonymised outcomes from CRC PR client engagements."
      />

      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <CaseStudies />

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {sectorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-gold font-medium text-sm hover:underline"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-white text-lg leading-relaxed">
            Every engagement is treated with complete confidentiality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-xs tracking-widest uppercase rounded-[4px] px-8 py-4 mt-8 hover:bg-gold-light transition"
          >
            BOOK A CONSULTATION →
          </Link>
        </div>
      </section>
    </>
  );
}
