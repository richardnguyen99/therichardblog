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
import Icon from "../icons";

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

describe("<Navbar.Item>", () => {
  it("should be a flex container", () => {
    const { container } = render(<Navbar.Item>Test</Navbar.Item>);

    expect(container.firstChild).toHaveStyle("display: flex");
  });

  it("should be a full flex container", () => {
    const { container } = render(<Navbar.Item full>Test</Navbar.Item>);

    expect(container.firstChild).toHaveStyle("display: flex; flex: auto");
  });
});

describe("<Navbar.Link>", () => {
  it("should not be a flex container", () => {
    const { container } = render(<Navbar.Link to="/">Link</Navbar.Link>);

    expect(container.firstChild).not.toHaveStyle("display: flex");
  });

  it("should render properly with link tag", () => {
    const { container, getByText, getByRole } = render(<Navbar.Link to="/">Link</Navbar.Link>);

    expect(getByText(/Link/i).closest("a")).toBeInTheDocument();
    expect(getByRole("link")).toBeInTheDocument();
    expect(container.firstChild.nodeName).toBe("A");
    expect(container.firstChild).toHaveAttribute("href", "/");
  });

  it("should render properly with span tag", () => {
    const { container, getByText } = render(<Navbar.Link>Link</Navbar.Link>);

    expect(getByText(/Link/i)).toBeInTheDocument();
    expect(container.firstChild.nodeName).toBe("SPAN");
  });
});

describe("<Navbar.Brand>", () => {
  it("should be a flex container", () => {
    const { container } = render(<Navbar.Brand>Test</Navbar.Brand>);

    expect(container.firstChild).toHaveStyle("display: flex");
  });
  it("should render properly with link tag", () => {
    const { container, getByText, getByRole } = render(<Navbar.Brand to="/">Link</Navbar.Brand>);

    expect(getByText(/Link/i).closest("a")).toBeInTheDocument();
    expect(getByRole("link")).toBeInTheDocument();
    expect(container.firstChild.nodeName).toBe("A");
    expect(container.firstChild).toHaveAttribute("href", "/");
  });

  it("should render properly with span tag", () => {
    const { container, getByText } = render(<Navbar.Brand>Link</Navbar.Brand>);

    expect(getByText(/Link/i)).toBeInTheDocument();
    expect(container.firstChild.nodeName).toBe("SPAN");
  });

  it("should render with icon child", () => {
    const { container, getByText } = render(
      <Navbar.Brand href="https://github.com/richardnguyen99/therichardblog">
        <Icon.Github />
        Github
      </Navbar.Brand>
    );

    expect(container.firstChild.firstChild.nodeName).toBe("svg");
    expect(getByText(/Github/i)).toBeInTheDocument();
    expect(container.firstChild.nodeName).toBe("A");
    expect(container.firstChild).toHaveAttribute(
      "href",
      "https://github.com/richardnguyen99/therichardblog"
    );
  });
});
