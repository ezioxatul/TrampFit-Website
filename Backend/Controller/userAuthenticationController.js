const signupModel = require('../Models/signUpModel');

// inserting user Data Inside Database
const userLoginController = async(req,res) => {
    try{
        
        let fullName = req.body.fullName
        let mobileNumber = req.body.mobileNumber
        let email = req.body.email
        let gender = req.body.gender
        let city = req.body.city

        let maxId = await signupModel.max('id');
        maxId = maxId == null ? 1 : maxId + 1
        
        console.log(req.body)

        let data = await signupModel.create({
            fullName : fullName,
            mobileNumber : mobileNumber,
            email : email,
            gender : gender,
            city : city,
            uId : maxId
        })

        res.json({
            message : "Data Has Been Inserted Successfully",
            response : true
        })

    } catch(err){

        res.json({
            message:"SomeThing Went Wrong !!",
            response:false
        })

    }
}

module.exports = {
    userLoginController:userLoginController
}