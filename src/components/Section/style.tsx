/**
 * Style definition for section components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledSectionHeadingWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2.5rem;
  margin-top: 7.5rem;

  @media screen and (min-width: 768px) {
    margin: 7.5rem;
  }

  @media screen and (min-width: 1920px) {
    margin: 10rem;
  }
`;

export const StyledSectionHeadingText = styled.h1`
  margin: 0;
  font-size: 200px;
  font-weight: 600;
  letter-spacing: -8px;
  line-height: 90%;
  width: 100%;

  @media screen and (max-width: 1920px) {
    font-size: 10.5vw;
    letter-spacing: -0.3vw;
  }
`;
