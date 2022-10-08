import bcrypt from "bcrypt";
import { USER } from "../user/model.js";
import "dotenv/config";
import { hash } from "../../utils/experiments.js";
import bc from "../../utils/bcrypt.js";
import AppError from "../../utils/appError.js";
import jwtUtils from "../../utils/jwt.js";
import nodeMailer from "../../utils/mailer.js";

export const signup = async (req, res, next) => {
  try {
    console.log("<-------------------- here");

    const { name, email, password, confirmPassword, phone } = req.body;

    console.log(
      phone,
      "<-------",
      name,
      "---------->",
      email,
      "---------->",
      password,
      "--------------->",
      confirmPassword
    );

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !phone ||
      name.length < 3 ||
      !email.includes("@", ".") ||
      password.length < 6 ||
      !Number(phone) ||
      phone.length < 10 ||
      password !== confirmPassword
    ) {
      throw new AppError("Please provide all the required fields", 400);
    }
    if (password !== confirmPassword) {
      throw new AppError("Passwords do not match", 400);
    }
    if (!email.includes("@", ".")) {
      throw new AppError("Please provide a valid email", 400);
    }
    if (phone.length < 10) {
      throw new AppError("Please provide a valid phone number", 400);
    }
    if (password.length < 6) {
      throw new AppError("Password must be at least 6 characters", 400);
    }
    // if (
    //   !password.match(/[a-z]/) ||
    //   !password.match(/[A-Z]/) ||
    //   !password.match(/[0-9]/) ||
    //   !password.match(/[!@#$%^&*]/)
    // ) {
    //   throw new AppError(
    //     "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character",
    //     400
    //   );
    // }
    console.log("<-------------------- here is your hash", hash);
    let id = hash;
    const pass = await bc.hashing(password);
    console.log(password);
    const role = "ADMIN";
    const user = await USER.create({
      id,
      name,
      email,
      password: pass,
      phone,
      role,
    });
    const token = jwtUtils.generateToken(user.id, {
      expiresIn: process.env.JWT_EXPIRATION_DURATION,
    });

    res.status(201).json({
      status: "success",
      data: user,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    if (!email || !password) {
      throw new AppError("Please provide all the required fields", 400);
    }
    const user = await USER.findOne({
      where: {
        email: email,
      },
    });
    console.log(user, `<-------------------- here is your user`, user.id);
    if (!user) {
      throw new AppError("incorrect username or password", 401);
    }
    const isPasswordValid = await bc.compare(password, user.password);
    if (!isPasswordValid) {
      throw new AppError("incorrect username or password", 401);
    }
    const token = jwtUtils.generateToken(user.id, {
      expiresIn: process.env.JWT_EXPIRATION_DURATION,
    });
    console.log(user, "<----------------------->", token);
    res.status(200).json({
      status: "success",
      data: user,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const protector = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    console.log(token, "<-----------------------> token");
    if (!token) {
      throw new AppError("You are not logged in", 401);
    }
    const decoded = jwtUtils.verifyToken(token);
    const user = await USER.findOne({
      where: {
        id: decoded.id,
      },
    });
    if (user.passwordChangedAt) {
      const passChAt = parseInt(user.passwordChangedAt.getTime() / 1000, 10);
      if (passChAt > decoded.iat) {
        throw new AppError("Password changed, please login again", 401);
      }
    }
    if (!user) {
      throw new AppError("User not found", 401);
    }
    req.user = user;
    console.log(req.user, "<-----------------------> req.user");
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const adminRole = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role === "ADMIN") {
      return next();
    }
    throw new AppError("You are not authorized to perform this action", 401);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new AppError("Please provide all the required fields", 400);
    }
    const user = await USER.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new AppError("user or email dos not exist", 401);
    }
    const pRT = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiry = Date.now() + 1 * 60 * 60 * 1000;
    const resetToken = crypto.createHash("sha256").update(pRT).digest("hex");

    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;
    await user.save();

    const url = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/auth/resetPassword/${pRT}`;
    const message = `You are receiving this email because you (or someone else) have requested the reset of a password. \n Please make a POST request to: ${url}`;

    const details = {
      email: user.email,
      subject: "Password reset token is valid for 1 hour",
      message: message,
    };
    nodeMailer.mailer(details);
    res.status(200).json({
      status: "success",
      message: "token sent to email",
    });
  } catch (err) {
    USER.resetToken = undefined;
    USER.resetTokenExpiry = undefined;
    await USER.save();
    return next(new AppError(err.message, 500));
    res.status(500).json({ message: err.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { tokenT } = req.params;
    const { password, confirmPassword } = req.body;

    if (!resetToken || !password || !confirmPassword) {
      throw new AppError("Please provide all the required fields", 400);
    }
    if (password !== confirmPassword) {
      throw new AppError("Passwords do not match", 400);
    }
    if (password.length < 6) {
      throw new AppError("Password must be at least 6 characters", 400);
    }
    if (
      !password.match(/[a-z]/) ||
      !password.match(/[A-Z]/) ||
      !password.match(/[0-9]/) ||
      !password.match(/[!@#$%^&*]/)
    ) {
      throw new AppError(
        "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character",
        400
      );
    }
    const resetToken = crypto.createHash("sha256").update(tokenT).digest("hex");
    const user = await USER.findOne({
      where: {
        resetToken,
      },
    });
    if (!user) {
      throw new AppError("Invalid token", 400);
    }
    if (user.resetTokenExpiry < Date.now()) {
      throw new AppError(" your Token has expired", 400);
    }
    user.password = await bc.hashing(password);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    const token = jwtUtils.generateToken(user.id, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(200).json({
      status: "success",
      message: "password changed",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { currentPassword, password, confirmPassword } = req.body;
    if (!password || !confirmPassword) {
      throw new AppError("Please provide all the required fields", 400);
    }
    if (password !== confirmPassword) {
      throw new AppError("Passwords do not match", 400);
    }
    if (password.length < 6) {
      throw new AppError("Password must be at least 6 characters", 400);
    }
    if (
      !password.match(/[a-z]/) ||
      !password.match(/[A-Z]/) ||
      !password.match(/[0-9]/) ||
      !password.match(/[!@#$%^&*]/)
    ) {
      throw new AppError(
        "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character",
        400
      );
    }
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(new AppError("You are not logged in", 401));
    }
    const decoded = jwtUtils.verifyToken(token);
    const user = await USER.findOne({
      where: {
        id: decoded.id,
      },
    });
    if (user) {
      if (!bc.compare(currentPassword, user.password)) {
        throw new AppError("Current password is incorrect", 400);
      }
    }

    user.password = await bc.hashing(password);
    user.passwordChangedAt = Date.now();
    await user.save();

    res.status(200).json({
      status: "success",
      message: "password changed",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
