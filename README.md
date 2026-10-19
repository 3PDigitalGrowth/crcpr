# planner-data

Storage for the forward planner at `/plan` on the CRC site. Not a code
branch and never deployed.

`planner.enc.json` is the whole plan, encrypted with AES-256-GCM. The key is
`PLANNER_KEY` in the Vercel project environment and is not in this repo.
The site reads and writes this file through the GitHub API, so every save
is a commit here. See `CMS-SETUP.md` on `main` for how the planner works.
