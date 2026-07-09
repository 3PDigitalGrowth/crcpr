"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  saveInlineEditsAction,
  type ActionResult,
} from "@/app/admin/actions";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/about/lyall-mercer", label: "About: Lyall Mercer" },
  { path: "/services", label: "Services" },
  { path: "/services/corporate-communications", label: "Corporate communications" },
  { path: "/services/reputation-management", label: "Reputation management" },
  { path: "/services/crisis-communications", label: "Crisis communications" },
  { path: "/services/issues-management", label: "Issues management" },
  { path: "/services/media-strategy", label: "Media strategy" },
  { path: "/services/digital-media", label: "Digital media" },
  { path: "/services/media-training", label: "Media training" },
  { path: "/clients", label: "Clients" },
  { path: "/case-studies", label: "Case studies" },
  { path: "/faq", label: "FAQ" },
  { path: "/insights", label: "Insights" },
  { path: "/pacific", label: "Pacific" },
  { path: "/contact", label: "Contact" },
];

interface EditorShellProps {
  images: { name: string; src: string }[];
}

export function EditorShell({ images }: EditorShellProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [page, setPage] = useState("/");
  const [dirty, setDirty] = useState(0);
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState<ActionResult | null>(null);
  const [pickerPath, setPickerPath] = useState<string | null>(null);
  const pendingSave = useRef(false);

  const post = (message: Record<string, unknown>) => {
    iframeRef.current?.contentWindow?.postMessage(message, window.location.origin);
  };

  useEffect(() => {
    const onMessage = async (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      const data = event.data ?? {};

      if (data.type === "crc-edit-ready") {
        post({ type: "crc-edit-on" });
        setDirty(0);
        setResult(null);
      }
      if (data.type === "crc-dirty") {
        setDirty(data.count ?? 0);
      }
      if (data.type === "crc-pick-image") {
        setPickerPath(String(data.path ?? ""));
      }
      if (data.type === "crc-changes" && pendingSave.current) {
        pendingSave.current = false;
        const changes = (data.changes ?? {}) as Record<string, string>;
        if (!Object.keys(changes).length) {
          setSaving(false);
          setResult({ ok: false, message: "Nothing to save yet. Click any highlighted text to edit it first." });
          return;
        }
        const saveResult = await saveInlineEditsAction(changes);
        setSaving(false);
        setResult(saveResult);
        if (saveResult.ok) post({ type: "crc-saved" });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = () => {
    if (saving) return;
    setSaving(true);
    setResult(null);
    pendingSave.current = true;
    post({ type: "crc-collect" });
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-off-white">
      <header className="bg-navy text-white shrink-0">
        <div className="px-4 py-2.5 flex items-center gap-3 flex-wrap">
          <Link
            href="/admin"
            className="text-white/80 hover:text-white text-sm underline underline-offset-2 shrink-0"
          >
            ← Back to editor home
          </Link>

          <select
            value={page}
            onChange={(event) => {
              if (
                dirty > 0 &&
                !window.confirm("You have unsaved edits. Switch page without saving?")
              ) {
                return;
              }
              setPage(event.target.value);
              setDirty(0);
              setResult(null);
            }}
            className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-sm text-white"
          >
            {pages.map((p) => (
              <option key={p.path} value={p.path} className="text-navy">
                {p.label}
              </option>
            ))}
          </select>

          <p className="text-white/60 text-xs hidden md:block">
            Click any highlighted text to edit it. Click an outlined image to swap it.
          </p>

          <div className="ml-auto flex items-center gap-3 shrink-0">
            {result && (
              <span
                role="status"
                className={`text-xs max-w-[26rem] truncate ${result.ok ? "text-green-300" : "text-red-300"}`}
                title={result.message}
              >
                {result.message}
              </span>
            )}
            <span className="text-white/70 text-xs">
              {dirty} unsaved change{dirty === 1 ? "" : "s"}
            </span>
            <button
              type="button"
              onClick={() => {
                post({ type: "crc-undo" });
                setResult(null);
              }}
              disabled={dirty === 0 || saving}
              className="border border-white/30 text-white rounded px-4 py-1.5 text-sm hover:bg-white/10 disabled:opacity-40"
            >
              Undo all
            </button>
            <button
              type="button"
              onClick={save}
              disabled={dirty === 0 || saving}
              className="bg-brand-gold text-navy font-semibold rounded px-5 py-1.5 text-sm hover:opacity-90 disabled:opacity-40"
            >
              {saving ? "Saving..." : "Save and publish"}
            </button>
          </div>
        </div>
      </header>

      <iframe
        key={page}
        ref={iframeRef}
        src={page}
        title="Page editor"
        className="flex-1 w-full border-0 bg-white"
      />

      {pickerPath && (
        <div className="absolute inset-0 z-10 bg-navy/50 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[70vh] flex flex-col">
            <div className="px-5 py-4 border-b border-brand-border flex items-center justify-between">
              <p className="font-heading font-black text-navy">Choose an image</p>
              <button
                type="button"
                onClick={() => setPickerPath(null)}
                className="text-charcoal-mid hover:text-navy text-sm"
              >
                Cancel
              </button>
            </div>
            <div className="p-5 overflow-y-auto">
              {images.length === 0 ? (
                <p className="text-charcoal-mid text-sm">
                  No uploaded images yet. Upload some on the{" "}
                  <Link href="/admin/images" className="text-navy underline">
                    Images page
                  </Link>{" "}
                  first, then reopen the editor.
                </p>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {images.map((image) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => {
                        post({ type: "crc-set-image", path: pickerPath, src: image.src });
                        setPickerPath(null);
                      }}
                      className="border border-brand-border rounded overflow-hidden hover:border-navy focus:outline-none focus:ring-2 focus:ring-navy/40"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.src}
                        alt={image.name}
                        className="w-full aspect-square object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
