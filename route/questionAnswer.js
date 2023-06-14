const express = require("express");
const questionController = require("../controllers/questionAnswer");
const { authJwt } = require('../middlewares');
const router = express.Router();
router.get("/", questionController.getAllQuestions);
router.get("/:questionId", questionController.getQuestionById);
router.put("/:questionId", questionController.suffle);
router.put("/answer/:questionId", [authJwt.verifyToken],questionController.giveAnswer);
router.get("/getInbox", [authJwt.verifyToken],questionController.getInbox);
module.exports = router;