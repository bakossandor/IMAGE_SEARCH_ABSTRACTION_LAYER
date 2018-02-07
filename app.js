//npm modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const routes = require('express').Router();

// middlewares
app.use(cors());
app.use(bodyParser.json());

//testing the app
app.get("/", (req, res) => {
    res.send("working");
});

app.listen(3000, () => {
    console.log("server is listening");
});