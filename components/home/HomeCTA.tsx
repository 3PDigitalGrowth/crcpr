import Link from "next/link";
import { siteConfig } from "@/config/site";

export function HomeCTA() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase">
            Ready to Work With Us
          </p>
          <h2 className="text-white font-heading font-black text-3xl md:text-[42px] mt-3">
            Your reputation is your most valuable asset. Let&rsquo;s protect it.
          </h2>
          <p className="text-white/70 text-base mt-4 mb-10">
            Whether you need strategic counsel for an emerging issue, a crisis
            response, or a long-term communications partner — we work directly
            with senior people who take your success personally.
          </p>

          <div className="max-w-[500px] mx-auto flex flex-col gap-4">
            <Link
              href="/contact"
              className="bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase w-full py-4 rounded-[4px] hover:bg-gold-light transition inline-block text-center"
            >
              Book a Confidential Consultation →
            </Link>
            <a
              href={siteConfig.phone.href}
              className="border border-brand-gold/50 text-brand-gold font-heading font-black text-sm tracking-widest uppercase w-full py-4 rounded-[4px] hover:bg-brand-gold/10 transition inline-block text-center"
            >
              Call Us: {siteConfig.phone.display} →
            </a>
            <a
              href={siteConfig.myPrPartnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-teal font-sans font-medium text-sm mt-2 hover:opacity-80 transition"
            >
              Not ready for a retainer? Explore My PR Partner →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
