const Question = require("../model/questions");
const xlsx = require("xlsx");
const fs = require('fs')
exports.createQuestion = async (req, res) => {
  try {
    const findData = await Question.findOne({ question: req.body.question });
    if (findData) {
      res.status(409).json({ message: "This Question is Already Addded ", data: {} });
    } else {
      let data = {
        question: req.body.question
      }
      const Data = await Question.create(data);
      res.status(200).json({ message: "Question is Addded ", data: Data });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while creating the question." });
  }
};
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    return res.json({ msg: questions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while retrieving the questions." });
  }
};
exports.getQuestionById = async (req, res) => {
  const { questionId } = req.params;
  try {
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: "Question not found." });
    }
    return res.json({ msg: question });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while retrieving the question." });
  }
};
exports.updateQuestion = async (req, res) => {
  try {
    const { questionId } = req.params;
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Question are required." });
    }
    const updatedQuestion = await Question.findByIdAndUpdate(questionId, { question: req.body.question }, { new: true });
    if (!updatedQuestion) {
      return res.status(404).json({ error: "Question not found." });
    }
    return res.json(updatedQuestion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while updating the question." });
  }
};
exports.deleteQuestion = async (req, res) => {
  const { questionId } = req.params;
  try {
    const deletedQuestion = await Question.findByIdAndRemove(questionId);
    if (!deletedQuestion) {
      return res.status(404).json({ error: "Question not found." });
    }
    return res.status(204).json({ message: "Question delete successfully." });; // No content
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the question." });
  }
};
exports.uploadthroughExcel = async (req, res) => {
  try {
    console.log(req.file);
    const workbook = xlsx.readFile(req.file.path);
    const sheet_name_list = workbook.SheetNames;
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    for (let i = 0; i < data.length; i++) {
      console.log(i, "----------------", data[i]);
      const product = new Question({
        question: data[i].question,
        type: data[i].type,
        emoji: data[i].emoji,
      });
      let a = await product.save();
    }
    fs.unlink(req.file.path, (err) => {
      if (err) throw err;
      console.log("Uploaded file deleted");
    });
    res.status(200).json({ message: "Product Data is Saved " });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};
