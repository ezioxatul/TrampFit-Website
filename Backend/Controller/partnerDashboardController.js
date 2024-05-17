const { where } = require('sequelize');
const gymDetailsModel = require('../Models/gymDetailsModel');
const partnerLoginModel = require('../Models/partnerLoginModel')
// get partner for partner Dashboard
const partnerInfoController = async (req,res) => {
    try {

        let mobileNumber = req.userDetails.payloadData.mobileNumber;
        
        let getPartnerInfo = await gymDetailsModel.findOne({
            include : [
                {
                    model : partnerLoginModel,
                    attributes : ['fullName','id','mobileNumber','email'],
                    as : 'partnerInfo'
                }
            ],
            attributes : ['gymLogo','panNumber'],
            where : {
                '$partnerInfo.mobileNumber$' : mobileNumber
            }
        })

        res.json({
            message : "Partner Info",
            response : true,
            data : getPartnerInfo
        })
        
    } catch(err) {
        console.log(err);

        res.json({
            message : "Something went wrong !!",
            response : false
        })
    }
}

module.exports = {
    partnerInfoController
}