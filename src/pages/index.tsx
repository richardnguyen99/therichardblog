/**
 * Main page for the site ("/")
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import Container from "@components/Container";
import Content from "@components/Content";
import SEO from "@components/SEO";
import SideBar from "@components/SideBar";
import { StyledContentTitleBar, StyledContentTitle } from "@components/Content/style";
import SVG from "@components/svg";

const Index: React.FC = () => {
  return (
    <Container.Main>
      <SEO title="Home" description="The Richard's blog home page" />
      <Content>
        <StyledContentTitleBar>
          <StyledContentTitle>The Richard&apos;s Blog</StyledContentTitle>
          <SVG.MenuDot size="24" />
        </StyledContentTitleBar>
        <h1>The Richard&apos;s Blog</h1>
      </Content>
      <SideBar position="right">
        <h3>Richard Nguyen</h3>
      </SideBar>
    </Container.Main>
  );
};

export default Index;
