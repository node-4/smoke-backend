const schoolModel = require('../model/school')
exports.createSchool = async (req, res) => {
        try {
                const { schoolName, pinCode, city, districtId, stateId } = req.body;
                const newSchool = await schoolModel.create({ schoolName, pinCode, city, districtId, stateId, status: "Approved" });
                return res.json({ status: 200, message: 'School create successfully', data: newSchool });
        } catch (err) {
                return res.status(400).json({ message: err.message });
        }
};
exports.getSchool = async (req, res) => {
        try {
                const schools = await schoolModel.find({ status: "Approved" }).populate('city districtId stateId');
                return res.json(schools);
        } catch (err) {
                return res.status(500).json({ message: err.message });
        }
};
exports.updateSchool = async (req, res) => {
        try {
                const { id } = req.params;
                const { schoolName, pinCode, city, districtId, stateId } = req.body;
                const updatedSchool = await schoolModel.findByIdAndUpdate(id, { schoolName, pinCode, city, districtId, stateId }, { new: true });
                return res.json(updatedSchool);
        } catch (err) {
                return res.status(400).json({ message: err.message });
        }
};
exports.deleteSchool = async (req, res) => {
        try {
                const { id } = req.params;
                await schoolModel.findByIdAndDelete(id);
                return res.json({ message: 'City deleted successfully' });
        } catch (err) {
                return res.status(500).json({ message: err.message });
        }
};
exports.createSchoolbyUser = async (req, res) => {
        try {
                const { schoolName, pinCode, city, districtId, stateId } = req.body;
                const newSchool = await schoolModel.create({ schoolName, pinCode, city, districtId, stateId, status: "Pending" });
                return res.json({ status: 200, message: 'School create successfully', data: newSchool });

        } catch (err) {
                return res.status(400).json({ message: err.message });
        }
};
exports.getAllPendingSchool = async (req, res) => {
        try {
                const schools = await schoolModel.find({}).populate('city districtId stateId');
                return res.json({ status: 200, message: 'Pending School successfully', data: schools });
        } catch (err) {
                return res.status(500).json({ message: err.message });
        }
};
exports.approvedSchool = async (req, res) => {
        try {
                const { id } = req.params;
                const updatedSchool = await schoolModel.findByIdAndUpdate(id, { status: "Approved" }, { new: true });
                return res.json(updatedSchool);
        } catch (err) {
                return res.status(400).json({ message: err.message });
        }
};
exports.rejectSchool = async (req, res) => {
        try {
                const { id } = req.params;
                const updatedSchool = await schoolModel.findByIdAndUpdate(id, { status: "Reject" }, { new: true });
                return res.json(updatedSchool);
        } catch (err) {
                return res.status(400).json({ message: err.message });
        }
};