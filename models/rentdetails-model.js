const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongoDB();

const rentdetailsSchema = new Schema({
    DueDate: {
        type: Date,
        default: Date.now()
    },
    Feedue: {
        type:Number,       
    },
    Feepaid: {
        type: String,
        enum: ['yes', 'no']
    },
    Fineamount: {
        type: Number,        
    },
    Renewal: {
        type:Boolean,        
    },    
    RentedTill: {
        type: Date,
        default: Date.now()
    },    
    Rentedfrom: {
        type: Date,
        default: Date.now()
    },
    TotalFee:
    {
        type:Number,
    },
    bookID:
    {
        type:String,
    },
    latereturn:
    {
        type:Boolean,
    },
    memberID:
    {
        type:String,
    },
    returncondition:
    {
        type:String,
        enum: ['Good', 'Damaged', 'Lost']
    },
    returned:
    {
        type:Boolean,
    }
});

const rentdetailsCollection = mongoose.model("prcmembers", rentdetailsSchema);

module.exports = rentdetailsCollection;