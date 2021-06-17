var fs = require('fs');

function readFIle(path) {
    var file= fs.readFile(path, (err, data) =>{
        console.log(data.toString());
        console.log("File Read")
    })
}