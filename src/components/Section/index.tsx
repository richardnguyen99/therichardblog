/**
 * Core section components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import { StyledSectionHeadingText, StyledSectionHeadingWrapper } from "./style";

const Section = {};

const SectionHeading: React.FC = ({ children }) => {
  return (
    <StyledSectionHeadingWrapper>
      <StyledSectionHeadingText>{children}</StyledSectionHeadingText>
    </StyledSectionHeadingWrapper>
  );
};

export default Object.assign(Section, { Heading: SectionHeading });
