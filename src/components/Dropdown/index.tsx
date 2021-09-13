/**
 * Core Dropdown component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import DropdownContext from "./context";
import { DropdownItemProps, DropdownMenuProps, DropdownProps, DropdownToggleProps } from "./type";
import {
  StyledDropdown,
  StyledDropdownItem,
  StyledDropdownMenu,
  StyledDropdownToggle,
} from "./style";
import useMergeRefs from "@hooks/useMergedRefs";

/**
 * @description Toggles to show or hide the dropdown menu component
 */
const DropdownToggle: React.FC<DropdownToggleProps> = React.forwardRef<
  HTMLButtonElement,
  DropdownToggleProps
>(({ children, ...rest }, ref) => {
  const dropdownCtx = React.useContext(DropdownContext);

  const handleClick = () => {
    dropdownCtx.toggle(!dropdownCtx.opening);
  };

  return (
    <StyledDropdownToggle ref={ref} onClick={handleClick} {...rest}>
      {children}
    </StyledDropdownToggle>
  );
});
DropdownToggle.displayName = "DropdownToggle";

/**
 * @description Display the collapsable content list
 */
const DropdownMenu: React.FC<DropdownMenuProps> = React.forwardRef<
  HTMLUListElement,
  DropdownMenuProps
>(({ children, ...rest }, ref) => {
  const dropdownCtx = React.useContext(DropdownContext);
  const innerRef = React.useRef<HTMLUListElement>(null);
  const mergedRef = useMergeRefs([innerRef, ref]);

  const handleClickOutside = React.useCallback(
    (evt) => {
      if (
        innerRef &&
        innerRef.current &&
        !innerRef.current.contains(evt.target) &&
        dropdownCtx.opening
      ) {
        dropdownCtx.toggle(false);
      }
    },
    [dropdownCtx, innerRef]
  );

  // Handle display animation
  React.useEffect(() => {
    if (innerRef && innerRef.current) {
      innerRef.current.style.display = dropdownCtx.opening && "block";
      innerRef.current.style.opacity = dropdownCtx.opening ? "1" : "0";
      innerRef.current.style.scale = dropdownCtx.opening ? "1" : "0.8";

      let interval;
      if (!dropdownCtx.opening) {
        interval = setInterval(() => {
          innerRef.current.style.display = "none";
        }, 1000);
      }

      return clearInterval(interval);
    }
  }, [dropdownCtx.opening, innerRef]);

  // Handle onClick event outside the component
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <StyledDropdownMenu ref={mergedRef} {...rest} style={{ opacity: 0 }}>
      {children}
    </StyledDropdownMenu>
  );
});
DropdownMenu.displayName = "DropdownMenu";

/**
 * @description Holds the item in the content
 */
const DropdownItem: React.FC<DropdownItemProps> = React.forwardRef<
  HTMLLIElement,
  DropdownItemProps
>(({ children, onSelect, ...rest }, ref) => {
  const dropdownCtx = React.useContext(DropdownContext);

  const handleClick = () => {
    if (onSelect) onSelect();

    dropdownCtx.toggle(false);
  };

  return (
    <StyledDropdownItem ref={ref} onClick={handleClick} {...rest}>
      {children}
    </StyledDropdownItem>
  );
});
DropdownItem.displayName = "DropdownItem";

/**
 * @description Renders a dropdown component that handles collapsable content
 */
const Dropdown: React.FC<DropdownProps> = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, ...rest }, ref) => {
    const [opening, setOpening] = React.useState(false);

    const toggle = React.useCallback(
      (nextShow: boolean) => {
        setOpening(nextShow);
      },
      [setOpening]
    );

    const contextValue = React.useMemo(
      () => ({
        opening,
        toggle,
      }),
      [opening, toggle]
    );

    return (
      <DropdownContext.Provider value={contextValue}>
        <StyledDropdown ref={ref} {...rest}>
          {children}
        </StyledDropdown>
      </DropdownContext.Provider>
    );
  }
);
Dropdown.displayName = "Dropdown";

export default Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
});
