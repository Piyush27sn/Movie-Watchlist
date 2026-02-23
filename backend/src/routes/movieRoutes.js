import express from 'express';

const router = express.Router()

router.get("/test", (req, res) => {
    res.json({ message: "movie route 1 working"});
});

router.get("/test/2", (req, res) => {
    res.json({ message: "movie route 2 working"});
});

export default router;