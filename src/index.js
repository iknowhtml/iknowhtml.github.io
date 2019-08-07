import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './utils/state';
import './global.postcss';
import 'typeface-raleway';

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
