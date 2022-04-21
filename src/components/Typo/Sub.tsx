/**
 * Core Subtitle component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import * as React from "react";
import styled from "styled-components";

const StyledSubtitle = styled.p`
  margin-bottom: 1.5rem;
`;

const Subtitle: React.FC = ({ children }) => {
  return <StyledSubtitle>{children}</StyledSubtitle>;
};

export default Subtitle;
