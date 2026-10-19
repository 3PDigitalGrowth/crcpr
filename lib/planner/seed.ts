import type { PlannerState } from "./model";

/**
 * Empty fallback, used only if the encrypted data file is missing. The real
 * starting plan (3P's views, proposed pieces, the red lines) was written
 * straight into the encrypted planner.enc.json on the planner-data branch,
 * because this repo is public and plan content must not appear in it.
 */
export function seedState(): PlannerState {
  return {
    version: 1,
    months: {},
    items: [],
    rules: [],
    settings: { mppApprover: "Barbara", silentApproval: "undecided", changed: null },
    updated: null,
  };
}
