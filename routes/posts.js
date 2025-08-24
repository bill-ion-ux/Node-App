const express = require('express');
const { getPost, getPosts, createPost, updatePost, deletePost } = require('../controller/postController');
const router = express.Router();



router.get('/', getPosts );

router.get('/:id', getPost);

// Create new post
router.post('/', createPost);

// Update post
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost);


module.exports = router;
