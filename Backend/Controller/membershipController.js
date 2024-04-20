const { where } = require('sequelize');
const membershipDetailsModel = require('../Models/membershipModel.config');
const sequelize = require('../databaseConnection');

const getActiveMembershipController = async(req,res) =>{
    try {

        let membershipDetails = await membershipDetailsModel.findAll({
            attributes : ['amount','validity','description','membershipName'],
            where : {
                status : "Active"
            } ,
            order : sequelize.col('id')
        })

        if(membershipDetails) {

            res.json({
                message : "Active Membership",
                response : true,
                data : membershipDetails
            })

        } else {

            res.json({
                message : "Data has not been fetched properly",
                response : false
            })
            
        }

    } catch(err) {
        console.log(err);

        res.json({
            message : "Something went wrong !!",
            response : false
        });
    }
}


module.exports = {
    getActiveMembershipController
}