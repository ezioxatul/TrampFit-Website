const signupModel = require('../Models/signUpModel');
const generateToken = require('../helper/generateToken');
const generateUserAvtar = require('../helper/generateUserAvtar');

// inserting user Data Inside Database
const userLoginController = async (req, res) => {
    try {

        let fullName = req.body.fullName
        let mobileNumber = req.body.mobileNumber
        let email = req.body.email
        let gender = req.body.gender
        let city = req.body.city

        console.log(req.body)

        let data = await signupModel.create({
            fullName: fullName,
            mobileNumber: mobileNumber,
            email: email,
            gender: gender,
            city: city
        })

        let token = generateToken({
            mobileNumber: data.mobileNumber,
            fullName: data.fullName
        });

        fullName = generateUserAvtar(fullName);

        res.json({
            message: "Signup Successfully",
            avtar : fullName,
            token: token,
            response: true
        })

    } catch (err) {

        res.json({
            message: "SomeThing Went Wrong !!",
            response: false
        })

    }
}

// root level authentication

const rootAuthenticationController = (req, res) => {
    try {

        let fullName = req.userDetails.payloadData.fullName;
        fullName = generateUserAvtar(fullName);

        res.json({

            message: "Sending Name",
            avtar: fullName,
            response: true

        })

    } catch (err) {

        res.json({
            message: "Something went Wrong !!",
            response: false
        })

    }
}


// Checking  that the user is exists or not

const userExistsController = async (req, res) => {
    try {
        let { mobileNumber } = req.query;

        let userInfo = await signupModel.findOne({
            attributes: ['fullName'], where: {
                mobileNumber: mobileNumber
            }
        })

        userInfo = JSON.parse(JSON.stringify(userInfo));
        
        if(userInfo != undefined){

            let fullName = userInfo.fullName

            let token = generateToken({
                fullName : fullName,
                mobileNumber : mobileNumber
            })

            fullName = generateUserAvtar(fullName);

            res.json({
                message : "User already exists",
                response : true,
                token : token,
                avtar : fullName
            })

        } else {
            res.json({
                message : "User does not exists",
                response : false
            })
        }

    } catch (err) {
        res.json({
            message : "Something went wrong!!",
            response : false
        })
    }
}


module.exports = {
    userLoginController: userLoginController,
    rootAuthenticationController: rootAuthenticationController,
    userExistsController: userExistsController
}