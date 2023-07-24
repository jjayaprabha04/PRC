const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongoDB();

const adminloginSchema = new Schema({
    
    adminID: {
        type: String,
        required: [true, "Please enter a valid ID"]
    },   
    Username:
    {
        type:String,
        required: [true, "Please enter a valid Username"]
    },
    active:
    {
        type:Boolean,
    },
    password:
    {
        type:String,
        required: [true, "Please enter a valid password"]
    },
    
});

const adminloginCollection = mongoose.model("prcmembers", adminloginSchema);

module.exports = adminloginCollection;