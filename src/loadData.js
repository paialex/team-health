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
    } else {
      console.log('Parsed Data:', parsedData.data);
      return parsedData.data;
    }
  } catch (error) {
    console.error('Error loading CSV:', error);
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
