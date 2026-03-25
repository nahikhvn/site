# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build`
- **Start:** `pnpm start` (serve production build locally)
- **Lint:** `pnpm lint` (ESLint with next/core-web-vitals + next/typescript)
- **Deploy preview:** `vercel`
- **Deploy production:** `vercel --prod`

Package manager is **pnpm**.

## Architecture

Personal portfolio site built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS 4**, and **TypeScript**.

All pages are static React Server Components with no data fetching, API routes, or client components. The site is purely presentational content.

### Layout

`app/layout.tsx` defines the full page shell: header with name/title, a two-column grid (sticky left nav + scrollable right content area), and a footer with social links. A `NavItem` helper component is defined inline in the layout file.

### Routes

Each route is a simple `page.tsx` exporting a default component:

- `/` — about/intro
- `/books` — reading list
- `/writing` — essays and drafts
- `/gallery` — visual tiles with gradient placeholders

### Styling

- Tailwind CSS 4 via PostCSS (configured in `postcss.config.mjs`)
- `app/globals.css` sets CSS custom properties for background/foreground with dark-mode media query, and maps them to Tailwind theme tokens via `@theme inline`
- Fonts: Geist and Geist Mono loaded via `next/font/google`, exposed as CSS variables
- Design aesthetic: dark, minimal, zinc-based color palette with generous whitespace
