const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyparser = require("body-parser");
const serverless = require("serverless-http");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 2006;
mongoose
  .connect("mongodb+srv://SMOKE_:y6osGJH0KyVRkLpU@smoke.m3ou369.mongodb.net/")
  .then(() => {
    console.log("Db conneted succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/home", (req, res) => {
  res.status(200).send({ msg: "Working App" });
});
app.use("/api/v1/", require("./route/user"));
app.use("/api/v1/request", require("./route/add_request"));
app.use("/api/v1/question", require("./route/question"))
app.use("/api/v1/questionAnswer", require("./route/questionAnswer"))
app.use("/api/v1/static", require("./route/staticContent"))
app.use("/api/v1/faq", require("./route/faq.route"))
app.use("/api/v1/help", require("./route/helpandsupport.route"))

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  handler: serverless(app),
};







