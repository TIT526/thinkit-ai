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
- Prisma v7 + @prisma/adapter-neon + @neondatabase/serverless
- bcryptjs (password hashing for registration)
- Framer Motion, Lucide React, next-themes
- Deploy: Vercel (auto-deploy on git push to main)

## Prisma v7 Critical Notes
- URL NOT in schema.prisma — in prisma.config.ts only
- Import from `@/app/generated/prisma/client` (not `@/app/generated/prisma`)
- PrismaClient needs `adapter: new PrismaNeon({ connectionString })` from @prisma/adapter-neon
- Run `npx prisma generate` after any schema change
- Auth/register API routes must have `export const runtime = "nodejs"`
- `postinstall: prisma generate` in package.json — Vercel runs this automatically

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
- `/login` — Login page
- `/register` — Register page (client component, calls /api/auth/register)
- `/dashboard` — Member dashboard (sidebar layout)
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

## Auth Model
- Free membership registration
- Paid tiers planned later (patch downloads)
- NextAuth v5: `handlers`, `auth`, `signIn`, `signOut` from `@/lib/auth`
- DB models: User, Account, Session, VerificationToken (prisma/schema.prisma)
- Register stores hashed password in Account.access_token field

## Company Info
- Name: THINK IT SOLUTION
- Email: thinkit88@outlook.com
- WhatsApp: 016-664 2385
- Support: Mon–Fri, 9am–6pm MYT

## Vercel Env Vars (set in Vercel dashboard)
- `DATABASE_URL` — Supabase PostgreSQL connection string (currently dummy)
- `AUTH_SECRET` — random 32+ char string
- `NEXT_PUBLIC_APP_URL` — https://thinkit-ai.com

## Pending: Supabase Setup (auth not functional until done)
1. Create free project at supabase.com
2. Get DATABASE_URL from Project Settings → Database → Connection string (Transaction mode)
3. Update DATABASE_URL in Vercel environment variables
4. Run locally: `npx prisma migrate dev --name init`
5. Registration and login will work after this

## Commands
```bash
npm run dev                            # Start dev server (localhost:3000)
npm run build                          # Production build
npx prisma generate                    # Regenerate Prisma client after schema change
npx prisma migrate dev --name <name>   # Apply migrations to DB
git add -A && git commit -m "..." && git push  # Deploy to Vercel
```
