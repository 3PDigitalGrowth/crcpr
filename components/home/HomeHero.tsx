import Link from "next/link";
import { Phone, Download } from "lucide-react";
import { siteConfig } from "@/config/site";

export function HomeHero() {
  return (
    <section className="min-h-screen bg-navy">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
        {/* Left column — 55 % */}
        <div className="relative z-10 lg:pr-8">
          <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase">
            Boutique Corporate PR · Brisbane · Australia · The Pacific
          </p>

          <h1 className="font-heading font-black text-white text-4xl md:text-[56px] leading-[1.05] mt-4">
            We protect
            <br />
            what you&rsquo;ve
            <br />
            built.
          </h1>

          <p className="text-[rgba(245,242,236,0.75)] text-[19px] leading-relaxed max-w-[480px] mt-6">
            CRC Public Relations is a boutique corporate PR firm trusted by
            companies, governments, associations, and organisations across
            Australia, the Pacific, and internationally — when reputation,
            issues, and crises demand experienced, senior advice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-navy font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-gold-light transition"
            >
              <Phone className="size-4" strokeWidth={2} aria-hidden />
              Book a Confidential Consultation
            </Link>
            <a
              href="/downloads/crcpr-capability-statement.pdf"
              download
              className="inline-flex items-center justify-center gap-2 border border-brand-gold/50 text-brand-gold font-heading font-black text-[13px] tracking-widest uppercase rounded-[4px] px-8 py-4 hover:bg-brand-gold/10 transition"
            >
              <Download className="size-4" strokeWidth={2} aria-hidden />
              Download Capability Statement
            </a>
          </div>

          {/* Authority bar */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="font-sans font-medium text-white/40 text-[11px] tracking-widest uppercase">
              Lyall Mercer — As Seen In
            </p>
            <div className="flex flex-wrap gap-6 mt-3">
              {siteConfig.lyall.mediaLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-black text-white/25 text-[15px] hover:text-white/50 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — portrait placeholder */}
        <div className="hidden lg:block">
          <div className="bg-navy-mid rounded-lg h-[500px] lg:h-auto lg:min-h-[600px] flex items-center justify-center">
            <span className="text-white/20 text-center">
              Portrait placeholder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
