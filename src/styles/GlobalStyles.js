import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--black);
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }

  html {
    background: var(--white);
  }
  
  :root {
    --primary: red;
    --secondary: blue;
    --black: #000;
    --white: #FFF;
    --gray: #EAEAEA;
    --orange: #e6601f;
    --border: #CCC;
    --btn-primary-normal: #ffde66;
    --btn-primary-hover: #fbcf31;
    --btn-secondary-normal: #e2e2e2;
    --btn-secondary-hover: #ccc;
    --btn-delete-normal: #ff6666;
    --btn-delete-hover: #fb4b4b;
  }
`;
