# The Bayley Film Club

A personal film criticism site built with Eleventy and hosted on GitHub Pages. Each season spotlights a single director — two or three film picks, full written reviews, and a custom 3-tier rating system.

## Rating System

Every film is scored across three dimensions, each out of 5 (max 15 total):

| Dimension | What it measures |
|-----------|-----------------|
| **A** — Anticipation | How much you were looking forward to it |
| **E** — Enjoyment | The experience of watching it |
| **R** — Retrospect | How it holds up on reflection |

Displayed as a Club Rating (e.g. `14 / 15` with `A·4 E·5 R·5` breakdown) across the site, with an animated radar triangle on each review page.

## Structure

```
src/
├── index.njk                         ← Landing page
├── _data/
│   ├── site.json                     ← Site config (current season, director)
│   └── directors.json                ← All director data, filmographies, archive
├── _includes/
│   ├── layouts/
│   │   ├── base.njk                  ← Base HTML layout
│   │   ├── landing.njk               ← Landing page layout
│   │   ├── director.njk              ← Director profile layout
│   │   └── review.njk                ← Film review layout
│   └── partials/
│       ├── nav.njk                   ← Site navigation
│       ├── footer.njk                ← Footer with social links
│       └── breadcrumb.njk            ← Breadcrumb navigation
├── assets/
│   ├── css/
│   │   ├── global.css                ← Shared variables, nav, footer, utilities
│   │   ├── landing.css               ← Landing page styles
│   │   ├── director.css              ← Director profile styles
│   │   └── review.css                ← Film review styles
│   └── js/global.js                  ← Cursor, scroll reveal, radar chart
├── directors/
│   ├── fincher/
│   │   ├── index.njk                 ← Director profile (Season 04)
│   │   ├── se7en.md                  ← Film review
│   │   ├── fight-club.md
│   │   └── zodiac.md
│   └── bong/
│       ├── index.njk                 ← Director profile (Season 01)
│       ├── memories-of-murder.md
│       └── mother.md
└── rankings/
    ├── films.njk                     ← Film leaderboard
    └── directors.njk                 ← Director rankings
```

## Development

```bash
npm install
npm run serve        # Dev server at localhost:8080
npm run build        # Build to _site/
```

## Adding a New Season

1. Add the director to `src/_data/directors.json` with filmography, picks, and metadata
2. Create `src/directors/[slug]/index.njk` using an existing director page as template
3. Create review files as `.md` with frontmatter for each picked film
4. Update `src/_data/site.json` to set the new `currentSeason` and `currentDirector`
5. Move the previous director's entry appropriately in the data

## Hosting

Designed for **GitHub Pages**. Push to `main`, enable Pages from the repo Settings.

## Tech Stack

Built with [Eleventy](https://www.11ty.dev/) (Nunjucks templates + Markdown reviews). No client-side frameworks.
Fonts via Google Fonts: Bebas Neue, Space Mono, Syne.
