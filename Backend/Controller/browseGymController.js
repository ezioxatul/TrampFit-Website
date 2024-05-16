const partnerLoginModel = require('../Models/partnerLoginModel');
const gymDetailsModel = require('../Models/gymDetailsModel');
const sequelize = require('../databaseConnection');
const {Op, where} = require('sequelize');


// get all browse Data
const getAllGymDetailsController = async(req,res) => {
    try {

        let getBrowseGymData = await gymDetailsModel.findAll({
            include : [
                {
                    model : partnerLoginModel,
                    attributes : [],
                    as : 'partnerInfo'
                }
            ],
            attributes : ['id','gymName','gymLocation','gymCity','gymLogo','gymDescription'],
            where : {
                '$partnerInfo.status$' : "Approved"
            },
            order : sequelize.col('id')
        })

        res.json({
            message : "Browse Gym Data",
            response : true,
            data : getBrowseGymData
        });

    } catch(err) {
        console.log(err);

        res.json({
            message : "Something went Wrong !!",
            response : false
        })

    }
}

// get individual browse gym Data
const getGymViewDetailController = async(req,res) => {
    try {

        let {gymId} = req.query;
        
        let getGymData =  await gymDetailsModel.findOne({
            include : [
                {
                    model : partnerLoginModel,
                    attributes : [],
                    as : 'partnerInfo'
                }
            ],
            attributes : ['gymName','gymLocation','gymCity','openingTime','closingTime','gymLogo','interiorPhoto','gymDescription','gymQuestion'],
            where : {
                [Op.and] : [
                    {
                        '$partnerInfo.status$' : "Approved"
                    },
                    {
                        id : gymId
                    }
                ]   
            }
        })

        res.json({
            message : "Gym detail",
            response : true,
            data : getGymData
        });

    } catch(err) {
        console.log(err);

        res.json({
            message : "Something went wrong !!",
            response : false
        });
    }
}

// apply search on browse gym
const searchGymController = async(req,res) =>{
    try {

        let {searchText} = req.query;

        let getSearchData = await gymDetailsModel.findAll({
            include : [
                {
                    model : partnerLoginModel,
                    attributes : [],
                    as : 'partnerInfo'
                }
            ],
            attributes : ['id','gymName','gymLocation','gymCity','gymLogo','gymDescription'],
            where : {
                [Op.and] : [
                    {
                        '$partnerInfo.status$' : "Approved"
                    } ,
                    {
                        [Op.or] : [
                            {
                                gymName : {
                                    [Op.iLike] : `%${searchText}%`
                                }
                            } ,
                            {
                                gymCity : {
                                    [Op.iLike] : `%${searchText}%`
                                }
                            },
                            {
                                gymLocation : {
                                    [Op.iLike] : `%${searchText}%`
                                }   
                            }
                        ]
                    }
                ]
            }
        })


        res.json({
            response : true,
            message : "Search Data",
            data : getSearchData
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
    getAllGymDetailsController,
    getGymViewDetailController,
    searchGymController
}