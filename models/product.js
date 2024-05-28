/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Variant, {
        foreignKey: "prodId",
        as: "variants",
        onDelete: "CASCADE",
      });
      Product.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }
  Product.init(
    {
      prod_name: DataTypes.STRING,
      prod_desc: DataTypes.STRING,
      prod_price: DataTypes.FLOAT,
      prod_image_url: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
