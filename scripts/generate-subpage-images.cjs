/**
 * Generates warm-toned placeholder WebP files for subpage heroes and mid-page images.
 * Replace with editorial photography when available (see CRC_PR_SiteWide_Image_Generation_Cursor_Prompt).
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..", "public", "images");

function warmNoise(width, height, seed) {
  const buf = Buffer.alloc(width * height * 3);
  let s = seed >>> 0;
  const rnd = () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 3;
      const vx = x / width - 0.5;
      const vy = y / height - 0.5;
      const vignette = 1 - Math.sqrt(vx * vx + vy * vy) * 0.5;
      const warm = (x / width + y / height) * 0.35;
      const r = (35 + rnd() * 55 + warm * 40) * vignette;
      const g = (50 + rnd() * 45 + warm * 35) * vignette;
      const b = (75 + rnd() * 50 + warm * 25) * vignette;
      buf[i] = Math.min(255, r);
      buf[i + 1] = Math.min(255, g);
      buf[i + 2] = Math.min(255, b);
    }
  }
  return buf;
}

async function writeWebp(buf, w, h, relPath, seed) {
  const outPath = path.join(root, relPath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  await sharp(buf, { raw: { width: w, height: h, channels: 3 } })
    .webp({ quality: 85 })
    .toFile(outPath);
  console.log("wrote", relPath);
}

async function main() {
  const heroes = [
    ["services/corporate-communications/hero.webp", 1920, 1080, 11],
    ["services/reputation-management/hero.webp", 1920, 1080, 22],
    ["services/issues-management/hero.webp", 1920, 1080, 33],
    ["services/crisis-communications/hero.webp", 1920, 1080, 44],
    ["services/media-strategy/hero.webp", 1920, 1080, 55],
    ["services/digital-media/hero.webp", 1920, 1080, 66],
    ["clients/corporate/hero.webp", 1920, 1080, 77],
    ["clients/government/hero.webp", 1920, 1080, 88],
    ["clients/industry-associations/hero.webp", 1920, 1080, 99],
    ["clients/schools-faith/hero.webp", 1920, 1080, 101],
    ["clients-index/hero.webp", 1920, 1080, 202],
    ["about/hero.webp", 1920, 1080, 303],
    ["crisis/hero.webp", 1920, 1080, 404],
    ["pacific/hero.webp", 1920, 1080, 505],
    ["media-training/hero.webp", 1920, 1080, 606],
    ["contact/hero.webp", 1920, 1080, 707],
    ["faq/hero.webp", 1920, 1080, 808],
    ["case-studies/hero.webp", 1920, 1080, 909],
    ["insights/hero.webp", 1920, 1080, 1111],
  ];

  const mids = [
    ["services/corporate-communications/mid-what-we-do.webp", 1200, 800, 12],
    ["services/reputation-management/mid-strategy.webp", 1200, 800, 23],
    ["services/issues-management/mid-corridor.webp", 1200, 800, 34],
    ["services/crisis-communications/mid-phone.webp", 1200, 900, 45],
    ["services/media-strategy/mid-prep.webp", 1200, 800, 56],
    ["clients/corporate/mid-office.webp", 1200, 800, 78],
    ["clients/industry-associations/mid-lectern.webp", 1200, 800, 100],
    ["clients/industry-associations/mid-boardroom-after.webp", 1200, 900, 112],
    ["clients/schools-faith/mid-chapel.webp", 1200, 800, 113],
    ["about/mid-journalism.webp", 1200, 800, 314],
    ["crisis/mid-arriving.webp", 1200, 800, 415],
    ["pacific/mid-meeting-house.webp", 1200, 800, 516],
    ["pacific/mid-harbour.webp", 1200, 900, 617],
  ];

  for (const [rel, w, h, seed] of heroes) {
    const buf = warmNoise(w, h, seed);
    await writeWebp(buf, w, h, rel, seed);
  }
  for (const [rel, w, h, seed] of mids) {
    const buf = warmNoise(w, h, seed);
    await writeWebp(buf, w, h, rel, seed);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
