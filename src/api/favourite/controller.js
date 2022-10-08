import { hash } from "../../utils/experiments.js";
import { FAVOURITE } from "./model.js";
import jwtUtils from "../../utils/jwt.js";
import { USER } from "../user/model.js";
import { PRODUCT } from "../products/model.js";
import AppError from "../../utils/appError.js";

export const getAllFavorite = async (req, res) => {
  try {
    const favourite = await FAVOURITE.findAll();
    res.status(200).json({
      status: "success",
      data: favourite,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
export const getUserFavorite = async (req, res) => {
  try {
    const favourite = await FAVOURITE.findAll({
      where: {
        userId: req.user.id,
      },
      include: [
        {
          model: PRODUCT,
          as: "product",
        },
      ],
    });
    res.status(200).json({
      status: "success",
      data: favourite,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
export const deleteFavorite = async (req, res) => {
  try {
    const favourite = await FAVOURITE.destroy({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    console.log(favourite);
    res.status(200).json({
      status: "success",
      data: favourite,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
export const addFavorite = async (req, res) => {
  console.log(
    " <<<-----req.user.just id--------->>>",
    req.user.id,
    "<<<-------req.user.just id------->>>"
  );
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    const decoded = jwtUtils.verifyToken(token);

    const userId = req.user.id || decoded.id;
    const { productId } = req.body;
    const math = Math.round(Math.random() * 10);
    const favId = hash + math;

    console.log(userId, "<----------------------->", productId);

    const checkFavorite = await FAVOURITE.findOne({
      where: {
        userId: userId,
        productId: productId,
      },
    });
    if (checkFavorite) {
      throw new AppError("product already added to favourite", 400);
    } else {
      const favourite = await FAVOURITE.create({
        userId,
        id: favId,
        productId,
      });
      console.log(favourite);
      res.status(200).json({
        status: "success",
        data: favourite,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
