import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import App from './App';

import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
