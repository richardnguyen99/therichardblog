/**
 * Core Layout post components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import styled from "styled-components";

export const StyledPostSection = styled.section`
  display: block;
`;

export const StyledPostTitle = styled.div`
  display: flex;
`;

export const StyledFlexPostContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledPost = styled.div`
  max-width: 680px;
  width: 100%;
  margin: 128px 64px;
  overflow-wrap: break-word;
  word-break: break-word;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
