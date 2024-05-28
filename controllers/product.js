/** @format */

const { where } = require("sequelize");

const Product = require("../models").Product;
const Variant = require("../models").Variant;

class ProductController {
  static create(req, res, next) {
    const { prod_name, prod_desc, prod_price, prod_image_url, userId } =
      req.body;
    Product.create({
      prod_name,
      prod_desc,
      prod_price,
      prod_image_url,
      userId,
    })
      .then((product) => {
        res.status(201).json(product);
      })
      .catch(next);
  }

  static readAll(req, res, next) {
    Product.findAll({
      include: [{ model: Variant, as: "variants" }],
    })
      .then((products) => {
        res.status(200).json(products);
      })
      .catch(next);
  }

  static readOne(req, res, next) {
    Product.findByPk(req.params.id, {
      include: [{ model: Variant, as: "variants" }],
    })
      .then((product) => {
        res.status(200).json(product);
      })
      .catch(next);
  }

  static update(req, res, next) {
    Product.update(req.body, { where: { id: req.params.id }, returning: true })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(next);
  }

  static delete(req, res, next) {
    Product.destroy({
      where: { id: req.params.id },
      include: [{ model: Variant, as: "variants" }],
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(next);
  }
}

module.exports = ProductController;
