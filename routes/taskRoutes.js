import express from "express";
import {
  getAllTasks,
  createATask,
  getASingleTask,
  updateASingleTask,
  deleteASingleTask,
} from "../controllers/taskControllers.js";
const router = express.Router();

/* router.route("/alltasks").get(getAllTasks).post(createATask);

router
  .route("/:id")
  .get(getASingleTask)
  .patch(updateASingleTask)
  .delete(deleteASingleTask); */

router.get("/alltasks", getAllTasks);
router.post("/alltasks", createATask);
router.get("/:id", getASingleTask);
router.patch("/:id", updateASingleTask);
router.delete("/:id", deleteASingleTask);

export default router;
