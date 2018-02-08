const express = require("express");
const router = express.Router();
const request = require("request");
const bodyParser = require("body-parser");
const pick = require('lodash.pick');

router.get("/:search", (req, res, next) => {
    //get url request related with the image wish
    var searchedImage = req.params.search;
    var padding = req.query.offset;
    //the pixabay api request url settings
    var resultMax = 10;
    if (padding && padding <= 100) {
        resultMax = padding;
    } else if (padding && padding > 100) {
        resultMax = 100;
    }
    var url = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=dogs&per_page=10`
    
    request(url, (error, response, body) => {
        var responseBody = JSON.parse(body);
        var hits = responseBody.hits;
        var theApiResult = hits.map((element) => {
            return pick(element, "tags", "pageURL", "previewURL", "webformatURL");
        });
        res.json(theApiResult);
    })
});

module.exports = router;