const staticContent = require('../model/staticContent');
exports.createAboutUs = async (req, res) => {
        try {
                const newAboutUs = {
                        title: req.body.title,
                        desc: req.body.desc,
                        type: "ABOUTUS"
                }
                const result = await staticContent.create(newAboutUs)
                res.status(200).json({ message: result })
        } catch (error) {
                console.error(error);
                res.status(400).json({
                        message: err.message
                })
        }
};
exports.getAboutUs = async (req, res) => {
        try {
                const result = await staticContent.find({ type: "ABOUTUS" });
                res.status(200).json({ message: result })
        } catch (error) {
                console.error(error);
                res.status(400).json({
                        message: err.message
                })
        }
};
exports.getAboutUsById = async (req, res) => {
        try {
                const data = await staticContent.findById(req.params.id);
                if (!data || data.length === 0) {
                        return res.status(400).send({ msg: "not found" });
                }
                res.status(200).send({ data: data });
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error ", error: err.message });
        }
};
exports.updateAboutUs = async (req, res) => {
        try {
                const data = await staticContent.findById(req.params.id);
                if (!data || data.length === 0) {
                        return res.status(400).send({ msg: "not found" });
                } else {
                        let title = req.body.title || data.title;
                        let desc = req.body.desc || data.desc;
                        const result = await staticContent.findByIdAndUpdate({ _id: req.params.id }, { $set: { title: title, desc: desc, type: data.type, } }, { new: true });
                        res.status(200).json({ message: "ok" })
                }
        } catch (error) {
                console.error(error);
                res.status(400).json({
                        message: err.message
                })
        }
};
exports.deleteAboutUs = async (req, res) => {
        try {
                const result = await staticContent.findByIdAndDelete({ _id: req.params.id });
                res.status(200).json({ message: "ok" })
        } catch (error) {
                console.error(error);
                res.status(400).json({
                        message: err.message
                })
        }
};
exports.createTerms = async (req, res) => {
        try {
                if (!req.body.terms) {
                        return res.status(400).send("please specify terms");
                }
                const result = await staticContent.create({ terms: req.body.terms, type: "TERMS" });
                res.status(200).send({ msg: "created", data: result });
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error ", error: err.message });
        }
};
exports.updateTerms = async (req, res) => {
        try {
                const data = await staticContent.findById(req.params.id);
                if (!data || data.length === 0) {
                        return res.status(400).send({ msg: "not found" });
                } else {
                        let terms = req.body.terms || data.terms;
                        const data1 = await staticContent.findOneAndUpdate({ id: req.params.id }, { terms: terms, type: "TERMS" }, { new: true, });
                        res.status(200).send({ msg: "updated", data: data1 });
                }
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error ", error: err.message });
        }
};
exports.getTerms = async (req, res) => {
        try {
                const data = await staticContent.find({ type: "TERMS" });
                if (!data || data.length === 0) {
                        return res.status(400).send({ msg: "not found" });
                }
                res.status(200).send({ data: data });
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error ", error: err.message });
        }
};
exports.getTermsbyId = async (req, res) => {
        try {
                const data = await staticContent.findById(req.params.id);
                if (!data || data.length === 0) {
                        return res.status(400).send({ msg: "not found" });
                }
                res.status(200).send({ data: data });
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error ", error: err.message });
        }
};
exports.deleteTerms = async (req, res) => {
        try {
                const data = await staticContent.findByIdAndDelete(req.params.id);
                if (!data) {
                        return res.status(400).send({ msg: "not found" });
                }
                res.status(200).send({ msg: "deleted", data: data });
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error", error: err.message });
        }
};
exports.createPrivacy = async (req, res) => {
        try {
                if (!req.body.privacy) {
                        return res.status(400).send("please specify privacy");
                }
                const result = await staticContent.create({ privacy: req.body.privacy, type: "PRIVACY" });
                res.status(200).send({ msg: "created", data: result });
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error ", error: err.message });
        }
};
exports.updatePrivacy = async (req, res) => {
        try {
                const data = await staticContent.findById(req.params.id);
                if (!data || data.length === 0) {
                        return res.status(400).send({ msg: "not found" });
                } else {
                        let privacy = req.body.privacy || data.privacy;
                        const data1 = await staticContent.findByIdAndUpdate({ _id: req.params.id }, { privacy: privacy, type: data.type }, { new: true, });
                        res.status(200).send({ msg: "updated" });
                }
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error ", error: err.message });
        }
};
exports.getPrivacy = async (req, res) => {
        try {
                const data = await staticContent.find({type: "PRIVACY"});
                if (!data || data.length === 0) {
                        return res.status(400).send({ msg: "not found" });
                }
                res.status(200).send({ data: data });
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error ", error: err.message });
        }
};
exports.getPrivacybyId = async (req, res) => {
        try {
                const data = await staticContent.findById(req.params.id);
                if (!data || data.length === 0) {
                        return res.status(400).send({ msg: "not found" });
                }
                res.status(200).send({ data: data });
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error ", error: err.message });
        }
};
exports.deletePrivacy = async (req, res) => {
        try {
                const data = await staticContent.findByIdAndDelete(req.params.id);
                if (!data) {
                        return res.status(400).send({ msg: "not found" });
                }
                res.status(200).send({ msg: "deleted", data: data });
        } catch (err) {
                console.log(err.message);
                res.status(500).send({ msg: "internal server error", error: err.message });
        }
};