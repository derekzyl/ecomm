import { PRODUCT } from "./model.js";
import { hash } from "../../utils/experiments.js";
import AppError from "../../utils/appError.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await PRODUCT.findAll();

    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await PRODUCT.findByPk(req.params.id);

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { name, details, price, image, quantity, adminPass } = req.body;

    console.log(
      name,
      "this is the name",
      details,
      "this is the details",
      price,
      "this is the price",
      image,
      "this is the image",
      quantity,
      "this is the quantity",
      adminPass,
      "this is the admin pass"
    );

    if (!name || !details || !price || !image || !quantity) {
      throw new AppError("Please provide all the required fields", 400);
    }
    if (adminPass !== process.env.ADMIN_PASSWORD) {
      throw new AppError("Please provide correct admin password", 401);
    }
    const id = hash;
    const product = await PRODUCT.create({
      id,
      name,
      details,
      price,
      image,
      quantity,
    });
    if (!product) {
      next(new AppError("Something went wrong", 500));
    }
    res.status(201).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { name, details, price, image, quantity } = req.body;

    if (!name || !details || !price || !image || !quantity) {
      throw new AppError("Please provide all the required fields", 400);
    }
    const product = await PRODUCT.update(
      {
        name,
        details,
        price,
        image,
        quantity,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!product) {
      throw new AppError("Something went wrong", 500);
    }
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const product = await PRODUCT.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!product) {
      throw new AppError("Something went wrong", 500);
    }
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
