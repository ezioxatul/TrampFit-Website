const {admin_secret_key} = require('../private.json');

const passingAdminSecretKey = (req,res,next) => {
    try {

        req.secretKey = admin_secret_key;
        next();

    } catch(err) {
        res.json({
            response : false,
            message : "Something went wrong !!"
        })
    }
}

module.exports = passingAdminSecretKey;