const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongoDB();

const authordetailsSchema = new Schema({
    
    authorID: {
        type: String,        
    },   
    authorname:
    {
        type:String,        
    },
    
});

const authordetailsCollection = mongoose.model("prcmembers", authordetailsSchema);

module.exports = authordetailsCollection;