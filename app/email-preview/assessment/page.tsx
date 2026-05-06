import type { Metadata } from "next";
import { render } from "@react-email/render";
import {
  AssessmentEmail,
  ASSESSMENT_CATEGORIES,
  type AssessmentCategory,
} from "@/lib/email/assessmentEmail";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Assessment email preview",
  robots: { index: false, follow: false },
};

interface SamplePreset {
  band: "low" | "mid" | "high";
  label: string;
  firstName: string;
  totalScore: number;
  breakdown: Record<AssessmentCategory, number>;
}

const samples: SamplePreset[] = [
  {
    band: "low",
    label: "High Risk band (score 10)",
    firstName: "Sample",
    totalScore: 10,
    breakdown: {
      "Media Readiness": 1,
      "Crisis Preparedness": 2,
      "Stakeholder Trust": 3,
      "Digital Exposure": 2,
      Governance: 2,
    },
  },
  {
    band: "mid",
    label: "Moderate Risk band (score 22)",
    firstName: "Sample",
    totalScore: 22,
    breakdown: {
      "Media Readiness": 4,
      "Crisis Preparedness": 5,
      "Stakeholder Trust": 4,
      "Digital Exposure": 3,
      Governance: 6,
    },
  },
  {
    band: "high",
    label: "Well Prepared band (score 35)",
    firstName: "Sample",
    totalScore: 35,
    breakdown: {
      "Media Readiness": 7,
      "Crisis Preparedness": 8,
      "Stakeholder Trust": 6,
      "Digital Exposure": 7,
      Governance: 7,
    },
  },
];

export default async function AssessmentEmailPreviewPage({
  searchParams,
}: {
  searchParams?: Promise<{ band?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const requested = (params.band ?? "low") as SamplePreset["band"];
  const sample = samples.find((s) => s.band === requested) ?? samples[0];

  const html = await render(
    <AssessmentEmail
      firstName={sample.firstName}
      totalScore={sample.totalScore}
      breakdown={sample.breakdown}
    />,
  );

  return (
    <main style={{ background: "#1f2a44", minHeight: "100vh" }}>
      <header
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "32px 24px 16px",
          color: "#fff",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#C9A84C",
            margin: 0,
          }}
        >
          Internal preview
        </p>
        <h1
          style={{
            fontSize: 22,
            margin: "6px 0 0",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Assessment completion email
        </h1>
        <p style={{ fontSize: 13, color: "#cbd5e1", marginTop: 6 }}>
          Showing: <strong>{sample.label}</strong>. Switch sample bands with
          the links below.
        </p>
        <nav style={{ marginTop: 14, display: "flex", gap: 12 }}>
          {samples.map((s) => {
            const active = s.band === sample.band;
            return (
              <a
                key={s.band}
                href={`?band=${s.band}`}
                style={{
                  padding: "8px 14px",
                  background: active ? "#C9A84C" : "rgba(255,255,255,0.08)",
                  color: active ? "#0a1830" : "#fff",
                  borderRadius: 4,
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {s.label}
              </a>
            );
          })}
        </nav>
        <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 18 }}>
          Categories included in this preview:{" "}
          {ASSESSMENT_CATEGORIES.join(" · ")}
        </p>
      </header>

      <iframe
        srcDoc={html}
        style={{
          width: "100%",
          maxWidth: 980,
          height: "calc(100vh - 220px)",
          margin: "0 auto",
          display: "block",
          background: "#fff",
          border: 0,
        }}
        title="Assessment email preview"
      />
    </main>
  );
}
