import { siteConfig } from "@/config/site";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStats } from "@/components/home/HomeStats";
import { HomePillars } from "@/components/home/HomePillars";
import { HomeLeadMagnet } from "@/components/home/HomeLeadMagnet";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeClients } from "@/components/home/HomeClients";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeCrisisLeadMagnet } from "@/components/home/HomeCrisisLeadMagnet";
import { HomeCTA } from "@/components/home/HomeCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CRC Public Relations",
  description:
    "Boutique corporate PR firm — corporate communications, reputation management, crisis communications, and media training across Australia, the Pacific, and internationally.",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <HomeStats />
      <HomePillars />
      <HomeLeadMagnet />
      <HomeServices />
      <HomeClients />
      <HomeAbout />
      <HomeTestimonials />
      <HomeCrisisLeadMagnet />
      <HomeCTA />
    </>
  );
}
