// importar o express
const express = require('express')
const fs = require('fs');

// função para ler un ficheiro 
function readFileSync(path){
    var content = fs.readFileSync(path);
    return content;
}




// instanciar o express
const app = express()
// definir a porta do servidor http
const port = 3000

// default get endpoint
app.get('/', (req, res) => {
  res.send('Hello POSTMAN!');
})

// list all persons endpoint
app.get('/users', (req, res) => {
    var persons = readFileSync('./persons.json');
    res.send(JSON.parse(persons));
  })
app.get('/teste', (req, res) => {
    
    res.send("endpoint teste!");
})
  

// metodo que arranca o servidor http e fica à escuta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})