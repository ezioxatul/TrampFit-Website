const jwt = require('jsonwebtoken');
const {secret_key} = require('../private.json');

const jwtVerification = (req,res,next) => {
    try{
        let token = req.headers["authorization"];
        token = token.split('Bearer ');
        token = token[1];

        const verify = jwt.verify(token,secret_key);
        if(verify){
            req.userDetails = verify;
            next();
        } else {
            res.json({
                message : "Invalid Token!!",
                response : false
            })
        }
    } catch(err) {
        res.json({
            message : "Something went wrong !!",
            response : false
        })
    }
}

module.exports = jwtVerification