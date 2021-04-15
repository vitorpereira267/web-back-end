// importar o express
const { response } = require('express');
const express = require('express')
const fs = require('fs');
const { request } = require('http');




// função para ler un ficheiro 
function readFileSync(path) {
  var content = fs.readFileSync(path);
  return content;
}

function writeFileSync(path, data) {
  fs.writeFileSync();
}


// instanciar o express
const app = express()
// definir a porta do servidor http
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extend: false }));

// default get endpoint
app.get('/', (req, res) => {
  res.send('Hello POSTMAN!');
})

// list all persons endpoint
app.get('/users', (req, res) => {
  var persons = readFileSync('./persons.json');
  // converter strings para objeto json
  res.send(JSON.parse(persons));
});

app.post('/users', function (req, res) {

  var persons = JSON.parse(readFileSync('./persons.json'));
  res.send(JSON.parse(persons));
  var length = Object.keys(persons).length;
  var id = ++length;

  var newPerson = req.body;
  newPerson.id = id;

  persons['person' + id] = newPerson;


  writeFileSync('./persons.json', JSON.stringify(persons));
  // faz o mesmo(buscar um campo do objeto) ------------------
  /*var age = persons.person2.age;
  var age = persons['person2'].age;

  persons.person2.age = 67;
  persons['persons2'].age = 67;*/
  //-------------------------------

  res.send(persons);
});

app.delete('/users', function (req, res) {
  var persons = JSON.parse(readFileSync('./persons.json'));
  var id = request.params.id;

  var person = persons["person" + id];

  if (person != undefined) {
    delete persons["person" + id];
    response.send(persons);
    writeFileSync('./persons.json', JSON.stringify(persons));
  }
  else {
    res.send("Id inexistente");
  }

});

app.get('/users/:id', (req, res) => {
  var persons = JSON.parse(readFileSync('./persons.json'));
  var id = req.params.id;

  var person = persons["person" + id];

  if (person != undefined) {
    res.send(person);
    writeFileSync('./persons.json', JSON.stringify(persons));
  }
  else {
    res.send("Id inexistente");
  }

});

app.put('/users/:id', (req, res) => {
  var persons = JSON.parse(readFileSync('./persons.json'));
  var id = req.params.id;

  var person = persons["person" + id];

  if (person != undefined) {
    var edit = req.body;
    person["person" + id] = req.body;
    person["person" + id].id = id;

  }
  else {
    res.send("Id inexistente");
  }
});

// metodo que arranca o servidor http e fica à escuta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})