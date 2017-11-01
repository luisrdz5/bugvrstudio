 /* eslint-disable */
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';
import App from './components/App'
import './index.css';



ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);



