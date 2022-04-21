/**
 * Linear span for colorful text
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import styled from "styled-components";

const StyledLinearSpan = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  line-height: 1;
  color: #79c0ff;
  background: linear-gradient(92.7deg, #56d364 -1.37%, #79c0ff 78.71%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(92.7deg, #56d364 -1.37%, #79c0ff 78.71%);
    transition: 0.2s;
    content: "";
  }

  &:hover::before {
    width: 100%;
  }
`;

const LinearSpan: React.FC = ({ children }) => {
  return <StyledLinearSpan>{children}</StyledLinearSpan>;
};

export default LinearSpan;
