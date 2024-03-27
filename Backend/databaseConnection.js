const Sequelize = require('sequelize');
const private = require('./private.json');

const sequelize = new Sequelize('postgres', private.username,private.password, {
    host: private.host,
    dialect: 'postgres'
  });

   sequelize.authenticate().then((res)=>{
    console.log('Connection has been established successfully.');  
   }).catch((err)=>{
    console.log(err)
   })

   module.exports = sequelize
 
