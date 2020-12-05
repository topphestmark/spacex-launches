  import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;

  }

  html, body {
    font-family: 'Hind Siliguri', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
  }
`;