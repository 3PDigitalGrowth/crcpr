import { Archivo, Archivo_Black, Figtree, Hanken_Grotesk, Sora } from "next/font/google";
import type { ConceptId } from "./concepts";

/*
 * Each concept keeps the display face it was approved with. The client asked
 * for nothing tall or skinny, so all four are wide, sturdy faces. Every
 * display font writes the same --kit-display variable; only one is mounted
 * per page, on that concept's root.
 */

const signal = Archivo_Black({ subsets: ["latin"], weight: "400", display: "swap", variable: "--kit-display" });
const chambers = Archivo({ subsets: ["latin"], weight: ["600", "700"], display: "swap", variable: "--kit-display" });
const ember = Sora({ subsets: ["latin"], weight: ["600", "700"], display: "swap", variable: "--kit-display" });
const gallery = Figtree({ subsets: ["latin"], weight: ["300", "400", "500"], display: "swap", variable: "--kit-display" });

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--kit-body",
});

const DISPLAY: Record<ConceptId, string> = {
  alt1: signal.variable,
  alt2: chambers.variable,
  alt3: ember.variable,
  alt9: gallery.variable,
};

export function fontClasses(id: ConceptId) {
  return `${DISPLAY[id]} ${body.variable}`;
}
