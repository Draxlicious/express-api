var express = require("express");
var app = express();
var router = require("./router");
var { dbAuth } = require("./config/database");

// config halløj
dbAuth();
app.use(router);

module.exports = app;
