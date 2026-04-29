# nahi khan — portfolio

Personal portfolio site built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

## Commands

```bash
pnpm dev          # start dev server at localhost:3000
pnpm build        # production build
pnpm start        # serve production build locally
pnpm lint         # run eslint
```

## Books data

`/books` reads from a Supabase table. Visitors hit Supabase with the anon key (RLS allows read-only). A local sync script pulls the library from Hardcover and writes it to Supabase — run it whenever you want to refresh.

```bash
node --env-file=.env.local scripts/sync-books.mjs
```

Required env vars (see `.env.local.example`):

| Var | Used by | Notes |
| --- | --- | --- |
| `HARDCOVER_TOKEN` | sync script | from https://hardcover.app/account/api |
| `SUPABASE_URL` | sync script | project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | sync script | secret key — never ship to the browser |
| `NEXT_PUBLIC_SUPABASE_URL` | site | same as `SUPABASE_URL` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | site | publishable key |

Only the two `NEXT_PUBLIC_*` vars need to be set in Vercel. The schema lives in Supabase (run once via the SQL editor).

## Deploy to Vercel

```bash
# install vercel cli (once)
pnpm add -g vercel

# link project (first time)
vercel link

# preview deployment
vercel

# production deployment
vercel --prod
```
