const express = require("express");
const path = require("path");
const connectToMongo = require("./db");
const Language = require("./Models/Languages.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

connectToMongo();
// app.use(express.static(path.join(__dirname, "public")));

app.get("/Language", async (req, res) => {
  console.log(req.body.topic);
  const permissions =  await Language.find({
    title: req.headers.topic

  });
  res.json(permissions);
});

port = 11000;
app.listen(port, () => {
  console.log("App is Listening at Port ", port);
});
