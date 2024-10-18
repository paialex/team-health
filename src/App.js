import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Team Health</h1>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
