import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { FAQSection } from "@/components/shared/FAQSection";
import { PageClosingCTA } from "@/components/shared/PageClosingCTA";
import { PageProofStrip } from "@/components/shared/PageProofStrip";
import { Reveal } from "@/components/altkit/motion";
import { PHOTOS } from "@/components/altkit/data";
import { Container, Eyebrow, H2, Section } from "@/components/altkit/primitives";
import { T } from "@/components/editable";

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
        copyId="contact"
        asidePreset="practicalNextStep"
        eyebrow="Contact us"
        title="Let's discuss your needs."
        description="Every conversation with CRC Public Relations begins with listening. Tell us about your situation and we will respond promptly."
        ctaLabel="Urgent crisis support"
        ctaHref="/services/crisis-communications"
        photo={{ src: PHOTOS.officeLounge, alt: "The CRC Public Relations office" }}
      />

      <ContactFormSection source={searchParams.source} />

      <Section tone="base" className="py-11 md:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
            <div>
              <Eyebrow>
                <T id="contact.t1">How most enquiries start</T>
              </Eyebrow>
              <H2 className="mt-3">
                <T id="contact.t2">Most enquiries fall into one of three categories.</T>
              </H2>
              <p className="mt-6 max-w-2xl text-[clamp(1.05rem,1.5vw,1.2rem)] font-medium leading-[1.45]">
                <T id="contact.t3">
                  A discussion about a specific communications need or an overall media or public relations strategy; a
                  decision to plan for future issues or conduct crisis planning; or a live issue that needs immediate
                  advice.
                </T>
              </p>
            </div>

            <Reveal className="lg:pt-10">
              <aside className="kit-r border border-line p-6 md:p-8">
                <Eyebrow>
                  <T id="contact.t4">Best first step</T>
                </Eyebrow>
                <div className="mt-5 divide-y divide-[var(--line)]">
                  <div className="py-4 first:pt-0 last:pb-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id="contact.t5">Use the form for strategy or planning matters</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id="contact.t6">The contact form is best for planned, non-urgent enquiries.</T>
                    </p>
                  </div>
                  <div className="py-4 first:pt-0 last:pb-0">
                    <p className="kit-display text-[15px] uppercase">
                      <T id="contact.t7">Call if the issue is moving</T>
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      <T id="contact.t8">If the matter is already active, phone is faster and usually safer.</T>
                    </p>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>

          <div className="ledger mt-10">
            {[
              {
                title: "Strategy",
                body: "You'd like an effective communications strategy, to elevate your voice, or protect your reputation.",
              },
              {
                title: "Planning",
                body: "You are (very wisely) looking ahead and want to be ready for any issue or crisis that arises.",
              },
              {
                title: "Live issue",
                body: "A matter already moving that needs immediate advice and rapid action.",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="kit-display text-[15px] uppercase">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <PageProofStrip
        copyId="contact"
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
        variant="navy"
      />

      <FAQSection copyId="contact" />

      <PageClosingCTA
        copyId="contact"
        title="If the matter is sensitive, start the conversation now."
        body="We work best when leadership engages early enough for the response to be shaped properly. If the issue is already active, call first. If it is emerging, send a message and we will respond promptly."
        primaryLabel="Urgent crisis support"
        primaryHref="/services/crisis-communications"
      />
    </>
  );
}
