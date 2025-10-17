# The Clan Hearth - Scottish Heritage Platform

Discover your Scottish heritage through our comprehensive platform featuring clan histories, tartan design, trip planning, and legendary tales.

## Features

- **Clan Explorer**: Detailed information about Scottish clans
- **Trip Planner**: Interactive map for planning Scottish journeys
- **Clan Finder**: Personality quiz to discover your spirit clan
- **Tartan Designer**: Create custom tartan patterns
- **Traditional Recipes**: Authentic Scottish cuisine
- **Legends & Myths**: Stories from Scottish folklore

## Technologies Used

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- Leaflet.js for interactive maps
- Font Awesome for icons

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/kenmck3772/theclanhearth.com.git
cd theclanhearth.com
```

2. Install dependencies (CI uses `npm ci`):

```bash
npm install
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

## Notes

- Compiled CSS files (`css/*.css`) and `node_modules/` are ignored in the repository.
- If you need to restore the old `package.json` directory content, it's kept in `package_json_dir_backup/`.

# The Clan Hearth - Scottish Heritage Platform

Discover your Scottish heritage through our comprehensive platform featuring clan histories, tartan design, trip planning, and legendary tales.

## Features

- **Clan Explorer**: Detailed information about Scottish clans
- **Trip Planner**: Interactive map for planning Scottish journeys
- **Clan Finder**: Personality quiz to discover your spirit clan
- **Tartan Designer**: Create custom tartan patterns
- **Traditional Recipes**: Authentic Scottish cuisine
- **Legends & Myths**: Stories from Scottish folklore

## Technologies Used

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- Leaflet.js for interactive maps
- Font Awesome for icons

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/kenmck3772/theclanhearth.com.git
