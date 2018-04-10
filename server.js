var express =require('express');
var router = express.Router();
var app = express();
var path = require('path');
var port = process.env.PORT|8080;
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var moongose = require('mongoose');

var bodyParser=require('body-parser');
var https = require('https');

app.use(bodyParser({limit: "50mb"}));
moongose.connect('mongodb://sampleDatabase:m2raksha@ds257858.mlab.com:57858/product');
moongose.set('debug',false);

var sessionConfig = {
    secret: 'ilovescotchscotchyscotchscotch',
    store: new mongoStore({
        mongooseConnection: moongose.connection
    })
};
require('./controllers/user')(app);
app.use(session(sessionConfig));

router.use(function (req, res, next) {
    req.app = {};
    next();
});

app.listen(port);