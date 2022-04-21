/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render } from "@testing-library/react";

import IndexPage from "../index";

const customRender = (ui) => {
  return render(<>{ui}</>);
};

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

  it("should display the page heading", () => {
    const { getByText } = customRender(<IndexPage />);

    expect(getByText("Hello, World")).toBeInTheDocument();
  });
});
