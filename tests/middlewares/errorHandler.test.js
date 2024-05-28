/** @format */

const errorHandler = require("../../middlewares/errorHandler");

describe("errorHandler", () => {
  test("errorHandler is a function", () => {
    expect(typeof errorHandler).toBe("function");
  });
});
