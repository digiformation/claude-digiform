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
