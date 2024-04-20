const { response } = require("express");
const membershipDetailsModel = require('../Models/membershipModel.config');
const { where } = require("sequelize");
const sequelize = require("../databaseConnection");

// admin Token Check...

const adminTokenCheckController = (req, res) => {
    try {
        res.json({
            response: true,
            message: "Valid Token"
        })
    } catch (err) {
        res.json({
            response: false,
            message: "Something went wrong !!"
        })
    }
}


// add Membership API

const addMembershipController = async (req, res) => {
    try {

        let { membershipName, amount, validity, description } = req.body;

        await membershipDetailsModel.create({
            membershipName,
            amount,
            validity,
            description,
            status: "Active"
        })

        res.json({
            message: "Added Membership Successfully",
            response: true
        })

    } catch (err) {

        console.log(err);
        res.json({
            message: "Something went wrong !!",
            response: false
        })

    }
}


// Fetch all membership plan

const getAllMembershipDetailsController = async (req, res) => {
    try {

        let membershipDetails = await membershipDetailsModel.findAll({
            attributes: ['membershipName', 'amount', 'validity', 'description', 'status', 'id'],
            order : sequelize.col('id')
        });

        if (membershipDetails) {

            res.json({
                message: "Membership details send",
                response: true,
                data: membershipDetails
            })

        } else {

            res.json({
                message: "Data does get Properly",
                response: false
            })

        }
    } catch (err) {

        console.log(err)

        res.json({
            message: "Something went wrong !!",
            response: false
        })

    }
}


// update the membership plan

const updateMembershipController = async (req, res) => {
    try {
        let id = req.query.id;
        let { membershipName, amount, validity, description } = req.body;


        await membershipDetailsModel.update({
            membershipName,
            amount,
            validity,
            description
        }, {
            where: {
                id: id
            }
        })

        res.json({
            message: "Plan Updated Successfully",
            response: true
        })

    } catch (err) {
        console.log(err);

        res.json({
            message: "Something went wrong !!",
            response: false
        })
    }
}


// delete the membership (making the plan status to Inactive)

const deleteMembershipController = async (req, res) => {

    try {

        let id = req.query.id;

        let getStatus = await membershipDetailsModel.findOne({
            attributes: ['status'],
            where: {
                id: id
            }
        });

        if (getStatus.status === 'Active') {

            await membershipDetailsModel.update(
                { status: 'Deactivated' },
                {
                    where: {
                        id: id
                    }
                }
            )

            res.json({
                message : "The plan is No more Active",
                response : true
            }) 

        } else {

            res.json({
                message : "The Plan is already Deactivated",
                response : false
            })

        }

    } catch (err) {
        console.log(err)

        res.json({
            message: "Something went wrong !!",
            response: true
        })

    }

}

module.exports = {
    adminTokenCheckController,
    addMembershipController,
    getAllMembershipDetailsController,
    updateMembershipController,
    deleteMembershipController
}