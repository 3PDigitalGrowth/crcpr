"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: boolean;
  titleText?: string;
  items?: readonly FAQItem[];
  embedded?: boolean;
}

export function FAQSection({
  title = true,
  titleText = "Frequently asked questions",
  items = siteConfig.faqs,
  embedded = !title,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const grid = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <article
            key={i}
            className={`rounded-lg border p-6 transition-colors ${
              isOpen
                ? "border-brand-teal/40 bg-white shadow-sm shadow-navy/5"
                : "border-brand-border bg-white shadow-sm shadow-navy/5"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-heading font-black text-navy text-xl leading-snug">
                {faq.question}
              </h3>
              <ChevronDown
                className={`size-5 shrink-0 text-brand-teal transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </div>

            <p
              className={`mt-4 font-sans text-charcoal-mid text-[15px] leading-relaxed ${
                
                isOpen ? "" : "line-clamp-3"
              }`}
            >
              {faq.answer}
            </p>

            <button
              type="button"
              className="mt-5 text-link-teal text-sm font-medium hover:text-navy hover:underline underline-offset-2"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {isOpen ? "View less" : "View more"}
            </button>
          </article>
        );
      })}
    </div>
  );

  if (embedded) {
    return grid;
  }

  return (
    <section className="bg-off-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-heading font-black text-navy text-3xl md:text-4xl">
              {titleText}
            </h2>
          </div>
        )}
        {grid}
      </div>
    </section>
  );
}
