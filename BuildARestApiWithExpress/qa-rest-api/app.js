'use strict';

var express = require('express');
var app = express();
var jsonParser = require('body-parser').json;
var logger = require('morgan');
var routes = require('./routes');

app.use(logger('dev'));

app.use(jsonParser());

app.use('/questions', routes);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not found!');
    err.status = 404;
    next(err);
});

// Error handler -- extra parameter is how Express knows it's an error handler & not middlware
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Express server is listening on port', port);
});