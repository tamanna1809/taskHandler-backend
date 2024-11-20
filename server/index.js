import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import { getUser } from "./controllers/authController.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3002, () => {
  console.log("Server is running at port 3002!");
});
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);
app.get('/api/users/:userId', async (req, res) => {
    const { userId } = req.params;
    
    try {
      const user = await getUser(userId);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
