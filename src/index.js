import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './shared/globalStyles';
import Theme from './shared/theme';

const root = document.querySelector('#root');

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>, root);