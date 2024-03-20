const express = require('express');
const userAuthenticationController = require('../Controller/userAuthenticationController');
const router = express.Router();

// inserting the data taking from the frontend
router.post('/login',userAuthenticationController.userLoginController);

module.exports = router;