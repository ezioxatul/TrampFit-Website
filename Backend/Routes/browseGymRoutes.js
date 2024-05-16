const express = require('express');
const browseGymController = require('../Controller/browseGymController');
const router = express.Router();


// get all gym details 
router.get('/browseGym',browseGymController.getAllGymDetailsController);

// get individual gym details
router.get('/browseGym/gymViewDetail',browseGymController.getGymViewDetailController);

// apply search on browse gym Data
router.get('/browseGym/searchGym',browseGymController.searchGymController);

module.exports = router