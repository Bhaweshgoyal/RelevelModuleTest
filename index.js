const express = require("express");
// const { bodyParser } = require("json-server");
const {sequelize} = require("./models/index");
const bodyParser = require("body-parser");
const { auth } = require("./routes/authorization");
const { Sequelize } = require("sequelize");
const app = express()
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(auth)
app.listen(port , async()=>{
    await sequelize.afterSync()
    console.log("App is listning on ",port)
})