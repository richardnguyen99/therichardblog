/**
 * Type definitions for <Button /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { ReactNode } from "react";

interface BaseButtonProps {
  children?: ReactNode | ReactNode[];
  [key: string]: any;
}

export interface IconButtonProps extends BaseButtonProps {
  SVGComponent: ReactNode | ReactNode[];
  tooltip?: string;
}
