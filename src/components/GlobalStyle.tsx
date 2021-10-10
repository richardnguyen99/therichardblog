/**
 * Definitions for global variables and mixins
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

  html, body {
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    font-family: -apple-system, Roboto, sans-serif, serif;
  }

  body {
    color: #efefe1;
    fill: #efefe1;
    background: #0e0e10;
  }

  .anchor.before {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    padding-right: 4px;
    opacity: 0;

    &:hover {
      opacity: 1;
    }
  }
`;

export default GlobalStyle;
