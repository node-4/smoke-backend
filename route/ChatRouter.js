const userController = require('../controllers/chatController');
const { authJwt } = require("../middlewares");
const router = require('express').Router()
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
        cloud_name: "djgrqoefp", // node4
        api_key: "274167243253962",
        api_secret: "3mkqkDDusI5Hf4flGNkJNz4PHYg",
});
const storage = new CloudinaryStorage({
        cloudinary: cloudinary, params: { folder: "smoke/chat", allowed_formats: ["jpg", "jpeg", "webp", "mp4", "mp3", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], },
});
const upload = multer({ storage: storage });
var cpUpload = upload.fields([
        { name: 'image', maxCount: 1 },
        { name: 'docs', maxCount: 1 },]);

router.post('/userChat', [authJwt.verifyToken], cpUpload, userController.userChat);
/**
 * @swagger
 * /api/v1/chat/viewChat:
 *  get:
 *    tags:
 *       - USER CHAT (6)
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true 
 *       - name: _id
 *         description: _id
 *         in: query
 *         required: true     
 *    responses:
 *       200:
 *         description: Thanks, You have successfully signed up.
 *       404:
 *         description: This mobile number already exists.
 *       500:
 *         description: Internal Server Error.
 *       501:
 *         description: Something went wrong!   
 */
router.get('/viewChat', [authJwt.verifyToken], userController.viewChat);
/**
 * @swagger
 * /api/v1/chat/chattingHistory:
 *  get:
 *    tags:
 *       - USER CHAT (6)
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true    
 *       - name: userName
 *         description: userName
 *         in: query
 *         required: false  
 *    responses:
 *       200:
 *         description: Thanks, You have successfully signed up.
 *       404:
 *         description: This mobile number already exists.
 *       500:
 *         description: Internal Server Error.
 *       501:
 *         description: Something went wrong!   
 */
router.get('/chattingHistory', [authJwt.verifyToken], userController.chattingHistory);
/**
 * @swagger
 * /api/v1/chat/deleteChat:
 *  delete:
 *    tags:
 *       - USER CHAT (6)
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true 
 *       - name: _id
 *         description: _id
 *         in: query
 *         required: true     
 *    responses:
 *       200:
 *         description: Thanks, You have successfully signed up.
 *       404:
 *         description: This mobile number already exists.
 *       500:
 *         description: Internal Server Error.
 *       501:
 *         description: Something went wrong!   
 */
router.delete('/deleteChat', [authJwt.verifyToken], userController.deleteChat);
/**
 * @swagger
 * /api/v1/chat/clearChat:
 *  put:
 *    tags:
 *       - USER CHAT (6)
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true 
 *       - name: _id
 *         description: _id
 *         in: query
 *         required: true     
 *    responses:
 *       200:
 *         description: Thanks, You have successfully signed up.
 *       404:
 *         description: This mobile number already exists.
 *       500:
 *         description: Internal Server Error.
 *       501:
 *         description: Something went wrong!   
 */
router.put('/clearChat', [authJwt.verifyToken], userController.clearChat);
/**
 * @swagger
 * /api/v1/chat/deleteAllChat:
 *  put:
 *    tags:
 *       - USER CHAT (6)
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true 
 *    responses:
 *       200:
 *         description: Thanks, You have successfully signed up.
 *       404:
 *         description: This mobile number already exists.
 *       500:
 *         description: Internal Server Error.
 *       501:
 *         description: Something went wrong!   
 */
router.put('/deleteAllChat', [authJwt.verifyToken], userController.deleteAllChat);
router.put('/deleteMessage/:id', [authJwt.verifyToken], userController.deleteMessage);
module.exports = router;   
