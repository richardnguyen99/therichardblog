export type DropdownDirection = "top" | "bottom" | "left" | "right";

export interface DropdownProps {
  [key: string]: any; // For spreading variables
}

export interface DropdownContextValue {
  /**
   * @description Detects whether or not the dropdown is dropping or not
   */
  opening: boolean;

  /**
   * @description Inidicates which side of the toggle that the dropdown will be displayed
   *
   * @default "bottom";
   */
  direction?: DropdownDirection;

  /**
   * @description Controls the visibility of the dropdown component
   */
  toggle?: (nextState: boolean) => void;
}

export interface DropdownToggleProps {
  [key: string]: any; // For spreading variables
}

export interface DropdownMenuProps {
  [key: string]: any; // For spreading variables
}

export interface DropdownItemProps {
  /**
   * @description Fires a callback when the item is selected
   */
  onSelect?: () => void;

  [key: string]: any; // For spreading variables
}
