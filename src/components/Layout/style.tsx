/**
 * Style definition for Layout components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 0 24px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 640px) {
    padding: 0 64px;
  }
`;
