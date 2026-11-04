"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { submitEnquiry, submitLeadMagnet } from "@/lib/actions";
import { siteConfig } from "@/config/site";
import type { FormState, LeadMagnetKey } from "@/types";
import { DOWNLOADABLE } from "./data";

const idle: FormState = { status: "idle", message: "" };

export function LeadMagnetForm({
  magnet,
  layout = "stack",
  submitLabel = "Send me the checklist",
}: {
  magnet: LeadMagnetKey;
  layout?: "stack" | "row";
  submitLabel?: string;
}) {
  const [state, setState] = useState<FormState>(idle);
  const [busy, setBusy] = useState(false);
  const uid = useId();
  const meta = siteConfig.leadMagnets[magnet];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const result = await submitLeadMagnet(idle, new FormData(e.currentTarget));
    setBusy(false);
    setState(result);
  }

  if (state.status === "success") {
    return (
      <div className="flex flex-col gap-4" role="status">
        <p className="flex items-start gap-2 text-sm font-semibold text-fg">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
          {state.message}
        </p>
        {DOWNLOADABLE.includes(magnet) ? (
          <a href={`/downloads/${meta.fileName}`} className="btn btn-primary self-start" download>
            <Download className="h-4 w-4" aria-hidden />
            Download now
          </a>
        ) : null}
      </div>
    );
  }

  const row = layout === "row";
  return (
    <form onSubmit={onSubmit} className={row ? "grid gap-3 md:grid-cols-[1fr,1.3fr,auto]" : "flex flex-col gap-3"}>
      <input type="hidden" name="magnet" value={magnet} />
      <label className="sr-only" htmlFor={`${uid}-first`}>
        First name
      </label>
      <input id={`${uid}-first`} name="firstName" required autoComplete="given-name" placeholder="First name" className="field" />
      <label className="sr-only" htmlFor={`${uid}-email`}>
        Email
      </label>
      <input
        id={`${uid}-email`}
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Work email"
        className="field"
      />
      {!row ? (
        <>
          <label className="sr-only" htmlFor={`${uid}-org`}>
            Organisation
          </label>
          <input id={`${uid}-org`} name="organisation" autoComplete="organization" placeholder="Organisation" className="field" />
        </>
      ) : null}
      <button type="submit" disabled={busy} className="btn btn-primary disabled:opacity-60">
        {busy ? "Sending" : submitLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
      {state.status === "error" ? (
        <p className="text-sm font-semibold text-[#c2410c]" role="alert">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

export function EnquiryForm({
  defaultMessage = "",
  submitLabel = "Send message",
  disclaimer,
}: {
  defaultMessage?: string;
  submitLabel?: string;
  disclaimer?: string;
}) {
  const [state, setState] = useState<FormState>(idle);
  const [busy, setBusy] = useState(false);
  const uid = useId();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const result = await submitEnquiry(idle, new FormData(e.currentTarget));
    setBusy(false);
    setState(result);
  }

  if (state.status === "success") {
    return (
      <p className="flex items-start gap-2 text-base font-semibold text-fg" role="status">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
        {state.message}
      </p>
    );
  }

  const fields = [
    { name: "name", label: "Name", type: "text", auto: "name", required: true },
    { name: "organisation", label: "Organisation", type: "text", auto: "organization", required: false },
    { name: "email", label: "Email", type: "email", auto: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", auto: "tel", required: true },
  ] as const;

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name}>
          <label htmlFor={`${uid}-${f.name}`} className="mb-1.5 block text-xs font-semibold text-muted">
            {f.label}
            {f.required ? " *" : ""}
          </label>
          <input
            id={`${uid}-${f.name}`}
            name={f.name}
            type={f.type}
            autoComplete={f.auto}
            required={f.required}
            className="field"
          />
        </div>
      ))}
      <div className="sm:col-span-2">
        <label htmlFor={`${uid}-message`} className="mb-1.5 block text-xs font-semibold text-muted">
          Message
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          defaultValue={defaultMessage}
          className="field resize-y"
        />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={busy} className="btn btn-primary disabled:opacity-60">
          {busy ? "Sending" : submitLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
        {disclaimer ? <p className="text-xs text-muted">{disclaimer}</p> : null}
      </div>
      {state.status === "error" ? (
        <p className="text-sm font-semibold text-[#c2410c] sm:col-span-2" role="alert">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
