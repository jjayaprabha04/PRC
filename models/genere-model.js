const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('../db');

conn.connectToMongoDB();

const genereSchema = new Schema({
    
    GenereID: {
        type: String,        
    },   
    Genere:
    {
        type:String,      
        enum:['Fiction', 'Non-Fiction','Novels', 'Self-HelpEn','Self-HelpTam', 'TamilNovels']  
    },
    
});

const genereCollection = mongoose.model("prcmembers", genereSchema);

module.exports = genereCollection;