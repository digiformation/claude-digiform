# Dev Process & Documentation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add CLAUDE.md, README.md, .env.example, runbooks, and GitHub branch protection to all three digiform.gr portfolio repos so every future Claude session has instant context and all production changes flow through a PR review gate.

**Architecture:** Pure file creation and GitHub API calls — no application code. Tasks 1–4 push directly to `main` (branch protection not yet active). Task 5 enables branch protection last, so all subsequent work must use feature branches and PRs.

**Tech Stack:** Git, GitHub CLI (`gh`), PowerShell/Bash

## Global Constraints

- All repos are under the `digiformation` GitHub org
- Repo remotes: `digiformation/claude-digiform`, `digiformation/ionian-sails-app`, `digiformation/aegean-boatworks-app`
- Vercel projects: `digiform`, `ionian-sails-app`, `aegean-boatworks`
- Supabase project ID: `modjhzgjpqfygqipretd`
- Tasks 1–4 MUST complete before Task 5 (branch protection blocks direct push to main)
- Runbooks live in `digiform/docs/runbooks/` (committed to the digiform repo, not floating on disk)

---

### Task 1: CLAUDE.md for digiform (main website)

**Files:**
- Create: `digiform/CLAUDE.md`

**Interfaces:**
- Produces: AI session briefing for the digiform.gr marketing website repo

- [ ] **Step 1: Write the file**

Create `C:\Users\imitrushi\OneDrive\home\github\digiform-gr\digiform\CLAUDE.md` with this exact content:

```markdown
# digiform.gr — Marketing Website

**Live:** https://digiform.gr
**Repo:** digiformation/claude-digiform → Vercel project: `digiform`

## Stack
Next.js 16 · React 19 · Tailwind CSS 4 · shadcn/ui · TypeScript
Package manager: npm

## Local dev
```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # verify production build locally
```

## Environment variables
None required.

## Key paths
```
app/                        pages (Next.js App Router)
app/case-studies/           case study index + individual pages
components/landing/         all homepage/landing UI components
public/                     static assets
docs/runbooks/              step-by-step operational guides
```

## Common tasks

**Add a case study:**
1. Add entry to `app/case-studies/page.tsx` → `caseStudies` array
   Fields: `client`, `sector`, `location`, `headline`, `stats`, `href`, `tags`, `hasDemo`
2. Create `app/case-studies/[client-slug]/page.tsx`
   Sections: challenge, process, solution, demo callout (if hasDemo), results, quote, CTA
3. If a demo app exists, set demo link to `https://[client].digiform.gr`
4. Open PR → merge → Vercel auto-deploys in ~60 seconds

**Update landing page content:**
Edit components in `components/landing/`

## Deploy process
Push to a feature branch → open PR on GitHub → review diff → merge → Vercel auto-deploys.
Never push directly to `main`.
```

- [ ] **Step 2: Verify the file looks correct**

Open `digiform/CLAUDE.md` and confirm all sections are present: Live URL, Repo, Stack, Local dev, Environment variables, Key paths, Common tasks, Deploy process.

- [ ] **Step 3: Commit and push**

```bash
cd C:\Users\imitrushi\OneDrive\home\github\digiform-gr\digiform
git add CLAUDE.md
git commit -m "docs: add CLAUDE.md session briefing"
git push
```

Expected: push succeeds, no errors. Vercel will not trigger a new deployment (no app files changed).

---

### Task 2: CLAUDE.md + README.md for ionian-sails-app

**Files:**
- Create: `ionian-sails-app/CLAUDE.md`
- Create: `ionian-sails-app/README.md`

**Interfaces:**
- Produces: AI session briefing + human project card for the Ionian Sails demo repo

- [ ] **Step 1: Write CLAUDE.md**

Create `C:\Users\imitrushi\OneDrive\home\github\digiform-gr\ionian-sails-app\CLAUDE.md`:

```markdown
# Ionian Sails — Yacht Charter PWA Demo

**Live:** https://ionian-sails.digiform.gr
**Repo:** digiformation/ionian-sails-app → Vercel project: `ionian-sails-app`
**Case study:** https://digiform.gr/case-studies/ionian-sails

## Stack
Next.js 16 · React 19 · Tailwind CSS 4 · shadcn/ui (subset) · TypeScript
Package manager: npm

## Local dev
```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # verify production build locally
```

## Environment variables
None required — all data is hardcoded mock data in `lib/data.ts`.

## Key paths
```
app/                        pages (Next.js App Router)
app/fleet/                  yacht listing page
app/book/                   booking flow
app/dashboard/              charter operator dashboard
app/my-bookings/            customer bookings view
lib/data.ts                 ALL demo data (yachts, customers, bookings)
lib/types.ts                TypeScript types
components/                 UI components
```

## Common tasks

**Update demo data:**
Edit `lib/data.ts` directly — yachts, customers, and bookings are all hardcoded arrays.

**Add a page:**
Create `app/[page-name]/page.tsx`

## Deploy process
Push to a feature branch → open PR on GitHub → review diff → merge → Vercel auto-deploys.
Never push directly to `main`.
```

- [ ] **Step 2: Write README.md**

Create `C:\Users\imitrushi\OneDrive\home\github\digiform-gr\ionian-sails-app\README.md`:

```markdown
# Ionian Sails — Charter Booking Demo

Demo app for the [Ionian Sails case study](https://digiform.gr/case-studies/ionian-sails) at digiform.gr.
**Live:** https://ionian-sails.digiform.gr

## What it is
Yacht charter booking PWA for a fictional charter company operating in the Ionian Islands.
Fully static mock data — no backend required.

## Stack
Next.js 16 · TypeScript · Tailwind CSS 4

## Local dev
```sh
npm install
npm run dev
```
```

- [ ] **Step 3: Verify both files**

Open both files. Confirm CLAUDE.md has all sections and README.md is accurate (live URL, stack, dev command).

- [ ] **Step 4: Commit and push**

```bash
cd C:\Users\imitrushi\OneDrive\home\github\digiform-gr\ionian-sails-app
git add CLAUDE.md README.md
git commit -m "docs: add CLAUDE.md session briefing and README"
git push
```

Expected: push succeeds. Vercel will not redeploy (no app files changed).

---

### Task 3: CLAUDE.md + README.md + .env.example for aegean-boatworks-app

**Files:**
- Create: `aegean-boatworks-app/CLAUDE.md`
- Modify: `aegean-boatworks-app/README.md` (replace generic Turborepo template)
- Create: `aegean-boatworks-app/apps/boatyard/.env.example`

**Interfaces:**
- Produces: AI session briefing + human project card + env var template for the Aegean Boatworks demo repo

- [ ] **Step 1: Write CLAUDE.md**

Create `C:\Users\imitrushi\OneDrive\home\github\digiform-gr\aegean-boatworks-app\CLAUDE.md`:

```markdown
# Aegean Boatworks — Boatyard Job Management Demo

**Live:** https://aegean-boatworks.digiform.gr
**Repo:** digiformation/aegean-boatworks-app → Vercel project: `aegean-boatworks`
**Case study:** https://digiform.gr/case-studies/aegean-boatworks

## Stack
Next.js 16 (Turbopack) · React 19 · Tailwind CSS 4 · Supabase · TypeScript
Monorepo: Turborepo + pnpm workspaces
Package manager: pnpm

## Local dev
```sh
# First time setup:
cp apps/boatyard/.env.example apps/boatyard/.env.local
# Edit .env.local — fill in Supabase keys (see Environment variables below)

pnpm install
pnpm turbo dev --filter=@digiform/boatyard    # http://localhost:3000

# Build check:
pnpm turbo run build --filter=@digiform/boatyard
```

## Environment variables
Add to `apps/boatyard/.env.local` (never commit this file):

```
NEXT_PUBLIC_SUPABASE_URL=       # Supabase dashboard → project → Settings → API → Project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # Supabase dashboard → project → Settings → API → anon key
SUPABASE_SERVICE_ROLE_KEY=      # Supabase dashboard → project → Settings → API → service_role key
```

Supabase project ID: `modjhzgjpqfygqipretd`

## Key paths
```
apps/boatyard/app/(app)/            pages behind the main app layout
apps/boatyard/app/(app)/jobs/       jobs list page + server actions
apps/boatyard/app/(app)/jobs/actions.ts  status advance server action
apps/boatyard/lib/supabase.ts       DB clients: createAdminClient() + createAnonClient()
apps/boatyard/lib/types.ts          JobWithBoat and other shared types
apps/boatyard/lib/database.types.ts auto-generated Supabase TypeScript types
packages/auth/                      auth helpers (shared across apps)
packages/db/                        DB schema types (shared across apps)
```

## Common tasks

**Update demo data:**
Use Supabase dashboard → Table Editor → `jobs`, `boats`, or `customers` tables.
Demo tenant ID: `00000000-0000-0000-0000-000000000001`

**Add a new page:**
Create `apps/boatyard/app/(app)/[page-name]/page.tsx`

**Add or modify a job status:**
Edit `STATUS_FLOW` in `apps/boatyard/app/(app)/jobs/actions.ts`
Also update the `status` column check constraint in Supabase if adding new values.

**Regenerate TypeScript types after schema change:**
```sh
npx supabase gen types typescript \
  --project-id modjhzgjpqfygqipretd \
  > apps/boatyard/lib/database.types.ts
```
Then fix any type errors that surface.

## Deploy process
Push to a feature branch → open PR on GitHub → review diff → merge → Vercel auto-deploys.
Never push directly to `main`.

## IMPORTANT — Windows deployment note
Never run `vercel build` locally on Windows and push the `.vercel/output` directory.
The local build embeds Windows absolute paths (`C:\Users\...`) into build artifacts,
which fail on Vercel's Linux servers. Always push code and let Vercel build it.
```

- [ ] **Step 2: Replace README.md**

Overwrite `C:\Users\imitrushi\OneDrive\home\github\digiform-gr\aegean-boatworks-app\README.md`:

```markdown
# Aegean Boatworks — Boatyard Management Demo

Demo app for the [Aegean Boatworks case study](https://digiform.gr/case-studies/aegean-boatworks) at digiform.gr.
**Live:** https://aegean-boatworks.digiform.gr

## What it is
Job management system for a fictional boatyard: track boats, customers, and service jobs
through a status pipeline (intake → in progress → waiting parts → ready → complete → invoiced).

## Stack
Next.js 16 · Supabase · Turborepo · pnpm · TypeScript · Tailwind CSS 4

## Local dev
```sh
cp apps/boatyard/.env.example apps/boatyard/.env.local
# Fill in Supabase keys from the project dashboard
pnpm install
pnpm turbo dev --filter=@digiform/boatyard
```
```

- [ ] **Step 3: Create .env.example**

Create `C:\Users\imitrushi\OneDrive\home\github\digiform-gr\aegean-boatworks-app\apps\boatyard\.env.example`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

- [ ] **Step 4: Verify all three files**

- `CLAUDE.md`: confirm Windows deployment warning is present, Supabase project ID is correct (`modjhzgjpqfygqipretd`), dev command uses `pnpm turbo`
- `README.md`: confirm it no longer mentions "Turborepo starter" template content
- `.env.example`: confirm it has exactly 3 lines, no actual values filled in

- [ ] **Step 5: Commit and push**

```bash
cd C:\Users\imitrushi\OneDrive\home\github\digiform-gr\aegean-boatworks-app
git add CLAUDE.md README.md apps/boatyard/.env.example
git commit -m "docs: add CLAUDE.md, update README, add .env.example"
git push
```

Expected: push succeeds. Vercel will not redeploy (no app files changed).

---

### Task 4: Portfolio runbooks

**Files:**
- Create: `digiform/docs/runbooks/add-case-study.md`
- Create: `digiform/docs/runbooks/add-demo-app.md`
- Create: `digiform/docs/runbooks/update-supabase-schema.md`

**Interfaces:**
- Produces: operational quick-reference guides committed to the digiform repo

- [ ] **Step 1: Write add-case-study.md**

Create `C:\Users\imitrushi\OneDrive\home\github\digiform-gr\digiform\docs\runbooks\add-case-study.md`:

```markdown
# Runbook: Add a Case Study

Use this when onboarding a new client engagement to the digiform.gr website.

## Repo
`digiformation/claude-digiform` — branch off `main`, open PR when done.

## Steps

### 1. Add the index entry

Edit `app/case-studies/page.tsx` → add to the `caseStudies` array:

```ts
{
  client: "Client Name",
  sector: "Industry",
  location: "City, Country",
  headline: "One-line description of the transformation",
  stats: [
    { value: "XX%", label: "admin reduction" },
    { value: "€XXk", label: "EU grant" },
    { value: "XX weeks", label: "engagement" },
  ],
  href: "/case-studies/client-slug",
  tags: ["Process Automation", "EU Funding", "..."],
  hasDemo: true,   // set to false if no live demo
},
```

### 2. Create the case study page

Create `app/case-studies/[client-slug]/page.tsx`.

Follow the structure of `app/case-studies/aegean-boatworks/page.tsx` as a template:
- **Challenge** section: 4–6 bullet points describing the problem
- **Process** section: 4–6 steps taken
- **Solution** section: 3–5 systems/outcomes delivered
- **Demo callout** (if `hasDemo: true`): link to `https://[client].digiform.gr`
- **Results** section: 3 stat cards (match the stats from step 1)
- **Quote** block: client testimonial with name and title
- **CTA** section: "Start your transformation" → contact link

### 3. Add fictional company disclaimer (if needed)

If the case study is a demo/fictional client, add a disclaimer banner at the top
(see `app/case-studies/ionian-sails/page.tsx` for the pattern).

### 4. Deploy

```sh
git checkout -b feature/case-study-[client-slug]
# make changes
git add app/case-studies/
git commit -m "feat: add [Client Name] case study"
git push -u origin feature/case-study-[client-slug]
# open PR on GitHub, review diff, merge
```

Vercel auto-deploys within ~60 seconds of merge.
```

- [ ] **Step 2: Write add-demo-app.md**

Create `C:\Users\imitrushi\OneDrive\home\github\digiform-gr\digiform\docs\runbooks\add-demo-app.md`:

```markdown
# Runbook: Add a New Demo App

Use this when building a new client demo application.
Template: copy `aegean-boatworks-app` as the starting point.

## Prerequisites
- `gh` CLI authenticated (`gh auth status`)
- `vercel` CLI authenticated (`vercel whoami`)
- Access to Supabase project (or create a new one)

## Steps

### 1. Copy the template repo locally

```sh
# From digiform-gr/
cp -r aegean-boatworks-app [client-name]-app
cd [client-name]-app
rm -rf .git .vercel .turbo
git init
git add .
git commit -m "Initial commit from aegean-boatworks-app template"
```

### 2. Create GitHub repo

```sh
gh repo create digiformation/[client-name]-app \
  --private \
  --description "[Client Name] demo app" \
  --source=. \
  --remote=origin \
  --push
```

### 3. Create Vercel project

```sh
vercel link --repo digiformation/[client-name]-app
# Follow prompts: new project, name = [client-name]
```

Then in Vercel dashboard → project → Settings → Git:
- Confirm GitHub integration is connected to `digiformation/[client-name]-app`
- Production branch: `main`

### 4. Set environment variables on Vercel

```sh
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
# Paste values from Supabase dashboard → project → Settings → API
```

### 5. Add custom domain

In Vercel dashboard → project → Settings → Domains:
- Add `[client-name].digiform.gr`
- Vercel will show a CNAME value

In Cloudflare (digiform.gr zone):
- Add CNAME record: `[client-name]` → `cname.vercel-dns.com`
- Proxy status: DNS only (grey cloud) — Vercel handles SSL

### 6. Enable branch protection

```sh
gh api --method PUT repos/digiformation/[client-name]-app/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  --input - <<'EOF'
{
  "required_status_checks": null,
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 0
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false
}
EOF
```

### 7. Add case study entry

Follow the `add-case-study` runbook to add the new client to digiform.gr.
```

- [ ] **Step 3: Write update-supabase-schema.md**

Create `C:\Users\imitrushi\OneDrive\home\github\digiform-gr\digiform\docs\runbooks\update-supabase-schema.md`:

```markdown
# Runbook: Update the Supabase Schema

Use this when adding columns, new tables, or changing constraints in the
Aegean Boatworks demo database.

## Supabase project
ID: `modjhzgjpqfygqipretd`
Dashboard: https://supabase.com/dashboard/project/modjhzgjpqfygqipretd

## Steps

### 1. Make the schema change

Option A — Supabase dashboard (simpler for small changes):
- Go to Table Editor → select table → Add column / Edit column
- Or go to SQL Editor and run your migration SQL directly

Option B — SQL Editor (required for constraints, indexes, new tables):
```sql
-- Example: add a column
ALTER TABLE jobs ADD COLUMN estimated_hours integer;

-- Example: add a new table
CREATE TABLE parts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid NOT NULL,
  job_id uuid REFERENCES jobs(id),
  name text NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

-- Always add RLS
ALTER TABLE parts ENABLE ROW LEVEL SECURITY;
```

### 2. Regenerate TypeScript types

Run from `aegean-boatworks-app/` root:

```sh
npx supabase gen types typescript \
  --project-id modjhzgjpqfygqipretd \
  > apps/boatyard/lib/database.types.ts
```

### 3. Fix type errors

```sh
pnpm turbo run build --filter=@digiform/boatyard
```

The build will surface any type errors caused by the schema change.
Fix them in the affected files before continuing.

### 4. Test locally

```sh
pnpm turbo dev --filter=@digiform/boatyard
```

Open http://localhost:3000 and verify the affected pages work correctly.

### 5. Commit and deploy via PR

```sh
git checkout -b feature/schema-[description]
git add apps/boatyard/lib/database.types.ts
# add any other changed files
git commit -m "feat: update schema — [description]"
git push -u origin feature/schema-[description]
# open PR, review, merge → Vercel auto-deploys
```

## Notes
- The demo tenant ID is `00000000-0000-0000-0000-000000000001`
- All queries in `createAdminClient()` bypass RLS (service role key)
- If you add new tables, seed demo data via SQL Editor for the demo tenant
```

- [ ] **Step 4: Verify the three runbooks**

Scan each file for accuracy:
- `add-case-study.md`: references `aegean-boatworks/page.tsx` as template ✓
- `add-demo-app.md`: contains the exact `gh api` branch protection command ✓
- `update-supabase-schema.md`: Supabase project ID is `modjhzgjpqfygqipretd` ✓

- [ ] **Step 5: Commit and push**

```bash
cd C:\Users\imitrushi\OneDrive\home\github\digiform-gr\digiform
git add docs/runbooks/
git commit -m "docs: add operational runbooks (add-case-study, add-demo-app, update-supabase-schema)"
git push
```

Expected: push succeeds.

---

### Task 5: Enable branch protection on all three repos

**Files:** None — GitHub API calls only.

**Important:** Run this task last. After completion, all changes to `main` across all three repos must go through a PR.

- [ ] **Step 1: Protect digiformation/claude-digiform**

```bash
gh api --method PUT repos/digiformation/claude-digiform/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  --input - <<'EOF'
{
  "required_status_checks": null,
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 0
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false
}
EOF
```

- [ ] **Step 2: Verify claude-digiform protection**

```bash
gh api repos/digiformation/claude-digiform/branches/main/protection \
  --jq '{pr_required: .required_pull_request_reviews.required_approving_review_count, force_push: .allow_force_pushes.enabled}'
```

Expected output:
```json
{
  "pr_required": 0,
  "force_push": false
}
```

- [ ] **Step 3: Protect digiformation/ionian-sails-app**

```bash
gh api --method PUT repos/digiformation/ionian-sails-app/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  --input - <<'EOF'
{
  "required_status_checks": null,
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 0
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false
}
EOF
```

- [ ] **Step 4: Verify ionian-sails-app protection**

```bash
gh api repos/digiformation/ionian-sails-app/branches/main/protection \
  --jq '{pr_required: .required_pull_request_reviews.required_approving_review_count, force_push: .allow_force_pushes.enabled}'
```

Expected output:
```json
{
  "pr_required": 0,
  "force_push": false
}
```

- [ ] **Step 5: Protect digiformation/aegean-boatworks-app**

```bash
gh api --method PUT repos/digiformation/aegean-boatworks-app/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  --input - <<'EOF'
{
  "required_status_checks": null,
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 0
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false
}
EOF
```

- [ ] **Step 6: Verify aegean-boatworks-app protection**

```bash
gh api repos/digiformation/aegean-boatworks-app/branches/main/protection \
  --jq '{pr_required: .required_pull_request_reviews.required_approving_review_count, force_push: .allow_force_pushes.enabled}'
```

Expected output:
```json
{
  "pr_required": 0,
  "force_push": false
}
```

- [ ] **Step 7: Confirm the workflow is live**

Try to push directly to main in any repo — it should be rejected:

```bash
cd C:\Users\imitrushi\OneDrive\home\github\digiform-gr\digiform
git commit --allow-empty -m "test: branch protection active"
git push
```

Expected: push is rejected with "protected branch hook declined" or similar.
Then clean up: `git reset HEAD~1`
