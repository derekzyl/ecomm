// import { User } from "./src/api/user/model.js";
// import "dotenv/config";
// import { hash } from "./src/utils/experiments.js";

// console.log(hash.length);

// import { Sequelize, Op, Model, DataTypes } from "sequelize";
// const sequelize = new Sequelize("mysql::memory:");
// console.log(sequelize);

// const hell = User.create({
//   id: hash,
//   name: "John",
//   email: "savior@yahoo.com",
//   password: "123456",
//   confirmPassword: "123456",
// });
// console.log(hell);

// import jwtUtils from "./src/utils/jwt.js";

// const dat = new Date(2022, 8, 5);
// const daaa = new Date();
// const option = {
//   expiresIn: "1w",
// };
// const j = jwtUtils.generateToken("1", option);
// console.log(j);
// const k = jwtUtils.verifyToken(j);
// console.log(k);

// const de = parseInt(dat.getTime() / 1000, 10);
// const dee = daaa.getTime();
// console.log(de, "<------------------------------->", dee);
// console.log(de > k.iat);
// import crypto from "crypto";
// const pRT = crypto.randomBytes(20).toString("hex");
// const resetTokenExpiry = Date.now() + 1 * 60 * 60 * 1000;

// const resetToken = crypto.createHash("sha256").update(pRT).digest("hex");

// console.log(
//   resetToken,
//   "<------------------------------->",
//   new Date(resetTokenExpiry),
//   "<------------------------------->",
//   pRT
// );

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("directory-name 👉️", __dirname);
console.log(__dirname, "<------------------------------->", __filename);
