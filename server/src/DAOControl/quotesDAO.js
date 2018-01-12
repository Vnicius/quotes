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

    update(quote, res) {
        Quote.update({"_id" : Types.ObjectId(quote._id)}, quote, { upsert : true}, (err) => {
            if(err) {
                res.send({error : true, message : "Error to update de quote!"});
            } else {
                res.send({error: false});
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
                let listIndexes = [];
                const hasIndex = (index) => {
                    for (let j = 0; j < listIndexes.length; j++) {
                        if(listIndexes[j] == index){
                            return true;
                        }
                    }

                    return false;
                }

                if(max <= quant){
                    choose = quotes;
                } else {

                    for (let i = 0; i < quant; i++) {
                        index = Math.floor((Math.random() * max));
                        if(hasIndex(index)){
                            i--;
                        } else {
                            listIndexes.push(index);
                            choose.push(quotes[index]);
                        }
                    }
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

    searchAuthor(authorName, res) {
        Quote.find({author: {$regex : "^" + authorName + "$", $options: 'i'}}, (err, quotes) => {
            if(err) {
                res.send({error : true, message: 'Database access error!'});
            } else {
                res.send({error: false, data: {quotes : quotes}});
            }
        })
    }

    remove(id, res) {
        Quote.remove({_id: Types.ObjectId(id)}, (err) => {
            if(err) {
                res.send({error : true, message: 'Database access error!'});
            } else {
                res.send({error: false});
            }
        })
    }
}