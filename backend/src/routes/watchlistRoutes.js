import express from 'express';
import { addToWatchlist, getWatchlist } from '../controllers/watchlistController.js';
import { protect } from '../middlewares/watchlistMiddleware.js';


const router = express.Router();


router.post('/', protect, addToWatchlist);

router.get('/', protect, getWatchlist);



export default router;