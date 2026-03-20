import Link from "next/link";
import { siteConfig } from "@/config/site";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { HomePillars } from "@/components/home/HomePillars";
import { HomeLeadMagnet } from "@/components/home/HomeLeadMagnet";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeClients } from "@/components/home/HomeClients";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { CaseStudies } from "@/components/shared/CaseStudies";
import { FAQSection } from "@/components/shared/FAQSection";
import { HomeCrisisLeadMagnet } from "@/components/home/HomeCrisisLeadMagnet";
import { HomeCTA } from "@/components/home/HomeCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CRC Public Relations",
  description:
    "Boutique corporate PR firm specialising in corporate communications, reputation management, crisis communications, and media training across Australia, the Pacific, and internationally.",
  url: "https://crcpr.com.au",
  telephone: siteConfig.phone.display,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postcode,
    addressCountry: "AU",
  },
  areaServed: ["AU", "NZ", "PG", "FJ", "WS", "TO", "VU"],
  founder: {
    "@type": "Person",
    name: "Lyall Mercer",
    url: siteConfig.lyallMercerUrl,
    sameAs: [siteConfig.lyallLinkedIn, siteConfig.lyallTwitter],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corporate PR Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Communications" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reputation Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crisis Communications" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Media Training" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Issues Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pacific Advisory" } },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeHero />
      <HomeStats />
      <HomePillars />
      <HomeLeadMagnet />
      <HomeServices />
      <HomeClients />
      <HomeAbout />
      <HomeTestimonials />

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase mb-3">
            Client Outcomes
          </p>
          <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-4">
            Results that speak for themselves.
          </h2>
          <p className="text-charcoal-mid text-base max-w-2xl mb-12 leading-relaxed">
            We don&apos;t discuss client engagements without permission. These three
            anonymised outcomes represent the kind of work we do when the stakes
            are highest.
          </p>
          <CaseStudies />
          <div className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="text-brand-gold font-medium text-sm hover:underline"
            >
              Read more about how we work →
            </Link>
          </div>
        </div>
      </section>

      <HomeCrisisLeadMagnet />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase mb-3 text-center">
            Common Questions
          </p>
          <h2 className="font-heading font-black text-navy text-3xl md:text-4xl mb-10 text-center">
            Frequently asked questions.
          </h2>
          <FAQSection title={false} embedded />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-brand-teal text-sm font-medium hover:underline"
            >
              View all questions →
            </Link>
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
