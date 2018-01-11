const express = require('express');
const router = express.Router();
const QuoteDAO = require('./DAOControl/quotesDAO');
const dao = new QuoteDAO();

router.get('/radomquotes', (req, res) => {
    console.log(req.query)
    dao.randomQuotes(parseInt(req.query.quant), res)
    //res.send({error: false})
});

router.get('/topquotes', (req, res) => {
    console.log(req.query)
    dao.topQuotes(parseInt(req.query.quant), res)
    //res.send({error: false})
});

router.post('/submit', (req, res) => {
    console.log(req.body)
    dao.insert(req.body, res)
    //res.send({error: false})
});

router.post('/like', (req, res) => {
    console.log(req.body)
    dao.updateLike(req.body.id, res)
    //res.send({error: false})
});

module.exports = router;