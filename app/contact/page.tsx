import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { FAQSection } from "@/components/shared/FAQSection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";

export const metadata: Metadata = {
  title: "Contact CRC Public Relations",
  description:
    "Contact CRC Public Relations for specialist communications counsel: corporate communications, reputation management, crisis response, and media training.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { source?: string };
}) {
  return (
    <>
      <PageHero
        asidePreset="practicalNextStep"
        eyebrow="Contact us"
        title="Let's discuss your needs."
        description="Every conversation with CRC Public Relations begins with listening. Tell us about your situation and we will respond promptly."
        ctaLabel="Urgent crisis support"
        ctaHref="/services/crisis-communications"
        heroImage={{
          src: "/images/contact/hero.webp",
          alt: "Welcoming entrance to a professional Brisbane office building in late afternoon light",
        }}
      />

      <PageProofStrip
        title="Why CRC Public Relations"
        body="When you contact CRC Public Relations, we will carefully consider your situation and unique needs with a commitment of confidentiality."
        items={[
          {
            label: "How we work",
            value: "Senior-led",
            detail:
              "Your enquiry will be passed to an experienced adviser, who will consider your request and respond at the first available opportunity.",
          },
          {
            label: "Response model",
            value: "Senior review",
            detail:
              "We will respond directly by email or phone, depending on your enquiry.",
          },
          {
            label: "Urgent matters",
            value: "Call first",
            detail:
              "If the issue is already active, phone is the best channel. The form is best for general and planned advisory matters.",
          },
        ]}
        variant="off-white"
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_340px] gap-10 items-start">
            <div className="max-w-3xl">
              <p className="text-brand-gold text-xs font-medium mb-4">
                How most enquiries start
              </p>
              <h2 className="font-heading font-black text-navy text-3xl md:text-4xl leading-tight mb-6">
                Most enquiries fall into one of three categories.
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed max-w-2xl">
                A discussion about a specific communications need or an overall
                media or public relations strategy; a decision to plan for
                future issues or conduct crisis planning; or a live issue that
                needs immediate advice.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {[
                  {
                    title: "Strategy",
                    body: "You'd like an effective communications strategy, to elevate your voice, or protect your reputation.",
                  },
                  {
                    title: "Planning",
                    body: "You are (very wisely) looking ahead and want to be ready for any issue or crises that arise.",
                  },
                  {
                    title: "Live issue",
                    body: "A matter already moving that needs immediate advice and rapid action.",
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
              <p className="text-brand-teal text-xs font-medium mb-5">
                Best first step
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-brand-gold pl-4">
                  <p className="font-sans font-semibold text-navy text-sm mb-1">
                    Use the form for strategy or planning matters
                  </p>
                  <p className="text-charcoal-mid text-sm leading-relaxed">
                    The contact form is best for planned, non-urgent enquiries.
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
        body="We work best when leadership engages early enough for the response to be shaped properly. If the issue is already active, call first. If it is emerging, send a message and we will respond promptly."
        primaryLabel="Urgent crisis support"
        primaryHref="/services/crisis-communications"
      />
    </>
  );
}
