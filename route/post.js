const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const { authJwt } = require("../middlewares");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
        cloud_name: "djgrqoefp", // node4
        api_key: "274167243253962",
        api_secret: "3mkqkDDusI5Hf4flGNkJNz4PHYg",
});
const storage = new CloudinaryStorage({
        cloudinary: cloudinary, params: { folder: "smoke/post", allowed_formats: ["jpg", "jpeg", "mp4", "mp3", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], },
});
const upload = multer({ storage: storage });
var cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'docs', maxCount: 1 }]);
router.post('/createPost', [authJwt.verifyToken], cpUpload, postController.createPost);
router.get('/all', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.get('/getAllPostUserId/user/:userId', postController.getAllPostUserId);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.post('/like/:id', postController.addLike);
router.get('/posts/:id/like/count', postController.getLikeCount);
router.post('/comment/:id', postController.addComment);
router.get('/getAll/Activity', [authJwt.verifyToken], postController.getAllActivity);
module.exports = router;



