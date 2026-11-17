import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { InlineEnquirySection } from "@/components/shared/InlineEnquirySection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { Reveal } from "@/components/altkit/motion";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
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

      <PageHero
        copyId="faq"
        asidePreset="editorialInsights"
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Straight answers about how CRC Public Relations works, what kind of organisations we support, and what to expect when you get in touch."
        ctaLabel="Contact CRC Public Relations"
        ctaHref="/contact"
      />

      <PageProofStrip
        copyId="faq"
        variant="navy"
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

      <Section tone="base" className="py-11 md:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div>
            <Eyebrow>
              <T id="faq.t1">Before you engage</T>
            </Eyebrow>
            <H2 className="mt-3">
              <T id="faq.t2">The questions most clients want answered first.</T>
            </H2>
            <p className="mt-6 max-w-2xl text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
              <T id="faq.t3">
                The questions below reflect what most clients want to understand before they engage CRC Public
                Relations: how the firm works, what kinds of matters fit best, how urgent support is handled, and what
                direct counsel actually looks like in practice.
              </T>
            </p>
          </div>

          <Reveal className="lg:pt-10">
            <aside className="kit-r border border-line p-6 md:p-8">
              <Eyebrow>
                <T id="faq.t4">What this FAQ covers</T>
              </Eyebrow>
              <div className="mt-5 divide-y divide-[var(--line)]">
                {[
                  ["t5", "How CRC Public Relations works", "t6", "The firm model, how advice is delivered, and what experienced support means in practice."],
                  ["t7", "Fit and urgency", "t8", "What kinds of matters suit CRC Public Relations best, and how urgent situations are handled."],
                  ["t9", "The next sensible step", "t10", "Enough context to decide whether the right move is to keep reading or start a confidential conversation."],
                ].map(([tid, title, bid, body]) => (
                  <div key={tid} className="py-4 first:pt-0 last:pb-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id={`faq.${tid}`}>{title}</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id={`faq.${bid}`}>{body}</T>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </Container>
      </Section>

      <FAQSection copyId="faq" titleText="Frequently asked questions" />

      <InlineEnquirySection
        copyId="faq"
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

      <PageClosingCTA
        copyId="faq"
        title="Have a question not answered here?"
        body="If your situation is specific, sensitive, or difficult to fit into a general FAQ, the best next step is to get in touch directly and we will help."
        primaryLabel="Get in touch"
      />
    </>
  );
}
