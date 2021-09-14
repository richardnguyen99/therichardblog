import * as React from "react";

export interface NavbarProps {
  /**
   * @description Fires a callback when the navbar has shrank
   */
  onShrink?: () => void;

  /**
   * @description Controls whether or not the navbar is shrinkable on scroll
   *
   * @default false
   */
  shrinkable?: boolean;

  /**
   * @description Controls whehter or not the navbar is fixed on the screen
   *
   * @default false
   */
  fixed?: boolean;

  [key: string]: any; // For spreading props
}

export interface NavbarItemProps {
  /**
   * @description Controls whether or not the navbar item will take the whole space left in the navbar
   *
   * @default false
   */
  full?: boolean;

  [key: string]: any;
}

export interface NavbarLinkProps {
  /**
   * @description Controls which type of HTML element the component should be rendered into.
   *
   * @see https://github.com/emotion-js/emotion/issues/1137#issuecomment-615571356 for more detail why
   *
   * @default a (as anchor tag)
   */
  as?: React.ElementType | keyof JSX.IntrinsicElements;

  /**
   * @description Controls the target url that the component should navigate to.
   *
   * @default "" (use to return to the main page)
   */
  href?: string;

  /**
   * @description Controls the internaltarget url the component should navigate to. `href` will override this property
   *
   * @default ""
   */
  to?: string;

  [key: string]: any; // For spreading props
}
