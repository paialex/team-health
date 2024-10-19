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

## Providing Feedback

We value your feedback and would love to hear from you. To provide feedback, please use the feedback form available in the application. Follow these steps:

1. **Navigate to the Feedback Section**: Open the application and scroll down to the "Feedback" section.

2. **Fill Out the Form**: Enter your name, email, and message in the respective fields.

3. **Submit the Form**: Click the "Submit" button to send your feedback.

Your feedback will be sent to our team for review, and we will use it to make improvements to the application. Thank you for your valuable input!

## Updating `datasource.csv` Annually

To ensure that the data in `datasource.csv` is up-to-date, follow these steps to update it annually:

1. **Data Collection**: Collect the new data for the year.
2. **Data Formatting**: Ensure the new data is formatted correctly according to the structure of `datasource.csv`.
3. **Data Validation**: Validate the new data to ensure accuracy and consistency.
4. **Data Integration**: Integrate the new data into `datasource.csv`.
5. **Data Backup**: Create a backup of the previous `datasource.csv` file before making any changes.
6. **Data Update**: Replace the old `datasource.csv` file with the updated one.
7. **Data Verification**: Verify that the new data has been correctly integrated and is reflected in the application.

### Instructions for Validating and Formatting New Data

1. **Data Formatting**:
   - Ensure that the new data follows the same column structure as `datasource.csv`.
   - Use consistent data types for each column (e.g., integers for ratings, strings for dates).
   - Check for any missing or incomplete data entries and address them.

2. **Data Validation**:
   - Verify the accuracy of the new data by cross-referencing with the original data sources.
   - Check for any outliers or anomalies in the data and investigate their causes.
   - Ensure that the new data is consistent with the existing data in terms of format and values.

### Automating Data Updates

To automate the annual update process for `datasource.csv`, follow these steps:

1. **Create a Script**: Develop a script to automate the data collection, formatting, validation, and integration processes.
2. **Schedule the Script**: Use a scheduling tool (e.g., cron jobs, GitHub Actions) to run the script annually.
3. **Notify Users**: Implement a notification system to inform users of the data update within the application.

By following these steps, the process of updating `datasource.csv` annually can be streamlined and automated, ensuring that the application always has the most up-to-date data.
