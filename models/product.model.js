var { sequelize } = require("../config/database");
var { DataTypes, Model } = require("sequelize");
var sqlite = require("../config/sqlite");

class Product extends Model {}

Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT, // decimal tal 12,95kr
    description: DataTypes.TEXT // mere end 250 tegn
}, {sequelize, modelName: "product"}) // instance tilknyttet og navngivet

Product.sync(sqlite[process.env.NODE_ENV]);

module.exports = Product;