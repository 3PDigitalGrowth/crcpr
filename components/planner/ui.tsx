"use client";

import { useEffect, useRef } from "react";
import { CHANNEL, STATUS_LABEL, type ChannelId, type Op, type Status } from "@/lib/planner/model";

export type Apply = (op: Op) => Promise<boolean>;

const STAMP_TONE: Record<Status, string> = {
  idea: "border-dashed border-[#8A8480] text-[#5E5853]",
  drafting: "border-[#8A8480] text-[#4A4A4A]",
  with_crc: "border-[#C9A84C] bg-[#F5EDD4] text-[#5C4512]",
  cleared: "border-[#1A2B4A] bg-[#1A2B4A] text-[#F5F2EC]",
  out: "border-[#058A94] text-[#04656C]",
  pulled: "border-[#9B2C2C] text-[#9B2C2C]",
};

/** Release-style status stamp. The label is the status; colour only backs it up. */
export function Stamp({ status, size = "sm" }: { status: Status; size?: "sm" | "md" }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-[3px] border font-mono uppercase leading-none ${
        size === "md" ? "text-[11px] tracking-[0.14em] px-2 py-1" : "text-[9.5px] tracking-[0.12em] px-1.5 py-[3px]"
      } ${STAMP_TONE[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

export function ChannelMark({ channel, className = "" }: { channel: ChannelId; className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-block h-2.5 w-2.5 rounded-[2px] shrink-0 ${className}`}
      style={{ backgroundColor: CHANNEL[channel].colour }}
    />
  );
}

export function SectionHeading({
  step,
  title,
  children,
  id,
}: {
  step: string;
  title: string;
  children?: React.ReactNode;
  id: string;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-4 border-b-2 border-[#1A2B4A] pb-3">
        <span className="font-mono text-[13px] text-[#9A7424]" aria-hidden>
          {step}
        </span>
        <h2 id={id} className="font-heading text-[34px] sm:text-[44px] leading-none text-[#1A2B4A]">
          {title}
        </h2>
      </div>
      {children && <div className="mt-3 max-w-2xl text-[15px] leading-relaxed">{children}</div>}
    </div>
  );
}

export const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A2B4A]";

export const btnPrimary = `inline-flex items-center justify-center gap-2 rounded-full bg-[#1A2B4A] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#253D62] disabled:opacity-50 ${focusRing}`;

export const btnSecondary = `inline-flex items-center justify-center gap-2 rounded-full border border-[#1A2B4A]/30 px-4 py-2 text-[13px] font-semibold text-[#1A2B4A] hover:border-[#1A2B4A] hover:bg-white/60 disabled:opacity-50 ${focusRing}`;

export const btnQuiet = `inline-flex items-center gap-1.5 rounded px-1 text-[13px] font-medium text-[#1A2B4A] underline decoration-[#1A2B4A]/30 underline-offset-4 hover:decoration-[#1A2B4A] disabled:opacity-50 ${focusRing}`;

export const fieldClass =
  "w-full rounded-lg border border-[#C5BFB5] bg-[#FAFAF8] px-3 py-2.5 text-[14.5px] leading-relaxed text-[#2C2C2C] placeholder:text-[#8A8480] focus:outline-none focus:border-[#1A2B4A] focus:ring-2 focus:ring-[#1A2B4A]/15";

export const labelClass = "block font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#6B6560] mb-1.5";

/** Textarea that grows with its content. */
export function AutoTextarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { minRows?: number }
) {
  const { minRows = 3, className = "", ...rest } = props;
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight + 2}px`;
  }, [props.value]);
  return <textarea ref={ref} rows={minRows} className={`${fieldClass} resize-none ${className}`} {...rest} />;
}
