import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQ | CRC Public Relations",
  description:
    "Frequently asked questions about CRC PR services, crisis communications, reputation management, and how we work.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteConfig.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero title="Frequently asked questions." />

      <FAQSection title={false} />

      <section className="bg-off-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-charcoal text-base leading-relaxed">
            Have a question not answered here?{" "}
            <Link
              href="/contact"
              className="text-brand-gold font-medium hover:underline"
            >
              Get in touch.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
