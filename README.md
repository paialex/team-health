# team-health

## Data Analysis and Visualization

A detailed analysis of the data in `datasource/datasource.csv` has been conducted to understand the data structure, key metrics, and trends. The analysis includes:

- Data structure overview
- Key metrics and trends
- Visualization suggestions
- Interactive features
- Summary and recommendations

For the full documentation, please refer to [datasource/analysis.md](datasource/analysis.md).

## Material UI Integration

The project now includes Material UI components for a modern and consistent design. For details on the chosen components, color scheme, typography, and overall style, please refer to the Material UI section in [datasource/analysis.md](datasource/analysis.md).

## Deployment

To deploy the application to GitHub Pages, follow these steps:

1. **Configure GitHub Pages**: Go to the repository settings on GitHub, scroll down to the "GitHub Pages" section, and select the `gh-pages` branch as the source.

2. **Update Base URL**: Ensure that the `<base href="/team-health/">` tag is present in the `<head>` section of your `index.html` file.

3. **Update Webpack Configuration**: Make sure the `publicPath` in the `output` section of your `webpack.config.js` is set to `/team-health/`.

4. **Build and Deploy**: Run the following commands to build and deploy the application:
   ```bash
   npm run build
   npm run deploy
   ```

5. **Test Deployment**: Visit the live application URL (e.g., `https://your-username.github.io/team-health/`) to ensure everything is working correctly.
