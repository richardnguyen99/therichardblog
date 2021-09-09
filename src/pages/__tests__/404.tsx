/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render } from "@testing-library/react";

import ErrorPage from "../404";

describe("<ErrorPage />", () => {
  it("should match snapshot", () => {
    const { container } = render(<ErrorPage />);

    expect(container).toMatchSnapshot();
  });
});
