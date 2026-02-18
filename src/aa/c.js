import { Movie } from "../models/tablesSchema.js";

export const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        .populate("createdBy", "name email");

        res.status(200).json({
            status: "success",
            count: movies.length,
            data: movies,
        });
    } catch (err) {
        console.error("Error fetching movies: ", err);
        res.status(500).json({message: "Server error"});
    }
};