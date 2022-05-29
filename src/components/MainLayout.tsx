/**
 * Index file for <MainLayout /> components
 *
 * <MainLayout /> is mainly used in landing pages such as home, about and projects
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";
import { Link } from "gatsby";

import Container from "@components/Container";
import Content from "@components/Content";
import SEO from "@components/SEO";
import SideBar from "@components/SideBar";
import { StyledContentTitleBar, StyledContentTitle } from "@components/Content/style";
import SVG from "@components/svg";
import Button from "@components/Button";
import Tooltip from "@components/Tooltip";
import { StyledSideBarFixedContent, StyledSideBarHeader } from "@components/SideBar/style";
import NavProvider from "./Nav/context";
import Nav from "@components/Nav";

const MainLayout: React.FC = () => {
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
        <Nav>
          <Nav.Tab tab="home">Hello</Nav.Tab>
          <Nav.Tab tab="about">About</Nav.Tab>
          <Nav.Tab tab="projects">Projects</Nav.Tab>
        </Nav>
        <Nav.Content />
      </Content>
      <SideBar position="right">
        <StyledSideBarFixedContent>
          <StyledSideBarHeader>
            <Link to="/">
              <h3>Richard H. Nguyen</h3>
            </Link>
          </StyledSideBarHeader>
        </StyledSideBarFixedContent>
      </SideBar>
    </Container.Main>
  );
};

export default MainLayout;
