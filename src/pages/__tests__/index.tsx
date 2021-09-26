/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render } from "@testing-library/react";

import IndexPage from "../index";
import NavbarContext from "@components/Navbar/context";

const dummy = () => {
  return;
};

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(<NavbarContext.Provider {...providerProps}>{ui}</NavbarContext.Provider>);
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
  it("should match snapshot", () => {
    const { container } = customRender(<IndexPage />, {
      providerProps: {
        value: {
          active: {
            pathname: "/",
            top: 76,
            left: 0,
            width: 0,
            onActiveChange: dummy,
          },
        },
      },
    });

    expect(container).toMatchSnapshot();
  });

  it("should contains a nav component", () => {
    const { getByRole } = customRender(<IndexPage />, {
      providerProps: {
        value: {
          active: {
            pathname: "/",
            top: 76,
            left: 0,
            width: 0,
            onActiveChange: dummy,
          },
        },
      },
    });

    expect(getByRole("navigation")).toBeInTheDocument();
  });

  it("should contains a footer component", () => {
    const { getByRole } = customRender(<IndexPage />, {
      providerProps: {
        value: {
          active: {
            pathname: "/",
            top: 76,
            left: 0,
            width: 0,
            onActiveChange: dummy,
          },
        },
      },
    });

    expect(getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should display the page heading", () => {
    const { getByText } = customRender(<IndexPage />, {
      providerProps: {
        value: {
          active: {
            pathname: "/",
            top: 76,
            left: 0,
            width: 0,
            onActiveChange: dummy,
          },
        },
      },
    });

    expect(getByText("The latest from Richard.")).toBeInTheDocument();
  });
});
