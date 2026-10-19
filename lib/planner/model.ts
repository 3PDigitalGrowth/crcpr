/**
 * Forward planner: the shared monthly plan for CRC Public Relations and
 * My PR Partner. CRC and 3P Digital each put in their direction per channel,
 * agree one line, and every piece going out sits on the month calendar with
 * its sign-off status.
 *
 * Everything here is pure (no I/O) so the same rules run in server actions
 * and in the browser. Permissions are enforced server-side in applyOp.
 */

/* ------------------------------ vocabulary ------------------------------ */

export const PEOPLE = ["Lyall", "Barbara", "Alex", "Hannah"] as const;
export type Person = (typeof PEOPLE)[number];
export type Side = "crc" | "tp";

export const SIDE_OF: Record<Person, Side> = {
  Lyall: "crc",
  Barbara: "crc",
  Alex: "tp",
  Hannah: "tp",
};

export const SIDE_LABEL: Record<Side, string> = {
  crc: "CRC",
  tp: "3P Digital",
};

export const CHANNELS = ["blog", "cold", "nurture", "social"] as const;
export type ChannelId = (typeof CHANNELS)[number];

export interface ChannelInfo {
  label: string;
  blurb: string;
  colour: string;
  crcPrompt: string;
  tpPrompt: string;
  briefTemplate: string;
}

export const CHANNEL: Record<ChannelId, ChannelInfo> = {
  blog: {
    label: "Blog articles",
    blurb: "Articles on the CRC and My PR Partner websites.",
    colour: "#1A2B4A",
    crcPrompt:
      "Topics you know matter this month, questions clients keep asking, anything to steer clear of.",
    tpPrompt: "What people are searching for, proposed angles, what is ready to go.",
    briefTemplate:
      "Headline:\nThe search it answers:\nThe one point that matters:\nDownload or call to action:\nByline:",
  },
  cold: {
    label: "Cold email",
    blurb: "First contact with people who do not know us yet.",
    colour: "#9A7424",
    crcPrompt:
      "Who should hear from us this month, and anything happening in their world right now.",
    tpPrompt: "Lists, sequences ready to send, what the last sends told us.",
    briefTemplate:
      "Subject line:\nWho receives it:\nThe one point that matters:\nCall to action:\nSent as:",
  },
  nurture: {
    label: "Email nurture",
    blurb: "Follow-up emails to people already on our lists.",
    colour: "#058A94",
    crcPrompt: "What our existing contacts should hear next: courses, events, news, wins.",
    tpPrompt: "Which lists, which sequence, what each email is for.",
    briefTemplate:
      "Subject line:\nWhich list:\nThe one point that matters:\nCall to action:\nSent as:",
  },
  social: {
    label: "Social",
    blurb: "LinkedIn and social posts: the objective for the month and what we share.",
    colour: "#7B4B6A",
    crcPrompt:
      "The objective for the month, wins or media appearances worth sharing, anything off limits.",
    tpPrompt: "Post plan, which articles get shared, where each post goes.",
    briefTemplate:
      "Post idea:\nWhere it goes (company page or Lyall):\nThe one point that matters:\nLink:",
  },
};

export const AUDIENCES = ["crc", "masterclass", "schools", "associations", "business"] as const;
export type AudienceId = (typeof AUDIENCES)[number];
export type Brand = "crc" | "mpp";

export const AUDIENCE: Record<AudienceId, { label: string; long: string; brand: Brand }> = {
  crc: {
    label: "CRC clients",
    long: "CRC Public Relations: CEOs, directors and executives",
    brand: "crc",
  },
  masterclass: {
    label: "Masterclass",
    long: "My PR Partner: Crisis Masterclass",
    brand: "mpp",
  },
  schools: { label: "Schools", long: "My PR Partner: Schools program", brand: "mpp" },
  associations: {
    label: "Associations",
    long: "My PR Partner: Associations program",
    brand: "mpp",
  },
  business: { label: "Business", long: "My PR Partner: Business program", brand: "mpp" },
};

export const BRAND_LABEL: Record<Brand, string> = {
  crc: "CRC",
  mpp: "My PR Partner",
};

export const STATUSES = ["idea", "drafting", "with_crc", "cleared", "out", "pulled"] as const;
export type Status = (typeof STATUSES)[number];

export const STATUS_LABEL: Record<Status, string> = {
  idea: "Idea",
  drafting: "Drafting",
  with_crc: "With CRC",
  cleared: "Cleared",
  out: "Out",
  pulled: "Pulled",
};

export const STATUS_MEANING: Record<Status, string> = {
  idea: "Proposed. Nothing happens until CRC says go ahead.",
  drafting: "CRC said go ahead. 3P is writing it.",
  with_crc: "Written and checked against the ground rules. Waiting on CRC.",
  cleared: "Signed off by CRC. Ready to go out on its date.",
  out: "Published or sent.",
  pulled: "Stopped. It will not go out.",
};

/* -------------------------------- state -------------------------------- */

export interface Stamp {
  by: Person;
  at: string; // ISO timestamp (UTC)
}

export interface Note extends Stamp {
  text: string;
}

export interface Direction {
  crc: Note | null;
  tp: Note | null;
  line: Note | null;
  agreed: Partial<Record<Person, string>>;
  audiences: AudienceId[];
}

export interface MonthPlan {
  directions: Partial<Record<ChannelId, Direction>>;
}

export interface Comment extends Stamp {
  id: string;
  text: string;
  kind: "comment" | "changes";
}

export interface LogEntry extends Stamp {
  what: string;
}

export interface Item {
  id: string;
  title: string;
  channel: ChannelId;
  audience: AudienceId;
  date: string; // YYYY-MM-DD, Brisbane calendar date it goes out
  status: Status;
  brief: string;
  link: string;
  created: Stamp;
  updated: Stamp;
  sentToCrc: Stamp | null;
  cleared: (Stamp & { silent?: boolean }) | null;
  comments: Comment[];
  log: LogEntry[];
}

export interface RedLine extends Stamp {
  id: string;
  text: string;
}

export type SilentApproval = "undecided" | "off" | "five-days";

export interface Settings {
  mppApprover: "Barbara" | "Lyall";
  silentApproval: SilentApproval;
  changed: Stamp | null;
}

export interface PlannerState {
  version: 1;
  months: Record<string, MonthPlan>;
  items: Item[];
  rules: RedLine[];
  settings: Settings;
  updated: Stamp | null;
}

export function emptyDirection(): Direction {
  return { crc: null, tp: null, line: null, agreed: {}, audiences: [] };
}

export function getDirection(state: PlannerState, month: string, channel: ChannelId): Direction {
  return state.months[month]?.directions[channel] ?? emptyDirection();
}

/** Agreed means at least one person from each side has ticked the current line. */
export function isAgreed(d: Direction): boolean {
  if (!d.line?.text.trim()) return false;
  const people = Object.keys(d.agreed) as Person[];
  return people.some((p) => SIDE_OF[p] === "crc") && people.some((p) => SIDE_OF[p] === "tp");
}

export function brandOf(item: Pick<Item, "audience">): Brand {
  return AUDIENCE[item.audience].brand;
}

/* --------------------------------- dates -------------------------------- */

const TZ = "Australia/Brisbane";

export function brisbaneDate(at: Date = new Date()): string {
  // en-CA formats as YYYY-MM-DD
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(at);
}

export function isYmd(s: unknown): s is string {
  return typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));
}

export function isMonthKey(s: unknown): s is string {
  return typeof s === "string" && /^20\d{2}-(0[1-9]|1[0-2])$/.test(s);
}

function toUtc(ymd: string): Date {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function fromUtc(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function addDays(ymd: string, n: number): string {
  const d = toUtc(ymd);
  d.setUTCDate(d.getUTCDate() + n);
  return fromUtc(d);
}

/** Monday = 0 ... Sunday = 6 */
export function weekdayIndex(ymd: string): number {
  return (toUtc(ymd).getUTCDay() + 6) % 7;
}

// Queensland public holidays inside the planning window.
const HOLIDAYS = new Set([
  "2026-12-25",
  "2026-12-28",
  "2027-01-01",
  "2027-01-26",
  "2027-03-26",
  "2027-03-29",
]);

export function isBusinessDay(ymd: string): boolean {
  return weekdayIndex(ymd) < 5 && !HOLIDAYS.has(ymd);
}

export function addBusinessDays(ymd: string, n: number): string {
  let cursor = ymd;
  let left = n;
  while (left > 0) {
    cursor = addDays(cursor, 1);
    if (isBusinessDay(cursor)) left -= 1;
  }
  return cursor;
}

export function monthOf(ymd: string): string {
  return ymd.slice(0, 7);
}

export function shiftMonth(key: string, n: number): string {
  const [y, m] = key.split("-").map(Number);
  const d = new Date(Date.UTC(y, m - 1 + n, 1));
  return fromUtc(d).slice(0, 7);
}

/** Weeks (Monday start) covering the month; each week is 7 YYYY-MM-DD strings. */
export function monthWeeks(key: string): string[][] {
  const first = `${key}-01`;
  let cursor = addDays(first, -weekdayIndex(first));
  const weeks: string[][] = [];
  while (weeks.length === 0 || monthOf(cursor) === key) {
    const week: string[] = [];
    for (let i = 0; i < 7; i += 1) {
      week.push(cursor);
      cursor = addDays(cursor, 1);
    }
    weeks.push(week);
  }
  return weeks;
}

export function monthLabel(key: string, style: "long" | "short" = "long"): string {
  return new Intl.DateTimeFormat("en-AU", {
    month: style,
    year: "numeric",
    timeZone: "UTC",
  }).format(toUtc(`${key}-01`));
}

export function monthName(key: string): string {
  return new Intl.DateTimeFormat("en-AU", { month: "long", timeZone: "UTC" }).format(
    toUtc(`${key}-01`)
  );
}

export function formatDay(ymd: string, withWeekday = true): string {
  return new Intl.DateTimeFormat("en-AU", {
    ...(withWeekday ? { weekday: "short" as const } : {}),
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(toUtc(ymd));
}

export function formatStamp(iso: string): string {
  const d = new Date(iso);
  const day = new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    timeZone: TZ,
  }).format(d);
  const time = new Intl.DateTimeFormat("en-AU", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: TZ,
  })
    .format(d)
    .replace(/\s/g, "")
    .toLowerCase();
  return `${day}, ${time}`;
}

/* ------------------------------ sign-off rules ------------------------------ */

/** Who can say "go ahead" and "clear" on an item. CRC items are Lyall's alone. */
export function approversFor(item: Pick<Item, "audience">, settings: Settings): Person[] {
  if (brandOf(item) === "crc") return ["Lyall"];
  return settings.mppApprover === "Lyall" ? ["Lyall"] : ["Barbara", "Lyall"];
}

/** The date the five-day review window closes, when silent approval is on. */
export function reviewWindowCloses(item: Item, settings: Settings): string | null {
  if (settings.silentApproval !== "five-days") return null;
  if (brandOf(item) !== "mpp" || item.status !== "with_crc" || !item.sentToCrc) return null;
  return addBusinessDays(brisbaneDate(new Date(item.sentToCrc.at)), 5);
}

/**
 * The status to show. A My PR Partner piece left with CRC past its review
 * window counts as cleared on silence, but only once CRC has switched silent
 * approval on. CRC pieces never clear on silence.
 */
export function effectiveStatus(item: Item, settings: Settings, today: string): Status {
  const closes = reviewWindowCloses(item, settings);
  if (closes && today > closes) return "cleared";
  return item.status;
}

export type ItemAction = "go-ahead" | "send" | "clear" | "changes" | "out" | "pull" | "restore";

export const ACTION_LABEL: Record<ItemAction, string> = {
  "go-ahead": "Go ahead",
  send: "Send to CRC for sign-off",
  clear: "Clear for release",
  changes: "Ask for changes",
  out: "Mark as out",
  pull: "Pull it",
  restore: "Bring it back as an idea",
};

export function allowedActions(
  item: Item,
  who: Person,
  settings: Settings,
  today: string
): ItemAction[] {
  const side = SIDE_OF[who];
  const approver = approversFor(item, settings).includes(who);
  const status = effectiveStatus(item, settings, today);
  const actions: ItemAction[] = [];
  if (status === "idea" && approver) actions.push("go-ahead");
  if (status === "drafting" && side === "tp") actions.push("send");
  if (status === "with_crc" && approver) actions.push("clear");
  if (status === "with_crc" && side === "crc") actions.push("changes");
  if (status === "cleared" && side === "tp") actions.push("out");
  if (side === "crc" && status !== "out" && status !== "pulled") actions.push("pull");
  if (status === "pulled") actions.push("restore");
  return actions;
}

/* ---------------------------------- ops ---------------------------------- */

export interface ItemInput {
  id?: string;
  title: string;
  channel: ChannelId;
  audience: AudienceId;
  date: string;
  brief: string;
  link: string;
}

export type Op =
  | { type: "direction.note"; month: string; channel: ChannelId; text: string }
  | { type: "direction.line"; month: string; channel: ChannelId; text: string }
  | { type: "direction.agree"; month: string; channel: ChannelId; agree: boolean }
  | { type: "direction.audiences"; month: string; channel: ChannelId; audiences: AudienceId[] }
  | { type: "item.save"; item: ItemInput }
  | { type: "item.act"; id: string; action: ItemAction; note?: string; gateChecked?: boolean }
  | { type: "item.comment"; id: string; text: string }
  | { type: "item.delete"; id: string }
  | { type: "rule.add"; text: string }
  | { type: "rule.remove"; id: string }
  | { type: "settings.set"; mppApprover?: Settings["mppApprover"]; silentApproval?: SilentApproval };

export class PlannerRuleError extends Error {}

const LIMITS = { title: 160, text: 4000, line: 280, rule: 280, link: 600 };

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n/g, "\n").trim().slice(0, max);
}

function cleanLink(value: unknown): string {
  const link = clean(value, LIMITS.link);
  if (!link) return "";
  if (!/^https?:\/\//i.test(link)) {
    throw new PlannerRuleError("Links need to start with https://");
  }
  return link;
}

function newId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

function monthPlan(state: PlannerState, month: string): MonthPlan {
  if (!isMonthKey(month)) throw new PlannerRuleError("That month is not valid.");
  state.months[month] ??= { directions: {} };
  return state.months[month];
}

function direction(state: PlannerState, month: string, channel: ChannelId): Direction {
  if (!CHANNELS.includes(channel)) throw new PlannerRuleError("That channel is not valid.");
  const plan = monthPlan(state, month);
  plan.directions[channel] ??= emptyDirection();
  return plan.directions[channel] as Direction;
}

function findItem(state: PlannerState, id: string): Item {
  const item = state.items.find((i) => i.id === id);
  if (!item) throw new PlannerRuleError("That item is no longer in the planner. Refresh the page.");
  return item;
}

/**
 * Applies one change. Returns a short description used as the commit message.
 * Mutates `state`. Throws PlannerRuleError when the person is not allowed to
 * make the change or the input is invalid.
 */
export function applyOp(state: PlannerState, op: Op, who: Person, now: Date): string {
  const at = now.toISOString();
  const stamp: Stamp = { by: who, at };
  const side = SIDE_OF[who];
  const today = brisbaneDate(now);
  state.updated = stamp;

  switch (op.type) {
    case "direction.note": {
      const d = direction(state, op.month, op.channel);
      const text = clean(op.text, LIMITS.text);
      d[side] = text ? { text, ...stamp } : null;
      return `${who} updated the ${SIDE_LABEL[side]} view on ${CHANNEL[op.channel].label} (${monthLabel(op.month)})`;
    }
    case "direction.line": {
      const d = direction(state, op.month, op.channel);
      const text = clean(op.text, LIMITS.line);
      const changed = text !== (d.line?.text ?? "");
      d.line = text ? { text, ...stamp } : null;
      if (changed) d.agreed = text ? { [who]: at } : {};
      return `${who} set the agreed line for ${CHANNEL[op.channel].label} (${monthLabel(op.month)})`;
    }
    case "direction.agree": {
      const d = direction(state, op.month, op.channel);
      if (!d.line?.text) throw new PlannerRuleError("Write the line first, then agree to it.");
      if (op.agree) d.agreed[who] = at;
      else delete d.agreed[who];
      return `${who} ${op.agree ? "agreed to" : "withdrew agreement on"} the ${CHANNEL[op.channel].label} line (${monthLabel(op.month)})`;
    }
    case "direction.audiences": {
      const d = direction(state, op.month, op.channel);
      d.audiences = AUDIENCES.filter((a) => op.audiences.includes(a));
      return `${who} set who ${CHANNEL[op.channel].label} speaks to (${monthLabel(op.month)})`;
    }
    case "item.save": {
      const input = op.item;
      const title = clean(input.title, LIMITS.title);
      if (!title) throw new PlannerRuleError("Give it a working title.");
      if (!CHANNELS.includes(input.channel)) throw new PlannerRuleError("Pick a channel.");
      if (!AUDIENCES.includes(input.audience)) throw new PlannerRuleError("Pick who it is for.");
      if (!isYmd(input.date)) throw new PlannerRuleError("Pick the date it goes out.");
      const brief = clean(input.brief, LIMITS.text);
      const link = cleanLink(input.link);

      if (!input.id) {
        const item: Item = {
          id: newId("itm"),
          title,
          channel: input.channel,
          audience: input.audience,
          date: input.date,
          status: "idea",
          brief,
          link,
          created: stamp,
          updated: stamp,
          sentToCrc: null,
          cleared: null,
          comments: [],
          log: [{ what: "Added as an idea", ...stamp }],
        };
        state.items.push(item);
        return `${who} added "${title}" (${CHANNEL[item.channel].label}, ${formatDay(item.date)})`;
      }

      const item = findItem(state, input.id);
      const status = effectiveStatus(item, state.settings, today);
      if (status === "out") throw new PlannerRuleError("This one has already gone out, so it is locked.");
      const changes: string[] = [];
      if (item.title !== title) changes.push("title");
      if (item.brief !== brief) changes.push("brief");
      if (item.link !== link) changes.push("draft link");
      if (item.channel !== input.channel) changes.push("channel");
      if (item.audience !== input.audience) changes.push("audience");
      const contentChanged = changes.length > 0;
      if (item.date !== input.date) changes.push(`date to ${formatDay(input.date)}`);
      if (changes.length === 0) return `${who} saved "${title}" with no changes`;

      Object.assign(item, {
        title,
        brief,
        link,
        channel: input.channel,
        audience: input.audience,
        date: input.date,
        updated: stamp,
      });
      item.log.push({ what: `Changed ${changes.join(", ")}`, ...stamp });
      if (status === "cleared" && contentChanged) {
        item.status = "with_crc";
        item.cleared = null;
        item.sentToCrc = stamp;
        item.log.push({ what: "Changed after sign-off, so it went back to CRC", ...stamp });
      }
      return `${who} edited "${title}" (${changes.join(", ")})`;
    }
    case "item.act": {
      const item = findItem(state, op.id);
      if (!allowedActions(item, who, state.settings, today).includes(op.action)) {
        throw new PlannerRuleError(
          `${who} cannot ${ACTION_LABEL[op.action].toLowerCase()} on this one right now.`
        );
      }
      const note = clean(op.note, LIMITS.text);
      const current = effectiveStatus(item, state.settings, today);
      switch (op.action) {
        case "go-ahead":
          item.status = "drafting";
          item.log.push({ what: "Go ahead given", ...stamp });
          break;
        case "send":
          if (!op.gateChecked) {
            throw new PlannerRuleError("Tick the ground rules check before sending it to CRC.");
          }
          item.status = "with_crc";
          item.sentToCrc = stamp;
          item.log.push({ what: "Checked against the ground rules and sent to CRC", ...stamp });
          break;
        case "clear":
          item.status = "cleared";
          item.cleared = stamp;
          item.log.push({ what: "Cleared for release", ...stamp });
          break;
        case "changes":
          if (!note) throw new PlannerRuleError("Say what needs to change.");
          item.status = "drafting";
          item.comments.push({ id: newId("cmt"), text: note, kind: "changes", ...stamp });
          item.log.push({ what: "Asked for changes", ...stamp });
          break;
        case "out":
          if (current === "cleared" && item.status === "with_crc") {
            const closes = reviewWindowCloses(item, state.settings);
            item.cleared = { by: who, at, silent: true };
            item.log.push({
              what: `Cleared on silence (review window closed ${closes ? formatDay(closes) : ""})`,
              ...stamp,
            });
          }
          item.status = "out";
          item.log.push({ what: "Marked as out", ...stamp });
          break;
        case "pull":
          item.status = "pulled";
          if (note) item.comments.push({ id: newId("cmt"), text: note, kind: "comment", ...stamp });
          item.log.push({ what: "Pulled", ...stamp });
          break;
        case "restore":
          item.status = "idea";
          item.cleared = null;
          item.sentToCrc = null;
          item.log.push({ what: "Brought back as an idea", ...stamp });
          break;
      }
      item.updated = stamp;
      return `${who}: ${ACTION_LABEL[op.action]} on "${item.title}"`;
    }
    case "item.comment": {
      const item = findItem(state, op.id);
      const text = clean(op.text, LIMITS.text);
      if (!text) throw new PlannerRuleError("The comment is empty.");
      item.comments.push({ id: newId("cmt"), text, kind: "comment", ...stamp });
      item.updated = stamp;
      return `${who} commented on "${item.title}"`;
    }
    case "item.delete": {
      const item = findItem(state, op.id);
      if (item.status !== "idea" && item.status !== "pulled") {
        throw new PlannerRuleError("Only ideas and pulled items can be deleted. Pull it first.");
      }
      state.items = state.items.filter((i) => i.id !== op.id);
      return `${who} deleted "${item.title}"`;
    }
    case "rule.add": {
      const text = clean(op.text, LIMITS.rule);
      if (!text) throw new PlannerRuleError("The red line is empty.");
      state.rules.push({ id: newId("rul"), text, ...stamp });
      return `${who} added a red line`;
    }
    case "rule.remove": {
      const rule = state.rules.find((r) => r.id === op.id);
      if (!rule) return `${who} removed a red line that was already gone`;
      if (side !== "crc" && rule.by !== who) {
        throw new PlannerRuleError("Only CRC can remove a red line someone else added.");
      }
      state.rules = state.rules.filter((r) => r.id !== op.id);
      return `${who} removed a red line`;
    }
    case "settings.set": {
      if (side !== "crc") throw new PlannerRuleError("Approval rules are CRC's call.");
      if (op.mppApprover && ["Barbara", "Lyall"].includes(op.mppApprover)) {
        state.settings.mppApprover = op.mppApprover;
      }
      if (op.silentApproval && ["undecided", "off", "five-days"].includes(op.silentApproval)) {
        state.settings.silentApproval = op.silentApproval;
      }
      state.settings.changed = stamp;
      return `${who} changed the approval rules`;
    }
  }
}

/* ------------------------------- summaries ------------------------------- */

export interface Waiting {
  item: Item;
  status: Status;
  reason: string;
}

export function waitingLists(state: PlannerState, month: string, today: string) {
  const onCrc: Waiting[] = [];
  const onTp: Waiting[] = [];
  const inMonth = state.items
    .filter((i) => monthOf(i.date) === month)
    .sort((a, b) => a.date.localeCompare(b.date));
  for (const item of inMonth) {
    const status = effectiveStatus(item, state.settings, today);
    const who = approversFor(item, state.settings).join(" or ");
    if (status === "idea") onCrc.push({ item, status, reason: `Go ahead from ${who}` });
    if (status === "with_crc") {
      const closes = reviewWindowCloses(item, state.settings);
      onCrc.push({
        item,
        status,
        reason: closes
          ? `Sign-off from ${who}, or it clears on silence after ${formatDay(closes)}`
          : `Sign-off from ${who}`,
      });
    }
    if (status === "drafting") onTp.push({ item, status, reason: "3P to write and send for sign-off" });
    if (status === "cleared") onTp.push({ item, status, reason: `3P to send or publish on ${formatDay(item.date)}` });
  }
  return { onCrc, onTp };
}

export function monthCounts(state: PlannerState, month: string) {
  const agreed = CHANNELS.filter((c) => isAgreed(getDirection(state, month, c))).length;
  const items = state.items.filter((i) => monthOf(i.date) === month && i.status !== "pulled").length;
  return { agreed, items };
}
