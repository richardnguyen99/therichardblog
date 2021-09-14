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
  /**
   * @description Controls whether or not the component should display tooltip and its content.
   *
   * If a tooltip is specified, the toggle will implement the <Tooltip /> component internally.
   *
   * @default ""
   */
  tooltip?: string;

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

  /**
   * @description Indicates the link navigated by the dropdown item
   *
   * @default ""
   */
  href?: string;

  /**
   * @description Indicates the internal link navigated by the dropdown item.
   *
   * By default, the property `href` will override this. If either exists,
   * the component will be <a> instead.
   *
   * @default ""
   */
  to?: string;

  /**
   * @description Controls the element type that the component should be rendered.
   *
   * @see https://github.com/emotion-js/emotion/issues/1137#issuecomment-615571356 for more detail why
   *
   * @default <li>
   */
  as?: React.ElementType | keyof JSX.IntrinsicElements;

  [key: string]: any; // For spreading variables
}
