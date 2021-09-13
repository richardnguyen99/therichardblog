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
  padding: 1rem;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 1); // TODO: Implement color text for light theme
  background-color: #18181b; // TODO: Implement color background for light theme
  align-items: center;
  flex-wrap: nowrap;
`;

export const StyledNavbarItem = styled.div<{ full?: boolean }>`
  display: flex;
  margin-right: 1rem;
  align-self: center;
  flex-wrap: nowrap;

  &:last-child {
    margin-right: 0;
  }

  ${(props) => props.full && "flex: auto;"}
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

  svg,
  .icon {
    margin-right: 8px;
    fill: currentColor;
    overflow: visible;
  }
`;
