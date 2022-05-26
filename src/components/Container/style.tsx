/**
 * Styled-components for centralizing main content in pages
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import styled from "styled-components";

export const StyledBaseContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: none;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  flex: 1 0 auto;
  text-align: left;
`;

export const StyledMainContainer = styled(StyledBaseContainer)`
  max-width: 1400px;
`;

export const StyledBlogContainer = styled(StyledBaseContainer)`
  max-width: 796px;
`;
