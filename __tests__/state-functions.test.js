const app = require("./../server/server.js");
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Book from "../client/components/Book";

Enzyme.configure({ adapter: new Adapter() });

console.log(Book);

// describe("", () => {});

// describe("Addition", () => {
//   it("knows that 2 and 2 make 4", () => {
//     expect(2 + 2).toBe(4);
//   });
// });
