const express = require('express')
const bodyParser = require('body-parser');
const userAuthenticateRouter = require('./Routes/userAuthenticationRoutes');
const userDashboardRouter = require('./Routes/userDashboardRoutes')
const {port} = require('./private.json');
const App = express()

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
App.use(userDashboardRouter);

App.listen(port,()=>{
    console.log("local Server Started on Port "+port);
})

