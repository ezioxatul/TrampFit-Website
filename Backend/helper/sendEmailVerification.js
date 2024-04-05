const nodeMailer = require('nodemailer');
const {email_app_name , email_app_password} = require('../private.json');

const transporter = nodeMailer.createTransport({
    host : "smtp.gmail.com",
    port: 465,
    secure: true,
    auth : {
        user: email_app_name,
        pass: email_app_password
    }
})

module.exports = transporter;