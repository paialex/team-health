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

export { loadCSVData };
