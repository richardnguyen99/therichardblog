/**
 * Styling for <Nav /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledNavItem = styled.div`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8); // TODO: Implement color text for light theme
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-right: 32px;
  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 1); // TODO: implment color text hover for light theme
  }
`;

export const StyledActiveLink = styled.div`
  position: fixed;
  height: 1px;
  background: black;
  transition: all 200ms ease-in;
`;

export const StyledNav = styled.nav`
  display: flex;
  font-size: 16px;
  line-height: 1.5;
  //color: rgba(30, 30, 30, 1);
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
`;
