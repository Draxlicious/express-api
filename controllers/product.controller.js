var Product = require("../models/product.model");

async function getAllProducts(req, res, next) {
	let products = await Product.findAll();
	res.json(products)
}

function getSingleProduct(req, res, next) {
	res.json()
}

function createProduct(req, res, next){
	
}

module.exports = {
	getAllProducts,
	getSingleProduct,
	createProduct
}
