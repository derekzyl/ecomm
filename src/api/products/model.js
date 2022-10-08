import database from "../../database.js";
import { hash } from "../../utils/experiments.js";
const { Sequelize, sequelize } = database;

export const PRODUCT = sequelize.define("product", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: hash,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  details: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.NUMBER,
  },
});
await sequelize.sync();
await PRODUCT.sync();
