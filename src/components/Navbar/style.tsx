/**
 * Styled components for Navbar
 *
 * This file should only contains style definitions of the navbar components, do not handle logic here
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 1); // TODO: Implement color text for light theme
  background-color: #18181b; // TODO: Implement color background for light theme
  align-items: center;
  flex-wrap: nowrap;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

export const StyledNavbarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  height: 5rem;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledNavbarActiveLink = styled.div`
  position: fixed;
  z-index: 3;
  background: rgba(255, 255, 255, 1);
  height: 4px;
  transition: all 0.2s ease-in;
`;

export const StyledNavbarItem = styled.div<{ full?: boolean }>`
  display: flex;
  align-self: center;
  flex-wrap: nowrap;

  ${(props) => props.full && "flex: auto;"}

  a:last-child, span:last-child {
    margin-right: 0;
  }
`;

export const StyledNavbarLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: rgba(255, 255, 255, 1); // TODO: Implement color text for light theme
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;

  padding-top: 8px;
  padding-bottom: 8px;
  margin-right: 32px;

  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 0.8); // TODO: implment color text hover for light theme
  }
`;

export const StyledNavbarBrand = styled(StyledNavbarLink)`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-family: "Abril Fatface";

  svg,
  .icon {
    fill: currentColor;
    overflow: visible;
  }
`;
