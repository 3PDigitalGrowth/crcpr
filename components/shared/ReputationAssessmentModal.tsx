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
      className="fixed inset-0 z-50 bg-black/60 flex items-start sm:items-center justify-center p-4 overflow-y-auto"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-sm shadow-navy/10 my-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Reputation Vulnerability Assessment"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex justify-end bg-white/95 backdrop-blur px-4 pt-4">
          <button
            type="button"
            className="text-text-caption hover:text-text-body transition"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="size-5" strokeWidth={2} />
          </button>
        </div>
        <div className="px-6 md:px-8 pb-8">
          <ReputationAssessment embedded />
        </div>
      </div>
    </div>
  );
}
