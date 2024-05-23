const sequelize = require('./databaseConnection');
const partnerLoginModel = require('./Models/partnerLoginModel');
const gymDetailsModel = require('./Models/gymDetailsModel');
const userSignupModel = require('./Models/signUpModel')
const paymentDetailModel = require('./Models/paymentDetailModel');
const sessionModel = require('./Models/sessionModel');
const sessionBookingModel = require('./Models/sessionBookingModel')

const sequelizeAssociations =  () => {
    paymentDetailModel.hasMany(userSignupModel, { foreignKey: "MembershipId", as: "userInfo" });
    userSignupModel.belongsTo(paymentDetailModel, { foreignKey: "MembershipId", as: "userInfo" });

    userSignupModel.hasMany(paymentDetailModel, { foreignKey: "userId", as: "paymentInfo",onDelete : "CASCADE" });
    paymentDetailModel.belongsTo(userSignupModel, { foreignKey: "userId", as: "paymentInfo" });

    partnerLoginModel.hasOne(gymDetailsModel, { foreignKey: "partnerId", as: "partnerInfo" });
    gymDetailsModel.belongsTo(partnerLoginModel, { foreignKey: "partnerId", as: "partnerInfo" });

    gymDetailsModel.hasMany(sessionModel,{foreignKey : "gymId", as : "gymDetails"});
    sessionModel.belongsTo(gymDetailsModel,{foreignKey : "gymId", as : "gymDetails"});

    sessionModel.hasMany(sessionBookingModel,{foreignKey : "sessionId" , as : "sessionInfo"});
    sessionBookingModel.belongsTo(sessionModel,{foreignKey : "sessionId" , as : "sessionInfo"});

    userSignupModel.hasMany(sessionBookingModel,{foreignKey : "userId",as : "userDetails",onDelete : "CASCADE" });
    sessionBookingModel.belongsTo(userSignupModel,{foreignKey : "userId",as : "userDetails"});


}

sequelize.sync({ alter: false }).then((res) => {
    console.log("association created successfully");
}).catch((err) => {
    console.log(err);
    console.log("Some error has been occur while creating relation");
})


module.exports = sequelizeAssociations;