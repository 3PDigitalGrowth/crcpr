import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const trustPills = [
  "24/7 availability",
  "100% confidential",
  "Immediate response",
  "25+ years experience",
] as const;

export interface CrisisHeroProps {
  heroImage?: { src: string; alt: string };
}

export function CrisisHero({ heroImage }: CrisisHeroProps) {
  return (
    <>
      <div className="bg-brand-gold py-3 text-center relative z-20">
        <a
          href={siteConfig.phone.href}
          className="block font-heading font-black text-navy text-[13px]"
        >
          Need immediate crisis support? Call 1300 182 186 | Available 24/7
        </a>
      </div>

      <section
        id="hero-section"
        className={`relative overflow-hidden py-24 ${
          heroImage ? "" : "bg-navy"
        }`}
      >
        {heroImage ? (
          <>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[rgba(26,43,74,0.88)] to-[rgba(26,43,74,0.92)] md:from-[rgba(26,43,74,0.7)] md:to-[rgba(26,43,74,0.85)]"
              aria-hidden
            />
          </>
        ) : null}

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-xs font-medium">
            Crisis communications
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
              className="bg-brand-gold text-navy font-heading font-black text-[13px] rounded-[4px] px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              <Phone className="shrink-0" size={18} strokeWidth={2.25} aria-hidden />
              Call now: 1300 182 186
            </a>
            <a
              href="#contact-form"
              className="border border-brand-gold/50 text-brand-gold font-heading font-black text-[13px] rounded-[4px] px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              Send a confidential message →
            </a>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {trustPills.map((label) => (
              <span
                key={label}
                className="bg-white/5 border border-white/10 rounded-[4px] px-4 py-2 text-white/60 text-xs font-sans font-medium backdrop-blur-[2px]"
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
