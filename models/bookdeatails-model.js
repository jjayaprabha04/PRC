const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongoDB();

const bookdetailsSchema = new Schema({
   
    GenereID:
    {
        type:String,
    },
    ISDNno: {
        type: String,
    },
    authorID: {
        type: String,        
    },
    bookID: {
        type:String,        
    },    
    bookname: {
        type: String,
    },      
    condition:
    {
        type:String,
        enum: ['new', 'old', 'damaged']
    },
    purchasedDate: {
        type: Date,
        default: Date.now()
    },
    purchasedrate:
    {
        type:Number,
    },
    onRent:
    {
        type:Boolean,
    }
});

const bookdetailsCollection = mongoose.model("prcmembers", bookdetailsSchema);

module.exports = bookdetailsCollection;