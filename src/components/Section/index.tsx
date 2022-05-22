/**
 * Index file for <Section /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";

import {
  StyledMainInfo,
  StyledMainInfoWrapper,
  StyledMainSection,
  StyledMainTitle,
  StyledMainTitlePanel,
  StyledMainTitlePanelPadding,
  StyledMainWrapper,
} from "./style";
import { BaseSectionProps } from "./type";

const MainSection: React.FC<BaseSectionProps> = ({ children, ...rest }) => {
  return (
    <StyledMainWrapper {...rest}>
      <StyledMainSection>
        <StyledMainTitle>
          <StyledMainTitlePanel>
            <StyledMainTitlePanelPadding>{children}</StyledMainTitlePanelPadding>
          </StyledMainTitlePanel>
        </StyledMainTitle>
      </StyledMainSection>
      <StyledMainInfo>
        <StyledMainInfoWrapper>
          <h3>Richard Nguyen</h3>
        </StyledMainInfoWrapper>
      </StyledMainInfo>
    </StyledMainWrapper>
  );
};

const exported = Object.assign("Section", {
  Main: MainSection,
});

export default exported;
