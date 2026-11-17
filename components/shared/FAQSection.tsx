import { Plus } from "lucide-react";
import { siteConfig } from "@/config/site";
import { bind, T } from "@/components/editable";
import { Container, H2 } from "@/components/altkit/primitives";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: boolean;
  titleText?: string;
  items?: readonly FAQItem[];
  embedded?: boolean;
  /** When false, answers are shown in full instead of opening on request. */
  expandable?: boolean;
  /** Kept for call-site compatibility; the Chambers FAQ is a single ledger. */
  columns?: 2 | 3;
  /** Page-scoped id making page-local FAQ items editable in /admin/editor. */
  copyId?: string;
}

/** Chambers FAQ: hairline ledger of questions, answers open in place. */
export function FAQSection({
  title = true,
  titleText = "Frequently asked questions",
  items = siteConfig.faqs,
  embedded = !title,
  expandable = true,
  copyId,
}: FAQSectionProps) {
  // Inline-editor binding is only valid when this section renders the full
  // FAQ list from siteConfig (indexes must line up with the stored array).
  const bindable = items === siteConfig.faqs;

  const question = (faq: FAQItem, i: number) =>
    bindable ? (
      <span {...bind(`faqs.${i}.question`)}>{faq.question}</span>
    ) : copyId ? (
      <T id={`${copyId}.faqs.${i}.question`}>{faq.question}</T>
    ) : (
      faq.question
    );

  const answer = (faq: FAQItem, i: number) =>
    bindable ? (
      <span {...bind(`faqs.${i}.answer`)}>{faq.answer}</span>
    ) : copyId ? (
      <T id={`${copyId}.faqs.${i}.answer`}>{faq.answer}</T>
    ) : (
      faq.answer
    );

  const list = (
    <div className="border-t border-line">
      {items.map((faq, i) =>
        expandable ? (
          <details key={i} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-base font-bold leading-snug [&::-webkit-details-marker]:hidden">
              <span>{question(faq, i)}</span>
              <Plus className="mt-0.5 h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden />
            </summary>
            <p className="-mt-1 max-w-3xl pb-5 text-[15px] leading-relaxed text-muted">{answer(faq, i)}</p>
          </details>
        ) : (
          <div key={i} className="border-b border-line py-5">
            <h3 className="text-base font-bold leading-snug">{question(faq, i)}</h3>
            <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-muted">{answer(faq, i)}</p>
          </div>
        ),
      )}
    </div>
  );

  if (embedded) {
    return list;
  }

  return (
    <section className="tone-base relative py-11 md:py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:gap-14">
          {title ? <H2 className="max-w-md self-start lg:sticky lg:top-28">{titleText}</H2> : <span />}
          {list}
        </div>
      </Container>
    </section>
  );
}
