import { Router } from "express";
import path from "path";
const staticRouter = Router();
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
staticRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

staticRouter.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/login.html"));
});
staticRouter.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public/signup.html"));
});
staticRouter.get("/addProduct", (req, res) => {
  res.sendFile(path.join(__dirname, "public/addProduct.html"));
});
staticRouter.get("/favorite", (req, res) => {
  res.sendFile(path.join(__dirname, "public/favourite.html"));
});
export default staticRouter;
