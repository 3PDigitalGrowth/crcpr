"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { MyPRPartnerCTA } from "@/components/shared/MyPRPartnerCTA";

export function HomeCTA() {
  return (
    <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-off-white/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-[680px] mx-auto">
          <AnimateIn>
            <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase">
              Ready to Work With Us
            </p>
          </AnimateIn>

          <AnimateIn delay={150}>
            <h2 className="text-white font-heading font-black text-3xl md:text-[42px] leading-[1.08] mt-4">
              Your reputation is your most valuable asset. Let&rsquo;s protect it.
            </h2>
          </AnimateIn>

          <AnimateIn delay={300}>
            <p className="text-white/70 text-base leading-relaxed mt-6 mb-12">
              Whether you need straightforward advice, help building your
              profile, a communications strategy, or experienced counsel for a
              complex issue or crisis - we are your adviser and advocate. We
              believe in you, and we have your back.
            </p>
          </AnimateIn>

          <div className="max-w-[500px] mx-auto flex flex-col gap-4">
            <AnimateIn delay={450}>
              <Link
                href="/contact"
                className="btn-lift bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase w-full py-4 rounded-[4px] hover:bg-gold-light transition inline-flex items-center justify-center gap-2"
              >
                Book a Confidential Consultation <ArrowRight size={14} aria-hidden />
              </Link>
            </AnimateIn>

            <AnimateIn delay={550}>
              <a
                href={siteConfig.phone.href}
                className="border border-brand-gold/50 text-brand-gold font-heading font-black text-sm tracking-widest uppercase w-full py-4 rounded-[4px] hover:bg-brand-gold/10 transition inline-flex items-center justify-center gap-2"
              >
                Call Us: {siteConfig.phone.display}{" "}
                <ArrowRight size={14} aria-hidden />
              </a>
            </AnimateIn>

            <AnimateIn delay={650}>
              <MyPRPartnerCTA
                variant="dark"
                compact
                title="Not ready for a retainer?"
                description="My PR Partner gives teams and leaders practical PR training, tools, and communications support when they need capability-building before a full advisory engagement."
                buttonLabel="EXPLORE MY PR PARTNER"
                className="mt-2 text-left"
              />
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
