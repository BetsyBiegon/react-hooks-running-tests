import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);

  // Debugging statement to inspect the rendered DOM
  screen.debug();

  // Assertion to check if the text is present in the rendered component
  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});
