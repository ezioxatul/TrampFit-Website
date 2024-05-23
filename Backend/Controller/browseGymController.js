const partnerLoginModel = require('../Models/partnerLoginModel');
const gymDetailsModel = require('../Models/gymDetailsModel');
const userSignupModel = require('../Models/signUpModel');
const sessionBookingModel = require('../Models/sessionBookingModel')
const sessionModel = require('../Models/sessionModel');
const sequelize = require('../databaseConnection');
const transporter = require('../helper/sendEmailVerification');
const pug = require('pug');
const { Op, where } = require('sequelize');


// get all browse Data
const getAllGymDetailsController = async (req, res) => {
    try {

        let getBrowseGymData = await gymDetailsModel.findAll({
            include: [
                {
                    model: partnerLoginModel,
                    attributes: [],
                    as: 'partnerInfo'
                }
            ],
            attributes: ['id', 'gymName', 'gymLocation', 'gymCity', 'gymLogo', 'gymDescription'],
            where: {
                '$partnerInfo.status$': "Approved"
            },
            order: sequelize.col('id')
        })

        res.json({
            message: "Browse Gym Data",
            response: true,
            data: getBrowseGymData
        });

    } catch (err) {
        console.log(err);

        res.json({
            message: "Something went Wrong !!",
            response: false
        })

    }
}

// get individual browse gym Data
const getGymViewDetailController = async (req, res) => {
    try {

        let { gymId } = req.query;

        let getGymData = await gymDetailsModel.findOne({
            include: [
                {
                    model: partnerLoginModel,
                    attributes: [],
                    as: 'partnerInfo'
                }
            ],
            attributes: ['gymName', 'gymLocation', 'gymCity', 'openingTime', 'closingTime', 'gymLogo', 'interiorPhoto', 'gymDescription', 'gymQuestion', 'amenities'],
            where: {
                [Op.and]: [
                    {
                        '$partnerInfo.status$': "Approved"
                    },
                    {
                        id: gymId
                    }
                ]
            }
        })

        res.json({
            message: "Gym detail",
            response: true,
            data: getGymData
        });

    } catch (err) {
        console.log(err);

        res.json({
            message: "Something went wrong !!",
            response: false
        });
    }
}

// apply search on browse gym
const searchGymController = async (req, res) => {
    try {

        let { searchText } = req.query;

        let getSearchData = await gymDetailsModel.findAll({
            include: [
                {
                    model: partnerLoginModel,
                    attributes: [],
                    as: 'partnerInfo'
                }
            ],
            attributes: ['id', 'gymName', 'gymLocation', 'gymCity', 'gymLogo', 'gymDescription'],
            where: {
                [Op.and]: [
                    {
                        '$partnerInfo.status$': "Approved"
                    },
                    {
                        [Op.or]: [
                            {
                                gymName: {
                                    [Op.iLike]: `%${searchText}%`
                                }
                            },
                            {
                                gymCity: {
                                    [Op.iLike]: `%${searchText}%`
                                }
                            },
                            {
                                gymLocation: {
                                    [Op.iLike]: `%${searchText}%`
                                }
                            }
                        ]
                    }
                ]
            }
        })


        res.json({
            response: true,
            message: "Search Data",
            data: getSearchData
        })


    } catch (err) {
        console.log(err);

        res.json({
            message: "Something went wrong !!",
            response: false
        })
    }
}

// get session Slots

const getSessionSlotsTimingController = async (req, res) => {
    try {

        let { gymId, date } = req.query;

        let currentTimeZone = new Date();
        let currentTime;
        let currentDate = currentTimeZone.getDate().toString();
        if(currentTimeZone.getHours() < 10) {
            currentTime  = `0${currentTimeZone.getHours()}:${currentTimeZone.getMinutes()}`;
        } else {
            currentTime = `${currentTimeZone.getHours()}:${currentTimeZone.getMinutes()}`;

        }
        
        let getDate = date.split('/');

        if (currentDate === getDate[0]) {
            console.log(currentTime)

            let getSlotData = await sessionModel.findAll({
                attributes: ['id', 'sessionTiming', 'date'],
                where: {
                    [Op.and]: [
                        {
                            date: date
                        },
                        {
                            gymId: gymId
                        }, 
                        {
                            sessionTiming : {
                                [Op.gt] : currentTime
                            }
                        }
                    ]
                },
                order : sequelize.col('sessionTiming')
            })

            res.json({
                message: "Slot Timing",
                response: true,
                data: getSlotData
            })

        } else {

            let getSlotData = await sessionModel.findAll({
                attributes: ['id', 'sessionTiming', 'date'],
                where: {
                    [Op.and]: [
                        {
                            date: date
                        },
                        {
                            gymId: gymId
                        }
                    ]
                },
                order : sequelize.col('sessionTiming')
            })

            res.json({
                message: "Slot Timing",
                response: true,
                data: getSlotData
            })

        }
    } catch (err) {
        console.log(err);

        res.json({
            message: "Something went wrong !!",
            response: false
        });
    }
}

const bookedSlotController = async (req,res) => {
    try {

        let {sessionId,date,time} = req.body;
        let userId = req.information.userInfo.id;
        let userEmail = req.information.userInfo.email;
        let userSessionCount = req.information.userInfo.totalSession;
        let sessionCapacity = req.information.partnerInfo.sessionCount;
        let gymName = req.information.partnerInfo.gymDetails.gymName;
        let userName = req.information.userInfo.fullName;

        // let partnerEmail = req.information.partnerInfo.gymDetails.partnerInfo.email;

        await sessionBookingModel.create({
            bookingDate : date,
            userId : userId,
            sessionId : sessionId
        })

        await userSignupModel.update({totalSession : userSessionCount-1},{
            where : {
                id : userId
            }
        })

        await sessionModel.update({sessionCount : sessionCapacity-1},{
            where : {
                id : sessionId
            }
        })

        // user session booked notification
        let htmlContentForUserSessionBooking = pug.renderFile('emailTemplate/userBookingConfirmation.pug',{sessionId : sessionId,date : date,gymName : gymName,sessionTiming : time,userName : userName});

        const info = await transporter.sendMail({
            from: '"Trampfit" <trampfit180@gmail.com>',
            to: userEmail,
            subject: "Booking Confirmation",
            html: htmlContentForUserSessionBooking
        });


        res.json({
            message : "Session Booked Successfully",
            response : true
        })
        
    } catch(err) {
        console.log(err);
        res.json({
            message : "Something went wrong!!",
            response : false
        })
    }
}

module.exports = {
    getAllGymDetailsController,
    getGymViewDetailController,
    searchGymController,
    getSessionSlotsTimingController,
    bookedSlotController
}