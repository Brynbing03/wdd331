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
│   └── cards.css
├── utilities/
│   └── utilities.css
└── main.css
```

The layer order in `main.css` is:

```text
tokens → base → layout → components → utilities
```

## Build Tool

For this project I chose **Lightning CSS** as my build tool. It bundles the CSS files from `css/main.css` and creates a minified file at:

```text
dist/styles.css
```

The live site still uses `css/main.css`. The bundled `dist/styles.css` file shows that the CSS was successfully bundled for this assignment.

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