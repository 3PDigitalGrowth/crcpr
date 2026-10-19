"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  SIDE_OF,
  formatStamp,
  type Person,
  type PlannerState,
  type SilentApproval,
} from "@/lib/planner/model";
import { SectionHeading, btnPrimary, fieldClass, focusRing, type Apply } from "./ui";

const SILENT_OPTIONS: { value: SilentApproval; label: string; detail: string }[] = [
  { value: "undecided", label: "Not decided yet", detail: "Treated as no: nothing clears without a sign-off." },
  { value: "off", label: "Never on silence", detail: "Every My PR Partner piece waits for a sign-off." },
  {
    value: "five-days",
    label: "Clears after five business days",
    detail: "If nobody flags a My PR Partner piece within five business days, it clears.",
  },
];

export function GroundRules({ state, who, apply }: { state: PlannerState; who: Person; apply: Apply }) {
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const isCrc = SIDE_OF[who] === "crc";
  const { settings } = state;

  async function add() {
    setBusy(true);
    if (await apply({ type: "rule.add", text })) setText("");
    setBusy(false);
  }

  return (
    <section aria-labelledby="rules-heading" className="mt-16 sm:mt-20">
      <SectionHeading step="3" id="rules-heading" title="Ground rules">
        These apply every month. 3P checks every piece against the red lines before it reaches CRC,
        and CRC sets how sign-off works.
      </SectionHeading>

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div>
          <h3 className="font-heading text-[28px] text-[#1A2B4A] leading-none">Red lines</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-[#6B6560] max-w-xl">
            Written from Lyall&apos;s feedback since March. Add to the list any time.
          </p>
          <ul className="mt-5 divide-y divide-[#D9D3C9] border-y border-[#D9D3C9]">
            {state.rules.map((rule) => {
              const canRemove = isCrc || rule.by === who;
              return (
                <li key={rule.id} className="group flex items-start gap-4 py-3.5">
                  <span aria-hidden className="mt-[9px] h-[3px] w-3 shrink-0 bg-[#9B2C2C]" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[15.5px] leading-snug text-[#2C2C2C]">{rule.text}</p>
                    <p className="mt-1 font-mono text-[10.5px] text-[#8A8480]">
                      Added by {rule.by}, {formatStamp(rule.at)}
                    </p>
                  </div>
                  {canRemove && (
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm("Remove this red line?")) void apply({ type: "rule.remove", id: rule.id });
                      }}
                      aria-label={`Remove red line: ${rule.text}`}
                      className={`rounded p-1 text-[#8A8480] opacity-60 hover:opacity-100 hover:text-[#9B2C2C] group-hover:opacity-100 ${focusRing}`}
                    >
                      <X className="h-4 w-4" aria-hidden />
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
          <form
            className="mt-4 flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (text.trim()) void add();
            }}
          >
            <label htmlFor="new-rule" className="sr-only">
              New red line
            </label>
            <input
              id="new-rule"
              className={fieldClass}
              value={text}
              maxLength={280}
              placeholder="Add a red line"
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className={`${btnPrimary} shrink-0`} disabled={busy || !text.trim()}>
              Add red line
            </button>
          </form>
        </div>

        <div>
          <h3 className="font-heading text-[28px] text-[#1A2B4A] leading-none">How sign-off works</h3>
          {!isCrc && (
            <p className="mt-2 text-[14px] text-[#6B6560]">CRC&apos;s call. Lyall or Barbara can change these.</p>
          )}

          <div className="mt-5 rounded-2xl border border-[#1A2B4A] p-5">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#6B6560]">CRC Public Relations</p>
            <p className="mt-2 text-[15px] leading-relaxed text-[#2C2C2C]">
              Lyall signs every piece. Nothing under CRC&apos;s name, or carrying Lyall&apos;s or
              Barbara&apos;s name, goes out on silence.
            </p>
          </div>

          <fieldset className="mt-4 rounded-2xl border border-[#D9D3C9] bg-[#FAFAF8] p-5" disabled={!isCrc}>
            <legend className="sr-only">My PR Partner sign-off</legend>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#6B6560]">My PR Partner</p>
            <label htmlFor="mpp-approver" className="mt-3 block text-[14px] font-semibold text-[#1A2B4A]">
              Who signs off
            </label>
            <select
              id="mpp-approver"
              className={`${fieldClass} mt-1.5`}
              value={settings.mppApprover}
              onChange={(e) =>
                apply({ type: "settings.set", mppApprover: e.target.value as "Barbara" | "Lyall" })
              }
            >
              <option value="Barbara">Barbara (Lyall can too)</option>
              <option value="Lyall">Lyall only</option>
            </select>

            <p className="mt-5 text-[14px] font-semibold text-[#1A2B4A]">If nobody replies</p>
            <div className="mt-2 space-y-2">
              {SILENT_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 ${
                    settings.silentApproval === option.value ? "border-[#1A2B4A] bg-white/70" : "border-[#E2DDD4]"
                  } ${isCrc ? "cursor-pointer" : ""}`}
                >
                  <input
                    type="radio"
                    name="silent"
                    value={option.value}
                    checked={settings.silentApproval === option.value}
                    onChange={() => apply({ type: "settings.set", silentApproval: option.value })}
                    className="mt-1 h-4 w-4 accent-[#1A2B4A]"
                  />
                  <span>
                    <span className="block text-[14.5px] font-medium text-[#2C2C2C]">{option.label}</span>
                    <span className="block text-[13px] leading-snug text-[#6B6560]">{option.detail}</span>
                  </span>
                </label>
              ))}
            </div>
            {settings.changed && (
              <p className="mt-3 font-mono text-[10.5px] text-[#8A8480]">
                Last changed by {settings.changed.by}, {formatStamp(settings.changed.at)}
              </p>
            )}
          </fieldset>
        </div>
      </div>
    </section>
  );
}
