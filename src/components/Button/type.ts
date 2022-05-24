/**
 * Type definitions for <Button /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { ReactNode, MouseEvent as ReactMousEvent } from "react";

interface BaseButtonProps {
  onClickCallback?: (evt: ReactMousEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: ReactNode | ReactNode[];
  [key: string]: any;
}

export interface IconButtonProps extends BaseButtonProps {
  SVGComponent: ReactNode | ReactNode[];
  tooltip?: string;
}
