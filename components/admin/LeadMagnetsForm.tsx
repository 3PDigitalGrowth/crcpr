"use client";

import { useState, useTransition } from "react";
import { leadMagnetFields } from "@/config/adminSections";
import {
  saveLeadMagnetsAction,
  type ActionResult,
} from "@/app/admin/actions";

const inputClass =
  "w-full rounded border border-brand-border px-3 py-2 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-navy/30";
const labelClass = "block text-navy text-sm font-medium mb-1";

type MagnetValues = Record<string, Record<string, unknown>>;

export function LeadMagnetsForm({
  initialValues,
}: {
  initialValues: MagnetValues;
}) {
  const [values, setValues] = useState<MagnetValues>(initialValues);
  const [result, setResult] = useState<ActionResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const set = (key: string, fieldKey: string, value: unknown) => {
    setValues((prev) => ({
      ...prev,
      [key]: { ...prev[key], [fieldKey]: value },
    }));
    setResult(null);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        startTransition(async () => {
          setResult(await saveLeadMagnetsAction(values));
        });
      }}
      className="space-y-4 max-w-2xl"
    >
      {Object.entries(values).map(([key, magnet]) => (
        <details
          key={key}
          className="bg-white border border-brand-border rounded-lg"
        >
          <summary className="cursor-pointer px-4 py-3 font-heading font-black text-navy text-sm flex items-center justify-between gap-3">
            <span className="truncate">{String(magnet.title ?? key)}</span>
            <span
              className={`shrink-0 text-xs font-sans font-medium rounded px-2 py-0.5 ${
                magnet.available
                  ? "bg-green-50 text-green-800"
                  : "bg-gray-100 text-charcoal-mid"
              }`}
            >
              {magnet.available ? "Live" : "Off"}
            </span>
          </summary>
          <div className="px-4 pb-4 space-y-3 border-t border-brand-border pt-3">
            {leadMagnetFields.map((field) => (
              <div key={field.key}>
                <label className={labelClass}>{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    className={inputClass}
                    rows={field.rows ?? 4}
                    value={String(magnet[field.key] ?? "")}
                    onChange={(event) => set(key, field.key, event.target.value)}
                  />
                ) : field.type === "boolean" ? (
                  <label className="inline-flex items-center gap-2 text-sm text-charcoal">
                    <input
                      type="checkbox"
                      checked={Boolean(magnet[field.key])}
                      onChange={(event) => set(key, field.key, event.target.checked)}
                      className="size-4 accent-navy"
                    />
                    Shown on the site
                  </label>
                ) : (
                  <input
                    type="text"
                    className={inputClass}
                    value={String(magnet[field.key] ?? "")}
                    onChange={(event) => set(key, field.key, event.target.value)}
                  />
                )}
                {field.help && (
                  <p className="text-charcoal-mid text-xs mt-1">{field.help}</p>
                )}
              </div>
            ))}
          </div>
        </details>
      ))}

      {result && (
        <p
          role="status"
          className={`text-sm rounded border px-4 py-3 ${
            result.ok
              ? "text-green-800 bg-green-50 border-green-200"
              : "text-red-800 bg-red-50 border-red-200"
          }`}
        >
          {result.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-navy text-white rounded px-6 py-2.5 text-sm font-medium hover:bg-navy/90 disabled:opacity-60"
      >
        {isPending ? "Saving..." : "Save and publish"}
      </button>
    </form>
  );
}
