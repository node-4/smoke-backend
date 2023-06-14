const express = require('express');
const router = express.Router();
const SchoolController = require('../controllers/School');

router.post('/createSchool', SchoolController.createSchool);
router.get('/getSchool', SchoolController.getSchool);
router.put('/school/:id', SchoolController.updateSchool);
router.delete('/deleteSchool/:id', SchoolController.deleteSchool);
router.post('/createSchoolbyUser', SchoolController.createSchoolbyUser);
router.get('/getAllPendingSchool', SchoolController.getAllPendingSchool);
router.put('/approvedSchool/:id', SchoolController.approvedSchool);
router.put('/rejectSchool/:id', SchoolController.rejectSchool);
module.exports = router;
