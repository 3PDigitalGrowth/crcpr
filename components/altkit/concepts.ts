/**
 * The homepage directions built out as small reviewable sites on the shared
 * kit: the four the client shortlisted (Lyall, 20 Oct 2026) and three new
 * directions from the 5 Nov 2026 design research
 * (docs/design-refs/2026-11-05-design-refs.md). Everything a page needs to
 * know about "which site am I on" comes from here.
 */

export type ConceptId = "alt1" | "alt2" | "alt3" | "alt9" | "alt13" | "alt14" | "alt15";
export type Theme = "dark" | "white";

export type Concept = {
  id: ConceptId;
  name: string;
  /** Route prefix every internal link on the concept is built from. */
  base: `/${ConceptId}`;
  defaultTheme: Theme;
  /** Whole page renders dark in the dark theme (not just the deep bands). */
  darkBase?: boolean;
  /** Header and footer stay on the light canvas in the dark theme. */
  lightChrome?: boolean;
};

export const CONCEPTS: Record<ConceptId, Concept> = {
  alt1: { id: "alt1", name: "Signal", base: "/alt1", defaultTheme: "dark" },
  alt2: { id: "alt2", name: "Chambers", base: "/alt2", defaultTheme: "dark", lightChrome: true },
  alt3: { id: "alt3", name: "Ember", base: "/alt3", defaultTheme: "dark", darkBase: true },
  alt9: { id: "alt9", name: "Gallery", base: "/alt9", defaultTheme: "white" },
  alt13: { id: "alt13", name: "Letterhead", base: "/alt13", defaultTheme: "white" },
  alt14: { id: "alt14", name: "Private Office", base: "/alt14", defaultTheme: "dark", lightChrome: true },
  alt15: { id: "alt15", name: "Linework", base: "/alt15", defaultTheme: "dark" },
};

/** localStorage key for a concept's remembered background. */
export function themeKey(id: ConceptId) {
  return `kit-theme-${id}`;
}

export const SHORTLIST: ConceptId[] = ["alt1", "alt2", "alt3", "alt9"];

/** Round three: researched against Lyall's feedback (5 Nov 2026). */
export const ROUND_THREE: ConceptId[] = ["alt13", "alt14", "alt15"];

export type Routes = {
  home: string;
  insights: string;
  crisis: string;
  article: (slug: string) => string;
};

export function routesFor(base: string): Routes {
  return {
    home: base,
    insights: `${base}/insights`,
    crisis: `${base}/services/crisis-communications`,
    article: (slug) => `${base}/insights/${slug}`,
  };
}
