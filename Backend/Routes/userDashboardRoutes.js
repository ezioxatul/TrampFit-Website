const express = require('express');
const jwtVerification = require('../MiddleWares/jwtVerification');
const userDashboardController = require('../Controller/userDashboardController');
const userSecretKey = require('../MiddleWares/userSecretKey');

const router = express.Router();

// Authenticate the user While entering in the User Dashboard
router.get('/userDashboardAuthentication',userSecretKey,jwtVerification,userDashboardController.userDashboardAuthenticationController);

// getting the UserDetails and display at Frontend
router.get('/getUserDetails',userSecretKey,jwtVerification,userDashboardController.getUserPersonalDetailController)

// checking for token
router.get('/tokenCheck',userSecretKey,jwtVerification,userDashboardController.tokenCheckController);

// deleting the User Details From the DataBase
router.delete('/deleteUserDetails',userSecretKey,jwtVerification,userDashboardController.deleteUserInfoController)


module.exports = router;