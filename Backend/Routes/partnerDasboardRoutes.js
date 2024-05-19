const express = require('express');
const jwtVerification = require('../MiddleWares/jwtVerification');
const partnerSecretKey = require('../MiddleWares/partnerSecretKey');
const partnerDashboardController = require('../Controller/partnerDashboardController');
const router = express.Router();

// get partner Info
router.get('/partnerDashboard/partnerInfo',partnerSecretKey,jwtVerification,partnerDashboardController.partnerInfoController);

// get gym Info
router.get('/partnerDashboard/gymInfo',partnerSecretKey,jwtVerification,partnerDashboardController.gymInfoController);

// update amenities
router.put('/partnerDashboard/updateAmenities',partnerDashboardController.updateAmenitiesController);

// add session slots
router.post('/partnerDashboard/addSessionSlots',partnerDashboardController.addSessionSlotsController);

// update schedule slots
router.put('/partnerDashboard/updateSchedule',partnerDashboardController.updateScheduleController);

module.exports = router;