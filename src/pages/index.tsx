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
import Button from "@components/Button";
import Tooltip from "@components/Tooltip";

const Index: React.FC = () => {
  return (
    <Container.Main>
      <SEO title="Home" description="The Richard's blog home page" />
      <Content>
        <StyledContentTitleBar>
          <StyledContentTitle>The Richard&apos;s Blog</StyledContentTitle>
          <Tooltip text="This is a very very long tooltip message for testing">
            <Button.Icon SVGComponent={<SVG.MenuDot size="24" />} />
          </Tooltip>
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
