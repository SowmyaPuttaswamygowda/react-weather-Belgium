import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import WeatherContainer from './components/WeatherContainer';

const lightTheme = createTheme({
  palette: {
    mode: 'light', // Set the mode to 'light' to disable dark mode
    primary: {
      main: '#1976d2', // Customize primary color
    },
    secondary: {
      main: '#dc004e', // Customize secondary color
    },
    background: {
      default: '#ad608e', // Customize background color
      paper: '#ffffff', // Customize paper background color
    },
    text: {
      primary: '#000000', // Customize primary text color
      secondary: '#666666', // Customize secondary text color
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header title="Brussels Weather App" />
      <WeatherContainer />
    </ThemeProvider>
  );
};

export default App;