import Sequelize from "sequelize";
import "dotenv/config";
/**
 * created the process of connecting to the database
 * ------------------------------------------------
 * 1. created a new sequelize instance
 * 2. authenticate the connection
 * 3. create the database
 * 4. create a sync
 *
 *
 */
const sql = {
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: "mysql",
};
const sequelize = new Sequelize(sql.name, sql.user, sql.password, {
  host: "localhost",
  dialect: sql.dialect,
  define: {
    timestamps: false,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
/**
 * created the process of connecting to the database
 * ------------------------------------------------
 * 1. created a new sequelize instance
 * @export{ database} an object that contains @param{ sequelize, Sequelize }
 *
 */
let database = {};
database.sequelize = sequelize;
database.Sequelize = Sequelize;

database.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err, "Database not synced");
  });

export default database;
