const express = require('express')
const bodyParser = require('body-parser');
const pug = require('pug');
require('dotenv').config();
const userAuthenticateRouter = require('./Routes/userAuthenticationRoutes');
const partnerAuthenticateRouter = require('./Routes/partnerAuthenticationRoutes');
const userDashboardRouter = require('./Routes/userDashboardRoutes')
const adminLoginRouter = require('./Routes/adminAuthentication');
const adminDashboardRouter = require('./Routes/adminDashboardRoutes');
const membershipRoutes = require('./Routes/membershipRoutes');

const App = express()

// setting template engine
App.set("view engine","pug")
  
// Apply MiddleWares
App.use((req,res,next)=>{
    res.setHeader('Access-control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false}))

// Applying the Router
App.use(userAuthenticateRouter);
App.use(partnerAuthenticateRouter);
App.use(userDashboardRouter);
App.use(adminLoginRouter);
App.use(adminDashboardRouter);
App.use(membershipRoutes);

App.listen(process.env.PORT,()=>{
    console.log("local Server Started on Port "+process.env.PORT);
})

