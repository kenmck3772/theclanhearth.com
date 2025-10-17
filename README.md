# The Clan Hearth - Scottish Heritage Platform

[![PR Build](https://github.com/kenmck3772/theclanhearth.com/actions/workflows/pr-build.yml/badge.svg)](https://github.com/kenmck3772/theclanhearth.com/actions/workflows/pr-build.yml)

Discover your Scottish heritage through our comprehensive platform featuring clan histories, tartan design, trip planning, and legendary tales.

## Features

- **Clan Explorer**: Detailed information about Scottish clans
- **Trip Planner**: Interactive map for planning Scottish journeys
- **Clan Finder**: Personality quiz to discover your spirit clan
- **Tartan Designer**: Create custom tartan patterns
- **Traditional Recipes**: Authentic Scottish cuisine
- **Legends & Myths**: Stories from Scottish folklore

## Developer notes

- PRs run `npm ci` and `npm run build` via GitHub Actions; the badge above reflects the workflow.
- We removed inline event attributes (e.g., `onerror`, `onclick`) from templates to improve security and CSP compatibility. Images now use `class="img-fallback"` with a `data-fallback` URL or the `first-available` pattern for multiple candidate images. The JS initializers (`initFallbackImages` and `initFirstAvailableImages`) are in `js/app.js` and run automatically on DOM insertions.

## Features

- **Clan Explorer**: Detailed information about Scottish clans
- **Trip Planner**: Interactive map for planning Scottish journeys
- **Clan Finder**: Personality quiz to discover your spirit clan
- **Tartan Designer**: Create custom tartan patterns
- **Traditional Recipes**: Authentic Scottish cuisine
- **Legends & Myths**: Stories from Scottish folklore

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/kenmck3772/theclanhearth.com.git
cd theclanhearth.com
```

2. Install dependencies (CI uses `npm ci`):

```bash
npm ci
```

## Building CSS

This project uses Tailwind CSS via PostCSS. There are npm scripts to build the CSS locally and in CI:

- Build development CSS:

```bash
npm run build:css
```

- Build production (minified) CSS:

```bash
npm run build:css:prod
```

- Watch for changes during development:

```bash
npm run watch:css
```

In CI (the included GitHub Actions `workflows/deploy.yml`), the workflow runs `npm ci` and `npm run build:css:prod` before building and deploying the site.

Important: do NOT use the Tailwind CDN (`https://cdn.tailwindcss.com`) in production. This repository builds Tailwind into a compiled stylesheet via PostCSS (see the npm scripts above). Using the CDN in production is discouraged — it bypasses your custom configuration and can leak content-size or cause unexpected differences between local and production CSS.

Pre-commit & CI guard
---------------------
To prevent regressions we added a lightweight check that scans the tracked files for HTML-style inline event attributes (`onerror="..."`, `onclick='...'`, `onload="..."`) and any references to `cdn.tailwindcss.com` (in code files). The check runs on the PR workflow and will fail the build if forbidden patterns are found.

To enable a local pre-commit hook (recommended):

1. Run:

```bash
npm run enable-hooks
```

2. The hook will run `scripts/check-inline.sh` before commits; it prints any offending matches and prevents the commit if any are present.

This is intentionally light-weight and only scans tracked source files (excluding `dist`, `node_modules`, and a README exception for the CDN note).

## Contributing / Testing

If you're contributing or testing locally, these quick steps will help:

- Install deps:

```bash
npm ci
```

- Build production CSS (same as CI):

```bash
npm run build:css:prod
```

- Optionally preview the built site (after running `npm run build` if using Vite):

```bash
npm run preview
```

What to check in PRs:

- Ensure `npm run build:css:prod` completes without errors.
- Don't commit compiled files under `css/`—they are ignored.

For more details and a short checklist, see `CONTRIBUTING.md`.

If you prefer using Make, a small `Makefile` is provided with convenient targets:

```bash
# Install deps (uses npm ci)
make install

# Start vite dev server
make dev

# Build production CSS
make build-css
```

## Notes

- Compiled CSS files (`css/*.css`) and `node_modules/` are ignored in the repository.
- The old `package.json` directory that caused an earlier install error was removed from the working tree; repository history retains any past content.

## PR checks

This repository runs a PR build check that executes `npm ci` and `npm run build` to ensure the site builds successfully before merging. If the PR build fails, check the Actions logs and fix any build-time errors locally before pushing a new commit.
