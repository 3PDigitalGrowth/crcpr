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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium tracking-[0.16em] uppercase mb-4">
                How Most Enquiries Start
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Most enquiries fall into one of three categories.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                A live issue that needs immediate senior advice, a planned
                matter that requires stronger message and stakeholder
                discipline, or a leadership team that wants a clearer view of
                its communication risks before pressure arrives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {[
                  {
                    title: "Live issue",
                    body: "A matter already moving that needs immediate senior advice and rapid judgement.",
                  },
                  {
                    title: "Planned matter",
                    body: "An announcement, issue, or stakeholder moment that needs stronger communication discipline.",
                  },
                  {
                    title: "Preparedness gap",
                    body: "A leadership team that wants a clearer view of its communication risks before pressure arrives.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-brand-border bg-off-white p-6"
                  >
                    <p className="font-sans font-semibold text-navy text-base mb-2">
                      {item.title}
                    </p>
                    <p className="text-charcoal-mid text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border border-brand-border bg-off-white p-6 md:p-8">
              <p className="text-brand-teal text-xs font-medium tracking-[0.16em] uppercase mb-5">
                Best First Step
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Use the form for planned matters
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The contact form is best for planned, confidential, and
                    non-urgent enquiries.
                  </p>
                </div>
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Call if the issue is moving
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    If the matter is already active, phone is faster and
                    usually safer.
                  </p>
                </div>
              </div>
            </aside>
          </div>
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
