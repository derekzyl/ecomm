import { Router } from "express";
import { adminRole, protector } from "../auth/controller.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} from "./controller.js";

const ProductRouter = Router();

ProductRouter.route("/")
  .get(getAllProducts)
  .post(protector, adminRole, createProduct);

ProductRouter.route("/:id")
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProduct);

export default ProductRouter;
