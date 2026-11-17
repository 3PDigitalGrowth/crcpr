"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { ReputationAssessment } from "@/components/shared/ReputationAssessment";

export interface ReputationAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReputationAssessmentModal({
  isOpen,
  onClose,
}: ReputationAssessmentModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[rgba(11,18,32,0.62)] p-4 sm:items-center"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="tone-base kit-r relative my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-line shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Reputation Vulnerability Assessment"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tone-base sticky top-0 z-10 flex justify-end px-4 pt-4">
          <button
            type="button"
            className="text-muted transition hover:text-[var(--fg)]"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="size-5" strokeWidth={2} />
          </button>
        </div>
        <div className="px-6 pb-8 md:px-8">
          <ReputationAssessment embedded />
        </div>
      </div>
    </div>
  );
}
