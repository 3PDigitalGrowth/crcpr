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

### Creating the GitHub token

github.com → Settings → Developer settings → Fine-grained personal access
tokens → Generate new token:

- Resource owner: `3PDigitalGrowth`, repository access: only `crcpr`
- Permissions: **Contents: Read and write** (nothing else)
- Expiry: 1 year (diarise the renewal)

Add it to Vercel as `GITHUB_TOKEN` and redeploy.

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
