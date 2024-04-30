import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Reactquestion from './Reactquestion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reactquestion />
    <App />
  </React.StrictMode>
);

reportWebVitals();
