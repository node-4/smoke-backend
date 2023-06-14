const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscription');
router.post('/createSubscription', subscriptionController.createSubscription);
router.get('/getSubscription', subscriptionController.getSubscription);
module.exports = router;
