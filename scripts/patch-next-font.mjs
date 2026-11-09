// Runs before every `next build` (see package.json).
//
// Since early November 2026 Google Fonts serves some font files from extension-less URLs
// (https://fonts.gstatic.com/l/font?kit=...), for Hanken Grotesk, Libre Franklin and Newsreader
// among others. next/font in Next 14.2.x reads the file extension with a regex that returns null
// for those URLs, so a fresh build fails with
//   TypeError: Cannot read properties of null (reading '1')   (next/font google loader)
// Builds with a warm font cache still pass, which hides the problem locally.
//
// This defaults those files to woff2, which is what Google returns to the Chrome user agent
// next/font sends. Idempotent. Remove it once Next is upgraded to a version that handles them.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const file = join(process.cwd(), "node_modules/next/dist/compiled/@next/font/dist/google/loader.js");
const src = readFileSync(file, "utf8");
const before = "const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)[1];";
const after = "const ext = (/\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl) || [null, \"woff2\"])[1];";

if (src.includes(after)) {
  console.log("patch-next-font: already applied");
} else if (src.includes(before)) {
  writeFileSync(file, src.replace(before, after));
  console.log("patch-next-font: applied");
} else {
  console.error("patch-next-font: target line not found; check the installed Next version");
  process.exit(1);
}
