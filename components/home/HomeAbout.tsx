"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { PortraitPlaceholder } from "@/components/shared/PortraitPlaceholder";

export function HomeAbout() {
  return (
    <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-mid" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left portrait with offset treatment */}
          <AnimateIn className="lg:col-span-5">
            <div className="relative lg:-ml-4 xl:-ml-8">
              <PortraitPlaceholder size="lg" />
            </div>
          </AnimateIn>

          {/* Right bio content */}
          <div className="lg:col-span-7">
            <AnimateIn>
              <p className="font-sans font-medium text-brand-teal text-xs tracking-[0.14em] uppercase">
                The Adviser Behind the Firm
              </p>
            </AnimateIn>

            <AnimateIn delay={100}>
              <h2 className="font-heading font-black text-white text-3xl md:text-[42px] leading-[1.05] mt-3">
                Lyall Mercer
              </h2>
              <p className="text-brand-gold font-sans font-medium text-lg mt-2">
                {siteConfig.lyall.title}
              </p>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="space-y-5 mt-8">
                <p className="text-white/75 text-base leading-relaxed">
                  Lyall Mercer began his career as a journalist, writing for some
                  of Australia&rsquo;s leading newspapers. That foundation,
                  understanding exactly how media thinks, moves, and decides what
                  becomes a story, is what makes his approach to corporate
                  communications and crisis advice unlike any other.
                </p>
                <p className="text-white/75 text-base leading-relaxed">
                  Over the past 25 years, Lyall has built a reputation across
                  Australasia as a leader in corporate public relations, reputation
                  and issues management, and crisis communications. He has advised
                  national and international companies, governments, senior
                  executives, politicians, celebrities, and sporting figures, and
                  has worked with clients and media on every continent.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={350}>
              <blockquote className="border-l-[3px] border-brand-gold pl-6 mt-8">
                <p className="font-sans italic text-white/85 text-base leading-relaxed">
                  &ldquo;{siteConfig.lyall.quote}&rdquo;
                </p>
                <cite className="font-sans font-medium text-brand-gold text-sm mt-3 not-italic block">
                  – Lyall Mercer
                </cite>
              </blockquote>
            </AnimateIn>

            <AnimateIn delay={450}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/about/lyall-mercer"
                  className="btn-lift inline-flex items-center gap-2 text-brand-gold font-sans font-medium text-sm hover:gap-3 transition-all"
                >
                  Read Lyall&rsquo;s full profile <ArrowRight size={14} />
                </Link>
                <a
                  href={siteConfig.lyall.mediaLinks[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift inline-flex items-center gap-2 text-brand-teal font-sans font-medium text-sm hover:gap-3 transition-all"
                >
                  View media appearances <ArrowRight size={14} />
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
