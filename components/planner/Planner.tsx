"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SIDE_LABEL,
  SIDE_OF,
  formatDay,
  formatStamp,
  monthCounts,
  monthLabel,
  monthName,
  shiftMonth,
  waitingLists,
  type Op,
  type Person,
  type PlannerState,
  type Waiting,
} from "@/lib/planner/model";
import { applyPlannerOp, refreshPlanner, switchWhoAction } from "@/app/plan/actions";
import { DirectionSection } from "./Direction";
import { CalendarSection } from "./Calendar";
import { ItemPanel } from "./ItemPanel";
import { GroundRules } from "./GroundRules";
import { ChannelMark, Stamp, focusRing } from "./ui";

type Toast = { kind: "ok" | "error"; text: string } | null;
type Panel = { kind: "item"; id: string } | { kind: "new"; date: string } | null;

export function Planner({
  initialState,
  month,
  who,
  today,
}: {
  initialState: PlannerState;
  month: string;
  who: Person;
  today: string;
}) {
  const [state, setState] = useState(initialState);
  const [panel, setPanel] = useState<Panel>(null);
  const [toast, setToast] = useState<Toast>(null);
  const [saving, setSaving] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  const showToast = useCallback((next: Toast) => {
    setToast(next);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), next?.kind === "error" ? 7000 : 2200);
  }, []);

  const apply = useCallback(
    async (op: Op) => {
      setSaving(true);
      const result = await applyPlannerOp(op);
      setSaving(false);
      if (result.state) setState(result.state);
      showToast(result.ok ? { kind: "ok", text: "Saved" } : { kind: "error", text: result.message });
      return result.ok;
    },
    [showToast]
  );

  // Keep everyone's screen current during a shared session without
  // disturbing anyone mid-edit.
  useEffect(() => {
    const timer = setInterval(async () => {
      if (document.visibilityState !== "visible" || panel || saving) return;
      const active = document.activeElement?.tagName;
      if (active === "TEXTAREA" || active === "INPUT" || active === "SELECT") return;
      const fresh = await refreshPlanner();
      if (fresh) setState(fresh);
    }, 30000);
    return () => clearInterval(timer);
  }, [panel, saving]);

  const openItem = panel?.kind === "item" ? state.items.find((i) => i.id === panel.id) ?? null : null;
  const { onCrc, onTp } = waitingLists(state, month, today);
  const side = SIDE_OF[who];

  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
      <header className="pt-8 sm:pt-12">
        <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6B6560]">
              CRC Public Relations · My PR Partner
            </p>
            <h1 className="font-heading text-[46px] sm:text-[68px] leading-[0.9] text-[#1A2B4A] mt-2">
              Forward planner
            </h1>
          </div>
          <div className="sm:text-right">
            <form action={switchWhoAction} className="text-[14px]">
              <input type="hidden" name="next" value={`/plan/${month}`} />
              Planning as <strong className="font-semibold text-[#1A2B4A]">{who}</strong>
              <span className="font-mono text-[11px] text-[#6B6560]"> · {SIDE_LABEL[side]}</span>{" "}
              <button type="submit" className={`ml-1 text-[13px] text-[#1A2B4A] underline underline-offset-4 decoration-[#C5BFB5] hover:decoration-[#1A2B4A] ${focusRing}`}>
                Not you?
              </button>
            </form>
            <p className="mt-1 font-mono text-[11px] text-[#8A8480]">
              {state.updated
                ? `Last change: ${state.updated.by}, ${formatStamp(state.updated.at)}`
                : "No changes yet"}
            </p>
          </div>
        </div>
        <p className="mt-5 max-w-2xl text-[16px] sm:text-[17px] leading-relaxed text-[#2C2C2C]">
          One place for what goes out each month: the direction both sides agree, every piece on the
          day it goes out, and who has signed it off.
        </p>

        <MonthTabs state={state} month={month} />
      </header>

      <WaitingBand onCrc={onCrc} onTp={onTp} side={side} month={month} onOpen={(id) => setPanel({ kind: "item", id })} />

      <DirectionSection state={state} month={month} who={who} apply={apply} />

      <CalendarSection
        state={state}
        month={month}
        today={today}
        onOpen={(id) => setPanel({ kind: "item", id })}
        onAdd={(date) => setPanel({ kind: "new", date })}
      />

      <GroundRules state={state} who={who} apply={apply} />

      <footer className="mt-20 border-t border-[#D9D3C9] py-8 flex flex-wrap items-center justify-between gap-4 text-[12.5px] text-[#8A8480]">
        <p>Every change is saved with your name and the time. Times are Brisbane time.</p>
        <p>
          © {today.slice(0, 4)} CRC Public Relations ·{" "}
          <a
            href="https://www.3pdigital.com.au"
            target="_blank"
            rel="noopener"
            className={`underline underline-offset-4 decoration-[#C5BFB5] hover:text-[#1A2B4A] ${focusRing}`}
          >
            Proudly supported by 3P Digital
          </a>
        </p>
      </footer>

      {panel && (
        <ItemPanel
          key={panel.kind === "item" ? panel.id : `new-${panel.date}`}
          state={state}
          item={openItem}
          newDate={panel.kind === "new" ? panel.date : null}
          who={who}
          today={today}
          apply={apply}
          onClose={() => setPanel(null)}
        />
      )}

      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
        {(toast || saving) && (
          <p
            className={`pointer-events-auto rounded-full px-4 py-2 text-[13px] font-medium shadow-lg ${
              toast?.kind === "error" && !saving ? "bg-[#9B2C2C] text-white" : "bg-[#1A2B4A] text-[#F5F2EC]"
            }`}
          >
            {saving ? "Saving..." : toast?.text}
          </p>
        )}
      </div>
    </div>
  );
}

function MonthTabs({ state, month }: { state: PlannerState; month: string }) {
  const tabs = [-1, 0, 1, 2].map((n) => shiftMonth(month, n));
  return (
    <nav aria-label="Months" className="mt-8 flex items-stretch border-y border-[#1A2B4A]/25">
      <Link
        href={`/plan/${shiftMonth(month, -1)}`}
        aria-label={`Previous month, ${monthLabel(shiftMonth(month, -1))}`}
        className={`flex items-center px-2 text-[#1A2B4A] hover:bg-[#EFEBE3] ${focusRing}`}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </Link>
      <ul className="grid flex-1 grid-cols-3 md:grid-cols-4">
        {tabs.map((key, i) => {
          const counts = monthCounts(state, key);
          const current = key === month;
          return (
            <li key={key} className={i === 3 ? "hidden md:block" : ""}>
              <Link
                href={`/plan/${key}`}
                aria-current={current ? "page" : undefined}
                className={`block h-full border-l border-[#1A2B4A]/15 px-3 py-3 sm:px-5 sm:py-4 ${focusRing} ${
                  current ? "bg-[#1A2B4A] text-[#F5F2EC]" : "text-[#1A2B4A] hover:bg-[#EFEBE3]"
                }`}
              >
                <span className="block font-heading text-[22px] sm:text-[28px] leading-none">
                  {monthName(key)}
                  <span className={`ml-2 hidden sm:inline font-mono text-[11px] ${current ? "text-[#F5F2EC]/60" : "text-[#8A8480]"}`}>
                    {key.slice(0, 4)}
                  </span>
                </span>
                <span className={`mt-1.5 block font-mono text-[10.5px] ${current ? "text-[#C9A84C]" : "text-[#6B6560]"}`}>
                  {counts.agreed} of 4 agreed · {counts.items} {counts.items === 1 ? "piece" : "pieces"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href={`/plan/${shiftMonth(month, 1)}`}
        aria-label={`Next month, ${monthLabel(shiftMonth(month, 1))}`}
        className={`flex items-center border-l border-[#1A2B4A]/15 px-2 text-[#1A2B4A] hover:bg-[#EFEBE3] ${focusRing}`}
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </Link>
    </nav>
  );
}

function WaitingBand({
  onCrc,
  onTp,
  side,
  month,
  onOpen,
}: {
  onCrc: Waiting[];
  onTp: Waiting[];
  side: "crc" | "tp";
  month: string;
  onOpen: (id: string) => void;
}) {
  const columns = [
    { key: "crc", title: "Waiting on CRC", list: onCrc, empty: `Nothing waiting on CRC in ${monthName(month)}.` },
    { key: "tp", title: "Waiting on 3P", list: onTp, empty: `Nothing waiting on 3P in ${monthName(month)}.` },
  ];
  // Your own side's list comes first.
  if (side === "tp") columns.reverse();

  return (
    <section aria-label="Who is waiting on what" className="mt-8 rounded-2xl bg-[#1A2B4A] text-[#F5F2EC]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {columns.map((col, i) => (
          <div key={col.key} className={`p-5 sm:p-7 ${i === 1 ? "border-t md:border-t-0 md:border-l border-white/10" : ""}`}>
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-heading text-[28px] sm:text-[32px] leading-none">{col.title}</h2>
              <span className="font-mono text-[12px] text-[#C9A84C]">{col.list.length}</span>
            </div>
            {col.list.length === 0 ? (
              <p className="mt-4 text-[14px] text-[#F5F2EC]/65">{col.empty}</p>
            ) : (
              <ul className="mt-4 divide-y divide-white/10">
                {col.list.slice(0, 6).map(({ item, status, reason }) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onOpen(item.id)}
                      className="group grid w-full grid-cols-[auto_1fr] items-start gap-x-3 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9A84C]"
                    >
                      <span className="pt-1.5">
                        <ChannelMark channel={item.channel} className="ring-1 ring-white/40" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[15px] font-medium leading-snug group-hover:underline underline-offset-4 decoration-[#C9A84C]">
                          {item.title}
                        </span>
                        <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10.5px] text-[#F5F2EC]/70">
                          <span className="rounded-[3px] bg-[#F5F2EC] px-0.5">
                            <Stamp status={status} />
                          </span>
                          {formatDay(item.date)} · {reason}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
                {col.list.length > 6 && (
                  <li className="pt-3 font-mono text-[11px] text-[#F5F2EC]/60">
                    And {col.list.length - 6} more on the calendar below.
                  </li>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
