const partnerLoginModel = require ('../Models/partnerLoginModel');
require('dotenv').config();
const generateToken = require('../helper/generateToken');
const pug = require('pug');

const partnerLoginController = async (req, res) => {
    try {

        let fullName = req.body.fullName
        let mobileNumber = req.body.mobileNumber
        let email = req.body.email

        console.log(req.body)

        let data = await signupModel.create({
            fullName: fullName,
            mobileNumber: mobileNumber,
            email: email,
        })

        let token = generateToken({
            mobileNumber: data.mobileNumber,
            fullName: data.fullName
        }, process.env.partner_secret_key);


        res.json({
            message: "Signup Successfully",
            token: token,
            response: true
        })

    } catch (err) {

        res.json({
            message: "Something went Wrong !!",
            response: false
        })

    }
}


const tokenAuthenticationController = (req, res) => {
    try {

        res.json({

            response: true

        })

    } catch (err) {
        console.log(err)
        res.json({
            message: "Something went Wrong !!",
            response: false
        })

    }
}


// const emailVerificationController = async (req, res) => {
//     try {
//         const receiverEmail = req.query.email;
//         let htmlContent = pug.renderFile('emailTemplate/partnerEmailVerification.pug');

//         const info = await 
//     }
// }



// Checking if the partner exists or not

const partnerExistsController = async (req, res) => {
    try {
        let { mobileNumber } = req.query;

        let partnerInfo = await partnerLoginModel.findOne({
            attributes: ['fullName'], where: {
                mobileNumber: mobileNumber
            }
        })

        partnerInfo = JSON.parse(JSON.stringify(partnerInfo));

        if (partnerInfo != undefined) {

            let fullName = partnerInfo.fullName

            let token = generateToken({
                fullName: fullName,
                mobileNumber: mobileNumber
            }, process.env.partner_secret_key)

            res.json({
                message: "Partner already exists",
                response: true,
                token: token,
            })

        } else {
            res.json({
                message: "Partner does not exists",
                response: false
            })
        }

    } catch (err) {
        res.json({
            message: "Something went wrong!!",
            response: false
        })
    }
}


module.exports = {
    partnerLoginController: partnerLoginController,
    tokenAuthenticationController: tokenAuthenticationController,
    partnerExistsController: partnerExistsController
}