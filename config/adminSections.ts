/**
 * Declarative definitions for the /admin content editor. Each section renders
 * as one form page; every field maps onto a dot-path in siteConfig
 * (config/site.ts). Saving writes the values into content/cms/site.json,
 * which is deep-merged over the static defaults at build time.
 */

export type AdminFieldType =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "select"
  | "stringList"
  | "itemList";

export interface AdminItemField {
  key: string;
  label: string;
  type: Exclude<AdminFieldType, "itemList" | "stringList">;
  rows?: number;
  options?: { value: string; label: string }[];
  help?: string;
}

export interface AdminField {
  /** Dot-path into siteConfig, e.g. "phone.display" or "caseStudies". */
  path: string;
  label: string;
  type: AdminFieldType;
  help?: string;
  rows?: number;
  options?: { value: string; label: string }[];
  /** For itemList fields. */
  itemFields?: AdminItemField[];
  /** For itemList fields: item field used as the collapsed row title. */
  itemTitleKey?: string;
  /** For itemList fields: label on the "add" button, e.g. "Add FAQ". */
  addLabel?: string;
  /** itemList only: when set, new items get this key set to a generated id. */
  generatedIdKey?: string;
}

export interface AdminSection {
  slug: string;
  title: string;
  description: string;
  fields: AdminField[];
}

const caseStudyIconOptions = [
  { value: "Scale", label: "Scales (legal)" },
  { value: "Building2", label: "Building (corporate / association)" },
  { value: "GraduationCap", label: "Graduation cap (education)" },
  { value: "Landmark", label: "Landmark (government)" },
  { value: "Shield", label: "Shield (crisis)" },
  { value: "HeartPulse", label: "Heart pulse (health)" },
];

export const adminSections: AdminSection[] = [
  {
    slug: "contact",
    title: "Contact and business details",
    description:
      "Phone number, office address, email addresses and social links shown across the site.",
    fields: [
      { path: "phone.display", label: "Phone number", type: "text", help: "As displayed, e.g. 1300 182 186" },
      { path: "address.street", label: "Street", type: "text" },
      { path: "address.city", label: "City", type: "text" },
      { path: "address.state", label: "State", type: "text" },
      { path: "address.postcode", label: "Postcode", type: "text" },
      { path: "email.general", label: "General enquiries email", type: "text" },
      { path: "email.media", label: "Media enquiries email", type: "text" },
      { path: "email.newBusiness", label: "New business email", type: "text" },
      { path: "abn", label: "ABN", type: "text" },
      { path: "linkedInUrl", label: "Company LinkedIn URL", type: "text" },
      { path: "lyallLinkedIn", label: "Lyall's LinkedIn URL", type: "text" },
      { path: "lyallTwitter", label: "Lyall's X (Twitter) URL", type: "text" },
    ],
  },
  {
    slug: "stats",
    title: "Stats and sectors",
    description:
      "The headline firm statistics and the list of sectors you serve.",
    fields: [
      { path: "stats.yearsTrading", label: "Years trading", type: "text", help: "e.g. 15+" },
      { path: "stats.continents", label: "Reach", type: "text", help: "e.g. Worldwide" },
      { path: "stats.clientRetention", label: "Client retention", type: "text", help: "e.g. 100%" },
      { path: "stats.professionsTrained", label: "Professionals trained", type: "text", help: "e.g. 500+" },
      { path: "sectors", label: "Sectors we serve", type: "stringList" },
    ],
  },
  {
    slug: "lyall",
    title: "Lyall Mercer profile",
    description: "Lyall's bio details, quote and media outlet list.",
    fields: [
      { path: "lyall.fullName", label: "Full name", type: "text" },
      { path: "lyall.title", label: "Role title", type: "text" },
      { path: "lyall.yearsExperience", label: "Years of experience", type: "text", help: "e.g. 25+" },
      { path: "lyall.origin", label: "One-line background", type: "textarea", rows: 2 },
      { path: "lyall.quote", label: "Signature quote", type: "textarea", rows: 3 },
      { path: "lyall.mediaOutlets", label: "Media outlets (names)", type: "stringList" },
      {
        path: "lyall.portraitSrc",
        label: "Headshot image path",
        type: "text",
        help: "Upload on the Images page first, then paste the path here, e.g. /images/uploads/lyall.jpg",
      },
      {
        path: "lyall.featuredPortraitSrc",
        label: "Full-length portrait image path",
        type: "text",
        help: "Upload on the Images page first, then paste the path here.",
      },
    ],
  },
  {
    slug: "media-reach",
    title: "Media reach snapshot",
    description:
      "The anonymised monthly coverage example (the April snapshot section).",
    fields: [
      { path: "mediaReachSnapshot.period", label: "Month", type: "text" },
      { path: "mediaReachSnapshot.clientDescriptor", label: "Client description (anonymised)", type: "text" },
      { path: "mediaReachSnapshot.storyCount", label: "Number of stories", type: "number" },
      { path: "mediaReachSnapshot.total", label: "Total placements", type: "number" },
      {
        path: "mediaReachSnapshot.breakdown",
        label: "Placement breakdown",
        type: "itemList",
        itemTitleKey: "label",
        addLabel: "Add row",
        itemFields: [
          { key: "label", label: "Label", type: "text" },
          { key: "value", label: "Count", type: "number" },
        ],
      },
      { path: "mediaReachSnapshot.source", label: "Verification source line", type: "textarea", rows: 2 },
      { path: "mediaReachSnapshot.caveat", label: "Caveat line", type: "text" },
    ],
  },
  {
    slug: "case-studies",
    title: "Case studies",
    description:
      "Client outcome cards shown on the home page and the Case Studies page. Cards appear on the site in the order listed here (use the arrows to reorder).",
    fields: [
      {
        path: "caseStudies",
        label: "Case studies",
        type: "itemList",
        itemTitleKey: "outcome",
        addLabel: "Add case study",
        generatedIdKey: "id",
        itemFields: [
          { key: "sector", label: "Sector", type: "text", help: "e.g. International legal firm" },
          { key: "outcome", label: "Outcome (headline)", type: "text", help: "Short and punchy, e.g. Legislation scrapped." },
          { key: "outcomeSub", label: "Outcome detail", type: "textarea", rows: 3 },
          { key: "context", label: "Situation", type: "textarea", rows: 3 },
          { key: "challenge", label: "Challenge", type: "textarea", rows: 3 },
          { key: "approach", label: "Our approach", type: "textarea", rows: 3 },
          { key: "icon", label: "Icon", type: "select", options: caseStudyIconOptions },
        ],
      },
    ],
  },
  {
    slug: "faqs",
    title: "FAQs",
    description:
      "Questions and answers on the FAQ page and FAQ sections across the site.",
    fields: [
      {
        path: "faqs",
        label: "FAQs",
        type: "itemList",
        itemTitleKey: "question",
        addLabel: "Add FAQ",
        itemFields: [
          { key: "question", label: "Question", type: "text" },
          { key: "answer", label: "Answer", type: "textarea", rows: 5 },
        ],
      },
    ],
  },
];

export function getAdminSection(slug: string): AdminSection | undefined {
  return adminSections.find((section) => section.slug === slug);
}

/** Lead magnets are a keyed map, edited as one form group per key. */
export const leadMagnetFields: AdminItemField[] = [
  { key: "title", label: "Title", type: "text" },
  { key: "headline", label: "Headline (optional)", type: "text" },
  { key: "description", label: "Description", type: "textarea", rows: 4 },
  {
    key: "fileName",
    label: "PDF file name",
    type: "text",
    help: "The file must exist in the site's downloads folder. Ask 3P Digital to add new PDFs.",
  },
  { key: "available", label: "Available for download", type: "boolean" },
];
