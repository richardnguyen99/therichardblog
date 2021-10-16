/**
 * Definitions for global variables and mixins
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  html, body {
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    font-family:  Roboto, -apple-system, sans-serif, serif;
  }

  body {
    color: #efefe1f0;
    fill: #efefe1;
    background: #0e0e10;
    text-rendering: optimizeLegibility;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
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
