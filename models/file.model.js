var { sequelize } = require("../config/database");
var { DataTypes, Model } = require("sequelize");
var sqlite = require("../config/sqlite");

class File extends Model {}

File.init({
    name:{
        testfile
    },
    url:{
        testfile
    }
})

module.exports = File;