/**
 * Core test file for navbar component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 *
 * @jest-environment jsdom
 */

import * as React from "react";
import { render } from "@testing-library/react";

import Navbar from "./index";

describe("<Navbar />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Navbar>
        <Navbar.Brand to="/">Richard&apos;s blog</Navbar.Brand>
        <Navbar.Item full>
          <Navbar.Link to="/about">About</Navbar.Link>
          <Navbar.Link to="/post">About</Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link href="https://github.com/richardnguyen99/therichardblog">Github</Navbar.Link>
        </Navbar.Item>
      </Navbar>
    );

    expect(container).toMatchSnapshot();
  });
});
