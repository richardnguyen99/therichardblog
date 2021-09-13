/**
 * Core test file for dropdown component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 *
 * @jest-environment jsdom
 */
import * as React from "react";
import { render } from "@testing-library/react";

import Dropdown from "./";

describe("<Dropdown>", () => {
  it("should match snapshot", () => {
    const { container } = render(
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
    );

    expect(container).toMatchSnapshot();
  });
});
