const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres','postgres.rporqcohnfrhyexerqaj' ,'Trampfit@2024', {
    host: 'aws-0-ap-south-1.pooler.supabase.com',
    dialect: 'postgres'
  });

   sequelize.authenticate().then((res)=>{
    console.log('Connection has been established successfully.');  
   }).catch((err)=>{
    console.log(err)
   })

   module.exports = sequelize
 
