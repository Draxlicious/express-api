
async function saveFile(req, res, next){
    res.sendFile(__dirname + 'filetest.html');


    var form = new formidable.IncomingForm();
    form.parse(req);
    form.on('fileBegin', function (name, file){
        file.path = __dirname + "../assets" + file.name;
    });

    form.on('file', function(name, file){
        console.log('uploaded ' + file.name);
    })
    res.sendFile(__dirname + 'filetest.html');
}

module.exports = saveFile;