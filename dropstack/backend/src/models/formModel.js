const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const formSchema = new Schema({
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
    },
    aadharNumber: {
        type: String,
    },
    panNumber: {
        type: String,
    },
    urn: {
        type: String,
    },
    folderName: {
        type: String,
    },
    delete: {
        type: Boolean,
        default: false,
    }
});
module.exports = mongoose.model('Form', formSchema);