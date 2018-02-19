const express = require("express");
const router = express.Router();

const Search = require("../models/searched_images");

router.get("/", (req, res, next) => {
    Search.find({}).sort('-when')
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
    // res.status(200).json({
    //     message: "handling get requests at the history"
    // });
});

module.exports = router;