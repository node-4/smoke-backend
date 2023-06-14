const stateModel = require('../model/state');
const districtModel = require('../model/district');
const cityModel = require('../model/city');

exports.createState = async (req, res) => {
  try {
    const { state } = req.body;
    let findData = await stateModel.findOne({ state: state });
    if (findData) {
      res.status(409).json({ data: {}, status: 409, message: "Already exits" });
    } else {
      const newCity = await stateModel.create({ state });
      res.status(200).json(newCity);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getState = async (req, res) => {
  try {
    const cities = await stateModel.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.updateState = async (req, res) => {
  try {
    const { id } = req.params;
    const { state } = req.body;
    const updatedCity = await stateModel.findByIdAndUpdate(id, { state }, { new: true });
    res.json(updatedCity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.deleteState = async (req, res) => {
  try {
    const { id } = req.params;
    await stateModel.findByIdAndDelete(id);
    res.json({ message: 'State deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createDistrict = async (req, res) => {
  try {
    const { district, stateId } = req.body;
    const newCity = await districtModel.create({ district: district, stateId: stateId });
    res.status(201).json(newCity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getDistrict = async (req, res) => {
  try {
    const cities = await districtModel.find().populate('stateId');
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getDistrictbyStateId = async (req, res) => {
  try {
    const cities = await districtModel.find({ stateId: req.params.stateId }).populate('stateId');
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.updateDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    const { district, stateId } = req.body;
    const updatedCity = await districtModel.findByIdAndUpdate(id, { district: district, stateId: stateId }, { new: true });
    res.json(updatedCity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.deleteDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    await districtModel.findByIdAndDelete(id);
    res.json({ message: 'District deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createCity = async (req, res) => {
  try {
    const { city, districtId, stateId } = req.body;
    const newCity = await cityModel.create({ city, districtId, stateId });
    res.status(201).json(newCity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getCity = async (req, res) => {
  try {
    const cities = await cityModel.find().populate('stateId districtId');
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getCitybyStateIdAndDiscrict = async (req, res) => {
  try {
    const cities = await cityModel.find({ stateId: req.params.stateId, districtId: req.params.districtId }).populate('stateId districtId');
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const { city, districtId, stateId } = req.body;
    const updatedCity = await cityModel.findByIdAndUpdate(id, { city, districtId, stateId }, { new: true });
    res.json(updatedCity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    await cityModel.findByIdAndDelete(id);
    res.json({ message: 'City deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
