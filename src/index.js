// src/index.js

import Inferno from 'inferno';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

Inferno.render(
  <App />,
  document.getElementById('root')
);
