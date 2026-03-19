"use client";

import { useState } from "react";
import { Shield } from "lucide-react";
import { LeadMagnetModal } from "@/components/shared/LeadMagnetModal";

export function HomeCrisisLeadMagnet() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-2">
              <Shield
                className="text-brand-gold"
                size={64}
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="font-sans font-medium text-brand-gold text-xs tracking-[0.14em] uppercase mt-4">
                Free Template
              </p>
              <h3 className="font-heading font-black text-navy text-[28px] mt-2">
                Crisis Communications Plan Template
              </h3>
            </div>

            {/* Right */}
            <div className="lg:col-span-3">
              <p className="text-charcoal text-[15px] leading-relaxed">
                Most organisations have a crisis plan that has never been tested
                — or no plan at all. Our practical template covers everything
                your team needs: crisis roles and responsibilities, stakeholder
                mapping, message hierarchy, media response protocol, and
                post-crisis review. Used by communications teams across
                Australia.
              </p>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase rounded-[4px] px-8 py-4 mt-6 hover:bg-gold-light transition"
              >
                Download Free Template →
              </button>
              <p className="text-charcoal-mid text-xs mt-3">
                Delivered to your inbox. No commitment required.
              </p>
            </div>
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
