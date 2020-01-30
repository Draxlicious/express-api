var { sequelize } = require("../config/database");
var { DataTypes, Model } = require("sequelize");
var sqlite = require("../config/sqlite");

class Asset extends Model {}


Asset.init({
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },
    url: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    }
}, {sequelize, modelName: "asset"}) // instance tilknyttet og navngivet

Asset.sync(sqlite[process.env.NODE_ENV]);

module.exports = Asset;