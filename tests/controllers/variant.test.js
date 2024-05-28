/** @format */

const VariantController = require("../../controllers/variant");
const Variant = require("../../models").Variant;

describe("VariantController", () => {
  let req = {
    decoded: {
      id: 1,
    },
  };
  let res = jest.fn();
  let next = jest.fn();

  describe("static create", () => {
    test("controller has static create", () => {
      expect(typeof VariantController.create).toBe("function");
    });
    test("static create will call Variant.create", () => {
      req.body = {
        variant_name: "test",
        variant_color: "test",
        variant_price: 1000,
        prodId: 1,
      };

      jest.spyOn(Variant, "create").mockResolvedValueOnce({});

      VariantController.create(req, res, next);
      expect(Variant.create).toHaveBeenCalled();
    });
  });

  describe("static readAll", () => {
    test("controller has static readAll", () => {
      expect(typeof VariantController.readAll).toBe("function");
    });
    test("static readAll will call Variant.findAll", () => {
      jest.spyOn(Variant, "findAll").mockResolvedValueOnce({});

      VariantController.readAll(req, res, next);
      expect(Variant.findAll).toHaveBeenCalled();
    });
  });

  describe("static readOne", () => {
    test("controller has static readOne", () => {
      expect(typeof VariantController.readOne).toBe("function");
    });
    test("static readOne will call Variant.findByPk", () => {
      req.params = {
        id: 1,
      };

      jest.spyOn(Variant, "findByPk").mockResolvedValueOnce({});

      VariantController.readOne(req, res, next);
      expect(Variant.findByPk).toHaveBeenCalled();
    });
  });

  describe("static update", () => {
    test("controller has static update", () => {
      expect(typeof VariantController.update).toBe("function");
    });
    test("static update will call Variant.update", () => {
      req.params = {
        id: 1,
      };
      jest.spyOn(Variant, "update").mockResolvedValueOnce({});
      VariantController.update(req, res, next);
      expect(Variant.update).toHaveBeenCalled();
    });
  });

  describe("static delete", () => {
    test("controller has static delete", () => {
      expect(typeof VariantController.delete).toBe("function");
    });
    test("static delete will call Variant.destroy", () => {
      req.params = {
        id: 1,
      };
      jest.spyOn(Variant, "destroy").mockResolvedValueOnce({});
      VariantController.delete(req, res, next);
      expect(Variant.destroy).toHaveBeenCalled();
    });
  });
});
