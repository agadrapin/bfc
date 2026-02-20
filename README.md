# The Bayley Film Club

A personal film criticism site built as a static site for GitHub Pages. Each season spotlights a single director — two or three film picks, full written reviews, and a custom 3-tier rating system.

## Rating System

Every film is scored across three dimensions, each out of 5 (max 15 total):

| Dimension | What it measures |
|-----------|-----------------|
| **A** — Anticipation | How much you were looking forward to it |
| **E** — Enjoyment | The experience of watching it |
| **R** — Retrospect | How it holds up on reflection |

Visualised as an animated radar triangle on each review page.

## Structure

```
bfc/
├── index.html                        ← Landing page
├── assets/
│   ├── css/global.css                ← Shared variables, nav, footer, utilities
│   └── js/global.js                  ← Cursor, scroll reveal, radar chart
└── directors/
    ├── fincher/
    │   ├── index.html                ← Director profile (Season 04)
    │   ├── se7en.html
    │   ├── fight-club.html
    │   └── zodiac.html
    └── bong/
        ├── index.html                ← Director profile (Season 01)
        ├── memories-of-murder.html
        └── mother.html
```

## Adding a New Season

1. Create `directors/[name]/` folder
2. Copy an existing `index.html` as the director profile template
3. Copy an existing review `.html` as the review template
4. Update the content, scores, and links
5. Add the director to the archive grid in the root `index.html`

## Hosting

Designed for **GitHub Pages**. Push to `main`, enable Pages from the repo Settings → Pages → Source: `main` / `/ (root)`.

The site will be live at `https://[username].github.io/bfc/`.

## Tech Stack

Pure HTML, CSS, JS — no frameworks, no build step, no dependencies.
Fonts via Google Fonts: Bebas Neue · Space Mono · Syne.
