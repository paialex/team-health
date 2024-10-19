# team-health

## Overview

Team Health is a data analysis and visualization application designed to help teams monitor and improve their performance. The application provides insights into various metrics such as quality, workload, energy, and colleagues' ratings, allowing teams to make data-driven decisions.

## Features

- **Data Analysis**: Analyze data from `datasource/datasource.csv` to understand key metrics and trends.
- **Visualizations**: Generate line charts, bar graphs, and heat maps to represent data visually.
- **Interactive Features**: Filter, sort, and hover over data points to get detailed information.
- **Material UI Integration**: Modern and consistent design using Material UI components.
- **Dynamic Data Updates**: Automatically update visualizations with new data entries.

## Screenshots

![Dashboard](docs/screenshots/dashboard.png)
*Dashboard showing various visualizations and metrics.*

![Line Chart](docs/screenshots/line_chart.png)
*Line chart displaying trends over time.*

![Bar Graph](docs/screenshots/bar_graph.png)
*Bar graph showing participants count and points engaged.*

## Running the Project Locally

To run the project locally, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/your-username/team-health.git
   ```

2. **Navigate to the Project Directory**: Change to the project directory:
   ```bash
   cd team-health
   ```

3. **Install Dependencies**: Install the project dependencies using npm:
   ```bash
   npm install
   ```

4. **Start the Development Server**: Start the development server using the following command:
   ```bash
   npm start
   ```

5. **Open the Application**: Open your web browser and navigate to `http://localhost:3000` to view the application.

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
