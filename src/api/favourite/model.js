import database from "../../database.js";
import { PRODUCT } from "../products/model.js";
import { USER } from "../user/model.js";

const { Sequelize, sequelize } = database;

export const FAVOURITE = sequelize.define("favourite", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
});
USER.hasMany(FAVOURITE, { foreignKey: "userId", as: "user" });
PRODUCT.hasMany(FAVOURITE, { foreignKey: "productId", as: "product" });

FAVOURITE.belongsTo(USER, { foreignKey: "userId", as: "user" });
FAVOURITE.belongsTo(PRODUCT, { foreignKey: "productId", as: "product" });

await sequelize.sync();
await FAVOURITE.sync();
