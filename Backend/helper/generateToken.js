const jwt = require('jsonwebtoken');
const{secret_key} = require('../private.json');

const generateToken = (payloadData)=>{
    let token =  jwt.sign({payloadData : payloadData},secret_key,{
        expiresIn:'30d'
    });

    return token;
}

module.exports = generateToken;