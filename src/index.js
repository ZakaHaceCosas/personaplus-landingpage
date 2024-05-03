import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
