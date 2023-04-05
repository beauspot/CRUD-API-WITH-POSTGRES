import TaskModel from "../models/taskmodel.js";
import { StatusCodes } from "http-status-codes";
import asyncHandler from "express-async-handler";

export const getAllTasks = asyncHandler(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "ALl Tasks" });
});

export const createATask = asyncHandler(async (req, res, next) => {
  const { task } = req.body;
  console.log(task);
  res.status(StatusCodes.OK).json({ message: task });
});

export const getASingleTask = asyncHandler(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "A single task" });
});

export const updateASingleTask = asyncHandler(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "Update a single task" });
});

export const deleteASingleTask = asyncHandler(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "Delete a single task" });
});

/* getAllTAsks
    createATask
    createASingleTask
    updateASingleTask
    deleteASingleTask
 */
