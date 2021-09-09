/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render } from "@testing-library/react";

import IndexPage from "../index";

describe("<Index />", () => {
  it("should match snapshot", () => {
    const { container } = render(<IndexPage />);

    expect(container).toMatchSnapshot();
  });
});
