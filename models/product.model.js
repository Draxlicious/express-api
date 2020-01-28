var { sequelize } = require("../config/database");
var { DataTypes, Model } = require("sequelize");
var sqlite = require("../config/sqlite");

class Product extends Model {}

Product.init({
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: DataTypes.FLOAT,// decimal tal 12,95kr
        allowNull:false,
        validate: {
            notNull: true,
            isFloat: true
        }
    }, 
    description:{
    type: DataTypes.TEXT,// mere end 250 tegn
    notEmpty: true
    } 
}, {sequelize, modelName: "product"}) // instance tilknyttet og navngivet

Product.sync(sqlite[process.env.NODE_ENV]);

module.exports = Product;