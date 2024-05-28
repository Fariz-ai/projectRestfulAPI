/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Variant.belongsTo(models.Product, {
        foreignKey: "prodId",
        as: "product",
      });
      Variant.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }
  Variant.init(
    {
      variant_name: DataTypes.STRING,
      variant_color: DataTypes.STRING,
      variant_price: DataTypes.FLOAT,
      prodId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        onDelete: "CASCADE",
      },
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
      modelName: "Variant",
    }
  );
  return Variant;
};
