"use server";

import { redirect } from "next/navigation";
import {
  adminConfigured,
  createSession,
  isAuthenticated,
  verifyPassword,
} from "@/lib/admin/auth";
import { applyOp, PEOPLE, PlannerRuleError, type Op, type Person, type PlannerState } from "@/lib/planner/model";
import { mutatePlanner, PlannerStoreError, readPlanner } from "@/lib/planner/store";
import { clearWho, getWho, setWho } from "@/lib/planner/session";

export interface LoginResult {
  ok: boolean;
  message: string;
}

function safeNext(value: FormDataEntryValue | null): string {
  const next = typeof value === "string" ? value : "";
  return next.startsWith("/plan") && !next.startsWith("//") ? next : "/plan";
}

export async function plannerLoginAction(
  _prev: LoginResult | null,
  formData: FormData
): Promise<LoginResult> {
  if (!adminConfigured()) {
    return { ok: false, message: "The planner is not set up yet (ADMIN_PASSWORD is missing). Contact 3P Digital." };
  }
  const password = String(formData.get("password") ?? "");
  if (!verifyPassword(password)) {
    await new Promise((resolve) => setTimeout(resolve, 750));
    return { ok: false, message: "That password is not right. It is the same one as the website editor." };
  }
  createSession();
  redirect(safeNext(formData.get("next")));
}

export async function chooseWhoAction(formData: FormData): Promise<void> {
  if (!isAuthenticated()) redirect("/plan/login");
  const person = String(formData.get("who") ?? "") as Person;
  if (PEOPLE.includes(person)) setWho(person);
  redirect(safeNext(formData.get("next")));
}

export async function switchWhoAction(formData: FormData): Promise<void> {
  clearWho();
  redirect(safeNext(formData.get("next")));
}

export type ApplyResult =
  | { ok: true; state: PlannerState; message: string }
  | { ok: false; message: string; state?: PlannerState };

export async function applyPlannerOp(op: Op): Promise<ApplyResult> {
  if (!isAuthenticated()) {
    return { ok: false, message: "Your session has ended. Refresh the page and log in again." };
  }
  const who = getWho();
  if (!who) return { ok: false, message: "Pick your name first. Refresh the page." };
  try {
    const state = await mutatePlanner((draft) => applyOp(draft, op, who, new Date()));
    return { ok: true, state, message: "Saved" };
  } catch (err) {
    if (err instanceof PlannerRuleError || err instanceof PlannerStoreError) {
      const fresh = await readPlanner().catch(() => null);
      return { ok: false, message: err.message, state: fresh?.state };
    }
    console.error("[planner] save failed:", err);
    return { ok: false, message: "That did not save. Try again, or tell 3P Digital if it keeps happening." };
  }
}

export async function refreshPlanner(): Promise<PlannerState | null> {
  if (!isAuthenticated()) return null;
  try {
    return (await readPlanner()).state;
  } catch {
    return null;
  }
}
