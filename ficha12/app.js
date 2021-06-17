var fs = require('fs');
var zlib = require('zlib')
function readFIle(path) {
    var file= fs.readFile(path, (err, data) =>{
        console.log(data.toString());
        console.log("File Read")
    })
}
function readFileStream(path){
    var readerStream = fs.createReadStream(path);
    var writerStream = fs.createWriteStream('copy.txt');
    readerStream.pipe(writerStream)

    readerStream.setEncoding('UTF8')

    readerStream.on('data', function(chunk){
        writerStream.write(chunk, 'UTF8')
    })

    readerStream.on('end', function(){
        console.log("FILE READ")
        writerStream.end()
    })

    readerStream.on('error', function(err){
        console.log(err.stack)
    })   
}
    
    var readerStream = fs.createReadStream('copy.txt');
    var writerStream = fs.createWriteStream('copy.txt.gz');
    readerStream.pipe(writerStream)

    readerStream.pipe(zlib.createGzip().pipe(writerStream))

    var x = 0;