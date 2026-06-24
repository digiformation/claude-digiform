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
