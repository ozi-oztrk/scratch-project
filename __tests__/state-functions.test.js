// import React from "react";
// import { render } from "@testing-library/react";
// import App from "../components/app.jsx";

// test("renders welcome back to better reads", () => {
//   const { getByText } = render();
//   const element = getByText(/welcome back to better reads/i);
//   expect(element).toBeInTheDocument();
// });

describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});
