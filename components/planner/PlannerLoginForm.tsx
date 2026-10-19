"use client";

import { useFormState, useFormStatus } from "react-dom";
import { plannerLoginAction, type LoginResult } from "@/app/plan/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-[#1A2B4A] text-white px-6 py-3 text-sm font-semibold hover:bg-[#253D62] disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A2B4A]"
    >
      {pending ? "Opening..." : "Open the planner"}
    </button>
  );
}

export function PlannerLoginForm({ next }: { next: string }) {
  const [state, formAction] = useFormState<LoginResult | null, FormData>(plannerLoginAction, null);

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="next" value={next} />
      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-[#1A2B4A] mb-1.5">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full rounded-lg border border-[#C5BFB5] bg-[#FAFAF8] px-4 py-3 text-[15px] text-[#2C2C2C] focus:outline-none focus:ring-2 focus:ring-[#1A2B4A]/30"
        />
      </div>
      {state && !state.ok && (
        <p className="text-[#9B2C2C] text-sm" role="alert">
          {state.message}
        </p>
      )}
      <SubmitButton />
    </form>
  );
}
