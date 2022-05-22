/**
 * Type definitions for <Section /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { ReactNode } from "react";

export interface BaseSectionProps {
  children?: ReactNode | ReactNode[];
  [key: string]: any;
}
