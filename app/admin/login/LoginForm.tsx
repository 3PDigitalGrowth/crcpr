"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginAction, type ActionResult } from "../actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-navy text-white rounded px-4 py-2.5 text-sm font-medium hover:bg-navy/90 disabled:opacity-60"
    >
      {pending ? "Logging in..." : "Log in"}
    </button>
  );
}

export function LoginForm() {
  const [state, formAction] = useFormState<ActionResult | null, FormData>(
    loginAction,
    null
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="password"
          className="block text-navy text-sm font-medium mb-1"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full rounded border border-brand-border px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-navy/30"
        />
      </div>
      {state && !state.ok && (
        <p className="text-red-700 text-sm" role="alert">
          {state.message}
        </p>
      )}
      <SubmitButton />
    </form>
  );
}
