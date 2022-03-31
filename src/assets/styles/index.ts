import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-family: 'Ubuntu', sans-serif;
    --font-weight-200: 200;
    --font-weight-400: 400;
    --font-weight-600: 600;

    --black-primary: #111111;
    --black-secondary: #222222;
    --white: #f1f1f1;
    --violet-primary: #cca6ff;
    --violet-secondary: #9342ff;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;

    body {
      font-family: var(--font-family);
      background-color: var(--black-primary);
      color: var(--white);

      ul,
      ul li {
        list-style: none
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`
