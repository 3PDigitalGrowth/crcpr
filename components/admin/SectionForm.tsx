"use client";

import { useState, useTransition } from "react";
import type {
  AdminField,
  AdminItemField,
  AdminSection,
} from "@/config/adminSections";
import { saveSectionAction, type ActionResult } from "@/app/admin/actions";

type Values = Record<string, unknown>;
type Item = Record<string, unknown>;

const inputClass =
  "w-full rounded border border-brand-border px-3 py-2 text-sm text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-navy/30";
const labelClass = "block text-navy text-sm font-medium mb-1";
const helpClass = "text-charcoal-mid text-xs mt-1";

export function SectionForm({
  section,
  initialValues,
}: {
  section: AdminSection;
  initialValues: Values;
}) {
  const [values, setValues] = useState<Values>(initialValues);
  const [result, setResult] = useState<ActionResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const set = (path: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [path]: value }));
    setResult(null);
  };

  const submit = () => {
    startTransition(async () => {
      setResult(await saveSectionAction(section.slug, values));
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
      className="space-y-6 max-w-2xl"
    >
      {section.fields.map((field) => (
        <FieldEditor
          key={field.path}
          field={field}
          value={values[field.path]}
          onChange={(value) => set(field.path, value)}
        />
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

function FieldEditor({
  field,
  value,
  onChange,
}: {
  field: AdminField;
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  if (field.type === "stringList") {
    return (
      <StringListEditor
        label={field.label}
        help={field.help}
        value={Array.isArray(value) ? value.map(String) : []}
        onChange={onChange}
      />
    );
  }
  if (field.type === "itemList") {
    return (
      <ItemListEditor
        field={field}
        value={Array.isArray(value) ? (value as Item[]) : []}
        onChange={onChange}
      />
    );
  }
  return (
    <div>
      <label className={labelClass}>{field.label}</label>
      <ScalarInput
        type={field.type}
        rows={field.rows}
        options={field.options}
        value={value}
        onChange={onChange}
      />
      {field.help && <p className={helpClass}>{field.help}</p>}
    </div>
  );
}

function ScalarInput({
  type,
  rows,
  options,
  value,
  onChange,
}: {
  type: AdminItemField["type"] | "text";
  rows?: number;
  options?: { value: string; label: string }[];
  value: unknown;
  onChange: (value: unknown) => void;
}) {
  if (type === "textarea") {
    return (
      <textarea
        className={inputClass}
        rows={rows ?? 4}
        value={String(value ?? "")}
        onChange={(event) => onChange(event.target.value)}
      />
    );
  }
  if (type === "number") {
    return (
      <input
        type="number"
        className={inputClass}
        value={value === undefined || value === null ? "" : String(value)}
        onChange={(event) => onChange(event.target.value)}
      />
    );
  }
  if (type === "boolean") {
    return (
      <label className="inline-flex items-center gap-2 text-sm text-charcoal">
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(event) => onChange(event.target.checked)}
          className="size-4 accent-navy"
        />
        Yes
      </label>
    );
  }
  if (type === "select") {
    return (
      <select
        className={inputClass}
        value={String(value ?? "")}
        onChange={(event) => onChange(event.target.value)}
      >
        {(options ?? []).map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
  return (
    <input
      type="text"
      className={inputClass}
      value={String(value ?? "")}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

function StringListEditor({
  label,
  help,
  value,
  onChange,
}: {
  label: string;
  help?: string;
  value: string[];
  onChange: (value: string[]) => void;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <div className="space-y-2">
        {value.map((entry, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              className={inputClass}
              value={entry}
              onChange={(event) => {
                const next = [...value];
                next[index] = event.target.value;
                onChange(next);
              }}
            />
            <RowButtons
              onUp={index > 0 ? () => onChange(moveItem(value, index, -1)) : undefined}
              onDown={
                index < value.length - 1
                  ? () => onChange(moveItem(value, index, 1))
                  : undefined
              }
              onRemove={() => onChange(value.filter((_, i) => i !== index))}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...value, ""])}
        className="mt-2 text-sm text-navy font-medium hover:underline"
      >
        + Add item
      </button>
      {help && <p className={helpClass}>{help}</p>}
    </div>
  );
}

function ItemListEditor({
  field,
  value,
  onChange,
}: {
  field: AdminField;
  value: Item[];
  onChange: (value: Item[]) => void;
}) {
  const itemFields = field.itemFields ?? [];

  const updateItem = (index: number, key: string, itemValue: unknown) => {
    const next = value.map((item, i) =>
      i === index ? { ...item, [key]: itemValue } : item
    );
    onChange(next);
  };

  return (
    <div>
      <label className={labelClass}>{field.label}</label>
      <div className="space-y-4">
        {value.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-brand-border rounded-lg p-4"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <p className="font-heading font-black text-navy text-sm truncate">
                {String(item[field.itemTitleKey ?? ""] ?? "") ||
                  `Item ${index + 1}`}
              </p>
              <RowButtons
                onUp={index > 0 ? () => onChange(moveItem(value, index, -1)) : undefined}
                onDown={
                  index < value.length - 1
                    ? () => onChange(moveItem(value, index, 1))
                    : undefined
                }
                onRemove={() => onChange(value.filter((_, i) => i !== index))}
              />
            </div>
            <div className="space-y-3">
              {itemFields.map((itemField) => (
                <div key={itemField.key}>
                  <label className={labelClass}>{itemField.label}</label>
                  <ScalarInput
                    type={itemField.type}
                    rows={itemField.rows}
                    options={itemField.options}
                    value={item[itemField.key]}
                    onChange={(itemValue) =>
                      updateItem(index, itemField.key, itemValue)
                    }
                  />
                  {itemField.help && <p className={helpClass}>{itemField.help}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() =>
          onChange([
            ...value,
            Object.fromEntries(
              itemFields.map((itemField) => [
                itemField.key,
                itemField.type === "boolean"
                  ? true
                  : itemField.type === "select"
                    ? itemField.options?.[0]?.value ?? ""
                    : "",
              ])
            ),
          ])
        }
        className="mt-2 text-sm text-navy font-medium hover:underline"
      >
        + {field.addLabel ?? "Add item"}
      </button>
    </div>
  );
}

function RowButtons({
  onUp,
  onDown,
  onRemove,
}: {
  onUp?: () => void;
  onDown?: () => void;
  onRemove: () => void;
}) {
  const buttonClass =
    "rounded border border-brand-border px-2 py-1 text-xs text-charcoal hover:border-navy/40 disabled:opacity-30";
  return (
    <div className="flex gap-1 shrink-0">
      <button type="button" className={buttonClass} onClick={onUp} disabled={!onUp} aria-label="Move up">
        ↑
      </button>
      <button type="button" className={buttonClass} onClick={onDown} disabled={!onDown} aria-label="Move down">
        ↓
      </button>
      <button
        type="button"
        className={`${buttonClass} text-red-700`}
        onClick={() => {
          if (window.confirm("Remove this item? It disappears from the site when you save.")) {
            onRemove();
          }
        }}
        aria-label="Remove"
      >
        Remove
      </button>
    </div>
  );
}

function moveItem<T>(list: T[], index: number, delta: number): T[] {
  const next = [...list];
  const [item] = next.splice(index, 1);
  next.splice(index + delta, 0, item);
  return next;
}
