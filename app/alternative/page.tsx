import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AlternativeHome } from "@/components/alternative/AlternativeHome";

const alternativeFaqs = siteConfig.faqs.map((faq, index) => {
  if (index === 0) {
    return {
      question: faq.question,
      answer: `${faq.answer} That personal, senior approach is the reason clients choose us, and it is also the reason many of our clients are substantial organisations who could afford a larger firm but prefer to work with us.`,
    };
  }

  if (index === 3) {
    return {
      question: "What types of organisations does CRC PR work with?",
      answer:
        "We work with CEOs, directors, and senior executives across private companies, family businesses, industry associations and peak bodies, independent and faith-based schools, health and aged care organisations, legal and professional services firms, government departments, and Pacific governments and NGOs. What our clients share is a preference for working directly with experienced senior advisers rather than through large agency structures.",
    };
  }

  return faq;
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CRC Public Relations",
  description:
    "Boutique corporate PR firm trusted by CEOs, directors, and senior executives across Australia, the Pacific, and internationally. Corporate communications, reputation management, crisis response, and media training.",
  url: "https://crcpr.com.au/alternative",
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
  mainEntity: alternativeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: {
    absolute:
      "CRC Public Relations | Boutique Corporate PR, Reputation & Crisis Advisory",
  },
  description:
    "Boutique corporate PR firm trusted by CEOs, directors, and senior executives across Australia, the Pacific, and internationally. Senior advice on reputation, issues, crisis response, and communications strategy.",
};

export default function AlternativePage() {
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
      <AlternativeHome faqItems={alternativeFaqs} />
    </>
  );
}
