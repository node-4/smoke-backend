const subscription = require('../model/subscription');
const userSubscription = require('../model/userSubscription');


exports.createSubscription = async (req, res) => {
  try {
    let findSubscription = await subscription.findOne({ name: req.body.name });
    if (findSubscription) {
      res.json({ status: 409, message: 'subscription already created.', data: {} });
    } else {
      const newsubscription = await subscription.create(req.body);
      res.json({ status: 200, message: 'subscription create successfully', data: newsubscription });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getSubscription = async (req, res) => {
  try {
    const findSubscription = await subscription.find();
    res.status(200).json({ status: 200, message: "Subscription detail successfully.", data: findSubscription });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};