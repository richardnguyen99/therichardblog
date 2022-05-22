/**
 * Type definitions for <Container />
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { ReactNode } from "react";

/**
 * Base props allows generally-customized CSS attributes like className and ID.
 */
export interface BaseContainerProps {
  children?: ReactNode | ReactNode[];
  [k: string]: any;
}

/**
 * Props required in BaseContainer since it allows customized size.
 */
export interface ContainerProps extends BaseContainerProps {
  maxWidth: number;
  padding?: number;
}
