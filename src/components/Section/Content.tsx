/**
 * Content section for central content display
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import styled from "styled-components";

const StyledContent = styled.div`
  max-width: 48rem;
  margin: auto;
  padding-top: 2.5rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 10rem;
  }
`;

const Content: React.FC = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
