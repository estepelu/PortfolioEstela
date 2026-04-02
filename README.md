# Estela Pérez Luque — Portfolio

Personal portfolio website for Estela Pérez Luque, PhD. Data Scientist | Technical Strategy & Customer-Driven Systems.

**Live site:** https://estepelu.github.io/PortfolioEstela/

## Tech stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- Framer Motion (motion/react)
- Recharts
- Lucide React icons

## Color palette

- `#f27291` — Rose (primary accent)
- `#82241f` — Burgundy (dark accent / hover states)
- `#b5decc` — Mint (secondary accent)
- Nord color system for structural text and backgrounds

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

## Deployment

Automatically deployed to GitHub Pages on every push to `main` via GitHub Actions. No manual steps required.

To set up for the first time: go to **Settings → Pages → Source → GitHub Actions** in the GitHub repository.

## Content

All content (resume, publications, projects, Google Scholar stats) lives in `src/data.json`. Edit that file to update any text, numbers, or links.
