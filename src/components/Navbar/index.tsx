/**
 * Core navbar components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { Link } from "gatsby";

import { NavbarProps, NavbarLinkProps, NavbarItemProps } from "./type";
import { StyledNavbar, StyledNavbarBrand, StyledNavbarItem, StyledNavbarLink } from "./style";

/**
 * @description Navigates to other pages and sites
 */
const NavbarLink: React.FC<NavbarLinkProps> = React.forwardRef<
  HTMLAnchorElement | HTMLSpanElement,
  NavbarLinkProps
>(({ as, href = "", to = "", children, ...rest }, ref) => {
  const Component = as || (href ? "a" : to ? Link : "span");

  return (
    <StyledNavbarLink ref={ref} as={Component} href={href} to={!href ? to : undefined} {...rest}>
      {children}
    </StyledNavbarLink>
  );
});
NavbarLink.displayName = "NavbarLink";

/**
 * @description Controls the displayment of the brand
 */
const NavbarBrand: React.FC<NavbarLinkProps> = React.forwardRef<
  HTMLAnchorElement | HTMLSpanElement,
  NavbarLinkProps
>(({ as, href = "", to = "", children, ...rest }, ref) => {
  const Component = as || (href ? "a" : to ? Link : "span");

  return (
    <StyledNavbarBrand ref={ref} as={Component} href={href} to={!href ? to : undefined} {...rest}>
      {children}
    </StyledNavbarBrand>
  );
});
NavbarBrand.displayName = "NavbarBrand";

/**
 * @description Contains an individual or a group of components
 */
const NavbarItem: React.FC<NavbarItemProps> = React.forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ full = false, children, ...rest }, ref) => {
    return (
      <StyledNavbarItem ref={ref} full={full} {...rest}>
        {children}
      </StyledNavbarItem>
    );
  }
);
NavbarItem.displayName = "NavbarItem";

/**
 * @description Displays the navbar component in the site
 */
const Navbar: React.FC<NavbarProps> = React.forwardRef<HTMLElement, NavbarProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledNavbar ref={ref} {...rest}>
        {children}
      </StyledNavbar>
    );
  }
);
Navbar.displayName = "Navbar";

export default Object.assign(Navbar, { Item: NavbarItem, Link: NavbarLink, Brand: NavbarBrand });
