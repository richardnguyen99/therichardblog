/**
 * Type definitions for <SEO /> component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { ReactNode } from "react";

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  article?: string;

  children?: ReactNode | ReactNode[];
  [key: string]: any;
}
