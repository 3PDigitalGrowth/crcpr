"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import type { LeadMagnetKey } from "@/types";
import { LeadMagnetModal } from "./LeadMagnetModal";

export interface LeadMagnetBannerProps {
  magnet: LeadMagnetKey;
  variant?: "dark" | "light";
}

export function LeadMagnetBanner({
  magnet,
  variant = "dark",
}: LeadMagnetBannerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const meta = siteConfig.leadMagnets[magnet];
  const isDark = variant === "dark";

  return (
    <>
      <section
        className={
          isDark ? "py-16 bg-navy" : "py-16 bg-off-white"
        }
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-brand-teal text-xs font-medium tracking-[0.14em] uppercase">
                FREE RESOURCE
              </p>
              <h2
                className={`text-3xl font-heading font-black mt-2 ${
                  isDark ? "text-white" : "text-navy"
                }`}
              >
                {meta.title}
              </h2>
              <p
                className={`text-base leading-relaxed mt-4 ${
                  isDark ? "text-white/70" : "text-charcoal-mid"
                }`}
              >
                {meta.description}
              </p>
            </div>
            <div className="lg:col-span-2">
              <div
                className={`p-6 rounded-lg ${
                  isDark
                    ? "bg-navy-mid border border-brand-gold/20"
                    : "bg-white border border-brand-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase w-full py-4 rounded-[4px] hover:bg-gold-light transition"
                >
                  DOWNLOAD FREE RESOURCE →
                </button>
                <p
                  className={`text-xs mt-3 ${
                    isDark ? "text-white/50" : "text-charcoal-mid"
                  }`}
                >
                  Delivered to your inbox. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadMagnetModal
        magnet={magnet}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
