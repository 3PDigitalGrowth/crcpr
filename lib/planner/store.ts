import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { seedState } from "./seed";
import type { PlannerState } from "./model";

/**
 * Storage for the forward planner.
 *
 * Production: one file (planner.enc.json) on the `planner-data` branch of
 * the site repo, read and written through the GitHub contents API. The repo
 * is public, so the plan is encrypted with AES-256-GCM before it is
 * committed; the key is PLANNER_KEY (32 bytes, base64) in the Vercel
 * environment and never in the repo. Commit messages are generic for the
 * same reason. Every save is still a commit, and the who-did-what history
 * lives inside the encrypted file. The branch never deploys (vercel.json
 * disables it), so planner saves do not rebuild the website.
 *
 * Local development without GITHUB_TOKEN reads and writes plain JSON at
 * .planner-data/planner.json in the working tree.
 *
 * Same rule as lib/admin/github.ts: every filesystem branch is guarded
 * INLINE by `process.env.NODE_ENV !== "production"` so webpack drops it from
 * the production bundle and Vercel's file tracer never sees a cwd-rooted fs
 * read. Do not move the guards into a helper.
 */

const REPO = process.env.GITHUB_REPO ?? "3PDigitalGrowth/crcpr";
const DATA_BRANCH = process.env.PLANNER_BRANCH ?? "planner-data";
const BASE_BRANCH = process.env.GITHUB_BRANCH ?? "main";
const FILE = "planner.enc.json";
const LOCAL_FILE = "planner.json";
const API = "https://api.github.com";

export class PlannerStoreError extends Error {}

function cipherKey(): Buffer {
  const raw = process.env.PLANNER_KEY;
  const key = raw ? Buffer.from(raw, "base64") : null;
  if (!key || key.length !== 32) {
    throw new PlannerStoreError("The planner cannot open its data (PLANNER_KEY is missing or invalid).");
  }
  return key;
}

function seal(plain: string): string {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", cipherKey(), iv);
  const data = Buffer.concat([cipher.update(plain, "utf-8"), cipher.final()]);
  return `${JSON.stringify({
    planner: 1,
    alg: "aes-256-gcm",
    iv: iv.toString("base64"),
    tag: cipher.getAuthTag().toString("base64"),
    data: data.toString("base64"),
  })}\n`;
}

function unseal(stored: string): string {
  const box = JSON.parse(stored);
  const decipher = crypto.createDecipheriv("aes-256-gcm", cipherKey(), Buffer.from(box.iv, "base64"));
  decipher.setAuthTag(Buffer.from(box.tag, "base64"));
  return Buffer.concat([decipher.update(Buffer.from(box.data, "base64")), decipher.final()]).toString("utf-8");
}

function token(): string | null {
  return process.env.GITHUB_TOKEN ?? null;
}

function headers(): HeadersInit {
  return {
    Authorization: `Bearer ${token()}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

function normalise(raw: unknown): PlannerState {
  const seed = seedState();
  if (!raw || typeof raw !== "object") return seed;
  const data = raw as Partial<PlannerState>;
  return {
    version: 1,
    months: data.months ?? seed.months,
    items: Array.isArray(data.items) ? data.items : seed.items,
    rules: Array.isArray(data.rules) ? data.rules : seed.rules,
    settings: { ...seed.settings, ...(data.settings ?? {}) },
    updated: data.updated ?? null,
  };
}

interface Loaded {
  state: PlannerState;
  sha: string | null;
}

export async function readPlanner(): Promise<Loaded> {
  if (process.env.NODE_ENV !== "production" && !token()) {
    const abs = path.join(process.cwd(), ".planner-data", LOCAL_FILE);
    if (!fs.existsSync(abs)) return { state: seedState(), sha: null };
    return { state: normalise(JSON.parse(fs.readFileSync(abs, "utf-8"))), sha: null };
  }
  if (!token()) {
    throw new PlannerStoreError("The planner cannot reach its storage (GITHUB_TOKEN is missing).");
  }
  const res = await fetch(`${API}/repos/${REPO}/contents/${FILE}?ref=${DATA_BRANCH}`, {
    headers: headers(),
    cache: "no-store",
  });
  if (res.status === 404) return { state: seedState(), sha: null };
  if (!res.ok) throw new PlannerStoreError(`The planner could not load (GitHub ${res.status}).`);
  const data = await res.json();
  const stored = Buffer.from(data.content, "base64").toString("utf-8");
  let plain: string;
  try {
    plain = unseal(stored);
  } catch (err) {
    if (err instanceof PlannerStoreError) throw err;
    throw new PlannerStoreError("The planner data could not be decrypted. Check PLANNER_KEY.");
  }
  return { state: normalise(JSON.parse(plain)), sha: data.sha };
}

type WriteResult = "ok" | "conflict" | "no-branch";

async function writePlanner(state: PlannerState, sha: string | null): Promise<WriteResult> {
  const body = `${JSON.stringify(state, null, 2)}\n`;
  if (process.env.NODE_ENV !== "production" && !token()) {
    const abs = path.join(process.cwd(), ".planner-data", LOCAL_FILE);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, body);
    return "ok";
  }
  const res = await fetch(`${API}/repos/${REPO}/contents/${FILE}`, {
    method: "PUT",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({
      // Public repo: never put plan content in the commit message.
      message: "Planner update",
      content: Buffer.from(seal(body)).toString("base64"),
      branch: DATA_BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });
  if (res.ok) return "ok";
  // 409 = sha moved (someone saved first); 422 can mean either a stale sha or
  // a missing branch, so look at the message.
  const text = await res.text();
  if (res.status === 404 || /branch/i.test(text)) return "no-branch";
  if (res.status === 409 || res.status === 422) return "conflict";
  throw new PlannerStoreError(`The planner could not save (GitHub ${res.status}).`);
}

/** Creates the data branch from the tip of main if it has gone missing. */
async function createDataBranch(): Promise<void> {
  const ref = await fetch(`${API}/repos/${REPO}/git/ref/heads/${BASE_BRANCH}`, {
    headers: headers(),
    cache: "no-store",
  });
  if (!ref.ok) throw new PlannerStoreError("The planner storage branch is missing and could not be recreated.");
  const { object } = await ref.json();
  const res = await fetch(`${API}/repos/${REPO}/git/refs`, {
    method: "POST",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({ ref: `refs/heads/${DATA_BRANCH}`, sha: object.sha }),
  });
  if (!res.ok && res.status !== 422) {
    throw new PlannerStoreError("The planner storage branch is missing and could not be recreated.");
  }
}

/**
 * Read, change, write, retrying when someone else saved in between. The
 * mutator re-runs against the fresh copy each time, so two people saving at
 * once both land.
 */
export async function mutatePlanner(mutate: (state: PlannerState) => unknown): Promise<PlannerState> {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const { state, sha } = await readPlanner();
    mutate(state);
    const result = await writePlanner(state, sha);
    if (result === "ok") return state;
    if (result === "no-branch") await createDataBranch();
    await new Promise((resolve) => setTimeout(resolve, 200 * (attempt + 1)));
  }
  throw new PlannerStoreError("Someone else saved at the same moment. Try once more.");
}
