const mongoose = require("mongoose");

const searchSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    term: String,
    when: Date
});

module.exports = mongoose.model("Search", searchSchema);