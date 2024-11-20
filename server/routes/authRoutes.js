import express from "express";
import { register, login, getUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getUser/{userId}", getUser);

export default router;
