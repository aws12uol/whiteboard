const mongoose = require("mongoose");

const wbSchema = mongoose.Schema({
    updatedAt: { type: Date },
    fileName: { type: String },
    data: { type: Object },
});

module.exports = mongoose.model("WhiteBoardSchema", wbSchema);
