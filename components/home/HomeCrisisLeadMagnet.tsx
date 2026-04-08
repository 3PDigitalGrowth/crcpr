"use client";

import { useState } from "react";
import { Shield, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/shared/AnimateIn";
import { LeadMagnetModal } from "@/components/shared/LeadMagnetModal";

export function HomeCrisisLeadMagnet() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-off-white/90 via-white to-brand-teal/[0.04] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateIn className="lg:col-span-4">
              <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
                <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mb-5 ring-1 ring-brand-gold/15 shadow-[0_20px_50px_-24px_rgba(180,140,60,0.35)]">
                  <Shield
                    className="text-brand-gold"
                    size={36}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <p className="font-sans font-medium text-brand-gold text-xs">
                  Free template
                </p>
                <h3 className="font-heading font-black text-navy text-2xl md:text-[28px] leading-snug mt-2">
                  Crisis Communications Plan Template
                </h3>
              </div>
            </AnimateIn>

            <AnimateIn delay={200} className="lg:col-span-8">
              <div className="relative rounded-2xl border border-brand-border/40 bg-white/80 backdrop-blur-sm p-8 md:p-10 lg:rounded-none lg:border-0 lg:bg-transparent lg:backdrop-blur-none lg:p-0 card-border-expand">
                <div className="lg:border-l lg:border-brand-border lg:pl-12">
                  <p className="text-charcoal text-[15px] leading-relaxed">
                    Most organisations have a crisis plan that has never been tested,
                    or no plan at all. Our practical template covers everything your
                    team needs: crisis roles and responsibilities, stakeholder
                    mapping, message hierarchy, media response protocol, and
                    post-crisis review. Used by communications teams across
                    Australia.
                  </p>
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="btn-lift inline-flex items-center gap-2 bg-brand-gold text-navy font-heading font-black text-sm rounded-[4px] px-8 py-4 mt-6 hover:bg-gold-light transition"
                  >
                    Download free template <ArrowRight size={14} aria-hidden />
                  </button>
                  <p className="text-charcoal-mid text-xs mt-3">
                    Delivered to your inbox. No commitment required.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <LeadMagnetModal
        magnet="crisisPlanTemplate"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
