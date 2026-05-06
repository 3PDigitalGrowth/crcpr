/* eslint-disable @next/next/no-head-element */
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const ASSESSMENT_CATEGORIES = [
  "Media Readiness",
  "Crisis Preparedness",
  "Stakeholder Trust",
  "Digital Exposure",
  "Governance",
] as const;

export type AssessmentCategory = (typeof ASSESSMENT_CATEGORIES)[number];

export interface AssessmentEmailProps {
  firstName: string;
  totalScore: number;
  maxScore?: number;
  breakdown: Record<AssessmentCategory, number>;
  bookingUrl?: string;
  contactPhone?: string;
  contactEmail?: string;
}

const MAX_TOTAL = 40;
const MAX_PER_CATEGORY = 8;

interface RatingMeta {
  band: "high" | "moderate" | "well";
  label: string;
  accent: string;
  bgTint: string;
  intro: string;
  body: string[];
}

function getRating(total: number): RatingMeta {
  if (total <= 15) {
    return {
      band: "high",
      label: "High Risk",
      accent: "#B0233F",
      bgTint: "#FBEEF1",
      intro:
        "Your responses indicate significant exposure across several core areas of reputation, media, and crisis preparedness.",
      body: [
        "Organisations in this band are typically not in a position to respond effectively when a serious issue emerges. The exposure is rarely visible day to day. It tends to surface in the first few hours of a crisis, when there is no time to fix it.",
        "The good news is that most of what causes this exposure is fixable with disciplined work over weeks, not months. The first step is usually a structured conversation about where the highest-impact gaps actually sit, and which two or three should be prioritised.",
      ],
    };
  }
  if (total <= 28) {
    return {
      band: "moderate",
      label: "Moderate Risk",
      accent: "#A8771A",
      bgTint: "#FAF3E2",
      intro:
        "Your responses show meaningful foundations in some areas, with material gaps in others.",
      body: [
        "This is the most common band. Organisations here usually have one or two strong domains (often crisis planning or governance) but are exposed in others (often digital monitoring, stakeholder discipline, or proactive media voice).",
        "The risk in this band is uneven preparedness — strong on paper, weak under pressure. A targeted programme of work in the lower-scoring areas usually delivers the largest improvement in resilience for the time invested.",
      ],
    };
  }
  return {
    band: "well",
    label: "Well Prepared",
    accent: "#1E7F5F",
    bgTint: "#E8F4EF",
    intro:
      "Your responses indicate strong foundations across the majority of risk areas.",
    body: [
      "Organisations in this band are well placed to respond when something goes wrong. The risk in this band is not exposure — it is drift. Most organisations that test as 'well prepared' lose ground quietly over 12 to 18 months as plans age, spokespeople change, and discipline fades.",
      "The most useful next step is usually a structured stress-test of the existing posture, rather than building anything new — confirming that what is in place would actually hold under pressure.",
    ],
  };
}

const CATEGORY_NEXT_STEPS: Record<
  AssessmentCategory,
  { strong: string; weak: string }
> = {
  "Media Readiness": {
    strong:
      "Your media posture is well established. The next conversation is usually about op-ed and thought leadership programmes that turn presence into authority.",
    weak: "This is where most organisations are most exposed. Disciplined media protocols, prepared spokespeople, and a small set of pre-approved messages usually move this score the furthest, fastest.",
  },
  "Crisis Preparedness": {
    strong:
      "A documented and tested crisis plan is the foundation. The follow-on work is usually scenario-specific runbooks for the issues most likely to occur in your sector.",
    weak: "An untested crisis plan is closer to no plan at all. The single highest-leverage action here is a half-day simulation with the actual people who would be in the room.",
  },
  "Stakeholder Trust": {
    strong:
      "Strong stakeholder discipline is rare. Sustaining it usually depends on a defined engagement programme rather than ad-hoc contact.",
    weak: "Reputations live or die in the conversations stakeholders have when you are not in the room. A short, structured stakeholder map and a defined engagement cadence usually closes the largest gap here.",
  },
  "Digital Exposure": {
    strong:
      "Active monitoring is in place. The next step is usually integrating those alerts into a defined response protocol so the right person sees the right signal at the right time.",
    weak: "In the current media and AI environment, an organisation without active digital and social monitoring is operating blind. Putting a basic monitoring layer in place is often the single fastest improvement to overall posture.",
  },
  Governance: {
    strong:
      "Reputation governance at the executive and board level is strong. The discipline to maintain is regular, structured briefings rather than reactive updates.",
    weak: "When the executive or board is not briefed on reputation risk, decisions get made under pressure without context. A quarterly reputation risk briefing rhythm usually addresses this in one cycle.",
  },
};

function ScoreBar({
  score,
  max,
  accent,
}: {
  score: number;
  max: number;
  accent: string;
}) {
  const pct = Math.max(0, Math.min(100, Math.round((score / max) * 100)));
  return (
    <table
      role="presentation"
      cellPadding={0}
      cellSpacing={0}
      width="100%"
      style={{ borderCollapse: "collapse", marginTop: 6 }}
    >
      <tbody>
        <tr>
          <td
            style={{
              background: "#E8E5DE",
              borderRadius: 4,
              height: 10,
              padding: 0,
              lineHeight: "0",
              fontSize: 0,
            }}
          >
            <table
              role="presentation"
              cellPadding={0}
              cellSpacing={0}
              width={`${pct}%`}
              style={{
                background: accent,
                borderRadius: 4,
                height: 10,
                lineHeight: "0",
                fontSize: 0,
              }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: 0, lineHeight: "0", fontSize: 0 }}>
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function AssessmentEmail({
  firstName,
  totalScore,
  maxScore = MAX_TOTAL,
  breakdown,
  bookingUrl = "https://crcpr.com.au/contact",
  contactPhone = "1300 182 186",
  contactEmail = "info@crcpr.com.au",
}: AssessmentEmailProps) {
  const rating = getRating(totalScore);

  // Sort categories ascending by score so the weakest get surfaced first.
  const sortedCategories = [...ASSESSMENT_CATEGORIES].sort(
    (a, b) => (breakdown[a] ?? 0) - (breakdown[b] ?? 0),
  );

  return (
    <Html lang="en">
      <Head>
        <title>Your Reputation Vulnerability Report</title>
      </Head>
      <Preview>
        Your Reputation Vulnerability Report from CRC Public Relations
      </Preview>
      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#F5F2EC",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          color: "#1F2A44",
        }}
      >
        <Container
          style={{
            maxWidth: 640,
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            borderRadius: 8,
            overflow: "hidden",
            border: "1px solid #E5E0D6",
          }}
        >
          {/* Top bar */}
          <Section
            style={{
              backgroundColor: "#0A1830",
              padding: "28px 32px",
              borderBottom: "3px solid #C9A84C",
            }}
          >
            <Text
              style={{
                margin: 0,
                color: "#C9A84C",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              CRC Public Relations
            </Text>
            <Text
              style={{
                margin: "6px 0 0",
                color: "#FFFFFF",
                fontSize: 22,
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              Your Reputation Vulnerability Report
            </Text>
          </Section>

          {/* Greeting */}
          <Section style={{ padding: "32px 32px 0" }}>
            <Text
              style={{
                margin: 0,
                color: "#1F2A44",
                fontSize: 16,
                lineHeight: 1.6,
              }}
            >
              Hi {firstName},
            </Text>
            <Text
              style={{
                margin: "16px 0 0",
                color: "#3F4A66",
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              Thank you for completing the CRC Public Relations Reputation
              Vulnerability Assessment. Your results are below, with a short
              read on what they mean and where the highest-impact work usually
              sits.
            </Text>
          </Section>

          {/* Score card */}
          <Section style={{ padding: "24px 32px 0" }}>
            <table
              role="presentation"
              cellPadding={0}
              cellSpacing={0}
              width="100%"
              style={{
                backgroundColor: rating.bgTint,
                borderRadius: 8,
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: "24px 28px" }}>
                    <Text
                      style={{
                        margin: 0,
                        color: "#3F4A66",
                        fontSize: 11,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      Your overall score
                    </Text>
                    <table
                      role="presentation"
                      cellPadding={0}
                      cellSpacing={0}
                      style={{ marginTop: 10, borderCollapse: "collapse" }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              fontSize: 56,
                              fontWeight: 800,
                              color: "#0A1830",
                              lineHeight: 1,
                              padding: 0,
                            }}
                          >
                            {totalScore}
                          </td>
                          <td
                            style={{
                              fontSize: 18,
                              color: "#3F4A66",
                              padding: "0 0 6px 8px",
                              verticalAlign: "bottom",
                            }}
                          >
                            / {maxScore}
                          </td>
                          <td
                            style={{
                              fontSize: 14,
                              color: rating.accent,
                              fontWeight: 700,
                              padding: "0 0 10px 18px",
                              verticalAlign: "bottom",
                              textTransform: "uppercase",
                              letterSpacing: 1,
                            }}
                          >
                            {rating.label}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Per-band reading */}
          <Section style={{ padding: "24px 32px 0" }}>
            <Text
              style={{
                margin: 0,
                color: "#0A1830",
                fontSize: 16,
                fontWeight: 700,
                lineHeight: 1.4,
              }}
            >
              {rating.intro}
            </Text>
            {rating.body.map((para, idx) => (
              <Text
                key={idx}
                style={{
                  margin: "14px 0 0",
                  color: "#3F4A66",
                  fontSize: 15,
                  lineHeight: 1.7,
                }}
              >
                {para}
              </Text>
            ))}
          </Section>

          {/* Category breakdown */}
          <Section style={{ padding: "32px 32px 0" }}>
            <Text
              style={{
                margin: 0,
                color: "#C9A84C",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Breakdown by area
            </Text>
            {ASSESSMENT_CATEGORIES.map((cat) => {
              const score = breakdown[cat] ?? 0;
              return (
                <Section key={cat} style={{ marginTop: 18 }}>
                  <table
                    role="presentation"
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                    style={{ borderCollapse: "collapse" }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            color: "#1F2A44",
                            fontSize: 14,
                            fontWeight: 600,
                            padding: 0,
                          }}
                        >
                          {cat}
                        </td>
                        <td
                          style={{
                            color: "#1F2A44",
                            fontSize: 14,
                            fontWeight: 700,
                            textAlign: "right",
                            padding: 0,
                          }}
                        >
                          {score} / {MAX_PER_CATEGORY}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <ScoreBar
                    score={score}
                    max={MAX_PER_CATEGORY}
                    accent={rating.accent}
                  />
                </Section>
              );
            })}
          </Section>

          {/* Next steps - per category, weakest first */}
          <Section style={{ padding: "32px 32px 0" }}>
            <Text
              style={{
                margin: 0,
                color: "#C9A84C",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Where to focus next
            </Text>
            <Text
              style={{
                margin: "8px 0 0",
                color: "#3F4A66",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Ordered from your lowest-scoring area to your strongest.
            </Text>
            {sortedCategories.map((cat) => {
              const score = breakdown[cat] ?? 0;
              const isStrong = score >= 6;
              return (
                <Section
                  key={cat}
                  style={{
                    marginTop: 18,
                    paddingLeft: 14,
                    borderLeft: `3px solid ${isStrong ? "#1E7F5F" : "#C9A84C"}`,
                  }}
                >
                  <Text
                    style={{
                      margin: 0,
                      color: "#0A1830",
                      fontSize: 15,
                      fontWeight: 700,
                    }}
                  >
                    {cat}
                  </Text>
                  <Text
                    style={{
                      margin: "6px 0 0",
                      color: "#3F4A66",
                      fontSize: 14,
                      lineHeight: 1.7,
                    }}
                  >
                    {isStrong
                      ? CATEGORY_NEXT_STEPS[cat].strong
                      : CATEGORY_NEXT_STEPS[cat].weak}
                  </Text>
                </Section>
              );
            })}
          </Section>

          {/* CTA */}
          <Section style={{ padding: "32px 32px 0", textAlign: "center" }}>
            <Hr style={{ borderColor: "#E5E0D6", margin: 0 }} />
            <Text
              style={{
                margin: "28px 0 0",
                color: "#0A1830",
                fontSize: 18,
                fontWeight: 700,
                lineHeight: 1.4,
              }}
            >
              Want to talk this through with an adviser?
            </Text>
            <Text
              style={{
                margin: "10px 0 22px",
                color: "#3F4A66",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              A 30-minute conversation will turn this score into a short list
              of the most useful next steps for your specific situation. There
              is no obligation.
            </Text>
            <Button
              href={bookingUrl}
              style={{
                backgroundColor: "#C9A84C",
                color: "#0A1830",
                fontWeight: 800,
                fontSize: 14,
                padding: "14px 28px",
                borderRadius: 4,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Book a consultation
            </Button>
            <Text
              style={{
                margin: "16px 0 0",
                color: "#3F4A66",
                fontSize: 13,
              }}
            >
              Or call {contactPhone} or reply to this email.
            </Text>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: "#F5F2EC",
              padding: "28px 32px",
              marginTop: 32,
              borderTop: "1px solid #E5E0D6",
            }}
          >
            <Text
              style={{
                margin: 0,
                color: "#3F4A66",
                fontSize: 12,
                lineHeight: 1.7,
              }}
            >
              <strong>CRC Public Relations</strong>
              <br />
              320 Adelaide Street, Brisbane QLD 4000
              <br />
              {contactPhone} &nbsp;·&nbsp; {contactEmail}
            </Text>
            <Text
              style={{
                margin: "16px 0 0",
                color: "#7A8294",
                fontSize: 11,
                lineHeight: 1.6,
              }}
            >
              You received this email because you completed the Reputation
              Vulnerability Assessment at crcpr.com.au. Reply to this email if
              you would prefer not to be contacted.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default AssessmentEmail;
