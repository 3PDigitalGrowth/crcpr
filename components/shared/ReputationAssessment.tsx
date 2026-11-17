"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Eyebrow, H2 } from "@/components/altkit/primitives";
import { submitAssessment } from "@/lib/actions";
import type { FormState } from "@/types";

const categories = [
  "Media Readiness",
  "Crisis Preparedness",
  "Stakeholder Trust",
  "Digital Exposure",
  "Governance",
] as const;

type Category = (typeof categories)[number];

interface Question {
  category: Category;
  text: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  // Media Readiness
  {
    category: "Media Readiness",
    text: "Does your organisation have a trained, designated spokesperson?",
    options: [
      { label: "No designated spokesperson", score: 0 },
      { label: "Designated but not media-trained", score: 1 },
      { label: "Trained spokesperson with recent refresher", score: 2 },
    ],
  },
  {
    category: "Media Readiness",
    text: "How prepared is your team to handle an unexpected media enquiry?",
    options: [
      { label: "No specific media policy", score: 0 },
      { label: "Most would know what to do but nothing formal", score: 1 },
      {
        label:
          "A written, understood and tested media policy for all employees",
        score: 2,
      },
    ],
  },
  {
    category: "Media Readiness",
    text: "Do you have pre-approved key messages for likely media scenarios?",
    options: [
      { label: "No pre-approved messages", score: 0 },
      { label: "Some messages exist but are outdated", score: 1 },
      { label: "Current, scenario-specific messages ready to deploy", score: 2 },
    ],
  },
  {
    category: "Media Readiness",
    text: "Does your organisation have a proactive media voice?",
    options: [
      { label: "We avoid all media engagement", score: 0 },
      { label: "We deal with media when they approach us", score: 1 },
      {
        label:
          "Active engagement with media. We are the voice of authority in our industry",
        score: 2,
      },
    ],
  },
  // Crisis Preparedness
  {
    category: "Crisis Preparedness",
    text: "Does your organisation have a documented crisis communications plan?",
    options: [
      { label: "No plan exists", score: 0 },
      { label: "A plan exists but has never been tested", score: 1 },
      { label: "A plan exists and has been tested within the last 12 months", score: 2 },
    ],
  },
  {
    category: "Crisis Preparedness",
    text: "Is there a defined crisis team with clear roles and responsibilities?",
    options: [
      { label: "No crisis team defined", score: 0 },
      { label: "Team exists on paper but roles are unclear", score: 1 },
      { label: "Team is defined, trained, and has practised together", score: 2 },
    ],
  },
  {
    category: "Crisis Preparedness",
    text: "How quickly could your organisation issue an initial response to a crisis?",
    options: [
      { label: "More than 2 hours", score: 0 },
      { label: "Within 1-2 hours", score: 1 },
      { label: "Within 15 minutes", score: 2 },
    ],
  },
  {
    category: "Crisis Preparedness",
    text: "Has your organisation conducted a crisis simulation exercise?",
    options: [
      { label: "Never", score: 0 },
      { label: "Yes, but more than 2 years ago", score: 1 },
      { label: "Yes, within the last 12 months", score: 2 },
    ],
  },
  // Stakeholder Trust
  {
    category: "Stakeholder Trust",
    text: "Do you have a communications strategy to build trust with each stakeholder?",
    options: [
      { label: "Not much stakeholder communication", score: 0 },
      { label: "Communicate but with no overall strategy", score: 1 },
      {
        label: "Strategic trust-building engagement with all stakeholders",
        score: 2,
      },
    ],
  },
  {
    category: "Stakeholder Trust",
    text: "How regularly do you engage proactively with your most important stakeholders?",
    options: [
      { label: "Only when issues arise", score: 0 },
      { label: "Occasionally, without a structured approach", score: 1 },
      { label: "Regularly, as part of a planned engagement programme", score: 2 },
    ],
  },
  {
    category: "Stakeholder Trust",
    text: "Do your stakeholders know who to contact in your organisation when issues arise?",
    options: [
      { label: "No clear contact point communicated", score: 0 },
      { label: "Some stakeholders know, but it's inconsistent", score: 1 },
      { label: "All key stakeholders have a clear, direct contact point", score: 2 },
    ],
  },
  {
    category: "Stakeholder Trust",
    text: "Are your stakeholders (incl staff) your advocates or adversaries?",
    options: [
      { label: "Don\u2019t know. Haven\u2019t thought about it", score: 0 },
      { label: "Supportive overall but many issues", score: 1 },
      { label: "Overwhelmingly advocates who trust us", score: 2 },
    ],
  },
  // Digital Exposure
  {
    category: "Digital Exposure",
    text: "Do you monitor digital and social media for mentions, sentiment, and emerging issues?",
    options: [
      { label: "No monitoring in place", score: 0 },
      { label: "Ad-hoc checks but no systematic monitoring", score: 1 },
      { label: "Active, systematic monitoring with alerts", score: 2 },
    ],
  },
  {
    category: "Digital Exposure",
    text: "Do you have a social media policy for staff?",
    options: [
      { label: "No policy", score: 0 },
      { label: "Policy exists but is not well known or enforced", score: 1 },
      { label: "Policy is current, communicated, and understood", score: 2 },
    ],
  },
  {
    category: "Digital Exposure",
    text: "How quickly could your organisation respond to a viral social media incident?",
    options: [
      { label: "No plan for social media incidents", score: 0 },
      { label: "Would need to assemble a response team", score: 1 },
      { label: "Defined protocol with pre-approved response framework", score: 2 },
    ],
  },
  {
    category: "Digital Exposure",
    text: "Are your online profiles and digital presence consistent and up to date?",
    options: [
      { label: "Inconsistent or outdated", score: 0 },
      { label: "Mostly current but some gaps", score: 1 },
      { label: "Fully current, consistent, and actively managed", score: 2 },
    ],
  },
  // Governance
  {
    category: "Governance",
    text: "Is your executive leadership and/or board briefed on reputation risks and crisis preparedness?",
    options: [
      { label: "Briefed on reputation matters", score: 0 },
      { label: "Occasional updates but not structured", score: 1 },
      { label: "Regular, structured reputation risk briefings", score: 2 },
    ],
  },
  {
    category: "Governance",
    text: "Does your organisation have a clear escalation process for emerging issues?",
    options: [
      { label: "No escalation process", score: 0 },
      { label: "Informal process that varies by situation", score: 1 },
      { label: "Documented escalation process understood by all relevant staff", score: 2 },
    ],
  },
  {
    category: "Governance",
    text: "Are your communications responsibilities clearly defined across leadership?",
    options: [
      { label: "Communications responsibilities are unclear", score: 0 },
      { label: "Some clarity but overlapping responsibilities", score: 1 },
      { label: "Clear, documented responsibilities with accountabilities", score: 2 },
    ],
  },
  {
    category: "Governance",
    text: "How confident are you in your organisation's ability to manage a major reputational event?",
    options: [
      { label: "Not confident", score: 0 },
      { label: "Somewhat confident", score: 1 },
      { label: "Very confident: we have the people, plan, and processes", score: 2 },
    ],
  },
];

function getRating(score: number): {
  label: string;
  color: string;
  bgColor: string;
} {
  if (score <= 15)
    return {
      label: "High Risk",
      color: "text-red-600",
      bgColor: "bg-red-50",
    };
  if (score <= 28)
    return {
      label: "Moderate Risk",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    };
  return {
    label: "Well Prepared",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  };
}

function getCategoryScore(
  answers: Record<number, number>,
  category: Category
): number {
  return questions.reduce((sum, q, i) => {
    if (q.category === category && answers[i] !== undefined) {
      return sum + answers[i];
    }
    return sum;
  }, 0);
}

const initialFormState: FormState = { status: "idle", message: "" };

export function ReputationAssessment({ embedded = false }: { embedded?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [phase, setPhase] = useState<"questions" | "results" | "capture">(
    "questions"
  );
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / totalQuestions) * 100);
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const rating = getRating(totalScore);
  const isUnlocked = formState.status === "success";

  function selectAnswer(questionIndex: number, score: number) {
    setAnswers((prev) => ({ ...prev, [questionIndex]: score }));
    if (questionIndex < totalQuestions - 1) {
      setTimeout(() => setCurrentIndex(questionIndex + 1), 300);
    } else if (answeredCount >= totalQuestions - 1) {
      setTimeout(() => setPhase("results"), 400);
    }
  }

  async function handleCaptureSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.set("firstName", firstName);
    formData.set("email", email);
    formData.set("score", String(totalScore));
    const breakdown: Record<string, number> = {};
    categories.forEach((cat) => {
      breakdown[cat] = getCategoryScore(answers, cat);
    });
    formData.set("breakdown", JSON.stringify(breakdown));
    const result = await submitAssessment(initialFormState, formData);
    setIsSubmitting(false);
    setFormState(result);
    if (result.status === "success") {
      setPhase("capture");
    }
  }

  if (phase === "results" || phase === "capture") {
    return (
      <section
        className={embedded ? "scroll-mt-24" : "py-11 md:py-14 scroll-mt-24"}
        id="reputation-assessment"
      >
        <div className={embedded ? "max-w-none" : "mx-auto max-w-3xl px-4 sm:px-6"}>
          <div className="relative">
            <div
              className={`transition-all duration-300 ${
                isUnlocked ? "" : "blur-[10px] select-none pointer-events-none"
              }`}
              aria-hidden={!isUnlocked}
            >
              <div className={embedded ? "" : "kit-r border border-line bg-card p-6 md:p-8"}>
                <div className="mb-8">
                  <Eyebrow>Your results</Eyebrow>
                  <H2 className="mt-3">Reputation Vulnerability Score</H2>
                  <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2">
                    <span className="kit-display text-5xl leading-none text-accent">
                      {totalScore}
                    </span>
                    <span className="text-sm text-muted">/40</span>
                    <span
                      className={`kit-r-sm px-3 py-1 text-sm font-bold ${rating.bgColor} ${rating.color}`}
                    >
                      {rating.label}
                    </span>
                  </div>
                </div>

                <div className="border-t border-line">
                  {categories.map((cat) => {
                    const catScore = getCategoryScore(answers, cat);
                    const maxCatScore = 8;
                    const pct = Math.round((catScore / maxCatScore) * 100);
                    return (
                      <div key={cat} className="border-b border-line py-4">
                        <div className="mb-3 flex items-center justify-between gap-4">
                          <p className="kit-display text-[13px] uppercase">{cat}</p>
                          <p className="kit-display whitespace-nowrap text-sm">
                            {catScore}/{maxCatScore}
                          </p>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-[var(--line)]">
                          <div
                            className="h-full rounded-full bg-[var(--k-blue)] transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <p className="mt-2 text-xs text-muted">
                          {pct}% readiness in this area
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {!isUnlocked ? (
              <div className="absolute inset-0 flex items-center justify-center p-2 md:p-8">
                <div className="tone-base kit-r w-full max-w-md border border-line p-6 shadow-[0_20px_60px_rgba(11,18,32,0.22)] md:p-8">
                  <h3 className="kit-display text-center text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">
                    Unlock your full report
                  </h3>
                  <p className="mt-3 text-center text-sm leading-relaxed text-muted">
                    Enter your details to reveal your score and receive the full
                    assessment breakdown with recommendations for each risk
                    area.
                  </p>
                  <form className="mt-6" onSubmit={handleCaptureSubmit}>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="field mb-3"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="field mb-3"
                    />
                    {formState.status === "error" && (
                      <p className="mb-3 text-sm text-red-600">
                        {formState.message}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full disabled:opacity-60"
                    >
                      {isSubmitting
                        ? "Unlocking..."
                        : "Unlock your full report →"}
                    </button>
                  </form>
                  <p className="mt-4 text-center text-xs text-muted">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          {isUnlocked ? (
            <div className="border-t border-line py-8">
              <CheckCircle
                className="size-12 text-accent"
                strokeWidth={1.5}
              />
              <p className="mt-4 text-lg font-semibold leading-snug">
                Your Reputation Risk Report request has been received for{" "}
                <strong>{email}</strong>.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A CRC Public Relations adviser may follow up with personalised
                recommendations.
              </p>
            </div>
          ) : null}
        </div>
      </section>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <section
      className={embedded ? "scroll-mt-24" : "py-11 md:py-14 scroll-mt-24"}
      id="reputation-assessment"
    >
      <div className={embedded ? "max-w-none" : "mx-auto max-w-3xl px-4 sm:px-6"}>
        <div className="mb-8">
          <Eyebrow>Free assessment</Eyebrow>
          <H2 className="mt-3">Reputation Vulnerability Assessment</H2>
          <p className="mt-3 text-sm text-muted">
            20 questions · 5 risk areas · 3 minutes
          </p>
        </div>

        <div className="mb-8">
          <div className="mb-2 flex justify-between text-xs text-muted">
            <span>
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span>{progress}% complete</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[var(--line)]">
            <div
              className="h-full rounded-full bg-[var(--k-blue)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-4 border-t border-line pt-6">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
            {currentQ.category}
          </p>
          <h3 className="kit-display text-[clamp(1.1rem,1.7vw,1.35rem)] uppercase leading-tight">
            {currentQ.text}
          </h3>
        </div>

        <div className="mt-6 space-y-3">
          {currentQ.options.map((opt, oi) => {
            const isSelected = answers[currentIndex] === opt.score;
            return (
              <button
                key={oi}
                type="button"
                onClick={() => selectAnswer(currentIndex, opt.score)}
                className={`kit-r-sm flex w-full items-center justify-between gap-4 border px-5 py-4 text-left transition ${
                  isSelected
                    ? "border-[var(--k-blue)] shadow-[inset_3px_0_0_var(--k-blue)]"
                    : "border-line hover:border-[var(--k-blue)]"
                }`}
              >
                <span className="text-[15px]">{opt.label}</span>
                <ChevronRight
                  className={`size-4 shrink-0 ${
                    isSelected ? "text-accent" : "text-muted opacity-40"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            className="text-xs font-semibold uppercase tracking-[0.1em] text-muted transition hover:text-[var(--fg)] disabled:opacity-30"
          >
            ← Previous
          </button>
          {answeredCount === totalQuestions && (
            <button
              type="button"
              onClick={() => setPhase("results")}
              className="btn btn-primary"
            >
              View results →
            </button>
          )}
          <button
            type="button"
            disabled={
              currentIndex >= totalQuestions - 1 ||
              answers[currentIndex] === undefined
            }
            onClick={() =>
              setCurrentIndex((i) => Math.min(totalQuestions - 1, i + 1))
            }
            className="text-xs font-semibold uppercase tracking-[0.1em] text-muted transition hover:text-[var(--fg)] disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
