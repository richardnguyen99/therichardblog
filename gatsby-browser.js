/**
 * Gatsby configuration for developing
 */

import * as React from "react";
import { LocationProvider } from "@reach/router";

import GlobalStyle from "./src/components/GlobalStyle";
import NavProvider from "./src/components/Nav/context";

export const wrapRootElement = ({ element }) => {
  return (
    <LocationProvider>
      <NavProvider>
        <GlobalStyle />
        {element}
      </NavProvider>
    </LocationProvider>
  );
};
