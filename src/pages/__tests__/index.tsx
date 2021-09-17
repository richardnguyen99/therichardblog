/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render } from "@testing-library/react";
import { StaticQuery } from "gatsby";

import IndexPage from "../index";

const mockUseLocationValue = {
  pathname: "/",
  search: "",
  hash: "",
  state: null,
};

const mockUseStaticQueryValue = {
  site: {
    siteMetadata: {
      defaultTitle: "The Richard's blog",
      titleTemplate: "%s - The Richard's blog",
      defaultDescription: "A digital notebook from Richard",
      siteUrl: "https://therichardblog.com",
      defaultImage: "src/images/icon.png",
      twitterUsername: "@richardnguyenmh",
      github: "https://github.com/richardnguyen99",
      linkedin: "https://www.linkedin.com/in/richardmhnguyen/",
    },
  },
};

jest.mock("@gatsbyjs/reach-router", () => ({
  ...(jest.requireActual("@gatsbyjs/reach-router") as Record<string, unknown>),
  useLocation: jest.fn().mockImplementation(() => {
    return mockUseLocationValue;
  }),
}));

jest.mock("gatsby", () => ({
  ...(jest.requireActual("gatsby") as Record<string, unknown>),
  useStaticQuery: jest.fn().mockImplementation(() => {
    return mockUseStaticQueryValue;
  }),
  graphql: jest.fn(),
}));

describe("<Index />", () => {
  it("should match snapshot", () => {
    const { container } = render(<IndexPage />);

    expect(container).toMatchSnapshot();
  });

  it("should contains a nav component", () => {
    const { container, getByRole } = render(<IndexPage />);

    expect(getByRole("navigation")).toBeInTheDocument();
  });

  it("should contains a footer component", () => {
    const { container, getByRole } = render(<IndexPage />);

    expect(getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should display the page heading", () => {
    const { getByText } = render(<IndexPage />);

    expect(getByText("The latest from Richard.")).toBeInTheDocument();
  });
});
