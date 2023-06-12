const express = require('express');
const customerRouter = express.Router();
const { createUser, verify, login } = require('../controllers/user.controller');
const authJwt = require('../middlewares/authJwt')

customerRouter.post('/createUser', createUser);
customerRouter.post('/login', login);
customerRouter.post('/verify/:id', verify)



module.exports = customerRouter;