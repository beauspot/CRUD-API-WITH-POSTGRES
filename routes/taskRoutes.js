import express from "express";
const router = express.Router();
import {
  getAllTasks,
  createATask,
  getASingleTask,
  updateASingleTask,
  deleteASingleTask,
} from "../controllers/taskControllers.js";


router.get("/alltasks", getAllTasks);
router.post("/alltasks", createATask);
router.get("/:id", getASingleTask);
router.patch("/:id", updateASingleTask);
router.delete("/:id", deleteASingleTask);

export default router;
