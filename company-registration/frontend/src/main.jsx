import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material'; // Import these
import theme from './theme'; // Import your new theme
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* This applies the background color globally */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);