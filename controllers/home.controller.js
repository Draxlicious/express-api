function getHome(req, res, next) {
	// res.json({
	// 	message: "Hello, Norbert"
	// });
	res.send(
		`<form action="/" enctype="multipart/form-data" method="post">
        <input type="file" name="upload" multiple>
        <input type="submit" value="Upload">
    </form>`
	);
}

module.exports = {
	getHome
};
