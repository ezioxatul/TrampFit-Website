const express = require('express')
const bodyParser = require('body-parser');
const authenticateRouter = require('./Routes/userAuthenticationRoutes');
const port = 80
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
App.use(authenticateRouter);

App.listen(port,()=>{
    console.log("local Server Started on Port "+port);
})

