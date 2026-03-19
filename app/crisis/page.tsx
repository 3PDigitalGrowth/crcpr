import type { Metadata } from "next";
import { Shield, Lock, Globe } from "lucide-react";
import { CrisisContactForm } from "@/components/crisis/CrisisContactForm";
import { CrisisHero } from "@/components/crisis/CrisisHero";
import { CrisisServices } from "@/components/crisis/CrisisServices";
import { LeadMagnetBanner } from "@/components/shared/LeadMagnetBanner";

export const metadata: Metadata = {
  title: {
    absolute:
      "Crisis Communications Australia | 24/7 Response | CRC Public Relations",
  },
  description:
    "24/7 crisis communications support across Australia. Immediate senior-level response for corporate, government, and association crises. Call 1300 182 186 now.",
};

export default function CrisisPage() {
  return (
    <>
      <CrisisHero />
      <CrisisServices />

      {/* What happens when you call */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-10">
            What happens when you call CRC PR in a crisis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "1",
                title: "You speak to a senior advisor immediately",
                copy: "Every crisis call is answered by, or returned within minutes to, a senior CRC PR advisor. You do not speak to a receptionist, a junior account manager, or an answering service. If the situation is live, we are with you immediately.",
              },
              {
                step: "2",
                title: "We establish the facts and the exposure",
                copy: "Before any external communications are made, we establish what is known, what is unknown, and what the likely media and stakeholder behaviour will be. We assess your exposure and your options, and we give you an honest assessment of both, not a reassuring one.",
              },
              {
                step: "3",
                title: "We develop your first response",
                copy: "Your first public response, whether a statement, a call-back to media, an internal communication to staff, or a message to your board, is the most important communication you will make. We draft it. We test it against the hardest questions. We prepare your spokesperson to deliver it.",
              },
              {
                step: "4",
                title: "We stay with you",
                copy: "Crisis communications is not a one-call service. We remain engaged, managing media enquiries, monitoring coverage, advising on each subsequent communication, and steering your organisation through the full arc of the event until your reputation is stable.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-off-white border border-brand-border rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="bg-brand-gold text-navy font-heading font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-heading font-black text-navy text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal text-[15px] leading-relaxed">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CrisisContactForm />

      {/* Trust / authority section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading font-black text-navy text-3xl mb-10 text-center">
            Why organisations across Australia trust CRC PR with their most
            sensitive situations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-brand-border rounded-lg p-6 text-center">
              <Shield className="text-brand-gold w-8 h-8 mx-auto mb-4" />
              <h3 className="font-heading font-black text-navy text-lg mb-2">
                25 years of crisis experience
              </h3>
              <p className="text-charcoal-mid text-sm leading-relaxed">
                CRC PR has managed crisis communications across every sector,
                including corporate, government, health, education, and
                not-for-profit, and across every severity level. You are not our
                first crisis.
              </p>
            </div>
            <div className="bg-white border border-brand-border rounded-lg p-6 text-center">
              <Lock className="text-brand-gold w-8 h-8 mx-auto mb-4" />
              <h3 className="font-heading font-black text-navy text-lg mb-2">
                Absolute confidentiality
              </h3>
              <p className="text-charcoal-mid text-sm leading-relaxed">
                Everything shared with CRC PR is treated with complete
                confidentiality. We do not reference client engagements without
                explicit written permission. Our advisers operate with the same
                professional discretion as legal counsel.
              </p>
            </div>
            <div className="bg-white border border-brand-border rounded-lg p-6 text-center">
              <Globe className="text-brand-gold w-8 h-8 mx-auto mb-4" />
              <h3 className="font-heading font-black text-navy text-lg mb-2">
                Available anywhere
              </h3>
              <p className="text-charcoal-mid text-sm leading-relaxed">
                We manage crisis communications across Australia, New Zealand,
                and the Pacific. We work by phone, video, and in person,
                wherever you are, whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadMagnetBanner magnet="crisisPlanTemplate" />
    </>
  );
}
