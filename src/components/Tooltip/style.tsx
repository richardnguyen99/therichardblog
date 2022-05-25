/**
 * Styling for <Tooltip /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledBaseTooltip = styled.span`
  position: absolute;
  white-space: nowrap;
  color: #ffffff; // TODO: Implement the background for light theme
  background: #0e0e01; // TODO: Implement the color for dark theme
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
  font-size: 0.8rem;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  padding: 0.25rem;
`;
