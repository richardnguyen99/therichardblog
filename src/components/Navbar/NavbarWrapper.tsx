/**
 * NavbarWrapper to hold position of Navbar component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import styled from "styled-components";

const StyledNavbarTopLevelWrapper = styled.nav`
  width: 100%;
  position: fixed;
`;

const StyledNavbarNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: var(--fs-small);

  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const NavbarWrapper: React.FC = ({ children }) => {
  return (
    <StyledNavbarTopLevelWrapper>
      <StyledNavbarNavigationContainer>{children}</StyledNavbarNavigationContainer>
    </StyledNavbarTopLevelWrapper>
  );
};

export default NavbarWrapper;
