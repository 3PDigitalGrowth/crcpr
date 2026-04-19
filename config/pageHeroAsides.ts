/**
 * Right-rail second block copy for PageHero (below years-trading stat).
 * Variants avoid repeating “confidential by default” as a sitewide differentiator;
 * crisis-oriented pages use `crisisTrust` where discretion still matters.
 */
export type PageHeroAsidePreset =
  | "seniorAccess"
  | "proofLed"
  | "strategicIntegrated"
  | "mediaEditorial"
  | "crisisTrust"
  | "editorialInsights"
  | "practicalNextStep"
  | "anonymisedOutcomes"
  | "clientsBreadth"
  | "pacificRegional"
  | "legalNeutral"
  | "mediaTraining";

export type AsideHighlight = {
  title: string;
  body: string;
};

export const PAGE_HERO_ASIDES: Record<PageHeroAsidePreset, AsideHighlight> = {
  seniorAccess: {
    title: "Direct to senior advisers",
    body: "Every engagement is led by experienced principals—you are not handed off to junior staff or a generic account team.",
  },
  proofLed: {
    title: "Advice clients stay for",
    body: "Our work is built on a passionate belief in our clients, along with judgement, depth, and outcomes that hold under scrutiny.",
  },
  strategicIntegrated: {
    title: "Strategy that holds under pressure",
    body: "We align communications with leadership decisions, stakeholder reality, and the level of scrutiny your organisation faces.",
  },
  mediaEditorial: {
    title: "Editorial judgement",
    body: "We understand how stories are shaped and what makes commentary worth running—so your public voice earns attention, not noise.",
  },
  crisisTrust: {
    title: "Discretion when stakes are high",
    body: "In active or sensitive situations we protect your position, coordinate messaging, and move at the pace the moment demands.",
  },
  editorialInsights: {
    title: "Clear thinking, applied",
    body: "Perspective grounded in decades advising boards and executives—practical counsel, not generic industry filler.",
  },
  practicalNextStep: {
    title: "A direct response",
    body: "Tell us what you are navigating. A senior adviser will come back with clear next steps—not a generic pitch.",
  },
  anonymisedOutcomes: {
    title: "Outcomes without names",
    body: "Examples are anonymised so we can show the kinds of results we deliver without trading on client identities.",
  },
  clientsBreadth: {
    title: "Depth across sectors",
    body: "From companies and peak bodies to government and schools—we tailor counsel to the accountability you face.",
  },
  pacificRegional: {
    title: "Regional judgement",
    body: "Pacific contexts demand cross-cultural fluency and careful stakeholder pacing alongside disciplined communications.",
  },
  legalNeutral: {
    title: "Professional standards",
    body: "Our terms and policies set out how we operate fairly, handle information, and meet regulatory expectations.",
  },
  mediaTraining: {
    title: "Broadcast-ready preparation",
    body: "Training draws on senior journalists and coaches who replicate real interviews—camera, print, and radio.",
  },
};
