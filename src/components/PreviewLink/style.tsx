/**
 * Styling for <PreviewLink />
 */
import styled from "styled-components";

export const StyledPreviewLink = styled.a`
  //text-decoration: none;
`;

export const StyledPreviewFrame = styled.iframe`
  position: absolute;
  white-space: nowrap;
  background: #fff;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  width: 400px;
  height: 300px;
  opacity: 1;
  top: 0;
  left: 0;
`;
