const express = require('express');
const adminSecretKey = require('../MiddleWares/adminSecretKey');
const jwtVerification = require('../MiddleWares/jwtVerification');
const adminDashboardController = require('../Controller/adminDashboardController');
const router = express.Router();


router.get('/adminDashboard',adminSecretKey,jwtVerification,adminDashboardController.adminTokenCheckController);



module.exports = router;