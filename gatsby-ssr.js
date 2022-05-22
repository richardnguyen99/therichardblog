
/**
 * Gatsby configuration for production
 */

import * as React from "react";

import GlobalStyle from "./src/components/GlobalStyle";

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};
