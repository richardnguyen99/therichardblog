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

const Layout: React.FC<LayoutProps> = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, ...rest }, ref) => {
    const [isWide] = useMediaHooks("min-width: 768px");

    return (
      <div ref={ref} {...rest}>
        <Navbar>
          <Navbar.Brand to="/">Richard&apos;s blog</Navbar.Brand>
          <Navbar.Item full>
            <Navbar.Link to="/about">About</Navbar.Link>
            <Navbar.Link to="/post">About</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link href="https://github.com/richardnguyen99/therichardblog">
              Github
            </Navbar.Link>
            <Navbar.Link style={{ marginRight: 0 }}>
              <Dropdown>
                <Dropdown.Toggle style={{ padding: 0 }}>
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
        <StyledContainer>{children}</StyledContainer>
      </div>
    );
  }
);
Layout.displayName = "Layout";

export default Object.assign(Layout, {});
