const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: String,
    // age:  Number
});


const fileModel = mongoose.model("File", fileSchema);


module.exports = fileModel;