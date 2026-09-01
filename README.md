# Techniqually Website

Static single-page site for Techniqually, deployed to GitHub Pages at
[www.techniqually.com](https://www.techniqually.com).

Plain HTML/CSS/JS — no framework. Styling is Tailwind CSS, compiled locally
with the Tailwind CLI (no runtime CDN script).

## Development

```bash
npm install
npm run watch   # rebuilds assets/css/main.css on change
```

Then open `index.html` directly in a browser, or serve it locally:

```bash
npx serve .
```

## Build

```bash
npm run build   # one-off minified build of assets/css/main.css
```

`assets/css/main.css` is generated and git-ignored — it's never committed,
only built locally or in CI.

## Deploy

Deployment is automatic via `.github/workflows/deploy.yml` on every push to
`master`: it installs dependencies, builds the CSS, and publishes the repo
root to GitHub Pages via the official Actions Pages flow.

**Repo Settings → Pages → Build and deployment → Source must be set to
"GitHub Actions"** (not "Deploy from a branch") for this to actually serve.

The custom domain is set via the `CNAME` file at the repo root.

## Structure

- `index.html` — the entire site (single page, anchor-nav sections)
- `assets/js/main.js` — nav, mobile menu, scroll animations (vanilla JS)
- `assets/images/` — logo (`favicon.svg` is the source of truth; `favicon.png`
  and `apple-touch-icon.png` are rasterized from it)
- `src/input.css` / `tailwind.config.js` — Tailwind source and theme config
- `.github/workflows/deploy.yml` — CI build + Pages deploy
