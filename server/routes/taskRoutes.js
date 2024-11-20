import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  addTask,
  getTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/addTask", addTask);
router.get("/getTask", getTasks);
router.get("/get/:id", getTask);
router.put("/update/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
