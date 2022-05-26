/**
 * Type definitions for <Tooltip /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import React, { ReactNode } from "react";

export interface TooltipProps {
  position?: {
    top: number;
    left: number;
    bottom?: number;
    right?: number;
  };
  text: string;
  children: ReactNode | ReactNode[];
  [key: string]: any;
}
