/**
 * Styled components for <Section />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";

export const StyledMainWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

export const StyledMainSection = styled.main`
  display: block;
  min-width: 0px;
  flex: 1 1 auto;
  box-shadow: rgb(230, 230, 230) 1px 0px 0px inset;
`;

export const StyledMainTitle = styled.div`
  display: block;
  justify-content: center;
  display: flex;
`;

export const StyledMainTitlePanel = styled.div`
  max-width: 692px;
  margin: 0rem 2rem;
  min-width: 0px;
  width: 100%;
`;

export const StyledMainTitlePanelPadding = styled.div`
  margin: 3.25rem 0 3rem;
  box-shadow: rgb(230, 230, 230) 0px -1px 0px inset;
  display: block;
`;

export const StyledMainInfo = styled.div`
  display: block;
  width: 394px;
  min-height: 100vh;
  border-left: 1px solid rgba(230, 230, 230, 1);
  padding: 0rem 2rem;
  box-sizing: border-box;
`;

export const StyledMainInfoWrapper = styled.div`
  height: 100%;
  position: relative;
  display: inline-block;
  width: 100%;
  margin-top: 48px;
`;
