const {user_secret_key} = require('../private.json');

const passingUserSecretKey = (req,res,next) =>{
    try{
        req.secretKey = user_secret_key;
        next();
    } catch (err) {
        res.json({
            response : false,
            message : "Something went wrong !!"
        })
    }
}

module.exports = passingUserSecretKey;