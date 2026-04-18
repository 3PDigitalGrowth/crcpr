import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AlternativeHome } from "@/components/alternative/AlternativeHome";

const homepageFaqs = siteConfig.faqs.map((faq, index) => {
  if (index === 3) {
    return {
      question:
        "What types of organisations does CRC Public Relations work with?",
      answer:
        "We work with CEOs, directors, and executives across companies, charities, not-for-profits, family businesses, industry associations and peak bodies, independent and faith-based schools, health and aged care organisations, legal and professional services firms, Pacific governments and NGOs, and faith-based organisations. What our clients share is a preference for working directly with experienced advisers rather than through large agency structures.",
    };
  }

  return faq;
});

export const metadata: Metadata = {
  title: {
    absolute:
      "CRC Public Relations | Boutique Corporate PR, Reputation & Crisis Advisory",
  },
  description:
    "Boutique corporate PR firm trusted by CEOs, directors, and senior executives across Australia, the Pacific, and internationally. Senior advice on reputation, issues, crisis response, and communications strategy.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CRC Public Relations",
  description:
    "Boutique corporate PR firm trusted by CEOs, directors, and senior executives across Australia, the Pacific, and internationally. Corporate communications, reputation management, crisis response, and media training.",
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
  mainEntity: homepageFaqs.map((faq) => ({
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
      <AlternativeHome faqItems={homepageFaqs} />
    </>
  );
}
