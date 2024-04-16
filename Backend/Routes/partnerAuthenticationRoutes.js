const express = require ('express');

const partnerAuthenticationController = require('../Controller/partnerAuthenticationController');
const jwtVerification = require('../MiddleWares/jwtVerification');
const partnerSecretKey = require('../MiddleWares/partnerSecretKey');
const partnerEmailExists = require('../Controller/partnerAuthenticationController')

const router = express.Router();

// root authentication for checking that the token is valid or not
router.post('/',partnerSecretKey,jwtVerification, partnerAuthenticationController.tokenAuthenticationController);


// email Verification 
// router.get('/emailVerification',userEmailExists,userAuthenticationController.emailVerificationController);

//checking if the user is already exists or not
router.get('/partnerExists',partnerAuthenticationController.partnerExistsController); 

// inserting the data taking from the frontend
router.post('/partner/partnerLogin', partnerAuthenticationController.partnerLoginController);


module.exports = router;