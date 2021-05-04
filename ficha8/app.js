// Importar > Express
const { response } = require('express');
const express = require('express')
const mysql = require('mysql')
// Instanciar o express
const app = express()
// Definir a porta do servidor http
const port = 3000

//------------------------------------------------------------
// SWAGGER

// Importar o swagger
const swaggerJsDoc = require('swagger-js');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions ={
        swaggerDefinition:  {
            info: {
                version: "1.0.0",
                title: "Ficha 7 API",
                description: "Dicha 7 API Information",
                contact: {
                    name: "TPSI-DWB"
                },
                servers: ["http://localhost:3000"],
            },
            definitions:{
                "Person": {
                    "type": "object",
                    "properties" :  {
                        "id": {
                            "type" : "integer",
                            "x-primary-key": true
                        },
                        "firstname": {
                            "type": "string"
                        },
                        "lastname": {
                            "type": "string"
                        },
                        "profession": {
                            "type": "string"
                        },
                        "age": {
                            "type": "integer",
                            "format": "int64"
                        },
                    }
                }
            },
        },
        apis: ["app.js"] 
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 *  @swagger
 * /person:
 *    get:
 *      tags:
 *          - Person
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *                $ref: '#/definitions/Person'
 */

app.get('/persons', (request, response) => {

});

/**
 * @swagger
 *  /person:
 *     post:
 *       tags:
 *          - Person
 *       summary: Creates and stores a person
 *       description: Returns the id of the created person
 *       produces:
 *            -aplication/json
 *       parameters:
 *            - name: Model
 *              description: Sample person
 *              in: body
 *              required: true
 *              schema:
 *                  $ref: '#/definitions/Person'
 *        responses:
 *            200:
 *                description: Seccessfully created
 */

app.post('/persons', (request, response) => {

})
//------------------------------------------------------------



//Funcoes middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'

})

app.get('/persons',(reques,response)=>{
    dbconnection.query("SELECT * FROM persons",function(error,results,fields){
        if(error){
            response.status(404)
            response.end(error.message)
        }
        response.send(results)
    })
})

app.post('/persons',(request,response)=>{
    var details = request.body
    dbconnection.query('INSERT INTO persons set ?',[details],(error,results,fields)=>{
        if(error){
            response.status(404)
            response.end(error.message)
        }
        response.send(results.inserId)
    })
})

//1º No body
//{"id":0}
//request.body.id

//2º Params
//'/persons/:id'
//localhost:3000/persons/1
//request.params.id

//3º Query
//'persons'
//localhost:3000/persons?id=1
//request.query.id

app.delete('/persons',(request,response)=>{
    var id=request.body.id
    dbconnection.query('DELETE FROM persons where ID=',id,(error,results,fields)=>{
        if(error){
            response.status(404)
            response.end(error.message)
        }
        response.send("Inserted ID is: " +  results.affectedRows + "entry(s)")
    })
})

app.get('/persons/:id',(request,response)=>{
    var id=request.body.id
    dbconnection.query('SELECT * FROM persons where ID=',id,(error,results,fields)=>{
        if(error){
            response.status(404)
            response.end(error.message)
        }
        if(results.length==0){
            response.status(404)
            response.end("ID not found")
        }
        else{
            response.send(results)
        }
    })
})

app.get('/persons/:id/:profession',(request,response)=>{
    var age=request.params.age
    var profession=request.params.profession
    dbconnection.query('SELECT * FROM persons where AGE='+age+ ' AND PROFESSION '+profession, (error,results,fields)=>{
        if(error){
            response.status(404)
            response.end(error.message)
        }
        if(results.length==0){
            response.status(404)
            response.end("ID not found")
        }
        else{
            response.send(results)
        }
    })
})

app.put('/persons/:id',(request,response)=>{
    var id=request.params.id
    var details=request.body
    dbconnection.query('UPDATE persons ? where ID=?',[details,id],(error,results,fields)=>{
        if(error){
            response.status(404)
            response.end(error.message)
        }
        if(results.length==0){
            response.status(404)
            response.end("ID not found")
        }
        else{
            details.id=id
            response.send(details)
        }
    })
})

// Método que arranca o servidor http e fica à escuto
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});