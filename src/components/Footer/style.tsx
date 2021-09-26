/**
 * Style definitions for Footer components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: black; // Footer background stays the same regardless of theme
  color: #e0e0e1;
  padding: 5rem 6.5rem;

  @media screen and (max-width: 1023px) {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  }
`;

export const StyledFooterGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1920px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    grid-template-columns: none;
  }
`;

export const StyledFooterGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 2fr 8fr;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-row-gap: 32px;
    margin-bottom: 2rem;
  }
`;

export const StyledFooterBrand = styled.div`
  color: inherit;
  fill: currentColor;
  font-size: 3rem;
  font-family: "Abril Fatface";
`;

export const StyledFooterGridColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 6rem;
  margin-left: auto;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 2fr 2fr;
    margin-right: 0;
    margin-left: 0;
    grid-column-gap: 3rem;
  }
`;

export const StyledFooterGridColumn = styled.div``;

export const StyledFooterGridColumnHeader = styled.h4`
  font-size: 14px;
  line-height: 142%;
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 25px;
`;

export const StyledFooterGridColumnGroup = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledFooterGridColumnGroupItem = styled.li`
  margin: 0;
  margin-bottom: 12px;

  a,
  .link {
    font-size: 24px;
    line-height: 150%;
    font-weight: 600;
    text-decoration: none;
    color: #e0e0e1;
  }
`;

export const StyledFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  grid-column: 2 / -2;

  span {
    font-size: 12px;
    font-weight: 600;
    color: #e0e0e1;
  }

  a {
    font-size: 12px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);

    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media screen and (max-width: 1023px) {
    justify-content: flex-start;

    span:first-of-type {
      margin-right: 2rem;
    }
  }
`;
