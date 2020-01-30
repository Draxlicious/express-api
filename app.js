var express = require("express");
var app = express();
var router = require("./router");
var { dbAuth } = require("./config/database");
var formidable = require("./config/formidable");

// config halløj
dbAuth();
app.use(router);
router.use(formidable);


module.exports = app;
