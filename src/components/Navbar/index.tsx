/**
 * Core navbar components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { Link } from "gatsby";

import NavbarContext from "./context";
import { NavbarProps, NavbarLinkProps, NavbarItemProps } from "./type";
import {
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavbarItem,
  StyledNavbarLink,
  StyledNavbarContainer,
  StyledNavbarActiveLink,
} from "./style";
import useMergedRefs from "@hooks/useMergedRefs";

/**
 * @description Navigates to other pages and sites
 */
const NavbarLink: React.FC<NavbarLinkProps> = React.forwardRef<
  HTMLAnchorElement | HTMLSpanElement,
  NavbarLinkProps
>(({ as, href = "", to = "", children, ...rest }, ref) => {
  const navbarCtx = React.useContext(NavbarContext);
  const innerRef = React.useRef<HTMLAnchorElement | HTMLSpanElement>(null);
  const mergedRef = useMergedRefs([ref, innerRef]);
  const Component = as || (href ? "a" : to ? Link : "span");

  React.useEffect(() => {
    // Only work with internal links
    if (to === navbarCtx.active.pathname && innerRef && innerRef.current) {
      navbarCtx.active.onActiveChange((prevState) => ({
        ...prevState,
        left: innerRef.current.getBoundingClientRect().left,
        width: innerRef.current.getBoundingClientRect().width,
      }));
    }
  }, [navbarCtx.active, navbarCtx.active.pathname, to]);

  return (
    <StyledNavbarLink
      ref={mergedRef}
      as={Component}
      href={href}
      to={!href ? to : undefined}
      {...rest}>
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
  const navbarCtx = React.useContext(NavbarContext);
  const innerRef = React.useRef<HTMLAnchorElement | HTMLSpanElement>(null);
  const mergedRef = useMergedRefs([ref, innerRef]);
  const Component = as || (href ? "a" : to ? Link : "span");

  React.useEffect(() => {
    // Only work with internal links
    if (to === navbarCtx.active.pathname && innerRef && innerRef.current) {
      navbarCtx.active.onActiveChange((prevState) => ({
        ...prevState,
        left: innerRef.current.getBoundingClientRect().left,
        width: innerRef.current.getBoundingClientRect().width,
      }));
    }
  }, [navbarCtx.active, navbarCtx.active.pathname, to]);

  return (
    <StyledNavbarBrand
      ref={mergedRef}
      as={Component}
      href={href}
      to={!href ? to : undefined}
      {...rest}>
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

const ActiveLink: React.FC = () => {
  const navbarCtx = React.useContext(NavbarContext);

  return (
    <StyledNavbarActiveLink
      style={{
        display: navbarCtx.active.width === 0 && "none",
        top: navbarCtx.active.top + "px",
        width: navbarCtx.active.width + "px",
        left: navbarCtx.active.left + "px",
      }}
    />
  );
};

/**
 * @description Displays the navbar component in the site
 */
const Navbar: React.FC<NavbarProps> = React.forwardRef<HTMLElement, NavbarProps>(
  ({ children, ...rest }, ref) => {
    const innerRef = React.useRef<HTMLDivElement>(null);
    const mergedRef = useMergedRefs([ref, innerRef]);
    return (
      <StyledNavbar ref={mergedRef} {...rest}>
        <StyledNavbarContainer>{children}</StyledNavbarContainer>
      </StyledNavbar>
    );
  }
);
Navbar.displayName = "Navbar";

export default Object.assign(Navbar, {
  Item: NavbarItem,
  Link: NavbarLink,
  Brand: NavbarBrand,
  ActiveLink,
});
