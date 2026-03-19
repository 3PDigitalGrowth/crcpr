import Link from "next/link";
import { siteConfig } from "@/config/site";

export function HomeClients() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase">
          Who We Work With
        </p>
        <h2 className="font-heading font-black text-navy text-3xl md:text-[42px] mt-3">
          Trusted across every sector.
        </h2>
        <p className="max-w-2xl mx-auto text-charcoal-mid text-base leading-relaxed mt-4">
          Our clients range from ASX-listed companies and Federal Government
          departments to independent schools, faith-based organisations, industry
          associations, and Pacific governments. What they share is a need for
          experienced, senior advice when the stakes are highest.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {siteConfig.sectors.map((sector) => (
            <div
              key={sector}
              className="bg-off-white border border-brand-border/50 p-4 rounded-lg text-center"
            >
              <p className="font-sans font-medium text-navy text-sm">{sector}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="text-brand-gold font-sans font-medium text-sm hover:opacity-80 transition"
          >
            → Work with us
          </Link>
          <a
            href={siteConfig.myPrPartnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal font-sans font-medium text-sm hover:opacity-80 transition"
          >
            → Not ready for a retainer? Start with My PR Partner
          </a>
        </div>
      </div>
    </section>
  );
}
