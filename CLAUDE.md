@AGENTS.md

# ThinkIt AI — Project Context

## Project
AI products platform website for AutoCount customized solutions.
**Domain:** thinkit-ai.com (GoDaddy)
**Live:** https://www.thinkit-ai.com (Vercel)
**GitHub:** https://github.com/TIT526/thinkit-ai
**Path:** C:\Users\Sam\Documents\Claude\Business\projects\thinkit-ai

## Stack
- Next.js 16 App Router + TypeScript
- Tailwind CSS v4 (CSS-based config, no tailwind.config.ts)
- NextAuth.js v5 beta (JWT sessions)
- Prisma v7 + @prisma/adapter-pg + pg (standard PostgreSQL, Supabase-compatible)
- bcryptjs (password hashing for registration)
- Framer Motion, Lucide React, next-themes
- Deploy: Vercel (auto-deploy on git push to main)

## Prisma v7 Critical Notes
- URL NOT in schema.prisma — in prisma.config.ts only
- Import from `@/app/generated/prisma/client` (not `@/app/generated/prisma`)
- Prisma v7 REQUIRES a custom adapter — no bare PrismaClient() without adapter or accelerateUrl
- PrismaClient needs `adapter: new PrismaPg({ connectionString })` from @prisma/adapter-pg
- prisma.config.ts uses DIRECT_URL (port 5432) for CLI/migrations — pgBouncer blocks DDL
- DATABASE_URL (port 6543, ?pgbouncer=true) used at runtime by db.ts
- Run `npx prisma generate` after any schema change
- Auth/register API routes must have `export const runtime = "nodejs"`
- `postinstall: prisma generate` in package.json — Vercel runs this automatically

## Auth Architecture
- `auth.config.ts` — Edge-safe split config (providers only, no Prisma, used by proxy.ts)
- `lib/auth.ts` — Full auth (Prisma adapter + bcrypt password verify, server-side only)
- `proxy.ts` — Next.js 16 proxy (replaces deprecated middleware.ts), protects /dashboard/*
- `lib/db.ts` — PrismaPg adapter, reads DATABASE_URL
- Register: POST /api/auth/register → bcrypt hash → stored in Account.access_token
- Login: signIn("credentials") → authorize() fetches account, bcrypt.compare

## Color Palette (Malaysian)
- Blue: #003087 (Biru Malaysia) → `bg-my-blue`
- Gold: #C9A227 → `bg-my-gold`
- Red: #CC0001 → `bg-my-red`
- Green: #007A3D → `bg-my-green`
- Dark mode via next-themes (`class` attribute strategy)

## Pages
- `/` — Home (Hero + Stats + ProductGrid + Features + CTA)
- `/products` — All products list
- `/products/[slug]` — Product detail (6 static slugs)
- `/about` — About page
- `/contact` — Contact form (thinkit88@outlook.com, 016-664 2385)
- `/login` — Client component, calls signIn("credentials"), redirects to /dashboard
- `/register` — Client component, calls /api/auth/register
- `/dashboard` — Member dashboard (sidebar layout), protected by proxy.ts
- `/api/auth/register` — POST registration endpoint with bcrypt

## Products (lib/products.ts)
| Slug | Name | Color |
|------|------|-------|
| myai | MyAI | Purple |
| myai-bank-recon | MyAI Bank Recon | Cyan |
| ac-middleware | ACMiddleware | Green |
| aiar-aging | AIARAging | Orange |
| batch-sender | Batch Sender | Pink |
| batch-backup | Batch Backup | Indigo |

## Company Info
- Name: THINK IT SOLUTION
- Email: thinkit88@outlook.com
- WhatsApp: 016-664 2385
- Support: Mon–Fri, 9am–6pm MYT

## Env Vars
### .env.local (local dev)
- `DATABASE_URL` — Supabase Transaction Pooler URL (port 6543, ?pgbouncer=true)
- `DIRECT_URL` — Supabase Direct URL (port 5432) — used by prisma.config.ts for migrations
- `AUTH_SECRET` — random 32+ char string
- `NEXTAUTH_URL` — http://localhost:3000

### Vercel dashboard (production)
- `DATABASE_URL` — same Supabase Transaction Pooler URL
- `DIRECT_URL` — same Supabase Direct URL
- `AUTH_SECRET` — same secret
- `NEXT_PUBLIC_APP_URL` — https://thinkit-ai.com

## Pending: Supabase Setup (auth not functional until done)
1. Create free project at supabase.com (region: Singapore)
2. Project Settings → Database → Connection string
   - Transaction tab (port 6543) → DATABASE_URL
   - Direct connection tab (port 5432) → DIRECT_URL
3. Update .env.local with both URLs
4. Run locally: `npx prisma migrate dev --name init`
5. Set DATABASE_URL + DIRECT_URL in Vercel environment variables
6. Registration and login will work after this

## Commands
```bash
npm run dev                            # Start dev server (localhost:3000)
npm run build                          # Production build
npx prisma generate                    # Regenerate Prisma client after schema change
npx prisma migrate dev --name <name>   # Apply migrations to DB (uses DIRECT_URL)
git add -A && git commit -m "..." && git push  # Deploy to Vercel
```
