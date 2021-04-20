// importar o express
const express = require('express')
// require para o file system, abre o ficheiro 
const fs = require('fs');





// função para ler un ficheiro 
function readFileSync(path) {
  var content = fs.readFileSync(path);
  return content;
}

/*function writeFileSync(path, data) {
  fs.writeFileSync();
}*/


// instanciar o express
const app = express()
// definir a porta do servidor http
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extend: false }));

// default get endpoint
app.get('/', (request, response) => {
    //var body = '<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>';
    var file = fs.readFileSync("./index.html", "utf-8");
    //var file = "File not found"

    var date= new Date();

    file = file.replace('{date}', date.toLocaleDateString());


  response.writeHead(200, {
      'Content-Lenght': Buffer.byteLength(file),
      'Content-Type': 'text/html' // text/plain para strings simples
  });
  response.end(file);
})

// metodo que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

    fs.open('log.txt', 'a', function (err, fd){ //fd é a referencia do ficheiro que foi criado
        console.log("File was created" + fd)
    });
  })