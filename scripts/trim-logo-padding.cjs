#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Crop transparent padding from PNG logos so each PNG's canvas tightly
 * fits the visible logo content. Adds a small uniform breathing-room
 * margin around the result.
 *
 * Why: several source logos (e.g. the-australian.png, daily-telegraph.png)
 * have ~80% empty vertical space around the artwork. When the renderer
 * sizes the whole PNG to the row height, the actual logo collapses to a
 * few pixels and reads as a vague blob. Cropping the padding fixes that.
 *
 * Usage:
 *   node scripts/trim-logo-padding.cjs <dir>          # in-place, every *.png
 *   node scripts/trim-logo-padding.cjs <in> <out>     # single file copy
 */

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const ALPHA_THRESHOLD = 12;
const PAD_RATIO = 0.04;

async function trim(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  let minX = width;
  let maxX = -1;
  let minY = height;
  let maxY = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = data[(y * width + x) * 4 + 3];
      if (a > ALPHA_THRESHOLD) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX < 0) {
    console.warn(`skip (no opaque pixels): ${inputPath}`);
    return;
  }

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  const padX = Math.max(2, Math.round(cropW * PAD_RATIO));
  const padY = Math.max(2, Math.round(cropH * PAD_RATIO));
  const left = Math.max(0, minX - padX);
  const top = Math.max(0, minY - padY);
  const right = Math.min(width, maxX + 1 + padX);
  const bottom = Math.min(height, maxY + 1 + padY);

  const buffer = await sharp(inputPath)
    .ensureAlpha()
    .extract({
      left,
      top,
      width: right - left,
      height: bottom - top,
    })
    .png({ compressionLevel: 9 })
    .toBuffer();

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, buffer);

  const reduction = (
    (1 - ((right - left) * (bottom - top)) / (width * height)) *
    100
  ).toFixed(0);
  console.log(
    `trimmed ${path.basename(inputPath)}: ${width}x${height} → ${right - left}x${bottom - top} (-${reduction}%)`,
  );
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error(
      "Usage: node scripts/trim-logo-padding.cjs <dir | in.png> [out.png]",
    );
    process.exit(1);
  }

  if (args.length === 1) {
    const target = args[0];
    const stat = fs.statSync(target);
    if (stat.isDirectory()) {
      const files = fs
        .readdirSync(target)
        .filter((f) => f.toLowerCase().endsWith(".png"));
      for (const f of files) {
        const p = path.join(target, f);
        await trim(p, p);
      }
    } else {
      await trim(target, target);
    }
  } else {
    await trim(args[0], args[1]);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
