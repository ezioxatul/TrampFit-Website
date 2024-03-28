const express = require('express');

const userAuthenticationController = require('../Controller/userAuthenticationController');
const jwtVerification = require('../MiddleWares/jwtVerification');


const router = express.Router();

// root authentication for checking that the token is valid or not
router.post('/',jwtVerification,userAuthenticationController.rootAuthenticationController);

//checking if the user is already exists or not
router.get('/userExists',userAuthenticationController.userExistsController); 

// inserting the data taking from the frontend
router.post('/userLogin',userAuthenticationController.userLoginController);

module.exports = router;