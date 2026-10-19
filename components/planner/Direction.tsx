"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import {
  AUDIENCE,
  AUDIENCES,
  CHANNEL,
  CHANNELS,
  SIDE_LABEL,
  SIDE_OF,
  formatStamp,
  getDirection,
  isAgreed,
  monthName,
  type AudienceId,
  type ChannelId,
  type Direction,
  type Note,
  type Person,
  type PlannerState,
  type Side,
} from "@/lib/planner/model";
import {
  AutoTextarea,
  ChannelMark,
  SectionHeading,
  btnPrimary,
  btnQuiet,
  btnSecondary,
  focusRing,
  type Apply,
} from "./ui";

export function DirectionSection({
  state,
  month,
  who,
  apply,
}: {
  state: PlannerState;
  month: string;
  who: Person;
  apply: Apply;
}) {
  return (
    <section aria-labelledby="direction-heading" className="mt-16 sm:mt-20">
      <SectionHeading step="1" id="direction-heading" title={`Direction for ${monthName(month)}`}>
        CRC and 3P each put in a view for every channel. The agreed line is what the month gets
        planned around, and it counts once someone from each side has ticked it.
      </SectionHeading>
      <div>
        {CHANNELS.map((channel) => (
          <DirectionRow
            key={channel}
            channel={channel}
            direction={getDirection(state, month, channel)}
            month={month}
            who={who}
            apply={apply}
          />
        ))}
      </div>
    </section>
  );
}

function DirectionRow({
  channel,
  direction,
  month,
  who,
  apply,
}: {
  channel: ChannelId;
  direction: Direction;
  month: string;
  who: Person;
  apply: Apply;
}) {
  const info = CHANNEL[channel];
  return (
    <article
      aria-label={info.label}
      className="grid grid-cols-1 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_minmax(0,1fr)] gap-x-8 gap-y-5 py-9 border-b border-[#D9D3C9]"
    >
      <header className="lg:row-span-2">
        <p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#6B6560]">
          <ChannelMark channel={channel} />
          Channel
        </p>
        <h3 className="font-heading text-[30px] leading-[1.02] text-[#1A2B4A] mt-2">{info.label}</h3>
        <p className="text-[14px] leading-relaxed text-[#6B6560] mt-2 max-w-[15rem]">{info.blurb}</p>
        <AudiencePicker
          selected={direction.audiences}
          onChange={(audiences) => apply({ type: "direction.audiences", month, channel, audiences })}
        />
      </header>
      <VoiceBox side="crc" note={direction.crc} who={who} prompt={info.crcPrompt} onSave={(text) => apply({ type: "direction.note", month, channel, text })} />
      <VoiceBox side="tp" note={direction.tp} who={who} prompt={info.tpPrompt} onSave={(text) => apply({ type: "direction.note", month, channel, text })} />
      <AgreedLine direction={direction} who={who} month={month} channel={channel} apply={apply} />
    </article>
  );
}

function AudiencePicker({
  selected,
  onChange,
}: {
  selected: AudienceId[];
  onChange: (next: AudienceId[]) => void;
}) {
  // Show the tap straight away; the saved state catches up a moment later.
  const [local, setLocal] = useState(selected);
  const key = selected.join(",");
  useEffect(() => setLocal(key ? (key.split(",") as AudienceId[]) : []), [key]);

  return (
    <fieldset className="mt-5">
      <legend className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#6B6560] mb-2">
        Speaks to this month
      </legend>
      <div className="flex flex-wrap gap-1.5">
        {AUDIENCES.map((id) => {
          const on = local.includes(id);
          return (
            <button
              key={id}
              type="button"
              aria-pressed={on}
              title={AUDIENCE[id].long}
              onClick={() => {
                const next = on ? local.filter((a) => a !== id) : [...local, id];
                setLocal(next);
                onChange(next);
              }}
              className={`rounded-full border px-2.5 py-1 text-[12px] font-medium transition-colors ${focusRing} ${
                on
                  ? "border-[#1A2B4A] bg-[#1A2B4A] text-white"
                  : "border-[#C5BFB5] text-[#4A4A4A] hover:border-[#1A2B4A]"
              }`}
            >
              {AUDIENCE[id].label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function VoiceBox({
  side,
  note,
  who,
  prompt,
  onSave,
}: {
  side: Side;
  note: Note | null;
  who: Person;
  prompt: string;
  onSave: (text: string) => Promise<boolean>;
}) {
  const mine = SIDE_OF[who] === side;
  const [draft, setDraft] = useState(note?.text ?? "");
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);

  // Pick up other people's saves, but never overwrite unsaved typing.
  useEffect(() => {
    if (!dirty) setDraft(note?.text ?? "");
  }, [note?.text, note?.at, dirty]);

  const accent = side === "crc" ? "border-[#1A2B4A]" : "border-[#C9A84C]";
  const heading = side === "crc" ? "CRC says" : "3P says";

  async function save() {
    setSaving(true);
    const ok = await onSave(draft);
    setSaving(false);
    if (ok) setDirty(false);
  }

  return (
    <div className={`border-l-2 ${accent} pl-4 min-w-0`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-2">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#1A2B4A]">{heading}</p>
        {note && (
          <p className="font-mono text-[10.5px] text-[#8A8480]">
            {note.by}, {formatStamp(note.at)}
          </p>
        )}
      </div>
      {mine ? (
        <>
          <AutoTextarea
            aria-label={`${heading}: ${prompt}`}
            value={draft}
            placeholder={prompt}
            minRows={4}
            onChange={(e) => {
              setDraft(e.target.value);
              setDirty(true);
            }}
            onKeyDown={(e) => {
              if ((e.metaKey || e.ctrlKey) && e.key === "Enter" && dirty) void save();
            }}
          />
          {dirty && (
            <div className="mt-2 flex items-center gap-3">
              <button type="button" className={btnPrimary} onClick={save} disabled={saving}>
                {saving ? "Saving..." : "Save"}
              </button>
              <button
                type="button"
                className={btnQuiet}
                onClick={() => {
                  setDraft(note?.text ?? "");
                  setDirty(false);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </>
      ) : note ? (
        <p className="whitespace-pre-line text-[15px] leading-relaxed text-[#2C2C2C]">{note.text}</p>
      ) : (
        <p className="text-[14px] text-[#8A8480]">
          Nothing from {SIDE_LABEL[side]} yet. {side === "crc" ? "Lyall or Barbara adds this." : "3P adds this."}
        </p>
      )}
    </div>
  );
}

function AgreedLine({
  direction,
  who,
  month,
  channel,
  apply,
}: {
  direction: Direction;
  who: Person;
  month: string;
  channel: ChannelId;
  apply: Apply;
}) {
  const line = direction.line;
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(line?.text ?? "");
  const [busy, setBusy] = useState(false);
  const agreed = isAgreed(direction);
  const ticked = Boolean(direction.agreed[who]);
  const tickers = Object.keys(direction.agreed) as Person[];

  useEffect(() => {
    if (!editing) setDraft(line?.text ?? "");
  }, [line?.text, editing]);

  async function run(op: Parameters<Apply>[0]) {
    setBusy(true);
    const ok = await apply(op);
    setBusy(false);
    return ok;
  }

  return (
    <div
      className={`lg:col-start-2 lg:col-span-2 rounded-2xl px-5 py-5 sm:px-6 border ${
        agreed ? "border-[#1A2B4A] bg-[#FAFAF8]" : "border-[#D9D3C9] bg-[#FAFAF8]/60"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#6B6560]">The agreed line</p>
        {agreed ? (
          <span className="inline-flex items-center gap-1.5 rounded-[3px] bg-[#C9A84C] px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#1A2B4A]">
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
            Agreed
          </span>
        ) : (
          <span className="font-mono text-[10.5px] text-[#8A8480]">
            {line ? "Needs a tick from both sides" : "Not written yet"}
          </span>
        )}
      </div>

      {editing ? (
        <div className="mt-3">
          <AutoTextarea
            aria-label="The agreed line"
            value={draft}
            minRows={2}
            maxLength={280}
            placeholder="One sentence both sides can sign. For example: My PR Partner articles only, one a week, Masterclass audience."
            onChange={(e) => setDraft(e.target.value)}
            className="font-heading !text-[24px] !leading-snug text-[#1A2B4A]"
          />
          <p className="mt-1.5 text-[12.5px] text-[#8A8480]">
            Changing the line clears the ticks, so both sides agree to the new wording.
          </p>
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              className={btnPrimary}
              disabled={busy}
              onClick={async () => {
                if (await run({ type: "direction.line", month, channel, text: draft })) setEditing(false);
              }}
            >
              {busy ? "Saving..." : "Save the line"}
            </button>
            <button type="button" className={btnQuiet} onClick={() => setEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : line ? (
        <blockquote className="mt-3 font-heading text-[25px] sm:text-[30px] leading-[1.15] text-[#1A2B4A] text-balance">
          {line.text}
        </blockquote>
      ) : (
        <p className="mt-3 text-[15px] text-[#6B6560]">
          Once both views are in, write the one sentence this channel will follow in {monthName(month)}.
        </p>
      )}

      {!editing && (
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
          {line && (
            <button
              type="button"
              disabled={busy}
              aria-pressed={ticked}
              className={ticked ? btnSecondary : btnPrimary}
              onClick={() => run({ type: "direction.agree", month, channel, agree: !ticked })}
            >
              {ticked ? "Remove my tick" : "I agree"}
            </button>
          )}
          <button type="button" className={btnQuiet} onClick={() => setEditing(true)}>
            {line ? "Change the line" : "Write the line"}
          </button>
          {tickers.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label="Ticked by">
              {tickers.map((person) => (
                <li
                  key={person}
                  className="inline-flex items-center gap-1 rounded-full bg-[#E8E4DE] px-2.5 py-1 text-[12px] font-medium text-[#1A2B4A]"
                >
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                  {person}
                  <span className="font-mono text-[10px] text-[#6B6560]">{SIDE_LABEL[SIDE_OF[person]]}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
