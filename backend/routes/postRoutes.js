const express = require('express');
const { createPost, getFeed } = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createPost);
router.get('/', getFeed);


module.exports = router;
