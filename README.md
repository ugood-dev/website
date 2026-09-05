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

## Deployment

Pushing to `main` builds the site and publishes it to GitHub Pages via `.github/workflows/deploy.yml`. Nothing is committed from `dist/` — the workflow builds it fresh.

The canonical address is the apex `ugood.app`; GitHub redirects `www.ugood.app` to it. `public/CNAME` keeps the domain attached across deploys, and `astro.config.mjs` sets the matching origin for canonical URLs.

One-time setup on the repo:

1. Settings → Pages → Source: **GitHub Actions**.
2. Settings → Pages → Custom domain: `ugood.app`, then enable **Enforce HTTPS** once the certificate is issued.

DNS already points at GitHub (apex `A` records plus a `www` `CNAME` to `ugood-dev.github.io`) and needs no change. The domain was previously claimed by the `website-under-construction` repo and must be removed there before this repo can take it.

The site is served from the domain root, so no `base` is needed and root-absolute links like `/privacy` resolve as written. If it ever moves to the default `ugood-dev.github.io/website/` URL, set `base` **and** rewrite the absolute links in `Nav.astro`, `Footer.astro`, and `Layout.astro` — Astro does not rewrite hand-written href strings.
