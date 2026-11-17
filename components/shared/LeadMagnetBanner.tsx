"use client";

import { useState } from "react";
import { Check, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { LeadMagnetKey } from "@/types";
import { LeadMagnetForm } from "@/components/altkit/forms";
import { Container, H2 } from "@/components/altkit/primitives";
import { ReputationAssessmentModal } from "./ReputationAssessmentModal";

export interface LeadMagnetBannerProps {
  magnet: LeadMagnetKey;
  /** "dark" sits on the pale band, "light" on the white canvas. */
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

const stripArrow = (label: string) => label.replace(/\s*(→|&rarr;)\s*$/, "");

/** Chambers resource panel: the details left, the short download form right. */
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
  const isComingSoon = meta.available === false;
  const resolvedEyebrow = eyebrow ?? (isComingSoon ? "Coming soon" : "Free resource");
  const resolvedButtonLabel = stripArrow(
    buttonLabel ??
      (opensAssessment
        ? "Start the free assessment"
        : isComingSoon
          ? "Notify me when it is ready"
          : "Download free resource"),
  );
  const resolvedFootnote =
    footnote ??
    (isComingSoon
      ? "We will email you the moment this resource is published. No spam."
      : "Delivered to your inbox. No commitment required.");
  const heading =
    title ?? ("headline" in meta && typeof meta.headline === "string" ? meta.headline : meta.title);

  return (
    <>
      <section className={`${variant === "dark" ? "tone-deep" : "tone-base"} relative py-11 md:py-14`} aria-label={heading}>
        <Container>
          <div className="kit-r grid overflow-hidden border border-line bg-card lg:grid-cols-[minmax(0,1.3fr),340px]">
            <div className="p-6 md:p-10">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                <FileText className="h-3.5 w-3.5" aria-hidden />
                {resolvedEyebrow}
              </p>
              <H2 className="mt-4 max-w-2xl">{heading}</H2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{description ?? meta.description}</p>

              {highlights.length > 0 ? (
                <ul className="mt-7 grid gap-3 md:grid-cols-3">
                  {highlights.map((item) => (
                    <li key={item} className="kit-r-sm flex items-start gap-2.5 border border-line p-4 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="flex flex-col border-t border-line p-6 md:p-8 lg:border-l lg:border-t-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">{whatYouGetTitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{whatYouGetBody}</p>
              <div className="mt-auto pt-6">
                {opensAssessment ? (
                  <button type="button" onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
                    {resolvedButtonLabel}
                  </button>
                ) : (
                  <LeadMagnetForm magnet={magnet} submitLabel={resolvedButtonLabel} />
                )}
                <p className="mt-3 text-xs leading-relaxed text-muted">{resolvedFootnote}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {opensAssessment ? (
        <ReputationAssessmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      ) : null}
    </>
  );
}
