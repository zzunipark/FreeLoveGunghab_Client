import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './MainPage';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <MainPage />
  </React.StrictMode>
);