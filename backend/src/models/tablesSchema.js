import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const movieSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
    },
    title: String,
    overview: String,
    releaseYear: Number,
    genres: {
        type: [String],
        default: [],
    },
    runtime: Number,
    posterUrl: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const watchlistItemSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => new mongoose.Types.ObjectId().toString(),
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    status: {
        type: String,
        enum: ['PLANNED', 'WATCHING', 'COMPLETED', 'DROPPED'],
        default: 'PLANNED',
        required: true,
    },
    rating: Number,
    notes: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});


const User = mongoose.model('User', userSchema);
const Movie = mongoose.model('Movie', movieSchema);
const WatchlistItem = mongoose.model('WatchlistItem', watchlistItemSchema);


userSchema.virtual('watchlistItems', {
  ref: 'WatchlistItem',
  localField: '_id',
  foreignField: 'userId',
});
userSchema.virtual('movies', {
    ref: 'Movie',
    localField: '_id',
    foreignField: 'createdBy',
});


userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });


export { User, Movie, WatchlistItem };