/**
 * Styling for <SideBar /> component
 *
 * @author Richard Nguyen <richard.ng616@gmail.com>
 */
import styled from "styled-components";

const StyledBaseSideBar = styled.div`
  display: block;
  width: 394px;
  padding: 0rem 2rem;
  box-sizing: border-box;
`;

export const StyledRightSideBar = styled(StyledBaseSideBar)`
  border-left: 1px rgba(230, 230, 230, 1);
`;

export const StyledLeftSideBar = styled(StyledBaseSideBar)`
  border-right: 1px rgba(230, 230, 230, 1);
`;
