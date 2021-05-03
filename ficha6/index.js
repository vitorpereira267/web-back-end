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

// function log(request, response){
//   fs.appendFileSync('./log.txt', request.path + ", ", request.method + ": " + new Date() + "\n");
// }


app.use(express.json()) //aplicação utiliza a função express.json
app.use(express.urlencoded({ extend: false }));
//middleware function //neste caso funciona para todas as rotas caso contrario antes da função adicionamos um path
app.use(function (request, response, next) {
  fs.appendFileSync('./log.txt', request.path + ", ", request.method + ": " + new Date() + "\n");
  next();
});

// default get endpoint
app.get('/', (request, response) => {

  //log(request, response);

  //tudo o que for append adiciona no fim

  //var body = '<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>';
  var file = fs.readFileSync("./index.html", "utf-8");


  var date = new Date();

  file = file.replace('{date}', date.toLocaleDateString());

  response.writeHead(200, {
    'Content-Lenght': Buffer.byteLength(file),
    'Content-Type': 'text/html' // text/plain para strings simples
  });
  response.end(file);
});

//isto chama-se route parameter por causa do :name // /user apenas se utilisarmos uma query
app.get('/user/:name', (request, response) => {

  //log(request, response);

  var file = fs.readFileSync("./index.html", "utf-8");
  var name = request.params.name; //pedido ao http //request.query.name

  file = file.replace('{name}', name);


  response.writeHead(200, {
    'Content-Lenght': Buffer.byteLength(file),
    'Content-Type': 'text/html' //text/plain para strings simples
  });
  response.end(file);
});

app.get('/log', (request, response) => {
  var file = fs.readFileSync("./index.html", "utf-8");


  response.writeHead(200, {
    'Content-Lenght': Buffer.byteLength(file),
    'Content-Type': 'text/plain' //text/plain para strings simples
  });
  response.end(file);
});

app.get('/log.txt', (request, response) => {
  response.download('./log.txt', function (err) {
    if (err != undefined) {
      response.status(404);
      response.end("Ocorreu um erro ao ler o ficheiro" + err.message);
    }
    else {
      //ENCONTROU O FICHEIRO COM SUCESSO
    }
  })
});

//apagar um ficheiro
app.get('/clear', (request, response) => {
  fs.unlink('./log.txt');
  response.send('File deleted');
});

//buscar informação é sempre get
// metodo que arranca o servidor http e fica à escuta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

  fs.open('log.txt', 'a', function (err, fd) { //fd é a referencia do ficheiro que foi criado
    console.log("File was created" + fd)
  });
})

