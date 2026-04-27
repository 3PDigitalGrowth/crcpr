#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Convert near-white backgrounds in PNG logos to transparent alpha.
 * Usage: node scripts/transparentize-logos.cjs <input> <output>
 */

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const THRESHOLD = 235; // r,g,b all >= this → treated as background
const FEATHER_LO = 215; // partial transparency between FEATHER_LO and THRESHOLD

async function transparentize(inputPath, outputPath) {
  const image = sharp(inputPath).ensureAlpha();
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  if (channels !== 4) {
    throw new Error(`Expected 4 channels (RGBA), got ${channels}`);
  }

  const out = Buffer.from(data);
  const total = width * height;
  for (let i = 0; i < total; i++) {
    const o = i * 4;
    const r = out[o];
    const g = out[o + 1];
    const b = out[o + 2];
    const minRGB = Math.min(r, g, b);

    if (minRGB >= THRESHOLD) {
      out[o + 3] = 0;
    } else if (minRGB > FEATHER_LO) {
      const t = (minRGB - FEATHER_LO) / (THRESHOLD - FEATHER_LO);
      const newAlpha = Math.round(out[o + 3] * (1 - t));
      out[o + 3] = newAlpha;
    }
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
}

async function main() {
  const [, , inputArg, outputArg] = process.argv;
  if (!inputArg || !outputArg) {
    console.error(
      "Usage: node scripts/transparentize-logos.cjs <input.png> <output.png>",
    );
    process.exit(1);
  }
  await transparentize(inputArg, outputArg);
  console.log(`Wrote transparent PNG: ${outputArg}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
