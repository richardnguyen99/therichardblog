/**
 * Navbar to represent the main navbar header component in app
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import NavbarBrand from "./NavbarBrand";
import NavbarWrapper from "./NavbarWrapper";

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <NavbarBrand />
    </NavbarWrapper>
  );
};

export default Navbar;
