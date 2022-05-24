/**
 * Gatsby configuration for production
 */

import * as React from "react";

import GlobalStyle from "./src/components/GlobalStyle";

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([<div key="portal" id="modal" />]);
};

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};
