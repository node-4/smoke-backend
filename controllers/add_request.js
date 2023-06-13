const FriendRequest = require('../model/add_request');
const userSchema = require("../model/user");
exports.sendFriendRequest = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const friendRequest = new FriendRequest({
      sender: senderId,
      receiver: receiverId,
    });

    const savedFriendRequest = await friendRequest.save();

    res.status(200).json(savedFriendRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending the friend request' });
  }
};
exports.acceptFriendRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const friendRequest = await FriendRequest.findById(requestId);
    if (!friendRequest) {
      return res.status(404).json({ error: 'Friend request not found' });
    } else {
      const updatedFriendRequest = await FriendRequest.findByIdAndUpdate({ _id: friendRequest._id }, { $set: { status: 'accepted' } }, { new: true });
      if (updatedFriendRequest) {
        let findSender = await userSchema.findById({ _id: friendRequest.sender })
        let updateSender = await userSchema.findByIdAndUpdate({ _id: findSender._id }, { $push: { friends: friendRequest.receiver }, $set: { friendCount: findSender.friendCount + 1 } }, { new: true });
        let findReceiver = await userSchema.findById({ _id: friendRequest.receiver })
        let updateReceiver = await userSchema.findByIdAndUpdate({ _id: findReceiver._id }, { $push: { friends: friendRequest.sender }, $set: { friendCount: findReceiver.friendCount + 1 } }, { new: true })
        res.status(200).json(updatedFriendRequest);
      } else {
        return res.status(404).json({ error: 'User not found' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while accepting the friend request' });
  }
};
exports.rejectFriendRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    const friendRequest = await FriendRequest.findById(requestId);

    if (!friendRequest) {
      return res.status(404).json({ error: 'Friend request not found' });
    }

    friendRequest.status = 'rejected';
    const updatedFriendRequest = await friendRequest.save();

    res.status(200).json(updatedFriendRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while rejecting the friend request' });
  }
};
exports.getAllFriendRequest = async (req, res) => {
  try {
    const cities = await FriendRequest.find({ receiver: req.params.userId, status: "pending" });
    res.json({ total: cities.length, msg: cities });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getByIdFriendRequest = async (req, res) => {
  try {
    const cities = await FriendRequest.find({ _id: req.params.id });
    res.json({ msg: cities });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deleteFriendRequest = async (req, res) => {
  try {
    const { id } = req.params;
    await FriendRequest.findByIdAndDelete(id);
    res.json({ message: 'City deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getfriendsofFriend = async (req, res) => {
  try {
    let findUser = await userSchema.findById({ _id: req.user.id });
    if (findUser) {
      const my = new Map(findUser.friends.map(s => [s._id, s]));
      const otheruser = new Map(my.friends.map(s => [s._id, s]));
      const result = otheruser.filter(f => !my.get(f._id))
      return res.status(200).json({ msg: "Data found successfully.", data: { user: result } });

    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};
exports.getfriendsFromSchool = async (req, res) => {
  try {
    let findUser = await userSchema.findById({ _id: req.user.id });
    if (findUser) {
      const myFriend = new Map(findUser.friends.map(s => [s._id, s]));
      let data = await userSchema.find({ nameOfSchool: findUser.nameOfSchool });
      const result = data.filter(f => !myFriend.get(f._id))
      return res.status(200).json({ msg: "Data found successfully.", data: { user: result } });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message, });
  }
};
exports.blockUser = async (req, res) => {
  try {
    let findUser = await userSchema.findById({ _id: req.user.id });
    if (!findUser) {
      return res.status(404).json({ msg: "user token expire or invalid.", data: {} });
    } else {
      let getUser = await userSchema.findById({ _id: req.params.id });
      if (!getUser) {
        return res.status(404).json({ msg: "user not found", data: {} });
      } else {
        if (findUser.friends.includes(getUser._id)) {
          let update = await userSchema.findByIdAndUpdate({ _id: findUser._id }, { $pull: { friends: req.params.id }, $push: { blockUser: req.params.id } }, { new: true })
          return res.status(200).json({ msg: "User block successfully.", data: update });
        } else {
          return res.status(404).json({ msg: "user not found", data: {} });
        }
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while accepting the friend request' });
  }
};
exports.unblockUser = async (req, res) => {
  try {
    let findUser = await userSchema.findById({ _id: req.user.id });
    if (!findUser) {
      return res.status(404).json({ msg: "user token expire or invalid.", data: {} });
    } else {
      let getUser = await userSchema.findById({ _id: req.params.id });
      if (!getUser) {
        return res.status(404).json({ msg: "user not found", data: {} });
      } else {
        if (findUser.blockUser.includes(getUser._id)) {
          let update = await userSchema.findByIdAndUpdate({ _id: findUser._id }, { $pull: { blockUser: req.params.id }, $push: {friends: req.params.id } }, { new: true })
          return res.status(200).json({ msg: "User un block successfully.", data: update });
        } else {
          return res.status(404).json({ msg: "user not found", data: {} });
        }
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while accepting the friend request' });
  }
};