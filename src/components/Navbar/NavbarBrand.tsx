/**
 * NavbarBrand to contain the brand and its configuration
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledNavbarBrand = styled(Link)`
  text-decoration: none;
  color: #fff;

  font-family: "Abril Fatface", Arial, Helvetica, sans-serif;
  font-size: var(--fs-h4);
`;

const NavbarBrand: React.FC = () => {
  return <StyledNavbarBrand to="/">Richar&apos;s blog</StyledNavbarBrand>;
};

export default NavbarBrand;
