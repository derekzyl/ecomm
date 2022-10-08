import database from "../../database.js";
import { PRODUCT } from "../products/model.js";
import { USER } from "../user/model.js";

const { Sequelize, sequelize } = database;

export const CART = sequelize.define("cart", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
});
USER.hasOne(CART, { foreignKey: "userId" });
PRODUCT.hasONE(CART, { foreignKey: "productId" });
