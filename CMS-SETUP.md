# CRC PR content management (Sanity CMS)

The site has a full CMS backend built on Sanity. The client edits content in a
studio embedded at **https://crcpr.com.au/studio**; publishing triggers a
rebuild and changes go live in about 2 minutes.

## How it works

- Content lives in a Sanity project (cloud). The studio UI is part of this
  site at `/studio`, so there is no separate login portal to build or host.
- At build time, `scripts/pull-cms.mjs` (wired into `prebuild`) pulls all
  published content and writes:
  - `content/cms/site.json`: deep-merged over the static defaults in
    `config/site.ts`. Every component that reads `siteConfig` picks up CMS
    content automatically.
  - `content/cms/insights/*.mdx`: CMS-authored articles. These win over the
    static files in `content/insights/` when slugs collide.
- If the CMS is not configured or unreachable, the pull script exits cleanly
  and the site builds from the static defaults in the repo. The CMS can never
  break the site.

## What the client can edit

| Studio section | Drives |
| --- | --- |
| Site settings | Phone, address, emails, ABN, social links, firm stats, sectors list, Lyall's profile and quote, media reach snapshot |
| Insights (articles) | The Insights listing and article pages (markdown body) |
| Case studies | Case study cards site-wide |
| FAQs | FAQ page and FAQ sections |
| Lead magnets | Titles, descriptions and availability of the PDF downloads |

Bespoke page copy (service page sections, About page narrative, etc.) is still
in code; that is phase 2 if wanted.

## One-time setup (3P Digital)

1. **Create the Sanity project**
   - `npx sanity login` (create a free account with alex@3pdigital.com.au)
   - Create a project at https://www.sanity.io/manage (or `npx sanity projects create`).
     Note the project ID. Create a dataset named `production`, visibility **public**.
2. **Environment variables** (in `.env.local` locally and in Vercel → Project → Settings → Environment Variables):
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<project id>
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
   Only if the dataset is made private, also add `SANITY_API_READ_TOKEN` (a
   read token from manage.sanity.io → API → Tokens).
3. **CORS** (manage.sanity.io → API → CORS origins), with credentials allowed:
   - `https://crcpr.com.au`
   - `https://*.vercel.app` (or the exact preview domain)
   - `http://localhost:3000`
4. **Seed the dataset with the current site content**
   ```
   npm run cms:seed
   npx sanity dataset import sanity-seed.ndjson production --replace
   ```
5. **Auto-deploy on publish**
   - Vercel → Project → Settings → Git → Deploy Hooks → create one for `main`, copy the URL.
   - manage.sanity.io → API → Webhooks → create webhook, paste the deploy hook
     URL, trigger on create/update/delete, dataset `production`.
   - Without this webhook, published edits only appear on the next deploy.
6. **Invite the client**: manage.sanity.io → Members → invite with the
   **Editor** role. They log in at crcpr.com.au/studio with that account.
7. Redeploy the site once so the env vars take effect.

## Client workflow

1. Go to crcpr.com.au/studio and log in.
2. Edit content. Drafts save automatically and change nothing on the site.
3. Press **Publish**. The site rebuilds and the change is live in ~2 minutes.

## Notes for developers

- `npm run cms:pull` refreshes local content from Sanity (needs the env vars).
  `content/cms/site.json` is tracked with `{}` as the neutral default;
  `content/cms/insights/` is gitignored (pure build artifact).
- Article bodies are markdown compiled by next-mdx-remote. Stray `<` or `{`
  characters in an article can fail the MDX compile; write them as `&lt;` or
  wrap in backticks.
- Adding a new lead magnet: add the key + PDF in code first, then it appears
  in the studio's key dropdown.
- Studio schemas live in `sanity/schemaTypes/`. The pull script maps CMS
  fields onto the `siteConfig` shape; keep the two in sync when adding fields.
