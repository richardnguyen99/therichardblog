/**
 * Gatsby configuration for developing
 */

import React from "react";
import { LocationProvider } from "@gatsbyjs/reach-router";
import "normalize.css";

import GlobalStyle from "./src/components/GlobalStyle";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => {
  return (
    <LocationProvider>
      <GlobalStyle />
      {element}
    </LocationProvider>
  );
};
