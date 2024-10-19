# Data Analysis and Visualization Proposals

## Data Structure Overview

### Columns in `datasource.csv`

1. **Sprint_ID**: Unique identifier for each sprint.
2. **Date**: The date of the data entry.
3. **Year_mode**: The year in which the sprint took place.
4. **Quarter_mode**: The quarter of the year in which the sprint took place.
5. **Quality_Rating_min**: Minimum quality rating for the sprint.
6. **Quality_Rating_mean**: Mean quality rating for the sprint.
7. **Quality_Rating_max**: Maximum quality rating for the sprint.
8. **Workload_Rating_min**: Minimum workload rating for the sprint.
9. **Workload_Rating_mean**: Mean workload rating for the sprint.
10. **Workload_Rating_max**: Maximum workload rating for the sprint.
11. **Energy_Rating_min**: Minimum energy rating for the sprint.
12. **Energy_Rating_mean**: Mean energy rating for the sprint.
13. **Energy_Rating_max**: Maximum energy rating for the sprint.
14. **Colleagues_Rating_min**: Minimum colleagues rating for the sprint.
15. **Colleagues_Rating_mean**: Mean colleagues rating for the sprint.
16. **Colleagues_Rating_max**: Maximum colleagues rating for the sprint.
17. **Sprint_Rating_min**: Minimum sprint rating.
18. **Sprint_Rating_mean**: Mean sprint rating.
19. **Sprint_Rating_max**: Maximum sprint rating.
20. **Participants_Count**: Number of participants in the sprint.
21. **Start_Date**: Start date of the sprint.
22. **End_Date**: End date of the sprint.
23. **Duration_Days**: Duration of the sprint in days.
24. **Points_Engaged**: Points engaged during the sprint.
25. **Points_Delivered**: Points delivered during the sprint.

## Key Metrics and Trends

### Statistical Summaries

- **Quality_Rating_mean**: 
  - Mean: 4.05
  - Standard Deviation: 0.18
  - Trend: Generally stable with slight fluctuations.
- **Workload_Rating_mean**: 
  - Mean: 3.92
  - Standard Deviation: 0.18
  - Trend: Generally stable with slight fluctuations.
- **Energy_Rating_mean**: 
  - Mean: 3.32
  - Standard Deviation: 0.34
  - Trend: Generally stable with slight fluctuations.
- **Colleagues_Rating_mean**: 
  - Mean: 4.12
  - Standard Deviation: 0.24
  - Trend: Generally stable with slight fluctuations.
- **Sprint_Rating_mean**: 
  - Mean: 7.25
  - Standard Deviation: 0.52
  - Trend: Generally stable with slight fluctuations.
- **Participants_Count**: 
  - Mean: 11.85
  - Standard Deviation: 2.12
  - Trend: Generally stable with slight fluctuations.
- **Points_Engaged**: 
  - Mean: 31.15
  - Standard Deviation: 9.92
  - Trend: Generally stable with slight fluctuations.
- **Points_Delivered**: 
  - Mean: 18.85
  - Standard Deviation: 10.92
  - Trend: Generally stable with slight fluctuations.

## Visualization Suggestions

### Line Charts

- **Quality_Rating_mean**: A line chart to show the trend of quality ratings over time.
- **Workload_Rating_mean**: A line chart to show the trend of workload ratings over time.
- **Energy_Rating_mean**: A line chart to show the trend of energy ratings over time.
- **Colleagues_Rating_mean**: A line chart to show the trend of colleagues ratings over time.
- **Sprint_Rating_mean**: A line chart to show the trend of sprint ratings over time.

### Bar Graphs

- **Participants_Count**: A bar graph to show the number of participants in each sprint.
- **Points_Engaged**: A bar graph to show the points engaged in each sprint.
- **Points_Delivered**: A bar graph to show the points delivered in each sprint.

### Heat Maps

- **Quality_Rating_mean vs. Workload_Rating_mean**: A heat map to show the relationship between quality and workload ratings.
- **Energy_Rating_mean vs. Sprint_Rating_mean**: A heat map to show the relationship between energy and sprint ratings.

## Interactive Features

### Filtering

- Allow users to filter data by year, quarter, and specific sprints.

### Sorting

- Enable sorting of sprints based on different metrics such as quality rating, workload rating, and sprint rating.

### Hover Effects

- Implement hover effects to display detailed information about each data point in the visualizations.

## Summary and Recommendations

### Findings

- The data shows generally stable trends with slight fluctuations in key metrics such as quality rating, workload rating, energy rating, colleagues rating, and sprint rating.
- The number of participants, points engaged, and points delivered also show stable trends with slight fluctuations.

### Recommendations

- Implement the proposed visualizations to effectively represent the data and provide insights into the trends and patterns.
- Incorporate interactive features such as filtering, sorting, and hover effects to enhance the user experience and make the data more accessible.

## Material UI Integration

### Chosen Components

- **App Bar**: For the application's header and navigation.
- **Navigation Drawer**: For side navigation and menu options.
- **Cards**: To display data summaries and key metrics.
- **Buttons**: For user interactions and actions.
- **Grid**: For layout and organization of components.

### Color Scheme

- **Primary Color**: #1976d2 (Blue)
- **Secondary Color**: #dc004e (Red)

### Typography

- **Font Family**: Roboto, Arial, sans-serif

### Overall Style

- The design will follow Material UI's guidelines for spacing, alignment, and component usage to ensure a consistent and modern look.

### Integration with Visualizations

- **Cards**: Use Card components to display data summaries and key metrics.
- **Grid**: Use Grid components to organize and layout the visualizations.
- **Buttons**: Use Button components for user interactions, such as filtering and sorting options.
- **App Bar and Navigation Drawer**: Use these components to provide a consistent and intuitive navigation experience.

## Implementation of Proposed Visualizations

The proposed visualizations have been implemented using Chart.js and integrated into the HTML structure with a Material UI-inspired design. The visualizations include:

### Line Charts

- **Quality_Rating_mean**: Displays the trend of quality ratings over time.
- **Workload_Rating_mean**: Displays the trend of workload ratings over time.
- **Energy_Rating_mean**: Displays the trend of energy ratings over time.
- **Colleagues_Rating_mean**: Displays the trend of colleagues ratings over time.
- **Sprint_Rating_mean**: Displays the trend of sprint ratings over time.

### Bar Graphs

- **Participants_Count**: Displays the number of participants in each sprint.
- **Points_Engaged**: Displays the points engaged in each sprint.
- **Points_Delivered**: Displays the points delivered in each sprint.

### Heat Maps

- **Quality_Rating_mean vs. Workload_Rating_mean**: Displays the relationship between quality and workload ratings.
- **Energy_Rating_mean vs. Sprint_Rating_mean**: Displays the relationship between energy and sprint ratings.

### Interactive Features

- **Filtering**: Users can filter data by year, quarter, and specific sprints.
- **Sorting**: Users can sort sprints based on different metrics such as quality rating, workload rating, and sprint rating.
- **Hover Effects**: Hover effects display detailed information about each data point in the visualizations.

### Optimization

- The visualizations have been optimized for readability and performance, ensuring smooth rendering.
- The visualizations are responsive and interactive, providing a seamless user experience across different devices.

## Dynamic Data Update Feature

### Overview

The application now supports dynamic data updates, allowing it to handle new data entries in `datasource.csv` without requiring code changes. This feature ensures that visualizations automatically reflect any new data.

### Implementation

- **Data Loading Process**: The data loading process in `src/loadData.js` includes mechanisms to detect and handle new data entries dynamically.
- **Periodic Updates**: A function has been added to periodically check for updates in `datasource.csv` and refresh the data and visualizations accordingly.
- **Chart.js Integration**: Visualizations created using Chart.js in `index.html` automatically update with new data entries.

### Benefits

- **Real-Time Data**: The application provides real-time data updates, ensuring that users always see the most current information.
- **Enhanced User Experience**: Users do not need to manually refresh the page or make code changes to see new data.
- **Scalability**: The dynamic data update feature makes the application more scalable and adaptable to changing data requirements.

## Annual Update Process for `datasource.csv`

### Steps to Update `datasource.csv` Annually

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
