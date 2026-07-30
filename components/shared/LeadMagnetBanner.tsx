"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import type { LeadMagnetKey } from "@/types";
import { LeadMagnetModal } from "./LeadMagnetModal";
import { ReputationAssessmentModal } from "./ReputationAssessmentModal";

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
  /**
   * When true, the call-to-action opens the interactive Reputation
   * Vulnerability Assessment popup instead of the lead-magnet download form.
   */
  opensAssessment?: boolean;
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
  opensAssessment = false,
}: LeadMagnetBannerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const meta = siteConfig.leadMagnets[magnet];
  const isDark = variant === "dark";
  const isComingSoon = meta.available === false;
  const resolvedEyebrow =
    eyebrow ?? (isComingSoon ? "Coming soon" : "Free resource");
  const resolvedButtonLabel =
    buttonLabel ??
    (opensAssessment
      ? "Start the free assessment →"
      : isComingSoon
        ? "Notify me when it is ready →"
        : "Download free resource →");
  const resolvedFootnote =
    footnote ??
    (isComingSoon
      ? "We will email you the moment this resource is published. No spam."
      : "Delivered to your inbox. No commitment required.");

  return (
    <>
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div
            className={`grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_320px] gap-10 items-stretch overflow-hidden rounded-[2.5rem] ${
              isDark
                ? "v2-glass-dark"
                : "border border-brand-border bg-warm-white/70 backdrop-blur shadow-sm shadow-navy/5"
            }`}
          >
            <div className="p-8 md:p-10">
              <p className="mb-4 font-sans inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-link-teal">
                <span className="h-px w-8 bg-current opacity-50" aria-hidden />
                {resolvedEyebrow}
              </p>
              <h2
                className={`font-heading text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl ${
                  isDark ? "text-white" : "text-navy"
                }`}
              >
                {title ??
                  ("headline" in meta && typeof meta.headline === "string"
                    ? meta.headline
                    : meta.title)}
              </h2>
              <p
                className={`text-base leading-relaxed mt-4 max-w-2xl ${
                  isDark ? "text-white/70" : "text-charcoal-mid"
                  
                }`}
              >
                {description ?? meta.description}
              </p>

              {highlights.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className={`rounded-xl border px-4 py-4 ${
                        isDark
                          ? "border-white/15 bg-white/[0.06] text-white"
                          : "border-brand-border bg-warm-white/70 backdrop-blur text-text-body"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              )}
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
                  className="bg-brand-teal text-white font-sans font-semibold text-sm w-full py-3.5 rounded-full shadow-lg shadow-brand-teal/20 hover:bg-link-teal transition-colors mt-8"
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

      {opensAssessment ? (
        <ReputationAssessmentModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      ) : (
        <LeadMagnetModal
          magnet={magnet}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
