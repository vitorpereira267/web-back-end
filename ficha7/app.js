// Importar > Express
const express = require('express')
const mysql = require('mysql')

// Instanciar o express
const app = express()
// Definir a porta do servidor http
const port = 3000

//Funcoes middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'ficha7'
});


app.get('/persons', (request, response) =>{
    dbConnection.query("SELECT * FROM persons", function(error, results,fields){
        if(error){
            response.status(404);
            response.end(error.message)
        }
        response.send(results);
    })
});

app.post('/persons', (request, responses) => {
    var details = request.body;

    dbConnection.query("INSERT INTO persons set ?", [details],function(error, results,fields){
        if(error){
            response.status(404);
            response.end(error.message)
        }
        response.send("Insertend ID is: " + results.insertId);
    })
});


// Método que arranca o servidor http e fica à escuto
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

