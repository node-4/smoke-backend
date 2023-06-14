const express = require('express');
const router = express.Router();
const StateController = require('../controllers/statecityDistricts');

router.post('/createState', StateController.createState);
router.get('/getState', StateController.getState);
router.put('/State/:id', StateController.updateState);
router.delete('/deleteState/:id', StateController.deleteState);
router.post('/createDistrict', StateController.createDistrict);
router.get('/getDistrict', StateController.getDistrict);
router.get('/getDistrictbyState/:stateId', StateController.getDistrictbyStateId);
router.put('/district/:id', StateController.updateDistrict);
router.delete('/district/:id', StateController.deleteDistrict);
router.post('/createCity', StateController.createCity);
router.get('/getCity', StateController.getCity);
router.get('/getCitybystateDiscrict/:stateId/:districtId', StateController.getCitybyStateIdAndDiscrict);
router.put('/city/:id', StateController.updateCity);
router.delete('/city/:id', StateController.deleteCity);
module.exports = router;
