# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Initial project structure setup with `index.html`, `css` and `js` folders, `datasource.csv`, and `README.md`.
- Created `src/components` directory to store all React components.
- Created `src/styles` directory and moved `theme.js` into it.
- Created `src/utils` directory for utility functions.
- Created `src/services` directory to handle data fetching and external service interactions.
- Created `docs` directory with `docs/design-decisions.md`.
- Added `CONTRIBUTING.md` file in the root directory.
- Added `CHANGELOG.md` file in the root directory.
- Created `data` directory at the root level to store all data-related files.
- Created `data-scripts` directory within `data` to store data processing scripts.
- Created `data-visualizations` directory within `data` to store visualization files or scripts.
- Applied Material UI-inspired styling using Tailwind CSS and Google Fonts.
- Added functionality to load and parse CSV data using JavaScript, including error handling and testing mechanisms.
- Integrated Chart.js for data visualization and created a simple test bar chart in `index.html`.
- Implemented proposed data visualizations using Chart.js.
- Integrated visualizations into the HTML structure with Material UI-inspired design.
- Optimized visualizations for readability and performance.
- Ensured visualizations are responsive and interactive, including filtering, sorting, and hover effects.
- Implemented interactive features like data filtering, sorting, and hover effects in the visualizations.
- Completed cross-browser and device testing for the application.
- Tested the application on major browsers: Chrome, Firefox, Safari, Edge.
- Verified functionality on various devices: desktop, tablet, mobile.

### Performance Optimization
- Minified HTML content in `index.html` to reduce file size.
- Added `defer` attribute to script tags in `index.html` for non-blocking loading.
- Implemented code splitting using dynamic imports for heavy components in `src/loadData.js`.
- Optimized data processing algorithms for speed improvements in `src/loadData.js`.
- Added lazy loading for data fetching functions in `src/loadData.js`.
- Configured `terser` for JavaScript minification in `webpack.config.js`.
- Configured `cssnano` for CSS minification in `webpack.config.js`.
- Implemented code splitting and lazy loading configuration in `webpack.config.js`.

### Deployment
- Configured the repository settings to enable GitHub Pages.
- Set the deployment branch to `gh-pages`.
- Updated `index.html` to include `<base href="/team-health/">` for GitHub Pages deployment.
- Updated `webpack.config.js` to include `publicPath: '/team-health/'` for GitHub Pages deployment.
- Added a section "## Deployment" in `README.md` with instructions on how to deploy the application to GitHub Pages.
- Created `docs/deployment.md` with detailed instructions on how to deploy the application to GitHub Pages.

### Error Handling and User Notifications
- Implemented error handling with try-catch blocks and user-friendly error messages in `data-scripts/update-datasource.js`.
- Implemented error handling with try-catch blocks and user-friendly error messages in `src/loadData.js`.
- Added user-friendly error messages in the `main` function of `data-scripts/update-datasource.js`.
- Added user-friendly error messages in the `loadCSVData` function of `data-scripts/update-datasource.js`.
- Added user-friendly error messages in the `validateAndFormatData` function of `data-scripts/update-datasource.js`.
- Added user-friendly error messages in the `loadCSVData` function of `src/loadData.js`.
- Added user-friendly error messages in the `validateAndFormatData` function of `src/loadData.js`.
- Added user-friendly error messages in the `handleFeedbackFormSubmission` function of `src/loadData.js`.
