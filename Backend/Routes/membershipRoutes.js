const express = require('express');
const membershipController = require('../Controller/membershipController');
const router = express.Router();

router.get('/getActiveMembership',membershipController.getActiveMembershipController);

module.exports = router;