import AuthModel from "../models/userauthmodel.js";
import { StatusCodes } from "http-status-codes";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import dotenv from "dotenv";


dotenv.config();

export const createUser = asyncHandler(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "Signup user" });
});

export const loginUser = asyncHandler(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "Login User" });
});

export const logoutUser = asyncHandler(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "Logout the user" });
});

export const logoffUser = asyncHandler(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "Logoff the user" });
});
