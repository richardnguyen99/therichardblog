/**
 * Style definition for Tooltip component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledToolTipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledToolTip = styled.div`
  position: absolute;
  white-space: nowrap;
  background: #ffffff; // TODO: Implement the background for light theme
  color: #0e0e01; // TODO: Implement the color for dark theme
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
  font-size: 0.6rem;
  font-weight: 600;
  padding: 0.25rem;
  margin-top: 5rem;
`;
