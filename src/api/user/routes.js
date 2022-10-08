import { Router } from "express";
const UserRouter = Router();
import {
  forgotPassword,
  login,
  protector,
  resetPassword,
  signup,
  updatePassword,
} from "../auth/controller.js";
import { getAllUser, getUser, getUserById } from "./controller.js";
UserRouter.route("/login").post(login);
UserRouter.route("/signup").post(signup);
UserRouter.route("/forgot-password").post(forgotPassword);
UserRouter.route("/reset-password").post(resetPassword);
UserRouter.route("/update-password").post(updatePassword);

UserRouter.route("/get-me").get(protector, getUser);

UserRouter.route("/:id").get(getUserById);

export default UserRouter;
