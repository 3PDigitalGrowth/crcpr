import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
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

      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Straight answers about how CRC PR works, what kind of organisations we support, and what to expect when you get in touch."
        ctaLabel="CONTACT CRC PR"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="Most buying decisions at this level depend on clarity, confidence, and fit."
        items={[
          {
            label: "Working model",
            value: "Senior-led",
            detail:
              "CRC PR is built around direct access to experienced advisors rather than a layered agency delivery model.",
          },
          {
            label: "Availability",
            value: "24/7 crisis response",
            detail:
              "Urgent matters can be escalated immediately, while broader advisory work begins with a confidential conversation.",
          },
          {
            label: "Geography",
            value: "Australia and Pacific",
            detail:
              "We advise clients across Australia, the Pacific, and selected international matters where our expertise fits.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal-mid text-[15px] leading-relaxed">
            The questions below reflect the points most clients want to understand
            before they engage CRC PR: how the firm works, what kinds of matters fit
            best, how urgent support is handled, and what direct senior counsel
            actually looks like in practice.
          </p>
        </div>
      </section>

      <FAQSection titleText="Frequently asked questions" />

      <InlineEnquirySection
        title="Still deciding whether CRC PR is the right fit?"
        body="If your question is specific, sensitive, or difficult to reduce to a general FAQ, the best next step is a confidential conversation with a senior advisor."
        bullets={[
          "Clarify whether your matter is a fit for CRC PR",
          "Discuss the right starting point before pressure grows",
          "Get a senior view on the most sensible next step",
        ]}
        defaultMessage="We have a specific question about whether CRC PR is the right fit for our situation."
        variant="white"
      />

      <PageClosingCTA
        title="Have a question not answered here?"
        body="If your situation is specific, sensitive, or difficult to fit into a general FAQ, the best next step is to contact CRC PR directly."
        primaryLabel="GET IN TOUCH"
      />
    </>
  );
}
