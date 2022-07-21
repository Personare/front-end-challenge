import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CardProvider from './contexts/cardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>
);

