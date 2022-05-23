/**
 * Index file for <Button /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { IconButtonProps } from "./type";
import { StyledIconButton } from "./style";

const IconButton: React.FC<IconButtonProps> = ({
  SVGComponent,
  tooltip = "",
  children,
  ...rest
}) => {
  return (
    <StyledIconButton>
      {SVGComponent}
      {children}
    </StyledIconButton>
  );
};

const exported = Object.assign("Button", {
  Icon: IconButton,
});

export default exported;
