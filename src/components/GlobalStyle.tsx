/**
 * GlobalStyle for global configuration and styling
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Font size */
    --fs-base: 20px;
    --fs-small: 16px;
    --fs-xs: 14px;
    --fs-h1: 72px;
    --fs-h2: 48px;
    --fs-h3: 32px;
    --fs-h4: 24px;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  ::selection, ::-moz-selection {
    background-color: #56d364 !important;
    color: #fff !important;
    -webkit-text-fill-color: white !important;
  }

  html {
    font-size: 16px;
  }

  body {
    color: #8b949e;
    background-color: #0d1117;
    font-size: var(--fs-base);
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.4;
    font-feature-settings: "salt" 2;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default GlobalStyle;
