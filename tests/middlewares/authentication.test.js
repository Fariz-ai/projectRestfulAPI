/** @format */

const { authentication } = require("../../middlewares/authentication");
const jwt = require("../../helpers/jwt");

describe("authentication", () => {
  test("authentication is a function", () => {
    expect(typeof authentication).toBe("function");
  });

  test("should return a decoded token", () => {
    const token = "test-token";
    const req = {
      headers: {
        token,
      },
    };
    authentication(req, null, () => {
      expect(req.decode).not.toBe("undifined");
    });
  });
});
