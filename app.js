const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//import Routes
const postsRoute = require("./routes/posts");

//middleware
app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("we r in the home page");
});

//Connect to Data Base
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to my data base");
  }
);

//start listening to a server
app.listen(3000);
