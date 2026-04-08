"use client";

import { FAQSection } from "@/components/shared/FAQSection";

const crisisFaqs = [
  {
    question: "How quickly can CRC Public Relations respond to an active crisis?",
    answer:
      "Immediately. Every crisis call is answered by, or returned within minutes to, a senior CRC Public Relations advisor, regardless of the hour. During business hours, our target response is within 15 minutes of first contact. For after-hours situations, we return calls within the hour. We do not have a crisis hotline answered by junior staff. The phone number is Lyall Mercer\u2019s or a senior advisor\u2019s direct line.",
  },
  {
    question: "What types of crises does CRC Public Relations handle?",
    answer:
      "We have managed crisis communications across every sector and severity level, including: safety and operational incidents, governance and board disputes, regulatory investigations and inquiries, media expos\u00E9s and investigative journalism, safeguarding disclosures in schools and faith-based organisations, industrial disputes and employee relations crises, social media pile-ons and digital reputation attacks, and Pacific-specific cultural and political crises. If your situation involves your reputation, we have experience with it.",
  },
  {
    question: "Is everything I share with CRC Public Relations confidential?",
    answer:
      "Absolutely. Everything shared with CRC Public Relations, including the fact that you contacted us, is treated with complete confidentiality. We do not reference client engagements without explicit written permission. Our advisors operate with the same professional discretion as legal counsel. We have turned away opportunities to be quoted in media articles about clients we have worked with, because we do not believe our clients\u2019 confidentiality should serve our profile.",
  },
  {
    question: "Do you work with organisations outside Brisbane?",
    answer:
      "Yes. CRC Public Relations works with clients across Australia, Sydney, Melbourne, Canberra, Perth, regional Queensland, and interstate, as well as New Zealand and across the Pacific. We manage most crisis engagements remotely via phone and video, and travel for in-person work when the situation requires it. Geography has never been a barrier to a CRC Public Relations engagement.",
  },
  {
    question:
      "What is a crisis communications plan and does my organisation need one?",
    answer:
      "A crisis communications plan is a tested, documented framework that defines who is responsible for what, how decisions are made under pressure, how you communicate with each stakeholder group, and how you engage with media during a crisis. If your organisation does not have a tested plan, meaning one that has been exercised by your actual team within the last 12 months, you are not prepared for a crisis. Most organisations discover this at the worst possible moment.",
  },
];

export function CrisisFAQ() {
  return (
    <FAQSection
      items={crisisFaqs}
      titleText="Common questions about crisis communications."
    />
  );
}
