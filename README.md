# Maram Khalid — Portfolio

Personal portfolio for Maram Khalid Mohamed (AI Engineer, Cairo). Built with **Vite + React + Tailwind**, ported from the Claude Design handoff bundle.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually <http://localhost:5173>).

## Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serves dist/ locally to verify
```

## Deploying to GitHub Pages

Two ways — pick one.

### Option A — automatic via GitHub Actions (recommended)

1. Push this repo to GitHub.
2. In the repo settings → **Pages** → set **Source: GitHub Actions**.
3. Every push to `main` builds and publishes the site automatically (see [.github/workflows/deploy.yml](.github/workflows/deploy.yml)).

### Option B — manual with the `gh-pages` branch

```bash
npm run build
npm run deploy
```

Then in repo settings → **Pages** → **Source: Deploy from a branch**, pick `gh-pages` / `(root)`.

`vite.config.js` uses `base: './'` so the build works whether the site is served from the root domain or a `/<repo-name>/` sub-path.

## CV file

The "Download CV" buttons link to `assets/Maram_Khalid_CV.pdf`. Drop the actual PDF at [public/assets/Maram_Khalid_CV.pdf](public/assets/) before deploying — Vite copies everything under `public/` to the build root.

## Project layout

```
src/
  main.jsx                 # entry
  App.jsx                  # composes Nav + sections
  index.css                # global styles, theme tokens, animations
  components/
    Icon.jsx               # hairline SVG icon set
    Petal.jsx              # layered SVG rose
    FallingPetals.jsx      # ambient falling-petal layer
    Sparkles.jsx           # twinkle field
    Reveal.jsx             # scroll-in animation wrapper
    SectionHeader.jsx      # eyebrow + display title
    Nav.jsx                # fixed top nav with section-active highlighting
  sections/
    Hero.jsx
    About.jsx
    Experience.jsx
    Projects.jsx
    Skills.jsx
    Education.jsx
    Contact.jsx
public/
  assets/                  # drop CV PDF here
```
