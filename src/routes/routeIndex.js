import UserRouter from "../api/user/routes.js";
import CartRouter from "../api/cart/route.js";
import FavouriteRouter from "../api/favourite/routes.js";
import ProductRouter from "../api/products/routes.js";
import staticRouter from "../../staticRoutes.js";

export const UserRoute = UserRouter;
export const CartRoute = CartRouter;
export const FavouriteRoute = FavouriteRouter;
export const ProductRoute = ProductRouter;
export const staticRoute = staticRouter;
