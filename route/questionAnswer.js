const express = require("express");
const questionController = require("../controllers/questionAnswer");
const { authJwt } = require('../middlewares');
const router = express.Router();
router.get("/", [authJwt.verifyToken], questionController.getAllQuestions);
router.get("/:questionId", questionController.getQuestionById);
router.put("/:questionId", questionController.suffle);
router.put("/answer/:questionId", [authJwt.verifyToken], questionController.giveAnswer);
router.get("/getInbox/All", [authJwt.verifyToken], questionController.getInbox);
router.get("/getInboxById/:id", [authJwt.verifyToken], questionController.getInboxById);
router.get("/admin/getAllQuestionsByAdmin", questionController.getAllQuestionsByAdmin);
router.put("/hideInboxFromActivity/:id", [authJwt.verifyToken], questionController.hideInboxFromActivity);
router.post("/createQuestion", [authJwt.verifyToken], questionController.createQuestion);
router.post("/createQuestion1", [authJwt.verifyToken], questionController.createQuestion1);
// router.post("/option1Condition", [authJwt.verifyToken], questionController.option1Condition);
// router.post("/option2Condition", [authJwt.verifyToken], questionController.option2Condition);
// router.post("/option3Condition", [authJwt.verifyToken], questionController.option3Condition);
module.exports = router;
