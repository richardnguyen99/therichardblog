/**
 * Gatsby configuration for developing
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
//import loadable from "@loadable/component/";

import GlobalStyle from "./src/components/GlobalStyle";

const loadableReady = require("@loadable/component").loadableReady;

//export const replaceHydrateFunction = () => {
//return (element, container, callback) => {
//loadableReady(() => {
//ReactDOM.render(element, container, callback);
//});
//};
//};

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  );
};
