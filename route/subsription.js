const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscription');
const authJwt = require('../middlewares/authJwt')
router.post('/createSubscription', subscriptionController.createSubscription);
router.get('/getSubscription', subscriptionController.getSubscription);
router.get('/getMonthlySubscription', subscriptionController.getMonthlySubscription);
router.get('/getWeekSubscription', subscriptionController.getWeekSubscription);
router.post('/takeSubscription/:id', authJwt.verifyToken, subscriptionController.takeSubscription);
router.put('/updateSubscription', authJwt.verifyToken, subscriptionController.updateSubscription);
router.get('/getuserSubscription', authJwt.verifyToken, subscriptionController.getuserSubscription);
router.put('/updatevalue', authJwt.verifyToken, subscriptionController.updatevalue);
router.put('/useSubscriptionvalue', authJwt.verifyToken, subscriptionController.useSubscriptionvalue);
module.exports = router;
