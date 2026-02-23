import { User } from "../models/tablesSchema.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";



const register = async (req, res) => {

  const { name, email, password } = req.body;

  // 1. Check if user already exists
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  }

  // 2. Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 3. Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // 4. Generate JWT token
  const token = generateToken(user._id, res);

  // 5. Send response
  res.status(201).json({
    status: "success",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    },
  });
};



const login = async (req, res) => {
  const { email, password } = req.body;

  // 1. Check if user exists in the database table
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // 2. Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: "Incorrect password" });
  }

  // 3. Generate JWT token
  const token = generateToken(user._id, res);

  // 4. Send response
  res.status(201).json({
    status: "success",
    data: {
      user: {
        id: user._id,
        email: user.email,
      },
      token,
    },
  });
};



const logout = async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({
        status: "success",
        message: "Logged out successfully",
    });
};


export { register, login, logout };
