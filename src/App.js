// src/App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import CSSBaseline from '@mui/material/CssBaseline';
import ThemeProvider from './contexts/ThemeProvider';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <CSSBaseline />
      <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
