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
exports.getMonthlySubscription = async (req, res) => {
  try {
    const findSubscription = await subscription.findOne({ name: "Monthly" });
    if (findSubscription) {
      res.status(200).json({ status: 200, message: "Subscription detail successfully.", data: findSubscription });
    } else {
      res.status(404).json({ status: 404, message: "Subscription not found.", data: {} });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getWeekSubscription = async (req, res) => {
  try {
    const findSubscription = await subscription.findOne({ name: "Week" });
    if (findSubscription) {
      res.status(200).json({ status: 200, message: "Subscription detail successfully.", data: findSubscription });
    } else {
      res.status(404).json({ status: 404, message: "Subscription not found.", data: {} });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.takeSubscription = async (req, res) => {
  try {
    let findSubscription = await subscription.findById({ _id: req.params.id });
    if (!findSubscription) {
      res.json({ status: 404, message: 'subscription not found.', data: {} });
    } else {
      let obj = {
        userId: req.user.id,
        subscriptionId: findSubscription._id,
        name: findSubscription.name,
        firstLetter: findSubscription.firstLetter,
        crushAlert: findSubscription.crushAlert,
        fullName: findSubscription.fullName,
        perWeek: findSubscription.perWeek,
        totalWeek: findSubscription.totalWeek,
        anonymousMode: findSubscription.anonymousMode,
        doublecoins: findSubscription.doublecoins
      }
      const newsubscription = await userSubscription.create(obj);
      res.json({ status: 200, message: 'subscription create successfully', data: newsubscription });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.updateSubscription = async (req, res) => {
  try {
    let findSubscription = await userSubscription.findById({ userId: req.user.id });
    if (findSubscription) {
      if (findSubscription.name == "Monthly") {
        let update = await userSubscription.findByIdAndUpdate({ _id: findSubscription._id }, { $set: { subscriptionStatus: true, subscriptionExpire: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) } }, { new: true });
        res.json({ status: 200, message: 'subscription subscribe successfully.', data: update });
      }
      if (findSubscription.name == "Week") {
        let update = await userSubscription.findByIdAndUpdate({ _id: findSubscription._id }, { $set: { subscriptionStatus: true, subscriptionExpire: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) } }, { new: true });
        res.json({ status: 200, message: 'subscription subscribe successfully.', data: update });
      }
    } else {
      res.json({ status: 404, message: 'subscription not found.', data: {} });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while updating the question." });
  }
};
exports.getuserSubscription = async (req, res) => {
  try {
    let findSubscription = await userSubscription.findOne({ userId: req.user._id });
    if (findSubscription) {
      res.status(200).json({ status: 200, message: "Subscription detail successfully.", data: findSubscription });
    } else {
      res.json({ status: 404, message: 'subscription not found.', data: {} });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while updating the question." });
  }
};
exports.useSubscriptionvalue = async (req, res) => {
  try {
    let findSubscription = await userSubscription.findOne({ userId: req.user.id });
    if (findSubscription) {
      let update = await userSubscription.findByIdAndUpdate({ _id: findSubscription._id }, { $set: { fullName: findSubscription.fullName - 1 } }, { new: true });
      if (update) {
        res.json({ status: 200, message: 'subscription first name successfully.', data: update });
      }
    } else {
      res.json({ status: 404, message: 'subscription not found.', data: {} });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while updating the question." });
  }
};
exports.updatevalue = async (req, res) => {
  try {
    let findSubscription = await userSubscription.findOne({ userId: req.user.id });
    if (findSubscription) {
      let update = await userSubscription.findByIdAndUpdate({ _id: findSubscription._id }, { $set: { fullName: findSubscription.fullName + 1 } }, { new: true });
      if (update) {
        res.json({ status: 200, message: 'subscription first name count increasse successfully.', data: update });
      }
    } else {
      res.json({ status: 404, message: 'subscription not found.', data: {} });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while updating the question." });
  }
};