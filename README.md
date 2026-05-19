# Wayfinder

> The operating system for youth growth, identity, and meaningful work.

A cinematic prototype web application for an AI-powered life & career navigation platform for the next generation (ages 14–24). Built as an investor-demo experience — emotionally clear, visually premium, future-facing.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** + custom design tokens (deep-space dark theme, aurora gradients)
- **Framer Motion** for cinematic motion & scroll-linked storytelling
- **React Three Fiber + three** for the Identity Graph and AI Alignment Engine
- **next/font** (Space Grotesk + Instrument Serif, self-hosted at build)
- No backend. No auth. No DB. All content from typed mock modules.

## What's inside

```
app/
  page.tsx               9-section cinematic landing
  preview/
    feed/page.tsx        Discovery Feed
    identity/page.tsx    Identity Graph (interactive R3F + slide-over)
    missions/page.tsx    Missions board (kanban + drawer)
    portfolio/page.tsx   Living portfolio
  opengraph-image.tsx    Auto-generated OG image
components/
  sections/              9 landing sections
  three/                 R3F canvases (Identity, Alignment Engine)
  preview/AppShell.tsx   Shared product chrome for /preview/*
  ui/                    Buttons, badges, glass cards, reveal, etc.
  layout/                Nav, Footer, BackgroundAurora
content/landing.ts       All copy & static content
```

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

Also serve the in-app preview screens:

- http://localhost:3000/preview/feed
- http://localhost:3000/preview/identity
- http://localhost:3000/preview/missions
- http://localhost:3000/preview/portfolio

## Deploy to Vercel

This project ships with **zero Vercel-specific config**. Vercel auto-detects Next.js and Just Works.

**Option A — One click (after pushing to GitHub):**

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Accept all defaults. Click **Deploy**.

**Option B — CLI:**

```bash
npm i -g vercel
vercel              # preview
vercel --prod       # production
```

No environment variables are required. Forms are mocked client-side. Node 20+ is pinned in `package.json` (`engines.node`) and `.nvmrc`.

### Vercel-readiness notes

- `next.config.ts` uses defaults — no custom `output`, no experimental flags.
- All `three.js`/R3F components are `"use client"` and imported via `next/dynamic({ ssr: false })`, so the Vercel build never tries to SSR WebGL.
- Fonts are self-hosted via `next/font` (no request-time CDN calls).
- OG image generated at the edge via `app/opengraph-image.tsx`.

## License

Prototype / unreleased. Not for production use.
