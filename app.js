//npm modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
// const morgan = require("morgan");

// middlewares
app.use(cors());

app.set('views', './api/views');
app.set('view engine', 'pug');

//testing the app
const apiBaseRoot = require("./api/routes/api_landing_page");
const apiImageSearch = require("./api/routes/api_image_search");
const apiHistory = require("./api/routes/api_history");

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        return error;
    }
    console.log("connecting to mlab database");
});

// app.use(morgan("dev"));

app.use("/", apiBaseRoot);
app.use("/api/imagesearch", apiImageSearch);
app.use("/api/history", apiHistory);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});