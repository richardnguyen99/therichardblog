/**
 * Styling for <Button /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledIconButton = styled.button`
  position: relative;
  user-select: none;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  vertical-align: middle;
  background: transparent;
  opacity: 0.5;
  color: #efefe1;
  width: 2rem;
  height: 2rem;
  margin: 4px;
  padding: 0;
  border-radius: 0.3rem;
  border: none;
  transition: all 0.25s ease-in 10ms;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
    opacity: 1;
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
    opacity: 1;
  }
`;
