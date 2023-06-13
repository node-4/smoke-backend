const express = require("express");
const router = express.Router();
const { getAllFaqs, getFaqById, createFaq, updateFaq, deleteFaq } = require("../controllers/faq");
router.post("/createFaq", createFaq);
router.get("/:id", getFaqById);
router.put("/:id", updateFaq);
router.delete("/:id", deleteFaq);
router.get("/", getAllFaqs);
module.exports = router;
