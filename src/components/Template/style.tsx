/**
 * Core Layout post components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { Link } from "gatsby";
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
  margin-top: 32px;
  overflow-wrap: break-word;
  word-break: break-word;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  p {
    font-family: "Merriweather", Times, serif;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.03em;
    margin-top: 2em;
    margin-bottom: -0.46em;
  }

  h1,
  h2,
  h3 {
    font-family: Roboto;
    font-weight: bold;
  }
`;

export const StyledPostHeader = styled.h1`
  letter-spacing: -0.011em;
  line-height: 65px;
  margin-top: 0.6rem;
  margin-bottom: -0.27rem;

  font-size: 46px;
  font-style: normal;
  font-weight: 700;

  color: rgba(255, 255, 255, 1);
`;

export const StyledPostHeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const StyledPostHeaderNavLeft = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  font-family: Roboto, --apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  color: #ffffffe0;
`;

export const StyledPostHeaderNavRight = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 32px;
`;

export const StyledPostHeaderNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff30;
  color: #ffffffe0;
  text-decoration: none;

  padding: 2px 8px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: #ffffff50;
    color: #ffffffee;
  }
`;
