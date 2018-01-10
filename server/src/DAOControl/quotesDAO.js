const mongoose = require('mongoose');
const Types = mongoose.Types;
const Quote = require('../model/quoteModel');

module.exports = class QuoteDAO {
    
    insert(quoteData, res) {
        var quote = new Quote(quoteData);

        quote.save((err, quote) => {
            if(err) {
                res.send({error : true, message : "Error to save the quote!"});

            } else {
                console.log(quote);
                res.send({error : false, data: { id: quote._id }});
            }
        })
    }

    updateLike(quoteId, res) {
        Quote.update({"_id" : Types.ObjectId(quoteId)}, {"$inc" : {"likes" : 1}}, (err) => {
            if (err) {
                res.send({error : true, message : "Error to update de quote!"});
            } else {
                res.send({error : false});
            }
        });
    }

    randomQuotes(quant, res) {
        Quote.find({}, (err, quotes) => {
            if (err) {
                res.send({error : true, message : "Error to access the database!"});
            } else {

                let max = quotes.length;
                let choose = [];
                let index = 0;

                for (let i = 0; i < quant; i++) {
                    index = Math.floor((Math.random() * max));
                    choose.push(quotes[index]);
                }

                res.send({error : false, data : { quotes: choose }});
            }
        });
    }

    topQuotes(quant, res){
        Quote.find({})
            .limit(quant)
            .sort({likes : 1})
            .exec((err, quotes) => {
                    if(err) {
                        res.send({error: true, message: "Error to access the database!"});
                    } else {
                        res.send({error: false, data: { quotes: quotes }});
                    }
                });

    }
}