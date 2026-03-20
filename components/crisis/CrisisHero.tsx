import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const trustPills = [
  "24/7 Availability",
  "100% Confidential",
  "Immediate Response",
  "25+ Years Experience",
] as const;

export function CrisisHero() {
  return (
    <>
      <div className="bg-brand-gold py-3 text-center">
        <a
          href={siteConfig.phone.href}
          className="block font-heading font-black text-navy text-[13px] tracking-widest uppercase"
        >
          NEED IMMEDIATE CRISIS SUPPORT? CALL 1300 182 186 | AVAILABLE 24/7
        </a>
      </div>

      <section id="hero-section" className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-xs font-medium tracking-[0.14em] uppercase">
            CRISIS COMMUNICATIONS
          </p>
          <h1 className="text-white font-heading font-black text-3xl md:text-[52px] leading-[1.05] mt-4 whitespace-pre-line">
            {`When a crisis breaks,\nthe first 15 minutes define the outcome.`}
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mt-6 max-w-[520px]">
            We have been in the room when it matters most, guiding companies,
            governments, associations and organisations through
            Australia&apos;s most significant crises. 24 hours a day. Seven
            days a week. Absolutely confidential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={siteConfig.phone.href}
              className="bg-brand-gold text-navy font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              <Phone className="shrink-0" size={18} strokeWidth={2.25} aria-hidden />
              CALL NOW: 1300 182 186
            </a>
            <a
              href="#contact-form"
              className="border border-brand-gold/50 text-brand-gold font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              SEND A CONFIDENTIAL MESSAGE →
            </a>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {trustPills.map((label) => (
              <span
                key={label}
                className="bg-white/5 border border-white/10 rounded-[4px] px-4 py-2 text-white/60 text-xs font-sans font-medium"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
