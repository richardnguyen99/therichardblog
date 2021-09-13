/**
 * Style definitions for dropdown components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;
`;

export const StyledDropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  width: 160px;
  margin-top: 0.125rem;
  list-style: none;
  background-color: #18181b; // TODO: Implement the background base for light theme
  color: #efeff1; // TODO: Implement the color bas forr light theme
  border-radius: 0.6rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5), 0 0px 8px rgba(0, 0, 0, 0.4);
  padding: 0.5rem;
  transition: all 0.1s ease;

  &::before,
  &::after {
    position: absolute;
    display: inline-block;
    content: "";
  }

  &::before {
    border: 8px solid transparent;
    border-bottom-color: #18181b;
  }

  &::after {
    border: 7px solid transparent;
    border-bottom-color: #18181b;
  }

  &.south {
    right: 50%;
    left: auto;
    transform: translateX(50%);

    &::before {
      top: -16px;
      right: 50%;
      transform: translateX(50%);
    }

    &::after {
      top: -14px;
      right: 50%;
      transform: translateX(50%);
    }
  }

  &.southwest {
    right: 0;
    left: auto;

    &::before {
      top: -16px;
      right: 9px;
      left: auto;
    }

    &::after {
      top: -14px;
      right: 10px;
      left: auto;
    }
  }
`;

export const StyledDropdownToggle = styled.button`
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
  fill: #efefe1;
  color: #efefe1;
  width: 2rem;
  height: 2rem;
  margin: 4px;
  padding: 16px;
  border-radius: 0.3rem;
  border: none;
  transition: all 0.25s ease-in 10ms;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const StyledDropdownItem = styled.li`
  display: block;
  padding: 4px 8px 4px 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 0.25rem;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #efefe1;
  }
`;
