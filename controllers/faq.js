const Faq = require("../model/faq");

exports.getAllFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find().lean();
        return res.status(200).json({ message: "faqs retrieved successfully ", data: faqs });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'An error occurred while fetching the faqs' });
    }
};
exports.getFaqById = async (req, res) => {
    const { id } = req.params;
    try {
        const faq = await Faq.findById(id);
        if (!faq) {
            return res.status(404).json({ message: "Not Found ", data: {} });
        }
        return res.status(200).json({ message: "faqs retrieved successfully ", data: faq });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'An error occurred while fetching the faqs' });
    }
};
exports.createFaq = async (req, res) => {
    const { question, answer } = req.body;
    try {
        if (!question || !answer) {
            return res.status(400).json({ message: "questions and answers cannot be blank " });
        }
        const faq = await Faq.create(req.body);
        return res.status(200).json({ message: "FAQ Added Successfully ", data: faq });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'An error occurred while fetching the faqs' });
    }
};
exports.updateFaq = async (req, res) => {
    const { id } = req.params;
    try {
        const faq = await Faq.findByIdAndUpdate(id, req.body, { new: true });
        if (!faq) {
            return res.status(404).json({ message: "Not Found ", data: {} });
        }
        return res.status(200).json({ message: "FAQ Updated Successfully ", data: faq });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'An error occurred while fetching the faqs' });
    }
};
exports.deleteFaq = async (req, res) => {
    const { id } = req.params;
    try {
        const faq = await Faq.findById(id);
        if (!faq) {
            return res.status(404).json({ message: "Not Found ", data: {} });
        }
        const faq1 = await Faq.findByIdAndDelete(id);
        return res.status(200).json({ message: "FAQ Deleted Successfully ", data: faq1 });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'An error occurred while fetching the faqs' });
    }
};