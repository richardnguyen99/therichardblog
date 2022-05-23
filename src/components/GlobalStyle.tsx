/**
 * Styled component that stores global styling and configuration
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { createGlobalStyle } from "styled-components";

import NormalizeCSS from "./Normalize";

const GlobalStyle = createGlobalStyle`
  ${NormalizeCSS}

  body {
    text-rendering: optimizeLegibility;
    color: rgba(0,0,0, 0.9);
    background-color: rgba(255, 255, 255, 1);
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }

  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
