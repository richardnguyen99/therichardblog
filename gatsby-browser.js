/**
 * Gatsby configuration for developing
 */

import React from "react";
import "normalize.css";

export const wrapRootElement = ({ element }) => {
  return <main>{element}</main>;
};
