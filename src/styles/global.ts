import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background: #0d1418;
    color: #e0e0e2;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    -webkit-font-smoothning: antialiased;
  }
`;