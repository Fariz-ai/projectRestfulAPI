/** @format */

const UserController = require("../../controllers/user");
const User = require("../../models").User;

describe("UserController", () => {
  let req = {
    body: {
      email: "doe@example.com",
      password: "doe",
    },
  };
  let res = jest.fn();
  let next = jest.fn();

  describe("static create", () => {
    test("UserController has static create", () => {
      expect(typeof UserController.create).toBe("function");
    });
    test("static create will call User.create", () => {
      jest.spyOn(User, "create").mockResolvedValueOnce({});

      UserController.create(req, res, next);
      expect(User.create).toHaveBeenCalled();
    });
  });

  describe("static login", () => {
    test("controller has static login", () => {
      expect(typeof UserController.login).toBe("function");
    });
    test("static create will call User.findOne", () => {
      jest.spyOn(User, "findOne").mockResolvedValueOnce({});

      UserController.login(req, res, next);
      expect(User.findOne).toHaveBeenCalled();
    });
  });
});
