/**
 * Generates photoreal editorial WebP assets via Pollinations (flux) and saves under public/images/.
 * Style aligned with CRC_PR_SiteWide_Image_Generation_Cursor_Prompt.md
 *
 * Run: npm run images:editorial
 * Optional: set SKIP_EXISTING=1 to skip outputs that already exist (resume after rate limits).
 * Pollinations may return HTTP 429; script retries with backoff and 12s between images.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public", "images");

const STYLE =
  "Photorealistic editorial photography, warm natural lighting, colour grade with deep navy shadows and gold amber highlights, warm slightly desaturated midtones, candid not staged, professional sincere mood, no cold corporate blue stock look, no watermarks, no readable text or logos in frame.";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const BETWEEN_MS = 12000;
const skipExisting = process.env.SKIP_EXISTING === "1";

async function fetchImageBytes(url, maxAttempts = 8) {
  let lastStatus = 0;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const res = await fetch(url, { signal: AbortSignal.timeout(180000) });
    lastStatus = res.status;
    if (res.ok) {
      return Buffer.from(await res.arrayBuffer());
    }
    const wait =
      res.status === 429
        ? 45000 * attempt + Math.floor(Math.random() * 15000)
        : res.status >= 500
          ? 20000 * attempt
          : 5000 * attempt;
    if (attempt === maxAttempts) break;
    console.log(`\n  retry ${attempt}/${maxAttempts - 1} after HTTP ${res.status} in ${Math.round(wait / 1000)}s`);
    await sleep(wait);
  }
  throw new Error(`Pollinations failed after retries (last HTTP ${lastStatus})`);
}

/** @type {{ rel: string; w: number; h: number; seed: number; prompt: string }[]} */
const jobs = [
  {
    rel: "services/corporate-communications/hero.webp",
    w: 1920,
    h: 1080,
    seed: 101,
    prompt: `Empty modern Australian corporate boardroom, warm morning sunlight through tall windows, polished timber board table with documents and a water glass, Brisbane CBD skyline softly blurred outside, warm cream walls and navy accents, meeting about to begin, no people. ${STYLE}`,
  },
  {
    rel: "services/corporate-communications/mid-what-we-do.webp",
    w: 1200,
    h: 800,
    seed: 102,
    prompt: `Professional woman in her fifties wearing navy blazer at desk reviewing a printed communications brief, thoughtful expression, modern Australian office, strong window light from the left, shallow depth of field, documents in focus. ${STYLE}`,
  },
  {
    rel: "services/reputation-management/hero.webp",
    w: 1920,
    h: 1080,
    seed: 103,
    prompt: `Overhead angled view of polished timber desk with bound navy report booklet subtle gold foil, fountain pen, laptop with blurred news homepage on screen, ceramic coffee cup, warm morning light from the right, careful preparation mood, no readable headlines. ${STYLE}`,
  },
  {
    rel: "services/reputation-management/mid-strategy.webp",
    w: 1200,
    h: 800,
    seed: 104,
    prompt: `Glass walled meeting room inside Australian office, blurred silhouette at whiteboard drawing a diagram, warm corridor outside with timber wall panels, strategic analysis mood, amber and navy tones, face not visible. ${STYLE}`,
  },
  {
    rel: "services/issues-management/hero.webp",
    w: 1920,
    h: 1080,
    seed: 105,
    prompt: `Stack of Australian broadsheet newspapers on polished timber desk partly unfolded, warm morning light on paper edges, pen and reading glasses beside, news cycle mood, no legible headlines. ${STYLE}`,
  },
  {
    rel: "services/issues-management/mid-corridor.webp",
    w: 1200,
    h: 800,
    seed: 106,
    prompt: `Two business professionals walking together in modern office corridor seen from behind three-quarter angle, silhouettes toward large windows with warm daylight, one carries document folder, purposeful conversation, warm tones. ${STYLE}`,
  },
  {
    rel: "services/crisis-communications/hero.webp",
    w: 1920,
    h: 1080,
    seed: 107,
    prompt: `Dim conference room at night, single desk lamp casting warm pool of light on scattered papers open laptop and desk phone, handwriting on notepad not legible, rest of room fading into deep navy shadow, crisis war room intensity. ${STYLE}`,
  },
  {
    rel: "services/crisis-communications/mid-phone.webp",
    w: 1200,
    h: 900,
    seed: 108,
    prompt: `Mature hand with quality wristwatch reaching for ringing office desk phone, warm office light, shallow depth of field blurred background, urgent senior decision moment, no face. ${STYLE}`,
  },
  {
    rel: "services/media-strategy/hero.webp",
    w: 1920,
    h: 1080,
    seed: 109,
    prompt: `Behind professional video camera looking toward small modern TV studio, warm tungsten style lighting, microphone and field monitor in foreground, blurred interview chairs and softbox in background, controlled media environment. ${STYLE}`,
  },
  {
    rel: "services/media-strategy/mid-prep.webp",
    w: 1200,
    h: 800,
    seed: 110,
    prompt: `Senior professional in suit adjusting collar while holding cue card notes in office corridor before interview, warm practical lighting, candid editorial moment, face angled down toward notes. ${STYLE}`,
  },
  {
    rel: "services/digital-media/hero.webp",
    w: 1920,
    h: 1080,
    seed: 111,
    prompt: `Executive desk with large monitor showing blurred analytics charts, quality keyboard and mouse, timber desktop, warm desk lamp from the right, polished professional workspace not startup neon, navy and wood tones. ${STYLE}`,
  },
  {
    rel: "clients/corporate/hero.webp",
    w: 1920,
    h: 1080,
    seed: 112,
    prompt: `Exterior of established Australian commercial building mid-rise warm sandstone or render facade mature trees and landscaping brass plaque beside glass entry doors early morning golden light, no people, prosperous but not skyscraper. ${STYLE}`,
  },
  {
    rel: "clients/corporate/mid-office.webp",
    w: 1200,
    h: 800,
    seed: 113,
    prompt: `Managing director corner office leather chair behind polished timber desk laptop and folders wall with framed diploma certificates large window city glimpse warm late afternoon light empty chair inviting, small photo frame back facing camera. ${STYLE}`,
  },
  {
    rel: "clients/government/hero.webp",
    w: 1920,
    h: 1080,
    seed: 114,
    prompt: `Australian government heritage building sandstone facade columns wide steps Australian flag on pole late afternoon golden light on stone, dignified institutional architecture Canberra or state capital feel, no people. ${STYLE}`,
  },
  {
    rel: "clients/industry-associations/hero.webp",
    w: 1920,
    h: 1080,
    seed: 115,
    prompt: `Large conference room prepared for AGM long polished timber table leather chairs printed agendas notepads water glasses at each seat microphone lectern at head empty room warm ambient lighting. ${STYLE}`,
  },
  {
    rel: "clients/industry-associations/mid-lectern.webp",
    w: 1200,
    h: 800,
    seed: 116,
    prompt: `Speaker standing at lectern in hotel conference ballroom seen from behind beside speaker, audience rows softly out of focus warm stage lights authority and presentation, speaker silhouette. ${STYLE}`,
  },
  {
    rel: "clients/industry-associations/mid-boardroom-after.webp",
    w: 1200,
    h: 900,
    seed: 117,
    prompt: `Boardroom after meeting leather chairs pushed back papers pens coffee cups on long timber table warm sunset window light empty room productive session mood. ${STYLE}`,
  },
  {
    rel: "clients/schools-faith/hero.webp",
    w: 1920,
    h: 1080,
    seed: 118,
    prompt: `Australian independent school heritage red brick or sandstone building chapel spire or clock tower courtyard lawn mature trees dappled morning sun peaceful no students or people. ${STYLE}`,
  },
  {
    rel: "clients/schools-faith/mid-chapel.webp",
    w: 1200,
    h: 800,
    seed: 119,
    prompt: `Interior of school chapel rows of timber pews tall arched stained glass windows shafts of golden light on floor serene empty sacred space. ${STYLE}`,
  },
  {
    rel: "about/hero.webp",
    w: 1920,
    h: 1080,
    seed: 120,
    prompt: `Brisbane CBD skyline at golden hour from riverside park Story Bridge visible Brisbane River calm reflections warm amber sky established confident Queensland Australia. ${STYLE}`,
  },
  {
    rel: "about/mid-journalism.webp",
    w: 1200,
    h: 800,
    seed: 121,
    prompt: `Vintage journalist desk with old typewriter or stack of broadsheet newspapers notepad handwriting desk lamp warm sepia influenced light with navy shadows heritage newsroom mood editorial craft. ${STYLE}`,
  },
  {
    rel: "crisis/hero.webp",
    w: 1920,
    h: 1080,
    seed: 122,
    prompt: `Dark office at night smartphone on desk screen glow illuminating nearby objects wall clock reading about eleven oclock blurred deep navy shadows urgent night call atmosphere. ${STYLE}`,
  },
  {
    rel: "crisis/mid-arriving.webp",
    w: 1200,
    h: 800,
    seed: 123,
    prompt: `Senior executive walking briskly through bright corporate lobby toward glass doors carrying leather folio slight motion blur legs warm daylight purposeful arrival help is here face partly turned away. ${STYLE}`,
  },
  {
    rel: "pacific/hero.webp",
    w: 1920,
    h: 1080,
    seed: 124,
    prompt: `Aerial view Pacific island coastline turquoise lagoon white sand palm forest small coastal village rooftops golden hour tropical light expansive beautiful. ${STYLE}`,
  },
  {
    rel: "pacific/mid-meeting-house.webp",
    w: 1200,
    h: 800,
    seed: 125,
    prompt: `Pacific Islands community meeting house high pitched roof traditional carving details mixed modern materials surrounded by tropical palms warm late sun cultural architecture no people. ${STYLE}`,
  },
  {
    rel: "pacific/mid-harbour.webp",
    w: 1200,
    h: 900,
    seed: 126,
    prompt: `South Pacific harbour scene outrigger canoes tied near simple wharf turquoise water lush green volcanic hills background warm humid light traditional and modern together. ${STYLE}`,
  },
  {
    rel: "media-training/hero.webp",
    w: 1920,
    h: 1080,
    seed: 127,
    prompt: `Professional camcorder on tripod in training room projector screen two empty chairs like interview practice setup warm continuous lighting media coaching environment. ${STYLE}`,
  },
  {
    rel: "contact/hero.webp",
    w: 1920,
    h: 1080,
    seed: 128,
    prompt: `Ground floor entrance modern office tower Brisbane glass doors warm interior light visible brass building number subtle landscaping late afternoon sun welcoming professional. ${STYLE}`,
  },
  {
    rel: "faq/hero.webp",
    w: 1920,
    h: 1080,
    seed: 129,
    prompt: `Open leather notebook pen on polished desk desk lamp pool of light small stack of printed pages coffee cup nearby quiet considered conversation mood. ${STYLE}`,
  },
  {
    rel: "case-studies/hero.webp",
    w: 1920,
    h: 1080,
    seed: 130,
    prompt: `Australian Parliament House Canberra iconic grass roofline at dusk deep blue twilight sky warm interior lights glowing through windows dignified national governance. ${STYLE}`,
  },
  {
    rel: "insights/hero.webp",
    w: 1920,
    h: 1080,
    seed: 131,
    prompt: `Outdoor cafe table morning sun hands holding open broadsheet newspaper face cropped out or above frame staying informed executive routine warm tones. ${STYLE}`,
  },
  {
    rel: "clients-index/hero.webp",
    w: 1920,
    h: 1080,
    seed: 132,
    prompt: `Brisbane city elevated view mixing heritage sandstone buildings and modern towers golden hour long navy shadows warm light across rooftops breadth of sectors Australia. ${STYLE}`,
  },
];

async function main() {
  console.log(
    `Generating ${jobs.length} editorial images via Pollinations (flux)…${skipExisting ? " [SKIP_EXISTING=1]" : ""}`,
  );
  let written = 0;
  let skipped = 0;
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    const outPath = path.join(root, job.rel);
    if (skipExisting && fs.existsSync(outPath)) {
      const st = fs.statSync(outPath);
      if (st.size > 20000) {
        console.log(`[${i + 1}/${jobs.length}] ${job.rel} … skip (exists)`);
        skipped++;
        continue;
      }
    }
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(job.prompt)}?width=${job.w}&height=${job.h}&nologo=true&seed=${job.seed}&model=flux`;
    process.stdout.write(`[${i + 1}/${jobs.length}] ${job.rel} … `);
    try {
      const buf = await fetchImageBytes(url);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      await sharp(buf).webp({ quality: 88, effort: 4 }).toFile(outPath);
      console.log("ok");
      written++;
    } catch (e) {
      console.log("FAIL", e.message || e);
    }
    if (i < jobs.length - 1) await sleep(BETWEEN_MS);
  }
  console.log(
    `Done. ${written} generated, ${skipped} skipped, ${jobs.length - written - skipped} failed out of ${jobs.length}.`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
