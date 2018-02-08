const express = require("express");
const router = express.Router();

router.get("/:search", (req, res, next) => {
    res.status(200).json({
        requestUrlParameter: req.params.search,
        requestQuery: req.query
    });
});

module.exports = router;