/**
 * Gatsby configuration for production
 */
import * as React from "react";
import "normalize.css";

export const wrapPageElement = ({ element }) => {
  return <main>{element}</main>;
};
