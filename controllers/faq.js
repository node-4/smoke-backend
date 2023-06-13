const Faq = require("../models/faq");

exports.getAllFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find().lean();
        return createResponse(res, 200, " faqs retrieved successfully", faqs);
    } catch (err) {
        console.log(err);
        return createResponse(res, 500, "Error", err.message);
    }
};
exports.getFaqById = async (req, res) => {
    const { id } = req.params;
    try {
        const faq = await Faq.findById(id);
        if (!faq) {
            res.status(404).json({ message: "Not Found ", data: {} });
        }
        res.status(200).json({ message: "faqs retrieved successfully ", data: faq });
    } catch (err) {
        console.log(err);
        return createResponse(res, 500, "Error", err.message);
    }
};
exports.createFaq = async (req, res) => {
    const { question, answer } = req.body;
    try {
        if (!question || !answer) {
            res.status(400).json({ message: "questions and answers cannot be blank " });
        }
        const faq = await Faq.create(req.body);
        res.status(200).json({ message: "FAQ Added Successfully ", data: faq });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error ",status: 500,data:  err.message });
    }
};
exports.updateFaq = async (req, res) => {
    const { id } = req.params;
    try {
        const faq = await Faq.findByIdAndUpdate(id, req.body, { new: true });
        if (!faq) {
            res.status(404).json({ message: "Not Found ", data: {} });
        }
        res.status(200).json({ message: "FAQ Updated Successfully ", data: faq });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong ",status: 500, data:  err.message });
    }
};
exports.deleteFaq = async (req, res) => {
    const { id } = req.params;
    try {
        const faq = await Faq.findByIdAndDelete(id);
        if (!faq) {
            res.status(404).json({ message: "Not Found ", data: {} });
        }
        res.status(200).json({ message: "FAQ Deleted Successfully ", data: faq });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong ",status: 500, data:  err.message });
    }
};