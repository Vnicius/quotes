const express = require("express");
const server = express();
const port = 8888;
const quotesRouters = require('./routers');
const bodyparser = require('body-parser');
const cors = require('cors');

server.use(cors());
server.use(bodyparser.json());

server.use('/api/quotes', quotesRouters);

server.listen(port, () => {
    console.log('Server Running!!!')
});

module.exports = server;
