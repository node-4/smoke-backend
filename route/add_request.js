const express = require('express');
const router = express.Router();
const friendRequestController = require('../controllers/add_request');
const { authJwt } = require('../middlewares');

router.post('/', friendRequestController.sendFriendRequest);
router.get('/:userId', friendRequestController.getAllFriendRequest);
router.get('/:id', friendRequestController.getByIdFriendRequest);
router.put('/:requestId/accept', friendRequestController.acceptFriendRequest);
router.put('/:requestId/reject', friendRequestController.rejectFriendRequest);
router.delete('/:id', friendRequestController.deleteFriendRequest);
router.get("/getfriendsofFriend", [authJwt.verifyToken],friendRequestController.getfriendsofFriend);
router.get("/getfriendsFromSchool", [authJwt.verifyToken],friendRequestController.getfriendsFromSchool);
router.put("/blockUser/:id", [authJwt.verifyToken],friendRequestController.blockUser);
router.put("/unblockUser/:id", [authJwt.verifyToken],friendRequestController.unblockUser);
module.exports = router;
