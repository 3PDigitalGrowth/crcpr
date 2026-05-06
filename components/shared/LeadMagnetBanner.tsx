"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import type { LeadMagnetKey } from "@/types";
import { LeadMagnetModal } from "./LeadMagnetModal";

export interface LeadMagnetBannerProps {
  magnet: LeadMagnetKey;
  variant?: "dark" | "light";
  eyebrow?: string;
  title?: string;
  description?: string;
  highlights?: string[];
  whatYouGetTitle?: string;
  whatYouGetBody?: string;
  buttonLabel?: string;
  footnote?: string;
}

export function LeadMagnetBanner({
  magnet,
  variant = "dark",
  eyebrow,
  title,
  description,
  highlights = [
    "Built from specialist advisory work",
    "Immediate next-step guidance",
    "Delivered directly to your inbox",
  ],
  whatYouGetTitle = "What you get",
  whatYouGetBody = "A practical resource designed to help leadership teams make a better decision sooner.",
  buttonLabel,
  footnote,
}: LeadMagnetBannerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const meta = siteConfig.leadMagnets[magnet];
  const isDark = variant === "dark";
  const isComingSoon = meta.available === false;
  const resolvedEyebrow =
    eyebrow ?? (isComingSoon ? "Coming soon" : "Free resource");
  const resolvedButtonLabel =
    buttonLabel ??
    (isComingSoon ? "Notify me when it is ready →" : "Download free resource →");
  const resolvedFootnote =
    footnote ??
    (isComingSoon
      ? "We will email you the moment this resource is published. No spam."
      : "Delivered to your inbox. No commitment required.");

  return (
    <>
      <section
        className={
          isDark ? "py-16 md:py-20 bg-navy" : "py-16 md:py-20 bg-warm-white"
        }
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_320px] gap-10 items-stretch rounded-lg border ${
              isDark
                ? "border-white/10 bg-white/[0.03]"
                : "border-brand-border bg-white shadow-sm shadow-navy/5"
            }`}
          >
            <div className="p-8 md:p-10">
              <p className="text-brand-teal text-xs font-medium">
                {resolvedEyebrow}
              </p>
              <h2
                className={`text-3xl font-heading font-black mt-3 ${
                  isDark ? "text-white" : "text-navy"
                }`}
              >
                {title ?? meta.title}
              </h2>
              <p
                className={`text-base leading-relaxed mt-4 max-w-2xl ${
                  isDark ? "text-white/70" : "text-charcoal-mid"
                  
                }`}
              >
                {description ?? meta.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className={`rounded-md border px-4 py-4 ${
                      isDark
                        ? "border-white/15 bg-white/[0.06] text-white"
                        : "border-brand-border bg-warm-white text-text-body"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`p-8 md:p-10 ${
                isDark
                  ? "border-t lg:border-t-0 lg:border-l border-white/10 bg-navy-mid/70"
                  : "border-t lg:border-t-0 lg:border-l border-brand-border bg-warm-white"
              }`}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <p
                    className={`text-xs ${
                      isDark ? "text-white/35" : "text-text-caption"
                    }`}
                  >
                    {whatYouGetTitle}
                  </p>
                  <p
                    className={`text-sm leading-relaxed mt-3 ${
                      isDark ? "text-white/65" : "text-text-body"
                    }`}
                  >
                    {whatYouGetBody}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="bg-brand-teal text-white font-heading font-black text-sm w-full py-4 rounded-[4px] hover:bg-link-teal transition mt-8"
                >
                  {resolvedButtonLabel}
                </button>
                <p
                  className={`text-xs mt-3 ${
                    isDark ? "text-white/50" : "text-text-caption"
                  }`}
                >
                  {resolvedFootnote}
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
