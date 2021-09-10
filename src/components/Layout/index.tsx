/**
 * Core component for Layout component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import useMediaHooks from "@hooks/useMediaQuery";
import * as React from "react";

import { LayoutProps } from "./type";
import Navbar from "@components/Navbar";
import { StyledContainer } from "./style";

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
          </Navbar.Item>
        </Navbar>
        <StyledContainer>{children}</StyledContainer>
      </div>
    );
  }
);
Layout.displayName = "Layout";

export default Object.assign(Layout, {});
