/**
 * A blinking cursor component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: #efefe1;
}
`;

export const StyledBlinkingCursor = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 100;
  font-size: inherit;
  color: #efefe1;
  animation: 1s ${blink} step-end infinite;
`;
