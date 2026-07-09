"use client";

import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { uploadImageAction, type ActionResult } from "@/app/admin/actions";

function UploadButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-navy text-white rounded px-5 py-2 text-sm font-medium hover:bg-navy/90 disabled:opacity-60 shrink-0"
    >
      {pending ? "Uploading..." : "Upload"}
    </button>
  );
}

export function ImageUploader() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState<ActionResult | null, FormData>(
    async (prev, formData) => {
      const result = await uploadImageAction(prev, formData);
      if (result.ok) formRef.current?.reset();
      return result;
    },
    null
  );

  return (
    <form
      ref={formRef}
      action={formAction}
      className="max-w-2xl bg-white border border-brand-border rounded-lg p-5"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <input
          type="file"
          name="file"
          accept=".jpg,.jpeg,.png,.webp,.svg,.gif"
          required
          className="text-sm text-charcoal file:mr-3 file:rounded file:border-0 file:bg-off-white file:px-4 file:py-2 file:text-sm file:font-medium file:text-navy"
        />
        <UploadButton />
      </div>
      {state && (
        <p
          role="status"
          className={`mt-3 text-sm ${state.ok ? "text-green-800" : "text-red-800"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
