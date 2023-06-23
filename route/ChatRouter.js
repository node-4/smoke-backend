const userController = require('../controllers/chatController');
const { authJwt } = require("../middlewares");
const router = require('express').Router()


/**
 * @swagger
 * /api/v1/chat/userChat:
 *  post:
 *    tags:
 *       - USER CHAT (6)
 *    produces:
 *      - application/json
 *    parameters:
 *       - name: token
 *         description: token
 *         in: header
 *         required: true
 *       - name: userId
 *         description: userId
 *         in: query
 *         required: false
 *       - name: message
 *         description: message
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
router.post('/userChat', [authJwt.verifyToken], userController.userChat);
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
module.exports = router;   
