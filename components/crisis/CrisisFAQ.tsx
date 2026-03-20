"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const crisisFaqs = [
  {
    question: "How quickly can CRC PR respond to an active crisis?",
    answer:
      "Immediately. Every crisis call is answered by, or returned within minutes to, a senior CRC PR advisor, regardless of the hour. During business hours, our target response is within 15 minutes of first contact. For after-hours situations, we return calls within the hour. We do not have a crisis hotline answered by junior staff. The phone number is Lyall Mercer\u2019s or a senior advisor\u2019s direct line.",
  },
  {
    question: "What types of crises does CRC PR handle?",
    answer:
      "We have managed crisis communications across every sector and severity level, including: safety and operational incidents, governance and board disputes, regulatory investigations and inquiries, media expos\u00E9s and investigative journalism, safeguarding disclosures in schools and faith-based organisations, industrial disputes and employee relations crises, social media pile-ons and digital reputation attacks, and Pacific-specific cultural and political crises. If your situation involves your reputation, we have experience with it.",
  },
  {
    question: "Is everything I share with CRC PR confidential?",
    answer:
      "Absolutely. Everything shared with CRC PR, including the fact that you contacted us, is treated with complete confidentiality. We do not reference client engagements without explicit written permission. Our advisors operate with the same professional discretion as legal counsel. We have turned away opportunities to be quoted in media articles about clients we have worked with, because we do not believe our clients\u2019 confidentiality should serve our profile.",
  },
  {
    question: "Do you work with organisations outside Brisbane?",
    answer:
      "Yes. CRC PR works with clients across Australia, Sydney, Melbourne, Canberra, Perth, regional Queensland, and interstate, as well as New Zealand and across the Pacific. We manage most crisis engagements remotely via phone and video, and travel for in-person work when the situation requires it. Geography has never been a barrier to a CRC PR engagement.",
  },
  {
    question:
      "What is a crisis communications plan and does my organisation need one?",
    answer:
      "A crisis communications plan is a tested, documented framework that defines who is responsible for what, how decisions are made under pressure, how you communicate with each stakeholder group, and how you engage with media during a crisis. If your organisation does not have a tested plan, meaning one that has been exercised by your actual team within the last 12 months, you are not prepared for a crisis. Most organisations discover this at the worst possible moment.",
  },
];

export function CrisisFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-heading font-black text-navy text-[32px] text-center mb-10">
          Common questions about crisis communications.
        </h2>
        <div>
          {crisisFaqs.map((faq, i) => (
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
                  openIndex === i ? "max-h-[600px]" : "max-h-0"
                }`}
              >
                <p className="font-sans text-charcoal text-sm leading-[1.7] pt-3 pb-4">
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
