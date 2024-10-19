async function loadCSVData() {
  try {
    const response = await fetch('data/datasource.csv');
    const csvText = await response.text();

    const parsedData = Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      error: (error) => {
        console.error('Error parsing CSV:', error);
      },
    });

    if (parsedData.errors.length) {
      console.error('Errors occurred during parsing:', parsedData.errors);
      alert('An error occurred while parsing the CSV data. Please try again later.');
    } else {
      console.log('Parsed Data:', parsedData.data);
      return validateAndFormatData(parsedData.data);
    }
  } catch (error) {
    console.error('Error loading CSV:', error);
    alert('An error occurred while loading the CSV data. Please try again later.');
  }
}

function validateAndFormatData(data) {
  try {
    const validatedData = data.map(entry => {
      // Validation checks
      if (typeof entry.Quality_Rating_mean !== 'number' || entry.Quality_Rating_mean < 0 || entry.Quality_Rating_mean > 5) {
        throw new Error(`Invalid Quality_Rating_mean: ${entry.Quality_Rating_mean}`);
      }
      if (typeof entry.Workload_Rating_mean !== 'number' || entry.Workload_Rating_mean < 0 || entry.Workload_Rating_mean > 5) {
        throw new Error(`Invalid Workload_Rating_mean: ${entry.Workload_Rating_mean}`);
      }
      if (typeof entry.Energy_Rating_mean !== 'number' || entry.Energy_Rating_mean < 0 || entry.Energy_Rating_mean > 5) {
        throw new Error(`Invalid Energy_Rating_mean: ${entry.Energy_Rating_mean}`);
      }
      if (typeof entry.Colleagues_Rating_mean !== 'number' || entry.Colleagues_Rating_mean < 0 || entry.Colleagues_Rating_mean > 5) {
        throw new Error(`Invalid Colleagues_Rating_mean: ${entry.Colleagues_Rating_mean}`);
      }
      if (typeof entry.Sprint_Rating_mean !== 'number' || entry.Sprint_Rating_mean < 0 || entry.Sprint_Rating_mean > 10) {
        throw new Error(`Invalid Sprint_Rating_mean: ${entry.Sprint_Rating_mean}`);
      }

      // Formatting checks
      entry.Quality_Rating_mean = parseFloat(entry.Quality_Rating_mean.toFixed(2));
      entry.Workload_Rating_mean = parseFloat(entry.Workload_Rating_mean.toFixed(2));
      entry.Energy_Rating_mean = parseFloat(entry.Energy_Rating_mean.toFixed(2));
      entry.Colleagues_Rating_mean = parseFloat(entry.Colleagues_Rating_mean.toFixed(2));
      entry.Sprint_Rating_mean = parseFloat(entry.Sprint_Rating_mean.toFixed(2));

      return entry;
    });

    return validatedData;
  } catch (error) {
    console.error('Error validating and formatting data:', error);
    alert('An error occurred while validating and formatting the data. Please try again later.');
  }
}

function generateLineChartData(data, key) {
  return data.map(d => d[key]);
}

function generateBarChartData(data, key) {
  return data.map(d => d[key]);
}

function generateHeatMapData(data, keyX, keyY) {
  return data.map(d => ({ x: d[keyX], y: d[keyY] }));
}

function filterDataByYear(data, year) {
  if (!year) return data;
  return data.filter(d => d.Year_mode === year);
}

function filterDataByQuarter(data, quarter) {
  if (!quarter) return data;
  return data.filter(d => d.Quarter_mode === quarter);
}

function filterDataBySprint(data, sprint) {
  if (!sprint) return data;
  return data.filter(d => d.Sprint_ID === sprint);
}

function sortData(data, key) {
  return data.sort((a, b) => a[key] - b[key]);
}

function applyFiltersAndSorting() {
  const year = document.getElementById('yearFilter').value;
  const quarter = document.getElementById('quarterFilter').value;
  const sprint = document.getElementById('sprintFilter').value;
  const sortBy = document.getElementById('sortOptions').value;

  let filteredData = data;
  if (year) {
    filteredData = filterDataByYear(filteredData, year);
  }
  if (quarter) {
    filteredData = filterDataByQuarter(filteredData, quarter);
  }
  if (sprint) {
    filteredData = filterDataBySprint(filteredData, sprint);
  }
  if (sortBy) {
    filteredData = sortData(filteredData, sortBy);
  }

  // Update charts with filtered and sorted data
  updateCharts(filteredData);
}

function updateCharts(filteredData) {
  const updatedQualityRatingData = filteredData.map(d => d.Quality_Rating_mean);
  const updatedWorkloadRatingData = filteredData.map(d => d.Workload_Rating_mean);
  const updatedEnergyRatingData = filteredData.map(d => d.Energy_Rating_mean);
  const updatedColleaguesRatingData = filteredData.map(d => d.Colleagues_Rating_mean);
  const updatedSprintRatingData = filteredData.map(d => d.Sprint_Rating_mean);
  const updatedParticipantsCountData = filteredData.map(d => d.Participants_Count);
  const updatedPointsEngagedData = filteredData.map(d => d.Points_Engaged);
  const updatedPointsDeliveredData = filteredData.map(d => d.Points_Delivered);

  const updatedLabels = filteredData.map(d => d.Sprint_ID);

  // Update each chart with new data
  updateChart(qualityRatingChart, updatedLabels, updatedQualityRatingData);
  updateChart(workloadRatingChart, updatedLabels, updatedWorkloadRatingData);
  updateChart(energyRatingChart, updatedLabels, updatedEnergyRatingData);
  updateChart(colleaguesRatingChart, updatedLabels, updatedColleaguesRatingData);
  updateChart(sprintRatingChart, updatedLabels, updatedSprintRatingData);
  updateChart(participantsCountChart, updatedLabels, updatedParticipantsCountData);
  updateChart(pointsEngagedChart, updatedLabels, updatedPointsEngagedData);
  updateChart(pointsDeliveredChart, updatedLabels, updatedPointsDeliveredData);
  updateHeatMap(qualityVsWorkloadChart, updatedQualityRatingData, updatedWorkloadRatingData);
  updateHeatMap(energyVsSprintChart, updatedEnergyRatingData, updatedSprintRatingData);
}

function updateChart(chart, labels, data) {
  chart.data.labels = labels;
  chart.data.datasets[0].data = data;
  chart.update();
}

function updateHeatMap(chart, dataX, dataY) {
  chart.data.datasets[0].data = dataX.map((x, i) => ({ x: x, y: dataY[i] }));
  chart.update();
}

async function checkForUpdates() {
  const newData = await loadCSVData();
  if (JSON.stringify(newData) !== JSON.stringify(data)) {
    data = newData;
    applyFiltersAndSorting();
  }
}

setInterval(checkForUpdates, 60000); // Check for updates every 60 seconds

// Ensure data loading and chart rendering functions are compatible with all major browsers
function ensureCrossBrowserCompatibility() {
  // Check for fetch API support
  if (!window.fetch) {
    console.error('Fetch API is not supported in this browser.');
    return false;
  }

  // Check for Promises support
  if (!window.Promise) {
    console.error('Promises are not supported in this browser.');
    return false;
  }

  // Check for Chart.js support
  if (!window.Chart) {
    console.error('Chart.js is not supported in this browser.');
    return false;
  }

  // Check for PapaParse support
  if (!window.Papa) {
    console.error('PapaParse is not supported in this browser.');
    return false;
  }

  return true;
}

// Test and fix any issues related to cross-browser compatibility
function testCrossBrowserCompatibility() {
  const isCompatible = ensureCrossBrowserCompatibility();
  if (!isCompatible) {
    console.error('The application is not fully compatible with this browser.');
  } else {
    console.log('The application is fully compatible with this browser.');
  }
}

// Run cross-browser compatibility tests
testCrossBrowserCompatibility();

async function handleFeedbackFormSubmission(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const feedbackData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };
  try {
    const response = await fetch('/submit-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedbackData)
    });
    if (response.ok) {
      alert('Thank you for your feedback!');
      event.target.reset();
    } else {
      alert('Failed to submit feedback. Please try again later.');
    }
  } catch (error) {
    console.error('Error submitting feedback:', error);
    alert('An error occurred. Please try again later.');
  }
}

document.getElementById('feedbackForm').addEventListener('submit', handleFeedbackFormSubmission);
