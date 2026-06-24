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
