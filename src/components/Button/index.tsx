/**
 * Index file for <Button /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { IconButtonProps, ButtonMouseEvent } from "./type";
import { StyledIconButton } from "./style";

const IconButton: React.FC<IconButtonProps> = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      SVGComponent,
      children,
      onClickCallback = null,
      onMouseEnterCallback = null,
      onMouseLeaveCallback = null,
      ...rest
    },
    ref
  ) => {
    const handleClickCallback = React.useCallback(
      (e: ButtonMouseEvent) => {
        if (onClickCallback === null) return;

        onClickCallback(e);
      },
      [onClickCallback]
    );

    const handleMouseEnterCallback = React.useCallback(
      (e: ButtonMouseEvent) => {
        if (onMouseEnterCallback === null) return;

        onMouseEnterCallback(e);
      },
      [onMouseEnterCallback]
    );

    const handleMouseLeaveCallback = React.useCallback(
      (e: ButtonMouseEvent) => {
        if (onMouseLeaveCallback === null) return;

        onMouseLeaveCallback(e);
      },
      [onMouseLeaveCallback]
    );

    return (
      <>
        <StyledIconButton
          ref={ref}
          onClick={handleClickCallback}
          onMouseEnter={handleMouseEnterCallback}
          onMouseLeave={handleMouseLeaveCallback}
          {...rest}>
          {SVGComponent}
          {children}
        </StyledIconButton>
      </>
    );
  }
);
IconButton.displayName = "IconButton";

const exported = Object.assign("Button", {
  Icon: IconButton,
});

export default exported;
