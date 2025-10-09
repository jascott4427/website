The repository is a Next.js (app router) portfolio site themed as a Pip-Boy UI. Keep edits small, follow project conventions, and prefer non-breaking, incremental changes.

Key facts
- Framework: Next.js 15 (app/ router). Main server/client split is in `app/` and `components/`.
- Styling: Tailwind + custom CSS in `styles/globals.css`. Theme tokens and CSS variables live there.
- TypeScript: `tsconfig.json` includes path alias `@/*` -> project root. Keep imports consistent with this alias.
- Scripts: use `npm run dev` (alias: `pnpm dev` if pnpm is used) to run locally; `npm run build` / `npm run start` for production.

Helpful files & patterns
- `app/layout.tsx` and `app/page.tsx` are the root layout and home page (app router). Place new pages under `app/<name>/page.tsx`.
- `components/pip-boy-layout.tsx` contains the site's global layout UI (client component). Use it as a wrapper for pages to preserve the theme and settings behavior.
- `components/theme-provider.tsx` delegates to `next-themes`. For theme changes prefer updating CSS variables in `styles/globals.css` or local state in `pip-boy-layout`.
- `components/ui/*` contains reusable UI primitives (Button, Toast, etc.). They use cva/tailwind conventions and `cn()` from `lib/utils.ts` for class merging.
- Hooks: `hooks/*` contains light client hooks (e.g., `use-toast`, `use-click-sound`). These are client-only and often `'use client'` at the top.

Conventions for edits
- Client vs Server: Files with `"use client"` and React state belong on the client. Avoid adding browser-only code to server components. If you need hooks or localStorage, mark the file `"use client"` and keep it inside `components/` or `app/` page as appropriate.
- Styling: Prefer Tailwind utility classes and the `cn()` helper. When adding global tokens, add them to `styles/globals.css` and reference via CSS variables (e.g., `--pipboy-bg-custom`).
- Imports: Use `@/` alias for internal imports. Example: `import { cn } from '@/lib/utils'`.
- Accessibility: Buttons and interactive elements already include aria props; follow existing patterns (e.g., `aria-label`, focus-visible classes).

Build & debugging notes
- Local dev: `npm run dev` (spins up Next.js dev server). On Windows `cmd.exe` the commands are identical.
- Build: `npm run build` then `npm run start` for a production server. `next.config.mjs` disables some strict build checks (eslint/typescript ignored during build) — be mindful that type errors may exist but are intentionally allowed.
- Images: `next.config.mjs` sets `images.unoptimized = true`. Static assets referenced under `public/` should be served via `/assets/...` or absolute paths shown in `app/page.tsx`.

Integration & external deps
- The project uses many Radix UI primitives, `next-themes`, `geist` fonts, and `@vercel/analytics`. Keep changes additive and avoid upgrading major Next.js unless absolutely necessary.
- Toast system: `components/ui/toast.tsx` + `hooks/use-toast.ts` implement an in-memory toast queue. Use the `useToast()` hook to trigger toasts.

Examples
- Adding a new page: create `app/notes/page.tsx` exporting a default React component that wraps content with `<PipBoyLayout>...</PipBoyLayout>`.
- Using UI primitives: `import { Button } from '@/components/ui/button'` then `<Button onClick={...}>Save</Button>`.
- Reading/writing user color prefs: see `components/pip-boy-layout.tsx` which stores `pipboy-bg-color` and `pipboy-border-color` in localStorage.

When to ask for human help
- If a change requires upgrading Next.js, Tailwind, or major libraries, ask for approval — upgrades can be breaking.
- If type errors appear after edits that are non-trivial to fix (project intentionally ignores some TS build errors), request guidance.

Edit scope guidance
- Keep pull requests small and focused (one visual/behavioral change per PR). Prefer feature branches named `feat/<short-desc>` or `fix/<issue>`.
- Include a brief screenshot or description for UI changes.

If anything here is unclear or you want more examples (tests, lint setup, or CI), tell me which area to expand.
