/**
 * Styling for <SideBar /> component
 *
 * @author Richard Nguyen <richard.ng616@gmail.com>
 */
import styled from "styled-components";

export const StyledSideBarFixedContent = styled.div`
  position: fixed;
`;

export const StyledSideBarHeader = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 3rem 0rem;
`;

const StyledBaseSideBar = styled.div`
  display: block;
  width: 394px;
  padding: 0rem 2rem;
  box-sizing: border-box;
`;

export const StyledRightSideBar = styled(StyledBaseSideBar)`
  border-left: 1px solid rgba(230, 230, 230, 1);
`;

export const StyledLeftSideBar = styled(StyledBaseSideBar)`
  border-right: 1px solid rgba(230, 230, 230, 1);
`;
