const express = require("express");
const path = require("path");
const connectToMongo= require("./db");
const Language = require("./Models/Languages.js");

const app = express();


connectToMongo();
app.use(express.static(path.join(__dirname, "public")));



app.listen(10000, ()=>{
  console.log("App is Listening at Port ", 10000);
});

