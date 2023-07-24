const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongoDB();

const prcMemberSchema = new Schema({
    memberID: {
        type: String,
        required: [true, "Please enter a valid MemberID"]
    },
    membername: {
        type: String,
        required: [true, "Please enter the Name"]
    },
    email: {
        type: String,
        required: [true, "Please enter a valid email address"]
    },
    mobileno: {
        type: String,
        required: [true, "Please enter a valid mobile number"]
    },
    address: {
        type: String,        
    },    
    RegistrationFee: {
        type: Number,
    },    
    RegisteredDate: {
        type: Date,
        default: Date.now()
    },
    active:
    {
        type:Boolean,
    }
});

const prcMemberCollection = mongoose.model("prcmembers", prcMemberSchema);

module.exports = prcMemberCollection;