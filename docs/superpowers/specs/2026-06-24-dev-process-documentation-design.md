# Dev Process & Documentation Design

**Date:** 2026-06-24
**Scope:** digiform.gr portfolio — main website + two demo apps
**Status:** Approved

## Problem

Three live projects, no documentation, no review gate before production. Every new Claude session starts from zero context. Changes go directly to `main` with no human checkpoint.

## Solution

Four artifacts:

1. `CLAUDE.md` in each repo — AI session briefing
2. `README.md` in each repo — human project card
3. Branch protection on all three repos — PR required before merging to `main`
4. Runbooks at `digiform-gr/docs/runbooks/` — step-by-step guides for infrequent operations

## Repositories in scope

| Repo | GitHub | Vercel project | Live URL |
|------|--------|----------------|----------|
| `digiform` | `digiformation/claude-digiform` | `digiform` | digiform.gr |
| `ionian-sails-app` | `digiformation/ionian-sails-app` | `ionian-sails-app` | ionian-sails.digiform.gr |
| `aegean-boatworks-app` | `digiformation/aegean-boatworks-app` | `aegean-boatworks` | aegean-boatworks.digiform.gr |

## Development workflow (post-implementation)

```
main (production — auto-deploys via Vercel on merge)
  └── feature/description   ← all work happens here
```

1. `git checkout -b feature/your-change`
2. Make and commit changes
3. `git push -u origin feature/your-change`
4. Open PR on GitHub, review the diff
5. Merge → Vercel deploys within ~60 seconds

## CLAUDE.md content spec

Each file lives at the repo root. Common sections across all three:

- One-line project description
- Live URL
- GitHub repo → Vercel project mapping
- Tech stack and package manager
- Local dev command(s)
- Environment variables (names + where to find values)
- Key directory map
- Common tasks with exact steps

### digiform

```
Project: digiform.gr marketing website
Live: https://digiform.gr
Repo: digiformation/claude-digiform → Vercel project: digiform

Stack: Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, TypeScript
Package manager: npm

Dev: npm run dev
Build: npm run build

No environment variables required.

Key paths:
  app/                        pages (App Router)
  app/case-studies/           case study index + individual pages
  components/landing/         all homepage/landing UI components
  public/                     static assets

Common tasks:
  Add a case study:
    1. Add entry to app/case-studies/page.tsx (caseStudies array)
    2. Create app/case-studies/[client-name]/page.tsx
  Update landing content: edit components in components/landing/
```

### ionian-sails-app

```
Project: Ionian Sails — yacht charter PWA demo
Live: https://ionian-sails.digiform.gr
Repo: digiformation/ionian-sails-app → Vercel project: ionian-sails-app

Stack: Next.js 16, React 19, Tailwind CSS 4, shadcn/ui (subset), TypeScript
Package manager: npm

Dev: npm run dev
Build: npm run build

No environment variables required — all data is hardcoded mock data.

Key paths:
  app/                        pages (App Router)
  lib/data.ts                 ALL demo data (yachts, customers, bookings)
  lib/types.ts                TypeScript types
  components/                 UI components

Common tasks:
  Update demo data: edit lib/data.ts directly
  Add a page: create app/[page-name]/page.tsx
```

### aegean-boatworks-app

```
Project: Aegean Boatworks — boatyard job management demo
Live: https://aegean-boatworks.digiform.gr
Repo: digiformation/aegean-boatworks-app → Vercel project: aegean-boatworks

Stack: Next.js 16 (Turbopack), React 19, Tailwind CSS 4, Supabase, TypeScript
Monorepo: Turborepo + pnpm workspaces

Dev:   pnpm turbo dev --filter=@digiform/boatyard   (from repo root)
Build: pnpm turbo run build --filter=@digiform/boatyard

Environment variables (add to apps/boatyard/.env.local):
  NEXT_PUBLIC_SUPABASE_URL       → Supabase project settings → API
  NEXT_PUBLIC_SUPABASE_ANON_KEY  → Supabase project settings → API
  SUPABASE_SERVICE_ROLE_KEY      → Supabase project settings → API
  (Supabase project: modjhzgjpqfygqipretd)

Key paths:
  apps/boatyard/app/(app)/        pages behind the app layout
  apps/boatyard/app/(app)/jobs/   jobs list + server actions
  apps/boatyard/lib/supabase.ts   DB client (admin + anon)
  apps/boatyard/lib/types.ts      shared types (JobWithBoat, etc.)
  packages/auth/                  auth helpers (shared package)
  packages/db/                    DB schema types (shared package)

Deployment note: Vercel builds on Linux — never run `vercel build`
locally on Windows and push the .vercel/output. Always push code and
let Vercel's servers build it.

Common tasks:
  Update demo data: Supabase dashboard → Table Editor → jobs/boats/customers
  Add a new page: create apps/boatyard/app/(app)/[page]/page.tsx
  Advance job status: edit STATUS_FLOW in apps/boatyard/app/(app)/jobs/actions.ts
```

## README content spec

### aegean-boatworks-app/README.md (replace generic Turborepo template)

```markdown
# Aegean Boatworks — Boatyard Management Demo

Demo app for the Aegean Boatworks case study at digiform.gr.
Live: https://aegean-boatworks.digiform.gr

## What it is
Job management for a fictional boatyard: track boats, customers,
and service jobs through a status pipeline
(intake → in progress → waiting parts → ready → complete → invoiced).

## Stack
Next.js 16 · Supabase · Turborepo · pnpm · TypeScript · Tailwind CSS 4

## Local dev
cp apps/boatyard/.env.example apps/boatyard/.env.local
# fill in Supabase keys from project settings
pnpm install
pnpm dev --filter=@digiform/boatyard
```

### ionian-sails-app/README.md (create from scratch)

```markdown
# Ionian Sails — Charter Booking Demo

Demo app for the Ionian Sails case study at digiform.gr.
Live: https://ionian-sails.digiform.gr

## What it is
Yacht charter booking PWA for a fictional charter company
operating in the Ionian Islands. Fully static mock data, no backend.

## Stack
Next.js 16 · TypeScript · Tailwind CSS 4

## Local dev
npm install
npm run dev
```

## Branch protection rules (all three repos)

Applied to the `main` branch:

| Rule | Setting |
|------|---------|
| Require pull request before merging | Yes |
| Required approvals | 0 (solo dev — PR is the review gate, no second human needed) |
| Dismiss stale reviews on new push | Yes |
| Require status checks to pass | No (no CI yet) |
| Allow force pushes | No |
| Allow deletion of `main` | No |

## Runbooks

Location: `digiform-gr/docs/runbooks/` (outside all repos — portfolio-level)

### add-case-study.md

Steps:
1. Add entry to `digiform/app/case-studies/page.tsx` (`caseStudies` array)
2. Create `digiform/app/case-studies/[slug]/page.tsx` with challenge, process, solution, results, quote, CTA
3. If demo exists, link to `https://[client].digiform.gr`
4. Commit, open PR, merge → auto-deploys

### add-demo-app.md

Steps:
1. Copy `aegean-boatworks-app` as starting template
2. Create GitHub repo under `digiformation/[client]-app`
3. Create Vercel project, connect to GitHub repo
4. Set env vars on Vercel (Supabase keys)
5. Add custom domain `[client].digiform.gr` → update Cloudflare DNS
6. Set branch protection on new repo

### update-supabase-schema.md

Steps:
1. Make schema changes in Supabase dashboard (Table Editor or SQL Editor)
2. Regenerate TypeScript types:
   ```
   npx supabase gen types typescript \
     --project-id modjhzgjpqfygqipretd \
     > apps/boatyard/lib/database.types.ts
   ```
3. Fix any resulting type errors
4. Test locally, then push via PR

## Additional artifact: .env.example

`aegean-boatworks-app/apps/boatyard/.env.example` — committed to git,
lists required variable names without values:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```
