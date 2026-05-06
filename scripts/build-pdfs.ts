// Render all CRC PR free-resource PDFs to public/downloads/.
// Run with: npm run pdfs:build
import { mkdir } from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToFile } from "@react-pdf/renderer";

import { CorporateCommsChecklistDocument } from "./pdfs/corporate-communications-checklist";
import { FiveStepsPublicVoiceDocument } from "./pdfs/five-steps-public-voice";
import { CrisisReadinessChecklistDocument } from "./pdfs/crisis-readiness-checklist";

async function main() {
  const outDir = path.join(process.cwd(), "public", "downloads");
  await mkdir(outDir, { recursive: true });

  const targets = [
    {
      file: "crcpr-corporate-communications-checklist.pdf",
      Component: CorporateCommsChecklistDocument,
    },
    {
      file: "crcpr-5-steps-public-voice.pdf",
      Component: FiveStepsPublicVoiceDocument,
    },
    {
      file: "crcpr-crisis-readiness-checklist.pdf",
      Component: CrisisReadinessChecklistDocument,
    },
  ];

  for (const { file, Component } of targets) {
    const outPath = path.join(outDir, file);
    process.stdout.write(`Rendering ${file}... `);
    await renderToFile(React.createElement(Component), outPath);
    process.stdout.write("done\n");
  }

  console.log(`\nAll PDFs written to ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
