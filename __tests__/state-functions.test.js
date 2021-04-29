// const app = require("./../server/server.js");
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Book from "../client/components/Book";
import SignupForm from "../client/components/SignupForm";
import Main from "../client/components/Main";

Enzyme.configure({ adapter: new Adapter() });

describe("<Main />", () => {
  it("should have a header called 'Welcome back to Better Reads'", () => {
    const wrapper = Enzyme.shallow(<Main />);
    const actual = wrapper.find("h2").text();
    const expected = "Welcome back to Better Reads!";

    expect(actual).toEqual(expected);
  });
});

xdescribe("<Book />", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Book />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  xdescribe("book complete button changes state to true", () => {
    it("calls setComplete with true", () => {
      // wrapper.find(`#complete-button`).props().onClick();
      wrapper.find(`#complete-button`).simulate("click", {
        target: { value: "true" },
      });
      // expect(setState).toHaveBeenCalledWith(true);
    });
  });
});

// describe("", () => {});

// describe("Addition", () => {
//   it("knows that 2 and 2 make 4", () => {
//     expect(2 + 2).toBe(4);
//   });
// });
