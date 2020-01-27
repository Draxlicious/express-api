var {
	getAllProducts,
	getSingleProduct
} = require("../controllers/product.controller");

module.exports = function(router) {
	router.get("/v1/products", getAllProducts);
	router.get("/v1/products/:id", getSingleProduct);
};
