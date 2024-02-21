const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/posts/:userId', postController.getPostsByUserId);
router.post('/bulk-add-posts/:userId', postController.bulkAddPosts);

module.exports = router;
