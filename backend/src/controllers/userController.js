import { User, Movie } from '../models/tablesSchema.js'

export const getUserWithRelations = async (req, res) => {
    try {
        const userId = req.params.id;

        const userWithRelations = await User.findById(userId)
            .populate({
                path: 'movies',
                populate: { path: 'createdBy', select: 'name'}
            })
            .populate({
                path: 'watchlistItems',      // all watchlist entries
                populate: { path: 'movieId', select: 'title releaseYear'}
            });

        if (!userWithRelations) {
            return res.status(404).json({ message: "User not found" });
        }

        // Debug logs
        console.log("Movies created:", userWithRelations.movies);
        console.log("Watchlist:", userWithRelations.watchlistItems);

        res.json(userWithRelations);

    } catch (err) {
        console.error( "Error fetching user relations: ", err );
        res.status(500).json({ message: "Server error" });
    }
};



