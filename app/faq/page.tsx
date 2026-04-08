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
    "Frequently asked questions about CRC Public Relations services, crisis communications, reputation management, and how we work.",
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
        description="Straight answers about how CRC Public Relations works, what kind of organisations we support, and what to expect when you get in touch."
        ctaLabel="Contact CRC Public Relations"
        ctaHref="/contact"
      />

      <PageProofStrip
        title="Most buying decisions at this level depend on clarity, confidence, and fit."
        items={[
          {
            label: "Working model",
            value: "Senior-led",
            detail:
              "CRC Public Relations is built around direct access to experienced advisers rather than a layered agency delivery model.",
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                Before you engage
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                The questions most clients want answered first.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                The questions below reflect what most clients want to
                understand before they engage CRC Public Relations: how the firm works, what
                kinds of matters fit best, how urgent support is handled, and
                what direct senior counsel actually looks like in practice.
              </p>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                What this FAQ covers
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    How CRC Public Relations works
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The firm model, how advice is delivered, and what senior-led
                    support means in practice.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Fit and urgency
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    What kinds of matters suit CRC Public Relations best, and how urgent
                    situations are handled.
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    The next sensible step
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    Enough context to decide whether the right move is to keep
                    reading or start a confidential conversation.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection titleText="Frequently asked questions" />

      <InlineEnquirySection
        title="Still deciding whether CRC Public Relations is the right fit?"
        body="If your question is specific, sensitive, or difficult to reduce to a general FAQ, the best next step is a confidential conversation with a senior adviser."
        bullets={[
          "Clarify whether your matter is a fit for CRC Public Relations",
          "Discuss the right starting point before pressure grows",
          "Get a senior view on the most sensible next step",
        ]}
        defaultMessage="We have a specific question about whether CRC Public Relations is the right fit for our situation."
        variant="white"
      />

      <PageClosingCTA
        title="Have a question not answered here?"
        body="If your situation is specific, sensitive, or difficult to fit into a general FAQ, the best next step is to get in touch directly and we will help."
        primaryLabel="Get in touch"
      />
    </>
  );
}
