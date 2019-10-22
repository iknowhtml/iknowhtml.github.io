import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './utils/state';
import './global.postcss';
import './CNAME';

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
