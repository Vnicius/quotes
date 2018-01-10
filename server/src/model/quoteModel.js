const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    "text" : String,
    "author" : String,
    "source": String,
    "likes" : int
*/

const quoteModel = new Schema({
    text : { type: String, required: true },
    author : { type: String, required: true },
    source : { type: String, required: true },
    likes : { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
});

module.exports = mongoose.model('Quote', quoteModel);