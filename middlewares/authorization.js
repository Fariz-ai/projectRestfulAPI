/** @format */

const Product = require("../models").Product;
const Variant = require("../models").Variant;

const authorization = async (req, res, next) => {
  try {
    const userId = req.decoded.id;
    const productId = req.params.id;
    const variantId = req.params.id;

    const [product, variant] = await Promise.all([
      Product.findByPk(productId),
      Variant.findByPk(variantId),
    ]);

    if (product) {
      if (product.userId === userId) {
        return next();
      } else {
        return next({ status: 403, message: "Access forbidden!" });
      }
    }

    if (variant) {
      if (variant.userId === userId) {
        return next();
      } else {
        return next({ status: 403, message: "Access forbidden!" });
      }
    }

    next({ status: 403, message: "Access forbidden!" });
  } catch (error) {
    next({ status: 403, message: "Access forbidden!" });
  }
};

module.exports = { authorization };
