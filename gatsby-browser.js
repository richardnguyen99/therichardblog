/**
 * Gatsby configuration for developing
 */

import React from "react";
import { LocationProvider, useLocation } from "@gatsbyjs/reach-router";
import "normalize.css";

import GlobalStyle from "./src/components/GlobalStyle";
import NavbarContext from "./src/components/Navbar/context";

const NavbarProvider = ({ children }) => {
  const location = useLocation();
  const [position, setPosition] = React.useState({ top: 76, width: 0, left: 0 });

  const contextValue = React.useMemo(
    () => ({
      active: {
        pathname: location.pathname,
        top: position.top,
        left: position.left,
        width: position.width,
        onActiveChange: setPosition,
      },
    }),
    [location.pathname, position.top, position.left, position.width]
  );

  return <NavbarContext.Provider value={contextValue}>{children}</NavbarContext.Provider>;
};

export const wrapRootElement = ({ element }) => {
  return (
    <LocationProvider>
      <NavbarProvider>
        <GlobalStyle />
        {element}
      </NavbarProvider>
    </LocationProvider>
  );
};
