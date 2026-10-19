# CRC PR content editor (/admin)

The site has a custom-built content editor at **https://crcpr.com.au/admin**.
The client logs in with a shared password, edits content in plain forms, and
every save publishes automatically: the save is committed to this GitHub repo,
Vercel redeploys, and the change is live in about 2 minutes.

No third-party CMS. Content lives in the repo, so every client edit is a git
commit that can be reviewed or reverted.

## How it works

- `config/site.ts` holds the static defaults for all site content.
- The editor writes overrides to `content/cms/site.json` (committed via the
  GitHub API). `siteConfig` deep-merges that file over the defaults at build
  time, so every component picks up edits with no code changes.
- Articles are MDX files in `content/insights/`; the editor creates, edits
  and deletes them directly. Article bodies are validated (MDX compile) before
  save so a bad character can never break the production build.
- Images upload to `public/images/uploads/` and are referenced by path.
- Auth: shared password, HMAC-signed httpOnly session cookie (7 days).

## Environment variables (Vercel → Settings → Environment Variables)

| Variable | Required | Purpose |
| --- | --- | --- |
| `ADMIN_PASSWORD` | yes | The shared client login password. Make it long. Rotating it logs everyone out. |
| `GITHUB_TOKEN` | yes | Fine-grained PAT that can read/write repo contents (see below). Saves fail without it. |
| `GITHUB_REPO` | no | Defaults to `3PDigitalGrowth/crcpr`. |
| `GITHUB_BRANCH` | no | Defaults to `main`. |
| `ADMIN_SESSION_SECRET` | no | Set only if you want sessions to survive password rotation. |
| `PLANNER_KEY` | for /plan | Encryption key for the forward planner's data. Never rotate it without re-encrypting the file. |

### Creating the GitHub token

github.com → Settings → Developer settings → Fine-grained personal access
tokens → Generate new token:

- Resource owner: `3PDigitalGrowth`, repository access: only `crcpr`
- Permissions: **Contents: Read and write** (nothing else)
- Expiry: 1 year (diarise the renewal)

Add it to Vercel as `GITHUB_TOKEN` and redeploy.

## Visual page editor (/admin/editor)

"Edit pages visually" in the admin loads the live site in a frame. Every
tagged text (dashed gold outline) is editable in place by clicking it; tagged
images open an image picker fed from the uploads library. Save and publish
commits all pending edits in one go; Undo all reverts unsaved edits.

- Tagging: wrap copy in `<T id="page.section.key">Default</T>` from
  `components/editable.tsx` (client or server components). Existing
  siteConfig values use `bind("path.to.value")`; images use `imgBind(id)` /
  `imgBindPath(path)`. Currently tagged: the full homepage, case study cards,
  FAQ items (full-list renders) and testimonials. Other pages need the same
  mechanical tagging to become inline-editable.
- Overrides store in `content/cms/site.json` under `pageCopy` (flat map,
  key = copy id) or at the bound siteConfig path (arrays are materialised in
  full so unedited items survive the merge).
- The in-page runtime (`components/admin/edit-runtime.ts`) only loads inside
  the editor iframe; public visitors never download it.

## What the client can edit

| Editor page | Drives |
| --- | --- |
| Contact and business details | Phone, address, emails, ABN, social links |
| Stats and sectors | Firm stats, sectors list |
| Lyall Mercer profile | Bio, quote, media outlets, portrait image paths |
| Media reach snapshot | The anonymised monthly coverage example |
| Case studies | Outcome cards site-wide (add, edit, remove, reorder) |
| FAQs | FAQ page and sections (add, edit, remove, reorder) |
| Downloads (lead magnets) | PDF titles, descriptions, on/off switches |
| Insights articles | Full article publishing (markdown body, images) |
| Images | Upload images, copy paths |

Bespoke page copy (service page sections, About narrative) is still code:
phase 2 if wanted.

## Client workflow

1. Go to crcpr.com.au/admin and log in with the shared password.
2. Edit, press "Save and publish".
3. Live in about 2 minutes.

## Forward planner (/plan)

A shared monthly marketing plan for CRC and My PR Partner, at `/plan`. Same
login as the editor. After logging in, each person picks their name (Lyall,
Barbara, Alex, Hannah); the name only labels notes and sign-offs.

- **Direction:** per month and channel (Blog articles, Cold email, Email
  nurture, Social), CRC and 3P each write their view in their own column.
  One agreed line per channel counts as agreed once someone from each side
  ticks it. Editing the line clears the ticks.
- **Calendar:** every piece sits on the day it goes out, with a status stamp:
  Idea, Drafting, With CRC, Cleared, Out, Pulled. CRC says go ahead and
  clears; 3P sends for sign-off (after ticking the red-lines check) and marks
  pieces out. CRC pieces are Lyall's to clear and never clear on silence.
  Changing the wording of a cleared piece sends it back to CRC.
- **Ground rules:** the red lines plus the My PR Partner sign-off settings
  (approver, and whether a piece clears after five business days of
  silence). Only CRC can change the settings.

Storage: `planner.enc.json` on the `planner-data` branch, written through
the GitHub contents API with the same `GITHUB_TOKEN`. This repo is public,
so the file is encrypted (AES-256-GCM) with `PLANNER_KEY`, a 32-byte base64
key held in Vercel (production) and in 3P's local env file, never in the
repo. Commit messages on the branch are generic for the same reason; the
who-did-what history lives inside the encrypted file. `vercel.json` stops
the branch from deploying, so planner saves never rebuild the site. Saves
retry when two people save at once. Locally without a token it uses plain
`.planner-data/planner.json` (gitignored). Rules and permissions live in
`lib/planner/model.ts`. Losing `PLANNER_KEY` means losing the plan, so keep
the local copy.

## Notes for developers

- Every admin save is a commit authored by the token's account with message
  "Content update via admin: ...". Revert one by reverting the commit.
- Local dev without `GITHUB_TOKEN` writes straight to the working tree
  (handy for testing the editor offline). Set `ADMIN_PASSWORD` in `.env.local`.
- Section forms are schema-driven: `config/adminSections.ts` defines fields
  mapped to `siteConfig` dot-paths. New editable fields are usually just a new
  entry there.
- After the client edits in production, `git pull` before working locally so
  you do not build on stale content.
