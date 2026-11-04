/**
 * The four homepage directions the client shortlisted (Lyall, 20 Oct 2026),
 * each built out as a small reviewable site on the shared kit. Everything a
 * page needs to know about "which site am I on" comes from here.
 */

export type ConceptId = "alt1" | "alt2" | "alt3" | "alt9";
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
};

/** localStorage key for a concept's remembered background. */
export function themeKey(id: ConceptId) {
  return `kit-theme-${id}`;
}

export const SHORTLIST: ConceptId[] = ["alt1", "alt2", "alt3", "alt9"];

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
