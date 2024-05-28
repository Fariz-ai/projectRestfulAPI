/** @format */

const ProductController = require("../../controllers/product");
const Product = require("../../models").Product;
const Variant = require("../../models").Variant;

describe("ProductCotroller", () => {
  let req = {
    decoded: {
      id: 1,
    },
  };
  let res = jest.fn();
  let next = jest.fn();

  describe("static create", () => {
    test("controller has static create", () => {
      expect(typeof ProductController.create).toBe("function");
    });
    test("static create will call Product.create", () => {
      req.body = {
        prod_name: "test",
        prod_desc: "test",
        prod_price: 1000,
        prod_image_url: "test",
      };

      jest.spyOn(Product, "create").mockResolvedValueOnce({});

      ProductController.create(req, res, next);
      expect(Product.create).toHaveBeenCalled();
    });
  });

  describe("static readAll", () => {
    test("controller has static readAll", () => {
      expect(typeof ProductController.readAll).toBe("function");
    });
    test("static readAll will call Product.findAll include Variants", () => {
      jest.spyOn(Product, "findAll").mockResolvedValueOnce({});

      ProductController.readAll(req, res, next);
      expect(Product.findAll).toHaveBeenCalledWith({
        include: [{ model: Variant, as: "variants" }],
      });
    });
  });

  describe("static readOne", () => {
    test("controller has static readOne", () => {
      expect(typeof ProductController.readOne).toBe("function");
    });
    test("static readOne will call Product.findByPk include Variants", () => {
      req.params = {
        id: 1,
      };

      jest.spyOn(Product, "findByPk").mockResolvedValueOnce({});

      ProductController.readOne(req, res, next);
      expect(Product.findByPk).toHaveBeenCalledWith(1, {
        include: [{ model: Variant, as: "variants" }],
      });
    });
  });

  describe("static update", () => {
    test("controller has static update", () => {
      expect(typeof ProductController.update).toBe("function");
    });
    test("static update will call Product.update", () => {
      req.params = {
        id: 1,
      };
      jest.spyOn(Product, "update").mockResolvedValueOnce({});
      ProductController.update(req, res, next);
      expect(Product.update).toHaveBeenCalled();
    });
  });

  describe("static delete", () => {
    test("controller has static delete", () => {
      expect(typeof ProductController.delete).toBe("function");
    });
    test("static delete will call Product.destroy", () => {
      req.params = {
        id: 1,
      };
      jest.spyOn(Product, "destroy").mockResolvedValueOnce({});
      ProductController.delete(req, res, next);
      expect(Product.destroy).toHaveBeenCalled();
    });
  });
});
