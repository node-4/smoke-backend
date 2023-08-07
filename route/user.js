const express = require('express');
const customerRouter = express.Router();
const { createUser, verify, addWhatAppNumber, login, userUpdate, getUserflame, getUser, getUserById, getUserFriends, socialLogin, getWhatAppNumber } = require('../controllers/user.controller');
const authJwt = require('../middlewares/authJwt')

customerRouter.post('/createUser', createUser);
customerRouter.post('/addWhatAppNumber/:phone', addWhatAppNumber)
customerRouter.post('/login', login);
customerRouter.post('/verify/:id', verify)
customerRouter.post('/socialLogin', socialLogin)
customerRouter.put('/userUpdate', authJwt.verifyToken, userUpdate)
customerRouter.get('/getUserflame', authJwt.verifyToken, getUserflame)
customerRouter.get('/getUserFriends', authJwt.verifyToken, getUserFriends)
customerRouter.get('/getUserById/:id', getUserById)
customerRouter.get('/getUser', getUser);
customerRouter.get('/getWhatAppNumber/:phone', getWhatAppNumber)
module.exports = customerRouter;