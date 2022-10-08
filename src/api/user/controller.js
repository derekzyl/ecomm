import bcrypt from "bcrypt";
import { USER } from "./model.js";
import AppError from "../../utils/appError.js";

export const getAllUser = async (req, res, next) => {
  try {
    const users = await USER.findAll();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const user = await USER.findByPk(req.params.id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = req.user;
    const getMe = await USER.findOne({
      where: {
        id: user.id,
      },
    });
    if (!getMe) {
      throw new AppError("User not found", 404);
    }

    res.status(200).json({
      status: "success",
      data: getMe,
    });
  } catch (err) {
    res.status(err.statusCode).json({ message: err.message });
  }
};
