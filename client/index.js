import React from 'react';
import { render } from 'react-dom';
import App from './components/app.jsx';
import "core-js/stable";
import "regenerator-runtime/runtime";

render(
  <App />,
  document.getElementById('root')
);