const express = require('express');
const customerRouter = express.Router();
const { createUser, verify, login, userUpdate, getUserflame, getUserFriends, socialLogin } = require('../controllers/user.controller');
const authJwt = require('../middlewares/authJwt')

customerRouter.post('/createUser', createUser);
customerRouter.post('/login', login);
customerRouter.post('/verify/:id', verify)
customerRouter.post('/socialLogin', socialLogin)
customerRouter.put('/userUpdate', authJwt.verifyToken, userUpdate)
customerRouter.get('/getUserflame', authJwt.verifyToken, getUserflame)
customerRouter.get('/getUserFriends', authJwt.verifyToken, getUserFriends)



module.exports = customerRouter;