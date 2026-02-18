import express from "express";
import { getAllMovies } from "../aa/c.js";

const router = express.Router();

router.get("/movies", getAllMovies);

export default router;