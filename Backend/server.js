//Assigining frameworks to variables importing the packages to variables to be used when calling functions 
const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require ("body-parser");
const cors = require ("cors");
const dotenv = require ("dotenv");
const app = express();

//Assiging a port to run the applications by default we are asking for 8070 port if its not there use any available port (||) logical or is used to dipict this condition.
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParse.json()); //json has key value pairs
