"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";

const serif = "font-[family-name:var(--font-display)]";

interface FaqV2Props {
  items?: readonly { question: string; answer: string }[];
}

/**
 * Editorial accordion FAQ in the V2 language: serif questions, hairline
 * dividers, a single rotating plus marker, smooth height reveal. Replaces the
 * legacy FAQSection (Roboto-black cards) so the section matches the bento.
 */
export function FaqV2({ items = siteConfig.faqs }: FaqV2Props) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-navy/12">
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-navy/12">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span
                className={`${serif} text-xl leading-snug text-navy transition-colors group-hover:text-link-teal md:text-2xl ${
                  isOpen ? "text-link-teal" : ""
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-brand-gold bg-brand-gold/10 text-brand-gold"
                    : "border-navy/20 text-navy group-hover:border-brand-gold/60"
                }`}
              >
                <Plus size={17} strokeWidth={2} aria-hidden />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 pr-12 text-[15px] leading-relaxed text-text-body">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
