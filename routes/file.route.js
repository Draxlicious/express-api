var saveFile = require("../controllers/file.controller");

module.exports = function(router){
    router.get("../assets", saveFile);
    router.post("../assets", saveFile);

}