"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import {
  AUDIENCE,
  CHANNEL,
  CHANNELS,
  STATUSES,
  STATUS_MEANING,
  brandOf,
  effectiveStatus,
  formatDay,
  monthName,
  monthOf,
  monthWeeks,
  type Brand,
  type ChannelId,
  type Item,
  type PlannerState,
} from "@/lib/planner/model";
import { ChannelMark, SectionHeading, Stamp, btnPrimary, focusRing } from "./ui";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function CalendarSection({
  state,
  month,
  today,
  onOpen,
  onAdd,
}: {
  state: PlannerState;
  month: string;
  today: string;
  onOpen: (id: string) => void;
  onAdd: (date: string) => void;
}) {
  const [channels, setChannels] = useState<ChannelId[]>([...CHANNELS]);
  const [brand, setBrand] = useState<"all" | Brand>("all");

  const weeks = useMemo(() => monthWeeks(month), [month]);
  const byDate = useMemo(() => {
    const map = new Map<string, Item[]>();
    for (const item of state.items) {
      if (!channels.includes(item.channel)) continue;
      if (brand !== "all" && brandOf(item) !== brand) continue;
      const list = map.get(item.date) ?? [];
      list.push(item);
      map.set(item.date, list);
    }
    return map;
  }, [state.items, channels, brand]);

  const inMonth = state.items.filter((i) => monthOf(i.date) === month);
  const firstWeekday = weeks.flat().find((d) => monthOf(d) === month && new Date(d).getUTCDay() % 6 !== 0) ?? `${month}-01`;
  const addDate = monthOf(today) === month ? today : firstWeekday;

  return (
    <section aria-labelledby="month-heading" className="mt-16 sm:mt-20">
      <SectionHeading step="2" id="month-heading" title={`${monthName(month)}, day by day`}>
        Every article, email and post planned for the month, on the day it goes out.{" "}
        <strong className="font-semibold text-[#1A2B4A]">Nothing goes out unless it reads Cleared.</strong>
      </SectionHeading>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Show channels">
          {CHANNELS.map((c) => {
            const on = channels.includes(c);
            return (
              <button
                key={c}
                type="button"
                aria-pressed={on}
                onClick={() =>
                  setChannels(on ? channels.filter((x) => x !== c) : [...channels, c])
                }
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12.5px] font-medium ${focusRing} ${
                  on ? "border-[#1A2B4A]/40 bg-[#FAFAF8] text-[#1A2B4A]" : "border-dashed border-[#C5BFB5] text-[#8A8480] line-through"
                }`}
              >
                <ChannelMark channel={c} className={on ? "" : "opacity-40"} />
                {CHANNEL[c].label}
              </button>
            );
          })}
        </div>
        <div className="inline-flex rounded-full border border-[#C5BFB5] p-0.5" role="group" aria-label="Show brand">
          {(["all", "crc", "mpp"] as const).map((b) => (
            <button
              key={b}
              type="button"
              aria-pressed={brand === b}
              onClick={() => setBrand(b)}
              className={`rounded-full px-3 py-1 text-[12.5px] font-medium ${focusRing} ${
                brand === b ? "bg-[#1A2B4A] text-white" : "text-[#4A4A4A] hover:text-[#1A2B4A]"
              }`}
            >
              {b === "all" ? "Both" : b === "crc" ? "CRC" : "My PR Partner"}
            </button>
          ))}
        </div>
        <button type="button" className={`${btnPrimary} sm:ml-auto`} onClick={() => onAdd(addDate)}>
          <Plus className="h-4 w-4" aria-hidden />
          Add a piece
        </button>
      </div>

      <details className="mt-4 group">
        <summary className={`cursor-pointer list-none flex flex-wrap items-center gap-2 text-[13px] text-[#6B6560] hover:text-[#1A2B4A] ${focusRing}`}>
          <span className="flex flex-wrap gap-1">
            {STATUSES.map((s) => (
              <Stamp key={s} status={s} />
            ))}
          </span>
          <span className="underline underline-offset-4 decoration-[#C5BFB5]">What the stamps mean</span>
        </summary>
        <dl className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          {STATUSES.map((s) => (
            <div key={s} className="flex items-start gap-3">
              <dt className="pt-0.5 w-[5.5rem] shrink-0">
                <Stamp status={s} />
              </dt>
              <dd className="text-[13.5px] leading-snug">{STATUS_MEANING[s]}</dd>
            </div>
          ))}
        </dl>
      </details>

      {/* Desktop and tablet: the month as a wall planner */}
      <div className="mt-6 hidden md:block">
        <div className="grid grid-cols-[repeat(5,minmax(0,1fr))_repeat(2,minmax(0,0.62fr))] border-l border-t border-[#D9D3C9]">
          {WEEKDAYS.map((d) => (
            <div
              key={d}
              className="border-r border-b border-[#D9D3C9] bg-[#EFEBE3] px-2.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#6B6560]"
            >
              {d}
            </div>
          ))}
          {weeks.flat().map((date) => {
            const outside = monthOf(date) !== month;
            const items = outside ? [] : byDate.get(date) ?? [];
            const isToday = date === today;
            return (
              <div
                key={date}
                className={`group relative min-h-[132px] border-r border-b border-[#D9D3C9] p-1.5 ${
                  outside ? "bg-[#EFEBE3]/60" : "bg-[#F5F2EC]"
                }`}
              >
                <div className="flex items-center justify-between px-1 pb-1">
                  <span
                    className={`font-mono text-[12px] tabular-nums ${
                      outside
                        ? "text-[#B5AEA3]"
                        : isToday
                        ? "rounded-[3px] bg-[#C9A84C] px-1.5 text-[#1A2B4A] font-medium"
                        : "text-[#4A4A4A]"
                    }`}
                  >
                    {Number(date.slice(8))}
                    {isToday && <span className="sr-only"> (today)</span>}
                  </span>
                  {!outside && (
                    <button
                      type="button"
                      onClick={() => onAdd(date)}
                      aria-label={`Add a piece on ${formatDay(date)}`}
                      className={`rounded p-0.5 text-[#6B6560] opacity-0 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-[#E8E4DE] hover:text-[#1A2B4A] ${focusRing}`}
                    >
                      <Plus className="h-3.5 w-3.5" aria-hidden />
                    </button>
                  )}
                </div>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item.id}>
                      <ItemChip item={item} state={state} today={today} onOpen={onOpen} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Phone: the same month as a run sheet */}
      <div className="mt-6 md:hidden space-y-6">
        {weeks.map((week) => {
          const days = week.filter((d) => monthOf(d) === month);
          const withItems = days.filter((d) => (byDate.get(d) ?? []).length > 0);
          return (
            <div key={week[0]}>
              <div className="flex items-baseline justify-between border-b border-[#1A2B4A]/30 pb-1.5">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#1A2B4A]">
                  Week of {formatDay(days[0], false)}
                </h3>
                <button type="button" className="text-[12.5px] text-[#1A2B4A] underline underline-offset-4" onClick={() => onAdd(days.find((d) => new Date(d).getUTCDay() % 6 !== 0) ?? days[0])}>
                  Add
                </button>
              </div>
              {withItems.length === 0 ? (
                <p className="py-3 text-[13.5px] text-[#8A8480]">Nothing planned.</p>
              ) : (
                <ul className="divide-y divide-[#E8E4DE]">
                  {withItems.map((d) => (
                    <li key={d} className="grid grid-cols-[4.25rem_1fr] gap-3 py-3">
                      <span className={`font-mono text-[11.5px] leading-tight pt-1 ${d === today ? "text-[#9A7424] font-medium" : "text-[#4A4A4A]"}`}>
                        {formatDay(d)}
                      </span>
                      <ul className="space-y-1.5">
                        {(byDate.get(d) ?? []).map((item) => (
                          <li key={item.id}>
                            <ItemChip item={item} state={state} today={today} onOpen={onOpen} roomy />
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {inMonth.length === 0 && (
        <p className="mt-4 text-[14px] text-[#6B6560]">
          Nothing is planned for {monthName(month)} yet. Use Add a piece, or click any day.
        </p>
      )}
    </section>
  );
}

export function ItemChip({
  item,
  state,
  today,
  onOpen,
  roomy = false,
}: {
  item: Item;
  state: PlannerState;
  today: string;
  onOpen: (id: string) => void;
  roomy?: boolean;
}) {
  const status = effectiveStatus(item, state.settings, today);
  const brand = brandOf(item);
  const tone =
    status === "idea"
      ? "border border-dashed border-[#B5AEA3] bg-transparent"
      : status === "pulled"
      ? "border border-[#E8E4DE] bg-transparent opacity-60"
      : "border border-[#E2DDD4] bg-[#FDFCFA] shadow-[0_1px_0_rgba(26,43,74,0.05)]";
  return (
    <button
      type="button"
      onClick={() => onOpen(item.id)}
      className={`w-full text-left rounded-[6px] ${tone} hover:border-[#1A2B4A]/60 ${focusRing} ${roomy ? "px-3 py-2.5" : "px-2 py-1.5"}`}
      style={{ boxShadow: `inset 3px 0 0 ${CHANNEL[item.channel].colour}` }}
    >
      <span className="sr-only">{CHANNEL[item.channel].label}: </span>
      <span
        className={`block font-medium text-[#1A2B4A] leading-snug ${roomy ? "text-[14.5px]" : "text-[12.5px] line-clamp-3"} ${
          status === "pulled" ? "line-through" : ""
        }`}
      >
        {item.title}
      </span>
      <span className="mt-1.5 flex flex-wrap items-center gap-1.5">
        <Stamp status={status} />
        <span className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-[#6B6560]">
          {brand === "crc" ? "CRC" : `MPP · ${AUDIENCE[item.audience].label}`}
        </span>
      </span>
    </button>
  );
}
