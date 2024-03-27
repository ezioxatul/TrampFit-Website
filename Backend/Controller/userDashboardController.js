const signupModel = require('../Models/signUpModel');

const userDashboardAuthenticationController = (req, res) => {
    try {
        res.json({
            message: "User Authenticated Successfully",
            response: true
        })
    } catch (err) {
        res.json({  
            message: "Something went Wrong!!",
            response: false
        })
    }
}

const getUserPersonalDetailController = async (req, res) => {
    try {
        let mobileNumber = parseInt(req.userDetails.payloadData.mobileNumber);
        let personalInfo = await signupModel.findOne({
            attributes: ['fullName', 'city', 'email','mobileNumber'], where: {
                mobileNumber : mobileNumber
            }
        })

        personalInfo = JSON.parse(JSON.stringify(personalInfo))
        
        res.json({
            message : "Sending User personal Info",
            response : true,
            personalInfo : personalInfo
        })

    } catch (err) {
        res.json({
            message: "Something went wrong",
            response: false
        })
    }
}

const deleteUserInfoController = async(req,res) =>{
    try {
        let mobileNumber = parseInt(req.userDetails.payloadData.mobileNumber);

        await signupModel.destroy({
            where : {
                mobileNumber : mobileNumber
            }
        })

        res.json({
            message : "Data has been Deleted",
            response : true
        })

    } catch(err) {
        res.json({
            message : "Something went wrong",
            response : false
        })
    }
}

const tokenCheckController = (req,res) =>{
    try {
        res.json({
            message : "Valid User",
            response : true
        })
    } catch(err){
        res.json({
            message : "Something went wrong",
            response : false
        })
    }
}

module.exports = {
    userDashboardAuthenticationController: userDashboardAuthenticationController,
    getUserPersonalDetailController: getUserPersonalDetailController,
    deleteUserInfoController : deleteUserInfoController,
    tokenCheckController : tokenCheckController
}