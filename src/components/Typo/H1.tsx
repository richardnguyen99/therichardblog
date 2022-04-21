/**
 * Heading 1 component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import styled from "styled-components";

const StyledHeading1 = styled.h1`
  margin-top: 0;
  color: #fff;
  font-weight: 800;

  margin-bottom: 2rem;
  font-size: var(--fs-h1);
  line-height: 1.05;
`;

const H1: React.FC = ({ children }) => {
  return <StyledHeading1>{children}</StyledHeading1>;
};

export default H1;
