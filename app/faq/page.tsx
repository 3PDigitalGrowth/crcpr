import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { siteConfig } from "@/config/site";
import { T } from "@/components/editable";

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

      <PageHero copyId="faq"
        asidePreset="editorialInsights"
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Straight answers about how CRC Public Relations works, what kind of organisations we support, and what to expect when you get in touch."
        ctaLabel="Contact CRC Public Relations"
        ctaHref="/contact"
        heroImage={{
          src: "/images/faq/hero.webp",
          alt: "Open notebook and pen on a timber desk with warm lamp light suggesting considered conversation",
        }}
      />

      <PageProofStrip copyId="faq"
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
                <T id="faq.t1">
                Before you engage
                </T>
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                <T id="faq.t2">
                The questions most clients want answered first.
                </T>
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                <T id="faq.t3">
                The questions below reflect what most clients want to
                understand before they engage CRC Public Relations: how the firm works, what
                kinds of matters fit best, how urgent support is handled, and
                what direct counsel actually looks like in practice.
                </T>
              </p>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium mb-5">
                <T id="faq.t4">
                What this FAQ covers
                </T>
              </p>

              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="faq.t5">
                    How CRC Public Relations works
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="faq.t6">
                    The firm model, how advice is delivered, and what experienced
                    support means in practice.
                    </T>
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="faq.t7">
                    Fit and urgency
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="faq.t8">
                    What kinds of matters suit CRC Public Relations best, and how urgent
                    situations are handled.
                    </T>
                  </p>
                </div>

                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    <T id="faq.t9">
                    The next sensible step
                    </T>
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    <T id="faq.t10">
                    Enough context to decide whether the right move is to keep
                    reading or start a confidential conversation.
                    </T>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection copyId="faq" titleText="Frequently asked questions" />

      <InlineEnquirySection copyId="faq"
        title="Still deciding whether CRC Public Relations is the right fit?"
        body="If your question is specific, sensitive, or difficult to reduce to a general FAQ, the best next step is a direct conversation with an experienced adviser."
        bullets={[
          "Clarify whether your matter is a fit for CRC Public Relations",
          "Discuss the right starting point before pressure grows",
          "Get an experienced view on the most sensible next step",
        ]}
        defaultMessage="We have a specific question about whether CRC Public Relations is the right fit for our situation."
        variant="white"
      />

      <PageClosingCTA copyId="faq"
        title="Have a question not answered here?"
        body="If your situation is specific, sensitive, or difficult to fit into a general FAQ, the best next step is to get in touch directly and we will help."
        primaryLabel="Get in touch"
      />
    </>
  );
}
