import React from "react";
import { render } from "@testing-library/react";
import App from "./components/app.jsx";

test("renders learn react link", () => {
  const { getByText } = render();
  const linkElement = getByText(/welcome back to better reads/i);
  expect(linkElement).toBeInTheDocument();
});
