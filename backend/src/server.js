import express from 'express';
import { config } from 'dotenv';
import { connectDB, disconnectDB } from './config/db.js';

// Import Routes
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';
import watchlistRoutes from './routes/watchlistRoutes.js';
import testMovies from './aa/r.js';     // testing route

import cookieParser from "cookie-parser";
import cors from "cors";


config();
connectDB();

const app = express()


// Body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


// CORS setup
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,      // allows cookies to be sent
}));


// API routes
app.use('/movies', movieRoutes);
app.use('/auth', authRoutes);
app.use('/watchlist', watchlistRoutes);
app.use('/testMovies', testMovies);     // testing route


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});



// Handle unhandled promise rejections (e.g. database connection errors)
process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection: ", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
    console.error("Uncaught Exception: ", err);
    await disconnectDB();
    process.exit(1);
});

// Graceful Shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down gracefully");
    server.close(async () => {
        await disconnectDB();
        process.exit(0);
    });
});



// There are 4 different parts of this API
// 1. AUTH -  signin, signup
// 2. MOVIE - getting all movies
// 3. USER - profile
// 4. WATCHLIST