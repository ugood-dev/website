# U;Good? Marketing Website

Static marketing site for U;Good?, built with [Astro](https://astro.build). Five pages: landing, Trust & Safety, FAQ, Privacy Policy, and Terms of Service.

Recreated from the design references in [`design/`](design/) — see `design/README.md` for the original handoff spec (copy, tokens, behavior).

## Structure

- `src/pages/` — one file per route (`index.astro`, `safety.astro`, `faq.astro`, `privacy.astro`, `terms.astro`)
- `src/layouts/Layout.astro` — shared `<head>`, nav, footer
- `src/components/` — `Nav`, `Footer`, `StoreBadges`, `PhoneMock`, `LegalSection`, `LegalToc`, `LegalContactCard`
- `src/data/` — page copy as structured data (`landing.ts`, `safety.ts`, `faq.ts`, `legal-privacy.ts`, `legal-terms.ts`, `site.ts`). The legal pages render from this data so content and table-of-contents can't drift.
- `public/logo.png` — app logo mark

## Before launch

- [ ] Replace the hand-drawn App Store / Google Play badge SVGs in `StoreBadges.astro` with the official badge artwork (Apple Marketing Resources / Google Play badge generator) — currently placeholders.
- [ ] Self-host the Google Fonts (Poppins, Inter) instead of loading from `fonts.googleapis.com`.
- [ ] If the canonical Privacy/Terms text changes, update `src/data/legal-privacy.ts` / `legal-terms.ts` to match (currently ported verbatim from `ugoodapi.com/pages/privacy` and `/terms`).

## Development

```bash
npm install
npm run dev
```

```bash
npm run build   # outputs to dist/
npm run preview
```

Requires Node `^18.17.1 || ^20.3.0 || >=22.0.0` (Astro 5's supported range).
