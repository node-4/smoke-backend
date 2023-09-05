const express = require('express');
const customerRouter = express.Router();
const { createUser, verify, addWhatAppNumber, updateModeStatus, resetBlockUser, crush, purchaseHistory1, crushPoll, resetHideUser, updatehideFlameStatus, updatetakeAbreakStatus, updateNotifactionStatus, login, userUpdate, getUserflame, getUser, getUserById, getUserFriends, socialLogin, getWhatAppNumber, getWhatAppNumberafterLogin } = require('../controllers/user.controller');
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
customerRouter.get('/getWhatAppNumber', authJwt.verifyToken, getWhatAppNumberafterLogin)
customerRouter.put('/updatetakeAbreakStatus', authJwt.verifyToken, updatetakeAbreakStatus);
customerRouter.put('/updateNotifactionStatus', authJwt.verifyToken, updateNotifactionStatus);
customerRouter.put('/updateModeStatus', authJwt.verifyToken, updateModeStatus);
customerRouter.put('/updatehideFlameStatus', authJwt.verifyToken, updatehideFlameStatus);
customerRouter.put('/resetHideUser', authJwt.verifyToken, resetHideUser);
customerRouter.put('/resetBlockUser', authJwt.verifyToken, resetBlockUser);
customerRouter.put('/purchaseHistory1', authJwt.verifyToken, purchaseHistory1)
customerRouter.put('/crushPoll/:id', authJwt.verifyToken, crushPoll)
customerRouter.get('/crush', authJwt.verifyToken, crush)
module.exports = customerRouter;