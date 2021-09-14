export interface TooltipProps {
  /**
   * @description Displays the tooltip information
   */
  text: string;

  /**
   * @description Controls whether or not the tooltip should be displayed
   *
   * This is used to work with external components like <DropdownToggle />
   * to indicate the visibility of the tooltip.
   *
   * @default true
   */
  show?: boolean;
}
