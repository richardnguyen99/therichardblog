/**
 * Type definitions for <Menu />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { ReactNode } from "react";

export interface SideBarProps {
  position: string;

  children?: ReactNode | ReactNode[];
  [key: string]: any;
}
