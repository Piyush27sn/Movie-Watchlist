import jwt from "jsonwebtoken";
import { User } from "../models/tablesSchema.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("_id name email");
    next();
  } catch (err) {
    console.error("Auth error:", err);
    res.status(401).json({ error: "Not authorized" });
  }
};