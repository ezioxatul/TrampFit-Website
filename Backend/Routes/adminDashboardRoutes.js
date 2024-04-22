const express = require('express');
const adminSecretKey = require('../MiddleWares/adminSecretKey');
const jwtVerification = require('../MiddleWares/jwtVerification');
const adminDashboardController = require('../Controller/adminDashboardController');
const membershipLimitCheck = require('../MiddleWares/membershipLimitCheck');
const deactivateMembershipLimitCheck = require('../MiddleWares/deactivateMembershipLimitCheck');
const router = express.Router();


router.get('/adminDashboard',adminSecretKey,jwtVerification,adminDashboardController.adminTokenCheckController);

router.get('/adminDashboard/manageMembership',adminSecretKey,jwtVerification,adminDashboardController.adminTokenCheckController);


// manage Membership

// 1. add Membership
router.post('/adminDashboard/manageMembership/addMembership',adminSecretKey,jwtVerification,membershipLimitCheck,adminDashboardController.addMembershipController);


// 2. get Membership Details
router.get('/adminDashboard/manageMembership/getMembershipDetails',adminDashboardController.getAllMembershipDetailsController);

// 3. update membership Details
router.put('/adminDashboard/manageMembership/updateMembership',adminSecretKey,jwtVerification,adminDashboardController.updateMembershipController)

// 4. Delete membership Details (making status active to INactive)
router.put('/adminDashboard/manageMembership/deleteMembership',adminSecretKey,jwtVerification,deactivateMembershipLimitCheck,adminDashboardController.deleteMembershipController);


module.exports = router;