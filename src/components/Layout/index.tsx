/**
 * Core component for Layout component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import useMediaHooks from "@hooks/useMediaQuery";
import * as React from "react";

import { LayoutProps } from "./type";
import { StyledContainer } from "./style";
import Navbar from "@components/Navbar";
import Dropdown from "@components/Dropdown";
import Footer from "@components/Footer";

const Layout: React.FC<LayoutProps> = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, ...rest }, ref) => {
    const [isWide] = useMediaHooks("min-width: 768px");

    return (
      <div ref={ref} {...rest}>
        <Navbar>
          <Navbar.Brand to="/">The Richard&apos;s blog</Navbar.Brand>
          <Navbar.Item full>
            <Navbar.Link to="/about">About</Navbar.Link>
            <Navbar.Link to="/post">Post</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="https://github.com/richardnguyen99/therichardblog">
              Github
            </Navbar.Link>
            <Navbar.Link>
              <Dropdown>
                <Dropdown.Toggle style={{ padding: 0 }} tooltip="More">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="white"
                    fillRule="evenodd">
                    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu className="southwest">
                  <Dropdown.Item>Tags</Dropdown.Item>
                  <Dropdown.Item>Tags</Dropdown.Item>
                  <Dropdown.Item>Tags</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Link>
          </Navbar.Item>
        </Navbar>
        <div id="content">{children}</div>
        <Footer>
          <Footer.Grid>
            <Footer.Brand>The Richard&apos;s blog</Footer.Brand>
            <Footer.Columns>
              <Footer.Column>
                <Footer.Header>Connection</Footer.Header>
                <Footer.Group>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                </Footer.Group>
              </Footer.Column>
              <Footer.Column>
                <Footer.Header>Connection</Footer.Header>
                <Footer.Group>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                </Footer.Group>
              </Footer.Column>
              <Footer.Column>
                <Footer.Header>Connection</Footer.Header>
                <Footer.Group>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                </Footer.Group>
              </Footer.Column>
              <Footer.Column>
                <Footer.Header>Connection</Footer.Header>
                <Footer.Group>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                  <Footer.Item>
                    <a href="#">Facebook</a>
                  </Footer.Item>
                </Footer.Group>
              </Footer.Column>
            </Footer.Columns>
          </Footer.Grid>
          <Footer.Bottom>
            <span>
              <img
                style={{}}
                src="https://img.shields.io/static/v1?label=Made by Richard&message=with ♥&color=red"
                alt="Made by Richard with love"
              />
            </span>
            <span>
              <a href="https://github.com/richardnguyen99/therichardblog/">Github repo</a>
            </span>
          </Footer.Bottom>
        </Footer>
      </div>
    );
  }
);
Layout.displayName = "Layout";

export default Object.assign(Layout, { Container: StyledContainer });
