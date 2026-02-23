import mongoose from "mongoose";
import { User, Movie, WatchlistItem } from "../models/tablesSchema.js";
import dotenv from "dotenv";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Clear collections (optional, usually only in dev)
    await Movie.deleteMany({});

    const user = await User.findOne({ email: "tarantino@gmail.com" });
    if (!user) {
      console.log("No user found for seeding. Please create one first.");
      process.exit(1);
    }

    const movies = [
      {
        title: "The Matrix",
        overview: "A computer hacker learns about the true nature of reality.",
        releaseYear: 1999,
        genres: ["Action", "Sci-Fi"],
        runtime: 136,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png",
        createdBy: user._id,
      },
      {
        title: "Inception",
        overview:
          "A thief who steals corporate secrets through dream-sharing technology.",
        releaseYear: 2010,
        genres: ["Action", "Sci-Fi", "Thriller"],
        runtime: 148,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        createdBy: user._id,
      },
      {
        title: "The Dark Knight",
        overview: "Batman faces the Joker in a battle for Gotham's soul.",
        releaseYear: 2008,
        genres: ["Action", "Crime", "Drama"],
        runtime: 152,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        createdBy: user._id,
      },
      {
        title: "Pulp Fiction",
        overview:
          "The lives of two mob hitmen, a boxer, and others intertwine.",
        releaseYear: 1994,
        genres: ["Crime", "Drama"],
        runtime: 154,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        createdBy: user._id,
      },
      {
        title: "Interstellar",
        overview: "A team of explorers travel through a wormhole in space.",
        releaseYear: 2014,
        genres: ["Adventure", "Drama", "Sci-Fi"],
        runtime: 169,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        createdBy: user._id,
      },
      {
        title: "The Shawshank Redemption",
        overview: "Two imprisoned men bond over a number of years.",
        releaseYear: 1994,
        genres: ["Drama"],
        runtime: 142,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg",
        createdBy: user._id,
      },
      {
        title: "Fight Club",
        overview:
          "An insomniac office worker and a devil-may-care soapmaker form an underground fight club.",
        releaseYear: 1999,
        genres: ["Drama"],
        runtime: 139,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
        createdBy: user._id,
      },
      {
        title: "Forrest Gump",
        overview:
          "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man.",
        releaseYear: 1994,
        genres: ["Drama", "Romance"],
        runtime: 142,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
        createdBy: user._id,
      },
      {
        title: "The Godfather",
        overview:
          "The aging patriarch of an organized crime dynasty transfers control to his son.",
        releaseYear: 1972,
        genres: ["Crime", "Drama"],
        runtime: 175,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        createdBy: user._id,
      },
      {
        title: "Goodfellas",
        overview: "The story of Henry Hill and his life in the mob.",
        releaseYear: 1990,
        genres: ["Biography", "Crime", "Drama"],
        runtime: 146,
        posterUrl: "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        createdBy: user._id,
      },
    ];

    await Movie.insertMany(movies);

    console.log("Seeding completed!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error: ", err);
    process.exit(1);
  }
};

seed();
