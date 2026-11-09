import {
  Archivo,
  Archivo_Black,
  Figtree,
  Hanken_Grotesk,
  Instrument_Sans,
  Libre_Franklin,
  Newsreader,
  Sora,
} from "next/font/google";
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
/* Round three. Newsreader is a sturdy text serif (not a tall display cut). */
const letterhead = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--kit-display",
  adjustFontFallback: false,
});
const privateOffice = Libre_Franklin({ subsets: ["latin"], weight: ["300", "400", "500"], display: "swap", variable: "--kit-display" });
const linework = Instrument_Sans({ subsets: ["latin"], weight: ["500", "600"], display: "swap", variable: "--kit-display" });

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
  alt13: letterhead.variable,
  alt14: privateOffice.variable,
  alt15: linework.variable,
};

export function fontClasses(id: ConceptId) {
  return `${DISPLAY[id]} ${body.variable}`;
}
