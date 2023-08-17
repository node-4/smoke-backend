const helpandSupport = require("../model/helpAndSupport");
exports.AddQuery = async (req, res) => {
    try {
        req.body.user = req.user.id;
        const Data = await helpandSupport.create(req.body);
        return res.status(200).json({ message: Data, });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: err.message,
        });
    }
};
exports.getAllHelpandSupport = async (req, res) => {
    try {
        const data = await helpandSupport.find().populate('user');;
        return res.status(200).json({ message: data, });
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            message: err.message,
        });
    }
};
exports.getAllHelpandSupportgetByuserId = async (req, res) => {
    try {
        const data = await helpandSupport.findById(req.params.id).populate('user');
        return res.status(200).json({ message: data, });
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            message: err.message,
        });
    }
};
exports.DeleteHelpandSupport = async (req, res) => {
    try {
        await helpandSupport.deleteOne({ _id: req.params.id }).populate('user');;
        return res.status(200).json({ message: "Deleted", });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            message: err.message,
        });
    }
};
