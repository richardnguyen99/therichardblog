/**
 * Type definitions for <Button /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { ReactNode, MouseEvent as ReactMousEvent } from "react";

export type ButtonMouseEvent = ReactMousEvent<HTMLButtonElement, MouseEvent>;

interface BaseButtonProps {
  onClickCallback?: (evt: ButtonMouseEvent) => void;
  onMouseEnterCallback?: (evt: ButtonMouseEvent) => void;
  onMouseLeaveCallback?: (evt: ButtonMouseEvent) => void;
  children?: ReactNode | ReactNode[];
  [key: string]: any;
}

export interface IconButtonProps extends BaseButtonProps {
  SVGComponent: ReactNode | ReactNode[];
  tooltip?: string;
}
