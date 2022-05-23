/**
 * Styling for <Content /> component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledContentTitleBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  margin: 3rem 0rem;
`;

export const StyledContentTitle = styled.h1`
  flex: 1 1 auto;
`;

export const StyledContent = styled.main`
  max-width: 1100px;
  width: calc(100% - 394px);
  flex: 1 1 auto;
  padding: 0rem 4rem;
`;
