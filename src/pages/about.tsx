/**
 * About page for the site ("/about")
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
import Nav from "@components/Nav";

const Index: React.FC = () => {
  return (
    <Container.Main>
      <SEO title="Home" description="The Richard's blog home page" />
      <Content>
        <StyledContentTitleBar>
          <StyledContentTitle>Richard H. Nguyen</StyledContentTitle>
          <Tooltip text="More">
            <Button.Icon SVGComponent={<SVG.MenuDot size="24" />} />
          </Tooltip>
        </StyledContentTitleBar>
        <Nav.Provider url="about">
          <Nav>
            <Nav.Tab tab="home">Hello</Nav.Tab>
            <Nav.Tab tab="about">About</Nav.Tab>
            <Nav.Tab tab="projects">Projects</Nav.Tab>
          </Nav>
          <Nav.Content />
        </Nav.Provider>
      </Content>
      <SideBar position="right">
        <h3>Richard Nguyen</h3>
      </SideBar>
    </Container.Main>
  );
};

export default Index;
