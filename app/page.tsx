import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AlternativeHome } from "@/components/alternative/AlternativeHome";

const homepageFaqs = siteConfig.faqs;

export const metadata: Metadata = {
  title: {
    absolute:
      "CRC Public Relations | Boutique Corporate PR, Reputation & Crisis Advisory",
  },
  description:
    "Boutique corporate PR firm trusted by CEOs, directors, and executives across Australia, the Pacific, and internationally. Expert advice on reputation, issues, crisis response, and communications strategy.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CRC Public Relations",
  description:
    "Boutique corporate PR firm trusted by CEOs, directors, and executives across Australia, the Pacific, and internationally. Corporate communications, reputation management, crisis response, and media training.",
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
