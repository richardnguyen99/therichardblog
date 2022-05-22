/**
 * Styled-components for centralizing main content in pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";

export const StyledBaseContainer = styled.div`
  position: relative;
  outline: 0;
  left: 0px;
  transition: left 200ms ease;

  margin: 0 auto;
`;

export const StyledMainContainer = styled(StyledBaseContainer)`
  max-width: 1200px;
`;

export const StyledBlogContainer = styled(StyledBaseContainer)`
  max-width: 796px;
`;
