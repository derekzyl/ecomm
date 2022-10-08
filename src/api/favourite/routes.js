import { Router } from "express";
import { protector } from "../auth/controller.js";
import {
  addFavorite,
  deleteFavorite,
  getAllFavorite,
  getUserFavorite,
} from "./controller.js";
const FavouriteRouter = Router();

FavouriteRouter.route("/").post(protector, addFavorite);
FavouriteRouter.route("/:id").delete(protector, deleteFavorite);
FavouriteRouter.route("/favorite").get(protector, getUserFavorite);

export default FavouriteRouter;
