//Assigining frameworks to variables importing the packages to variables to be used when calling functions 
const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require ("body-parser");
const cors = require ("cors");
const dotenv = require ("dotenv");
const app = express();
require("dotenv").config();
//Assiging a port to run the applications by default we are asking for 8070 port if its not there use any available port (||) logical or is used to dipict this condition.
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParse.json()); //json has key value pairs

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
//connecting to db once
connection.once("open",() =>{
    console.log("Mongodb connection success!")
});

//load the app in the port
app.listen(PORT,()=>{
    console.log(`server is up and running on port number : ${PORT}`)
});