
# WDD 331R Portfolio

**Student:** Brynlee Bingham  
**Semester:** Fall 2026  
**Live Site:** [View Site](https://brynbing03.github.io/wdd331/)

## About

This repository is my portfolio for WDD 331R: Advanced CSS. Each week I add new pages and styles as I work through the course assignments. The site deploys automatically to GitHub Pages when I push changes to main.

## Pages

- [Portfolio Home](https://brynbing03.github.io/wdd331/)
- [Unit 1 - Custom Properties](https://brynbing03.github.io/wdd331/unit-1/custom-properties/index.html)
- [Unit 2 - Layered Components](https://brynbing03.github.io/wdd331/unit-2/layered-components/index.html)
- [Unit 3 - Visual Effects](https://brynbing03.github.io/wdd331/unit-3/visual-effects/index.html)
- [Unit 4 - Editorial Layout](https://brynbing03.github.io/wdd331/unit-4/grid-layouts/editorial.html)
- [Unit 4 - Responsive Card Grid](https://brynbing03.github.io/wdd331/unit-4/grid-layouts/cards.html)
- [Unit 4 - Container Queries](https://brynbing03.github.io/wdd331/unit-4/advanced/container-demo.html)
- [Unit 4 - Sticky Layout](https://brynbing03.github.io/wdd331/unit-4/advanced/sticky-demo.html)
- [Unit 5 - Typography Playground](https://brynbing03.github.io/wdd331/unit-5/index.html)

## CSS Architecture

The shared CSS is organized into layers to make the styles easier to manage as the portfolio grows.

```text
css/
├── tokens/
│   ├── colors.css
│   └── variables.css
├── base/
│   ├── reset.css
│   └── elements.css
├── layout/
│   └── layout.css
├── components/
│   ├── cards.css
│   ├── theme-toggle.css
│   └── effects.css
├── utilities/
│   └── utilities.css
└── main.css
```

The layer order in `main.css` is:

```text
tokens → base → layout → components → utilities
```

## Typography System - Unit 5

For Unit 5, I updated my portfolio to use typography tokens instead of setting font sizes individually on each page.

All my typography tokens are in `css/tokens/variables.css`.

I used a major third modular scale with a ratio of 1.25 and a base size of 1rem. Smaller text stays fixed, while larger headings use `clamp()` to resize smoothly between 375px and 1200px.

I also created semantic tokens for body text, captions, headings, and display text. This makes it easier to update font sizes across the whole portfolio without changing every CSS rule.

### Web Font

I chose **Nunito Sans** from Google Fonts for my headings because it looks clean, friendly, and easy to read.

The font uses `display=swap`, so a fallback font appears while Nunito Sans is loading. My body text uses a system font stack.

### Unit 5 Demo

My Unit 5 page includes:

- Examples of the different font sizes
- A comparison of my heading and body fonts
- An interactive slider to change text size
- My orange portfolio color theme
- Light and dark mode support
- A responsive layout for smaller screens

## Build Tool

For this project I chose **Lightning CSS** as my build tool. It bundles the CSS files from `css/main.css` and creates a minified file at:

```text
dist/styles.css
```

The portfolio uses the shared CSS architecture, and the bundled file is updated when I run the build command.

## Running the Build

First install the project dependencies:

```bash
npm install
```

Then build the CSS:

```bash
npm run build
```

This will create or update:

```text
dist/styles.css
```
