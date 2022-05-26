/**
 * Index file <SideBar /> component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { SideBarProps } from "./type";
import { StyledLeftSideBar, StyledRightSideBar } from "./style";

const SideBar: React.FC<SideBarProps> = ({ position, children, ...rest }) => {
  const Component = position === "left" ? StyledLeftSideBar : StyledRightSideBar;

  return <Component {...rest}>{children}</Component>;
};

export default SideBar;
