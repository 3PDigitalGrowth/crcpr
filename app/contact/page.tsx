import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { FAQSection } from "@/components/shared/FAQSection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title: "Contact CRC Public Relations",
  description:
    "Contact CRC Public Relations for a confidential consultation. Corporate communications, reputation management, crisis response, and media training.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { source?: string };
}) {
  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        title="Let's discuss your needs."
        description="Every conversation with CRC PR begins with listening. Tell us about your situation and we'll respond promptly, with confidentiality guaranteed."
        ctaLabel="URGENT CRISIS SUPPORT"
        ctaHref="/crisis"
      />

      <PageProofStrip
        title="When you contact CRC PR, you are beginning a direct conversation with senior advisors."
        items={[
          {
            label: "Confidentiality",
            value: "Default setting",
            detail:
              "Sensitive matters are treated with discretion from the first conversation and are not referenced publicly without permission.",
          },
          {
            label: "Response model",
            value: "Senior review",
            detail:
              "Enquiries are reviewed by experienced advisors rather than being routed through a generic sales process.",
          },
          {
            label: "Urgent matters",
            value: "Call first",
            detail:
              "If the issue is already active, phone is the right channel. The form is best for general and planned advisory matters.",
          },
        ]}
        variant="off-white"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-charcoal-mid text-[15px] leading-relaxed">
            Most enquiries fall into one of three categories: a live issue that needs
            immediate senior advice, a planned matter that requires stronger message and
            stakeholder discipline, or a leadership team that wants a clearer view of its
            communication risks before pressure arrives.
          </p>
          <p className="text-charcoal-mid text-[15px] leading-relaxed mt-6">
            The contact form is best for planned and confidential matters. If the issue
            is already moving, phone is faster and usually safer.
          </p>
        </div>
      </section>

      <ContactFormSection source={searchParams.source} />

      <FAQSection />

      <PageClosingCTA
        title="If the matter is sensitive, start the conversation now."
        body="CRC PR works best when leadership engages early enough for the response to be shaped properly. If the issue is already active, call first. If it is emerging, send a confidential message and we will respond promptly."
        primaryLabel="URGENT CRISIS SUPPORT"
        primaryHref="/crisis"
      />
    </>
  );
}
