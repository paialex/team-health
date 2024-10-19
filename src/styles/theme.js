import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  overrides: {
    MuiButton: {
      root: {
        '@apply bg-primary text-white': {},
      },
    },
    MuiCard: {
      root: {
        '@apply bg-white shadow-md rounded p-4': {},
      },
    },
  },
});

export default theme;
