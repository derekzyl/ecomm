import database from "../../database.js";
import { hash } from "../../utils/experiments.js";

let { Sequelize, sequelize } = database;

export const USER = sequelize.define("user", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  passwordChangedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  resetToken: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  role: {
    type: Sequelize.ENUM("ADMIN", "USER", "STAFF"),
    defaultValue: "USER",
  },
});

await sequelize.sync();
await USER.sync();
