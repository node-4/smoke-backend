const express = require("express");
const questionController = require("../controllers/question");
const router = express.Router();
router.post("/", questionController.createQuestion);
router.get("/", questionController.getAllQuestions);
router.get("/:questionId", questionController.getQuestionById);
router.put("/:questionId", questionController.updateQuestion);
router.delete("/:questionId", questionController.deleteQuestion);
module.exports = router;
