# Webfunkles

A boilerplate for using Webpack with Eleventy.

## Demo

[Webfunkles Boilerplate](https://webfunkles.netlify.app/)

## Features

- [Webpack](https://webpack.js.org/)
- [Eleventy](https://www.11ty.dev/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [Babel](https://babeljs.io/)

## Usage

### Overview

Eleventy works from the _src/templates_ folder, generating the _src/html_ folder as output.

Webpack works from the _src_ folder, using the contents of the _src/html_ for the pages to generate the _dist_ folder as output.

### Development

To run the development server:

```bash
npm start
```

### Production

To build the final production code:

```bash
npm run build
```
