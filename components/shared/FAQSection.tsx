"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FAQSection({ title = true }: { title?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6">
        {title && (
          <h2 className="font-heading font-black text-navy text-3xl mb-10">
            Frequently asked questions
          </h2>
        )}
        <div>
          {siteConfig.faqs.map((faq, i) => (
            <div key={i} className="border-b border-brand-border">
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-sans font-medium text-navy text-[15px] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-navy transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="font-sans text-charcoal text-sm leading-relaxed pt-3 pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
