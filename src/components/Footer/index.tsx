/**
 * Core Footer components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { FooterBottomProps, FooterProps } from "./type";
import {
  StyledFooter,
  StyledFooterGridWrapper,
  StyledFooterGrid,
  StyledFooterBrand,
  StyledFooterGridColumns,
  StyledFooterGridColumn,
  StyledFooterGridColumnHeader,
  StyledFooterGridColumnGroup,
  StyledFooterGridColumnGroupItem,
  StyledFooterBottom,
} from "./style";

/**
 * @description Displays the grid layout for columns and brands
 */
const FooterGrid: React.FC = ({ children }) => {
  return <StyledFooterGrid>{children}</StyledFooterGrid>;
};

/**
 * @description Displays the brand on the footer
 */
const FooterBrand: React.FC = ({ children }) => {
  return <StyledFooterBrand>{children}</StyledFooterBrand>;
};

/**
 * @descrption Wraps elements inside the footer component
 */
const Footer: React.FC<FooterProps> = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledFooter>
        <StyledFooterGridWrapper>{children}</StyledFooterGridWrapper>
      </StyledFooter>
    );
  }
);
Footer.displayName = "Footer";

const FooterBottom: React.FC<FooterBottomProps> = React.forwardRef<
  HTMLDivElement,
  FooterBottomProps
>(({ children, ...rest }, ref) => {
  return (
    <StyledFooterBottom ref={ref} {...rest}>
      {children}
    </StyledFooterBottom>
  );
});
FooterBottom.displayName = "FooterBottom";

export default Object.assign(Footer, {
  Brand: FooterBrand,
  Grid: FooterGrid,
  Columns: StyledFooterGridColumns,
  Column: StyledFooterGridColumn,
  Header: StyledFooterGridColumnHeader,
  Group: StyledFooterGridColumnGroup,
  Item: StyledFooterGridColumnGroupItem,
  Bottom: FooterBottom,
});
