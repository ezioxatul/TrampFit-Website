const express = require('express');
const jwtVerification = require('../MiddleWares/jwtVerification');
const partnerSecretKey = require('../MiddleWares/partnerSecretKey');
const partnerDashboardController = require('../Controller/partnerDashboardController');
const router = express.Router();

router.get('/partnerDashboard/partnerInfo',partnerSecretKey,jwtVerification,partnerDashboardController.partnerInfoController);

module.exports = router;