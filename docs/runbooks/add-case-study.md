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
