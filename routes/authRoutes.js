import express from "express";
const router = express.Router();

import {
  createUser,
  loginUser,
  logoutUser,
  logoffUser,
} from "../controllers/authControllers.js";

router.post("/createacct",  createUser);

router.post("/loginacct", loginUser);

router.post("/logoutacct", logoutUser);

router.delete("/logoffacct", logoffUser);

export default router