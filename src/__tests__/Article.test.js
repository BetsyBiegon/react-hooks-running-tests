import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // Debugging statement to inspect the rendered DOM
  screen.debug();

  // Assertion to check if the text is present in the rendered component
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
