/**
 * Gatsby configuration for production
 */
import React from "react";
import "normalize.css";

import GlobalStyle from "./src/components/GlobalStyle";

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};
