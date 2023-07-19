const express = require("express");
const questionController = require("../controllers/questionAnswer");
const { authJwt } = require('../middlewares');
const router = express.Router();
router.get("/", [authJwt.verifyToken], questionController.getAllQuestions);
router.get("/:questionId", questionController.getQuestionById);
router.put("/:questionId", questionController.suffle);
router.put("/answer/:questionId", [authJwt.verifyToken], questionController.giveAnswer);
router.get("/getInbox", [authJwt.verifyToken], questionController.getInbox);
router.get("/getInboxById/:id", [authJwt.verifyToken], questionController.getInboxById);
router.get("/admin/getAllQuestionsByAdmin", questionController.getAllQuestionsByAdmin);
module.exports = router;
