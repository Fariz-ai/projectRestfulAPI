/** @format */

const { authorization } = require("../../middlewares/authorization");
const Product = require("../../models").Product;
const Variant = require("../../models").Variant;

jest.mock("express", () => ({
  req: jest.fn(),
  res: jest.fn(),
  next: jest.fn(),
}));

describe("authorization", () => {
  let req, res, next;

  beforeEach(() => {
    req = { decoded: { id: 1 } };
    res = jest.fn();
    next = jest.fn();
    Product.findByPK = jest.fn();
    Variant.findByPK = jest.fn();
  });

  test("authorization is a function", () => {
    expect(typeof authorization).toBe("function");
  });

  test("denies access for unauthorized user Product", () => {
    const productId = 3;
    const product = { id: productId, userId: 2 };
    Product.findByPK.mockResolvedValueOnce(product);
    authorization(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(res).not.toHaveBeenCalled();
  });

  test("denies access for unauthorized user Variant", () => {
    const variantId = 3;
    const variant = { id: variantId, userId: 2 };
    Product.findByPK.mockResolvedValueOnce(variant);
    authorization(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(res).not.toHaveBeenCalled();
  });
});
