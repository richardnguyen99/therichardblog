/**
 * Gatsby configuration for developing
 */

import React from "react";
import "normalize.css";

import GlobalStyle from "./src/components/GlobalStyle";

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};
