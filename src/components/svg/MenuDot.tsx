/**
 * React component for 3-horizontal-dots SVG.
 *
 * The original SVG is written here:
 * {@link https://primer.github.io/octicons/kebab-horizontal-16}
 * {@link https://primer.github.io/octicons/kebab-horizontal-24}
 */
import * as React from "react";

import { SVGProps } from "./type";

const MenuDot16: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
  </svg>
);

const MenuDot24: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path
      fillRule="evenodd"
      d="M6 12a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0zm6 2a2 2 0 100-4 2 2 0 000 4z"></path>
  </svg>
);

const MenuDot: React.FC<SVGProps> = ({ size }) => {
  return size === "16" ? <MenuDot16 /> : <MenuDot24 />;
};

export default MenuDot;
