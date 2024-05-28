/** @format */

const { where } = require("sequelize");

const Variant = require("../models").Variant;

class VariantController {
  static create(req, res, next) {
    const { variant_name, variant_color, variant_price, prodId, userId } = req.body;
    Variant.create({
      variant_name,
      variant_color,
      variant_price,
      prodId,
      userId
    })
      .then((variant) => {
        res.status(201).json(variant);
      })
      .catch(next);
  }

  static readAll(req, res, next) {
    Variant.findAll()
      .then((variants) => {
        res.status(200).json(variants);
      })
      .catch(next);
  }

  static readOne(req, res, next) {
    Variant.findByPk(req.params.id)
      .then((variant) => {
        res.status(200).json(variant);
      })
      .catch(next);
  }

  static update(req, res, next) {
    Variant.update(req.body, { where: { id: req.params.id }, returing: true })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(next);
  }

  static delete(req, res, next) {
    Variant.destroy({ where: { id: req.params.id } })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(next);
  }
}

module.exports = VariantController;
