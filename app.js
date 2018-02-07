//npm modules
const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const MongoClient = require("mongodb").MongoClient;
const app = express();
// const routes = require('express').Router();

// middlewares
// app.use(cors());
// app.use(bodyParser.json());

//testing the app
const apiBaseRoot = require("./api/routes/api_landing_page");
const apiImageSearch = require("./api/routes/api_image_search");
const apiHistory = require("./api/routes/api_history");

app.use("/", apiBaseRoot);
app.use("/api/imagesearch", apiImageSearch);
app.use("/api/history", apiImageSearch);

app.listen(3000, () => {
    console.log("server is listening");
});