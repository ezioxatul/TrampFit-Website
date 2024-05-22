const express = require('express');
const browseGymController = require('../Controller/browseGymController');
const userSecretKey = require('../MiddleWares/userSecretKey');
const jwtVerification = require('../MiddleWares/jwtVerification');
const getUserInfo = require('../MiddleWares/getUserInfo');
const checkBookingSlot = require('../MiddleWares/checkBookingSlot');
const checkSessionCount = require('../MiddleWares/checkSessionCount');
const router = express.Router();


// get all gym details 
router.get('/browseGym',browseGymController.getAllGymDetailsController);

// get individual gym details
router.get('/browseGym/gymViewDetail',browseGymController.getGymViewDetailController);

// get Session Slots According to the date
router.get('/browseGym/gymViewDetail/getSessionSlots',browseGymController.getSessionSlotsTimingController);

// booked slot
router.post('/browseGym/gymViewDetail/bookSlot',userSecretKey,jwtVerification,getUserInfo,checkBookingSlot,checkSessionCount,browseGymController.bookedSlotController);

// apply search on browse gym Data
router.get('/browseGym/searchGym',browseGymController.searchGymController);

module.exports = router