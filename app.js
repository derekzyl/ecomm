import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import AppError from "./src/utils/appError.js";
import {
  CartRoute,
  FavouriteRoute,
  ProductRoute,
  staticRoute,
  UserRoute,
} from "./src/routes/routeIndex.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.use("/", staticRoute);
const apiString = "/api/v1";
app.use(`${apiString}/user`, UserRoute);
app.use(apiString + "/favourite", FavouriteRoute);
app.use(`${apiString}/product`, ProductRoute);
app.use(apiString + "/cart", CartRoute);
app.use("*", (req, res) => {
  throw new AppError(`Can't find ${req.originalUrl} on this server!`, 404);
});

export default app;
