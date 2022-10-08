import { Router } from "express";
import { protector } from "../auth/controller.js";
import { addToCart, removeFromCart } from "./controller.js";

const CartRouter = Router();

CartRouter.route("/").get(protector).post(protector, addToCart);

export default CartRouter;
