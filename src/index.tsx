import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './packages/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
