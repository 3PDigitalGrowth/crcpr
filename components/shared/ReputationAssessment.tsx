"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight } from "lucide-react";
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
      { label: "No protocol in place", score: 0 },
      { label: "Basic protocol exists but untested", score: 1 },
      { label: "Clear protocol, tested within the last 12 months", score: 2 },
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
    text: "How would you rate your organisation's relationship with key journalists?",
    options: [
      { label: "No established media relationships", score: 0 },
      { label: "Some contacts but no proactive engagement", score: 1 },
      { label: "Active, maintained relationships with relevant journalists", score: 2 },
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
      { label: "Within 1–2 hours", score: 1 },
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
    text: "Do you have a current stakeholder map identifying key audiences and their concerns?",
    options: [
      { label: "No stakeholder map", score: 0 },
      { label: "Informal understanding but not documented", score: 1 },
      { label: "Documented, current stakeholder map with engagement strategy", score: 2 },
    ],
  },
  {
    category: "Stakeholder Trust",
    text: "How regularly do you engage proactively with your most important stakeholders?",
    options: [
      { label: "Only when issues arise", score: 0 },
      { label: "Occasionally, without a structured approach", score: 1 },
      { label: "Regularly, as part of a planned engagement program", score: 2 },
    ],
  },
  {
    category: "Stakeholder Trust",
    text: "Do your stakeholders know who to contact in your organisation during a crisis?",
    options: [
      { label: "No clear contact point communicated", score: 0 },
      { label: "Some stakeholders know, but it's inconsistent", score: 1 },
      { label: "All key stakeholders have a clear, direct contact point", score: 2 },
    ],
  },
  {
    category: "Stakeholder Trust",
    text: "Have you surveyed or assessed stakeholder trust in the last 12 months?",
    options: [
      { label: "No", score: 0 },
      { label: "Informally", score: 1 },
      { label: "Yes, through a structured survey or assessment", score: 2 },
    ],
  },
  // Digital Exposure
  {
    category: "Digital Exposure",
    text: "Does your organisation monitor social media for mentions, sentiment, and emerging issues?",
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
    text: "Is your board briefed on reputation risks and crisis preparedness?",
    options: [
      { label: "Board is not briefed on reputation matters", score: 0 },
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

export function ReputationAssessment() {
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
      <section className="bg-white py-16 scroll-mt-24" id="reputation-assessment">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-brand-teal text-xs font-medium tracking-[0.14em] uppercase">
              YOUR RESULTS
            </p>
            <h2 className="font-heading font-black text-navy text-3xl mt-3">
              Reputation Vulnerability Score
            </h2>
            <div
              className={`inline-flex items-center gap-3 mt-6 px-8 py-4 rounded-lg ${rating.bgColor}`}
            >
              <span className="font-heading font-black text-5xl text-navy">
                {totalScore}
              </span>
              <span className="text-charcoal-mid text-sm">/40</span>
              <span
                className={`font-heading font-black text-lg ${rating.color}`}
              >
                {rating.label}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-12">
            {categories.map((cat) => {
              const catScore = getCategoryScore(answers, cat);
              const maxCatScore = 8;
              const pct = Math.round((catScore / maxCatScore) * 100);
              return (
                <div key={cat} className="text-center">
                  <p className="text-xs font-medium text-charcoal-mid uppercase tracking-wide mb-2">
                    {cat}
                  </p>
                  <div className="h-2 bg-brand-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-gold rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-sm font-heading font-black text-navy mt-1">
                    {catScore}/{maxCatScore}
                  </p>
                </div>
              );
            })}
          </div>

          {formState.status === "success" ? (
            <div className="text-center py-8">
              <CheckCircle
                className="text-brand-teal mx-auto size-16"
                strokeWidth={1.5}
              />
              <p className="text-charcoal text-lg mt-4">
                Your Reputation Risk Report has been sent to{" "}
                <strong>{email}</strong>.
              </p>
              <p className="text-charcoal-mid text-sm mt-2">
                A CRC PR advisor may follow up with personalised
                recommendations.
              </p>
            </div>
          ) : (
            <div className="bg-off-white border border-brand-border rounded-lg p-8 max-w-md mx-auto">
              <h3 className="font-heading font-black text-navy text-xl text-center">
                Get your full report
              </h3>
              <p className="text-charcoal-mid text-sm text-center mt-2">
                Receive a detailed breakdown with recommendations for each risk
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
                  className="w-full border border-brand-border rounded-[4px] px-4 py-3 text-sm font-sans text-charcoal placeholder:text-charcoal-mid/50 focus:outline-none focus:border-brand-gold transition mb-3"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-brand-border rounded-[4px] px-4 py-3 text-sm font-sans text-charcoal placeholder:text-charcoal-mid/50 focus:outline-none focus:border-brand-gold transition mb-3"
                />
                {formState.status === "error" && (
                  <p className="text-sm text-red-600 mb-3">
                    {formState.message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase w-full py-4 rounded-[4px] hover:bg-gold-light transition disabled:opacity-60"
                >
                  {isSubmitting ? "SENDING..." : "SEND MY REPORT →"}
                </button>
              </form>
              <p className="text-xs text-charcoal-mid text-center mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          )}
        </div>
      </section>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <section className="bg-white py-16 scroll-mt-24" id="reputation-assessment">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-brand-teal text-xs font-medium tracking-[0.14em] uppercase">
            FREE ASSESSMENT
          </p>
          <h2 className="font-heading font-black text-navy text-3xl mt-3">
            Reputation Vulnerability Assessment
          </h2>
          <p className="text-charcoal-mid text-sm mt-2">
            20 questions · 5 risk areas · 3 minutes
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-xs text-charcoal-mid mb-2">
            <span>
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span>{progress}% complete</span>
          </div>
          <div className="h-2 bg-brand-border rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-gold rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-brand-teal text-xs font-medium tracking-[0.14em] uppercase mb-2">
            {currentQ.category}
          </p>
          <h3 className="font-heading font-black text-navy text-xl">
            {currentQ.text}
          </h3>
        </div>

        <div className="space-y-3 mt-6">
          {currentQ.options.map((opt, oi) => {
            const isSelected = answers[currentIndex] === opt.score;
            return (
              <button
                key={oi}
                type="button"
                onClick={() => selectAnswer(currentIndex, opt.score)}
                className={`w-full text-left px-6 py-4 rounded-lg border transition flex items-center justify-between gap-4 ${
                  isSelected
                    ? "border-brand-gold bg-gold-light/50"
                    : "border-brand-border hover:border-brand-gold/50 bg-white"
                }`}
              >
                <span className="text-charcoal text-[15px]">{opt.label}</span>
                <ChevronRight
                  className={`size-4 shrink-0 ${
                    isSelected ? "text-brand-gold" : "text-charcoal-mid/30"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            className="text-sm text-charcoal-mid hover:text-charcoal transition disabled:opacity-30"
          >
            ← Previous
          </button>
          {answeredCount === totalQuestions && (
            <button
              type="button"
              onClick={() => setPhase("results")}
              className="bg-brand-gold text-navy font-heading font-black text-sm tracking-widest uppercase rounded-[4px] px-8 py-3 hover:bg-gold-light transition"
            >
              VIEW RESULTS →
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
            className="text-sm text-charcoal-mid hover:text-charcoal transition disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
