var {createAsset, getAllAssets, getSingleAsset, deleteSingleAsset } = require("../controllers/asset.controller");

module.exports = function(router){
    router.get("/api/v1/assets", createAsset);
    router.post("/api/v1/assets", getAllAssets);
    router.post("/api/v1/assets/:id", getSingleAsset);
    router.delete("/api/v1/assets/:id", deleteSingleAsset);

}