const express = require('express');
const router = express.Router();
const staticContent = require('../controllers/staticContent');

router.post('/createAboutus', staticContent.createAboutUs);
router.get('/getAboutUs', staticContent.getAboutUs);
router.get('/aboutUs/:id',staticContent.getAboutUsById );
router.put('/aboutUs/:id',staticContent.updateAboutUs );
router.delete('/aboutUs/:id', staticContent.deleteAboutUs);
router.post('/createPrivacy', staticContent.createPrivacy);
router.get('/getPrivacy', staticContent.getPrivacy);
router.get('/privacy/:id',staticContent.getPrivacybyId );
router.put('/privacy/:id',staticContent.updatePrivacy );
router.delete('/privacy/:id', staticContent.deletePrivacy);
router.post('/createTerms', staticContent.createTerms);
router.get('/getTerms', staticContent.getTerms);
router.get('/terms/:id',staticContent.getTermsbyId );
router.put('/terms/:id',staticContent.updateTerms );
router.delete('/terms/:id', staticContent.deleteTerms);
module.exports = router
