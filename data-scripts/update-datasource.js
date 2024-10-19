const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const DATA_SOURCE_PATH = path.join(__dirname, '../data/datasource.csv');
const BACKUP_PATH = path.join(__dirname, '../data/datasource_backup.csv');

function backupDataSource() {
  fs.copyFileSync(DATA_SOURCE_PATH, BACKUP_PATH);
  console.log('Backup created successfully.');
}

function loadCSVData(filePath) {
  const csvText = fs.readFileSync(filePath, 'utf8');
  const parsedData = Papa.parse(csvText, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  });

  if (parsedData.errors.length) {
    throw new Error('Errors occurred during parsing:', parsedData.errors);
  }

  return parsedData.data;
}

function validateAndFormatData(data) {
  return data.map(entry => {
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
}

function updateDataSource(newData) {
  const validatedData = validateAndFormatData(newData);
  const csv = Papa.unparse(validatedData);
  fs.writeFileSync(DATA_SOURCE_PATH, csv, 'utf8');
  console.log('Data source updated successfully.');
}

function main() {
  try {
    backupDataSource();
    const newData = loadCSVData(DATA_SOURCE_PATH);
    updateDataSource(newData);
  } catch (error) {
    console.error('Error updating data source:', error);
  }
}

main();
