@AGENTS.md

# ThinkIt AI — Project Context

## Project
AI products platform website for AutoCount customized solutions.
**Domain:** thinkit-ai.com (GoDaddy) → deploy to Cloudflare Pages
**Path:** C:\Users\Sam\Documents\Claude\Business\projects\thinkit-ai

## Stack
- Next.js 16 App Router + TypeScript
- Tailwind CSS v4 (CSS-based config, no tailwind.config.ts)
- NextAuth.js v5 beta (JWT sessions)
- Prisma v7 + @prisma/adapter-pg + Supabase PostgreSQL
- Framer Motion, Lucide React, next-themes
- Deploy: Cloudflare Pages via @opennextjs/cloudflare

## Prisma v7 Critical Notes
- URL NOT in schema.prisma — in prisma.config.ts only
- Import from `@/app/generated/prisma/client` (not `@/app/generated/prisma`)
- PrismaClient needs `adapter: new PrismaPg({ connectionString })` from @prisma/adapter-pg
- Run `npx prisma generate` after any schema change
- Auth API route must have `export const runtime = "nodejs"`

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
- `/contact` — Contact form
- `/login` — Login page
- `/register` — Register page
- `/dashboard` — Member dashboard (sidebar layout)

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
- Free lifetime membership
- Paid tiers planned later (patch downloads)
- NextAuth v5: `handlers`, `auth`, `signIn`, `signOut` from `@/lib/auth`
- DB models: User, Account, Session, VerificationToken (in prisma/schema.prisma)

## Deploy Checklist (not done yet)
1. Create Supabase project → get DATABASE_URL + DIRECT_URL
2. Update .env.local with real Supabase URLs
3. Generate AUTH_SECRET: `openssl rand -base64 32`
4. Run: `npx prisma migrate dev --name init`
5. Push code to GitHub
6. Connect GitHub repo to Cloudflare Pages
7. Set env vars in Cloudflare Pages dashboard
8. Point GoDaddy DNS CNAME to Cloudflare Pages URL

## Commands
```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npx prisma generate  # Regenerate Prisma client after schema change
npx prisma migrate dev --name <name>  # Apply migrations to DB
```
