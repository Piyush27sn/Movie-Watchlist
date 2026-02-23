import { Movie, WatchlistItem } from "../models/tablesSchema.js";


const addToWatchlist = async (req, res) => {
    const { movieId, status, rating, notes } = req.body;

    // 1. Verify movie exists
    const movie = await Movie.findById({ _id: movieId});

    if (!movie) {
        return res.status(404).json({ error: "Movie does not exist" });
    }

    // 2. Check if the movie already existes in watchlist
    const existInWatchlist = await WatchlistItem.findOne({
        userId: req.user._id,
        movieId: movie._id
    });

    if (existInWatchlist) {
        return res.status(400).json({ error: "Movie already in watchlist"})
    }

    // 3. Insert into watchlist
    const newMovieWatchlist = await WatchlistItem.create({
        userId: req.user._id,
        movieId: movie._id,
        status,
        rating,
        notes
    });

    res.status(201).json({
        message: "Movie added to watchlist",
        data: newMovieWatchlist
    });
}

const getWatchlist = async (req, res) => {
    try {
        // 1. Find all watchlist items for the logged-in user
        const watchlist = await WatchlistItem.find({ userId: req.user._id })
            .populate("movieId")    // populate movie details from Movie schema
            .exec()

        // 2. If empty, return
        if (!watchlist || watchlist.length === 0) {
            return res.status(200).json({ message: "Your watchlist is empty", data: [] });
        }

        // 3. Return the watchlist with movie details
        res.status(200).json({
            message: "Watchlist fetched successfully",
            count: watchlist.length,
            data: watchlist
        }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error"});
    }
};

export { addToWatchlist, getWatchlist };