const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.post('/createPost', postController.createPost);
router.get('/all', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.get('/getAllPostUserId/user/:userId', postController.getAllPostUserId);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.post('/like/:id', postController.addLike);
router.get('/posts/:id/like/count', postController.getLikeCount);
router.post('/comment/:id', postController.addComment);
module.exports = router;



