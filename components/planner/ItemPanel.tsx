"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import {
  ACTION_LABEL,
  AUDIENCE,
  AUDIENCES,
  CHANNEL,
  CHANNELS,
  SIDE_LABEL,
  SIDE_OF,
  STATUS_MEANING,
  allowedActions,
  approversFor,
  brandOf,
  effectiveStatus,
  formatDay,
  formatStamp,
  reviewWindowCloses,
  type AudienceId,
  type ChannelId,
  type Item,
  type ItemAction,
  type Person,
  type PlannerState,
} from "@/lib/planner/model";
import {
  AutoTextarea,
  Stamp,
  btnPrimary,
  btnQuiet,
  btnSecondary,
  fieldClass,
  focusRing,
  labelClass,
  type Apply,
} from "./ui";

interface Draft {
  title: string;
  channel: ChannelId;
  audience: AudienceId;
  date: string;
  brief: string;
  link: string;
}

const PRIMARY: ItemAction[] = ["go-ahead", "send", "clear", "out"];

export function ItemPanel({
  state,
  item,
  newDate,
  who,
  today,
  apply,
  onClose,
}: {
  state: PlannerState;
  item: Item | null;
  newDate: string | null;
  who: Person;
  today: string;
  apply: Apply;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isNew = !item;
  const [draft, setDraft] = useState<Draft>(() =>
    item
      ? {
          title: item.title,
          channel: item.channel,
          audience: item.audience,
          date: item.date,
          brief: item.brief,
          link: item.link,
        }
      : {
          title: "",
          channel: "blog",
          audience: "masterclass",
          date: newDate ?? today,
          brief: CHANNEL.blog.briefTemplate,
          link: "",
        }
  );
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState<null | "changes" | "pull">(null);
  const [note, setNote] = useState("");
  const [gate, setGate] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const status = item ? effectiveStatus(item, state.settings, today) : "idea";
  const locked = status === "out";
  const dirty =
    isNew ||
    (item &&
      (draft.title !== item.title ||
        draft.channel !== item.channel ||
        draft.audience !== item.audience ||
        draft.date !== item.date ||
        draft.brief !== item.brief ||
        draft.link !== item.link));

  async function run(op: Parameters<Apply>[0]) {
    setBusy(true);
    const ok = await apply(op);
    setBusy(false);
    return ok;
  }

  async function save() {
    const ok = await run({ type: "item.save", item: { ...draft, id: item?.id } });
    if (ok && isNew) onClose();
  }

  async function act(action: ItemAction) {
    if (!item) return;
    if ((action === "changes" || action === "pull") && mode !== action) {
      setMode(action);
      setNote("");
      return;
    }
    const ok = await run({ type: "item.act", id: item.id, action, note, gateChecked: gate });
    if (ok) {
      setMode(null);
      setNote("");
      setGate(false);
    }
  }

  function changeChannel(channel: ChannelId) {
    setDraft((d) => {
      const untouched = d.brief.trim() === "" || d.brief === CHANNEL[d.channel].briefTemplate;
      return { ...d, channel, brief: untouched ? CHANNEL[channel].briefTemplate : d.brief };
    });
  }

  const actions = item ? allowedActions(item, who, state.settings, today) : [];
  const approvers = approversFor({ audience: draft.audience }, state.settings);
  const brand = brandOf({ audience: draft.audience });
  const closes = item ? reviewWindowCloses(item, state.settings) : null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="item-title-label"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current?.close();
      }}
      className="m-0 ml-auto h-[100dvh] max-h-none w-full max-w-[620px] overflow-y-auto bg-[#F5F2EC] p-0 text-[#3D3D3D] shadow-[0_0_60px_rgba(26,43,74,0.25)] backdrop:bg-[#1A2B4A]/45"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-[#D9D3C9] bg-[#F5F2EC]/95 px-5 py-3 backdrop-blur sm:px-8">
        <div className="flex items-center gap-2">
          <Stamp status={status} size="md" />
          <span id="item-title-label" className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6B6560]">
            {isNew ? "New piece" : `${CHANNEL[draft.channel].label} · ${formatDay(draft.date)}`}
          </span>
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className={`rounded-full p-2 text-[#1A2B4A] hover:bg-[#E8E4DE] ${focusRing}`}
          aria-label="Close"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div className="px-5 py-6 sm:px-8 space-y-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void save();
          }}
          className="space-y-5"
        >
          <div>
            <label htmlFor="item-title" className={labelClass}>
              Working title
            </label>
            <AutoTextarea
              id="item-title"
              value={draft.title}
              disabled={locked}
              minRows={1}
              maxLength={160}
              required
              placeholder="What is it, in a few words"
              onChange={(e) => setDraft({ ...draft, title: e.target.value.replace(/\n/g, " ") })}
              className="font-heading !text-[26px] !leading-tight text-[#1A2B4A] !bg-transparent !border-0 !border-b !rounded-none !px-0 focus:!ring-0"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="item-channel" className={labelClass}>
                Channel
              </label>
              <select
                id="item-channel"
                className={fieldClass}
                value={draft.channel}
                disabled={locked}
                onChange={(e) => changeChannel(e.target.value as ChannelId)}
              >
                {CHANNELS.map((c) => (
                  <option key={c} value={c}>
                    {CHANNEL[c].label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="item-date" className={labelClass}>
                Goes out on
              </label>
              <input
                id="item-date"
                type="date"
                className={fieldClass}
                value={draft.date}
                disabled={locked}
                required
                onChange={(e) => setDraft({ ...draft, date: e.target.value })}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="item-audience" className={labelClass}>
                Who it is for (one program per piece)
              </label>
              <select
                id="item-audience"
                className={fieldClass}
                value={draft.audience}
                disabled={locked}
                onChange={(e) => setDraft({ ...draft, audience: e.target.value as AudienceId })}
              >
                {AUDIENCES.map((a) => (
                  <option key={a} value={a}>
                    {AUDIENCE[a].long}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="item-brief" className={labelClass}>
              The brief
            </label>
            <AutoTextarea
              id="item-brief"
              value={draft.brief}
              disabled={locked}
              minRows={5}
              onChange={(e) => setDraft({ ...draft, brief: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="item-link" className={labelClass}>
              Link to the draft (optional)
            </label>
            <div className="flex gap-2">
              <input
                id="item-link"
                type="url"
                inputMode="url"
                placeholder="https://"
                className={fieldClass}
                value={draft.link}
                disabled={locked}
                onChange={(e) => setDraft({ ...draft, link: e.target.value })}
              />
              {item?.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnSecondary} shrink-0`}
                  aria-label="Open the draft in a new tab"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  Open
                </a>
              )}
            </div>
          </div>

          {!locked && (
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className={btnPrimary} disabled={busy || !dirty || !draft.title.trim()}>
                {busy ? "Saving..." : isNew ? "Add to the planner" : "Save changes"}
              </button>
              {!isNew && status === "cleared" && (
                <p className="text-[12.5px] text-[#6B6560]">
                  Changing the wording sends it back to CRC for sign-off. Moving the date does not.
                </p>
              )}
              {isNew && (
                <p className="text-[12.5px] text-[#6B6560]">It starts as an idea. Nothing happens until CRC says go ahead.</p>
              )}
            </div>
          )}
        </form>

        {item && (
          <section aria-label="Sign-off" className="rounded-2xl border border-[#D9D3C9] bg-[#FAFAF8] p-5">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#6B6560]">Sign-off</p>
            <p className="mt-2 text-[15px] leading-relaxed text-[#2C2C2C]">{STATUS_MEANING[status]}</p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#6B6560]">
              {brand === "crc"
                ? "Lyall signs this one off. CRC pieces never go out on silence."
                : `${approvers.join(" or ")} signs this one off. ${
                    state.settings.silentApproval === "five-days"
                      ? closes
                        ? `If nobody flags it, it clears on silence after ${formatDay(closes)}.`
                        : "Once it reaches CRC, it clears on silence after five business days unless someone flags it."
                      : state.settings.silentApproval === "off"
                      ? "Nothing goes out without a sign-off."
                      : "Whether it can clear on silence is not decided yet (see Ground rules)."
                  }`}
            </p>
            {item.cleared && (status === "cleared" || status === "out") && (
              <p className="mt-2 font-mono text-[11px] text-[#1A2B4A]">
                {item.cleared.silent ? "Cleared on silence" : `Cleared by ${item.cleared.by}`}, {formatStamp(item.cleared.at)}
              </p>
            )}

            {actions.length > 0 ? (
              <div className="mt-4 space-y-3">
                {actions.includes("send") && (
                  <label className="flex items-start gap-2.5 text-[14px] leading-snug">
                    <input
                      type="checkbox"
                      checked={gate}
                      onChange={(e) => setGate(e.target.checked)}
                      className="mt-0.5 h-4 w-4 accent-[#1A2B4A]"
                    />
                    I&apos;ve checked it against every red line in the ground rules.
                  </label>
                )}
                {mode && (
                  <div>
                    <label htmlFor="act-note" className={labelClass}>
                      {mode === "changes" ? "What needs to change?" : "Why is it being pulled? (optional)"}
                    </label>
                    <AutoTextarea id="act-note" value={note} minRows={3} onChange={(e) => setNote(e.target.value)} />
                  </div>
                )}
                <div className="flex flex-wrap gap-2.5">
                  {actions.map((action) => (
                    <button
                      key={action}
                      type="button"
                      disabled={busy || (action === "send" && !gate) || (mode === "changes" && action === "changes" && !note.trim())}
                      onClick={() => act(action)}
                      className={PRIMARY.includes(action) ? btnPrimary : btnSecondary}
                    >
                      {mode === action
                        ? action === "changes"
                          ? "Send it back to 3P"
                          : "Pull it now"
                        : ACTION_LABEL[action]}
                    </button>
                  ))}
                  {mode && (
                    <button type="button" className={btnQuiet} onClick={() => setMode(null)}>
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <p className="mt-3 font-mono text-[11.5px] text-[#9A7424]">{waitingOn(status, approvers)}</p>
            )}
          </section>
        )}

        {item && (
          <section aria-label="Conversation">
            <p className={labelClass}>Conversation</p>
            {item.comments.length === 0 ? (
              <p className="text-[14px] text-[#8A8480]">No comments yet.</p>
            ) : (
              <ul className="space-y-3">
                {item.comments.map((c) => (
                  <li
                    key={c.id}
                    className={`rounded-xl border-l-2 bg-[#FAFAF8] px-4 py-3 ${
                      SIDE_OF[c.by] === "crc" ? "border-[#1A2B4A]" : "border-[#C9A84C]"
                    }`}
                  >
                    <p className="font-mono text-[10.5px] text-[#6B6560]">
                      {c.by} · {SIDE_LABEL[SIDE_OF[c.by]]} · {formatStamp(c.at)}
                      {c.kind === "changes" && <span className="ml-2 text-[#9B2C2C]">CHANGES ASKED</span>}
                    </p>
                    <p className="mt-1 whitespace-pre-line text-[14.5px] leading-relaxed text-[#2C2C2C]">{c.text}</p>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-3">
              <label htmlFor="new-comment" className="sr-only">
                Add a comment
              </label>
              <AutoTextarea
                id="new-comment"
                value={comment}
                minRows={2}
                placeholder="Add a comment"
                onChange={(e) => setComment(e.target.value)}
              />
              {comment.trim() && (
                <button
                  type="button"
                  className={`${btnPrimary} mt-2`}
                  disabled={busy}
                  onClick={async () => {
                    if (await run({ type: "item.comment", id: item.id, text: comment })) setComment("");
                  }}
                >
                  Post comment
                </button>
              )}
            </div>
          </section>
        )}

        {item && (
          <section aria-label="History" className="pb-6">
            <p className={labelClass}>History</p>
            <ol className="space-y-1.5 border-l border-[#D9D3C9] pl-4">
              {[...item.log].reverse().map((entry, i) => (
                <li key={`${entry.at}-${i}`} className="text-[13px] leading-snug">
                  <span className="text-[#2C2C2C]">{entry.what}</span>
                  <span className="font-mono text-[10.5px] text-[#8A8480]">
                    {" "}
                    · {entry.by}, {formatStamp(entry.at)}
                  </span>
                </li>
              ))}
            </ol>
            {(item.status === "idea" || item.status === "pulled") && (
              <button
                type="button"
                className={`${btnQuiet} mt-5 text-[#9B2C2C]`}
                disabled={busy}
                onClick={async () => {
                  if (!window.confirm(`Delete "${item.title}" from the planner?`)) return;
                  if (await run({ type: "item.delete", id: item.id })) onClose();
                }}
              >
                Delete this {item.status === "idea" ? "idea" : "piece"}
              </button>
            )}
          </section>
        )}
      </div>
    </dialog>
  );
}

function waitingOn(status: string, approvers: Person[]): string {
  switch (status) {
    case "idea":
      return `Waiting on ${approvers.join(" or ")} to say go ahead.`;
    case "drafting":
      return "With 3P. It comes back here for sign-off.";
    case "with_crc":
      return `Waiting on ${approvers.join(" or ")} to sign it off.`;
    case "cleared":
      return "Cleared. 3P sends or publishes it on the day.";
    case "out":
      return "Done. It has gone out.";
    default:
      return "Pulled. It will not go out.";
  }
}
