'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

// Create Express instance
var app = express();

require('./database');
require('./seed');

// Express middleware to serve static files -- serves the public directory when the root of the site is requested
app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

app.listen(3000, function(){
    console.log('I am listening on port 3000!');
});
