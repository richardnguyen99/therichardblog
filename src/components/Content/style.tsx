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

export const StyledContentContainer = styled.div`
  //font-family: Poppins, sans-serif;
  color: rgb(41, 41, 41);
  letter-spacing: -0.003em;
  line-height: 32px;
  font-size: 20px;

  h1 {
    letter-spacing: -0.016em;
    line-height: 50px;
    font-size: 48px;
  }

  h3 {
    letter-spacing: -0.008em
    line-height: 40px;
    font-size: 32px;
  }

  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 1em;
  }

  ul > li:before {
    display: inline-block;
    content: "—";
    width: 1rem;
    margin-right: 1em;
  }

  hr {
    background: rgb();
  }
`;

export const StyledContent = styled.main`
  max-width: 1100px;
  width: calc(100% - 394px);
  flex: 1 1 auto;
  padding: 0rem 4rem;
`;
