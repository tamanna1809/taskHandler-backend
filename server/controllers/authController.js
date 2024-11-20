import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { userId,name, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({ userId, name, email, password: hashPassword  });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to find user by userId
export const getUser=async(userId) =>{
    try {
      const user = await User.findOne({ userId: userId });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (err) {
      console.error('Error retrieving user:', err);
      throw err;  // You can handle the error accordingly in your application
    }
  }
  


