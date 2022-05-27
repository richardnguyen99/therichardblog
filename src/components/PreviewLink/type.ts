/**
 * Type definitions for <PreviewLink />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { ReactNode, MouseEvent as ReactMouseEvent } from "react";

export interface PreviewLinkProps {
  url: string;
  text: string;

  onMouseEnterCallback?: (evt: ReactMouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onMouseLeaveCallback?: (evt: ReactMouseEvent<HTMLAnchorElement, MouseEvent>) => void;

  [key: string]: any;
}
