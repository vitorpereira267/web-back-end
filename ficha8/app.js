const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;



const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Ficha 8 API",
            description: "Ficha 8 API Information",
            contact: {
                name: "TPSI-DWB"
            },
            servers: ["http://localhost:3000"],
        },
        definitions: {
            "Person": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
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
                    }
                }
            }
        },
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

/**
 * @swagger
 * /person:
 *      get:
 *          tags:
 *              - Person
 *          summary: Gets a list of persons
 *          description: Returns a list of persons
 *          produces:
 *              - application/json
 *          responses:
 *              200:
 *                  description: And array of persons
 *                  schema:
 *                      &ref: '#/definitions/Person'
 */

 app.get('/persons', (request, response) => {

});

/**
 * @swagger
 * /person:
 *      post:
 *          tags:
 *              - Person
 *          summary: Creates and stores a person
 *          description: Returns the id of the created person
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: Model
 *                description: Sample person
 *                in: body
 *                required: true
 *                schema:
 *                  $ref: '#/definitions/Person'
 *          responses:
 *              200:
 *                  description: Sucessfully created
 */

 app.post('/persons', (request, response) => {

});

app.get('/persons', (req, res) => {

    dbConnection.query('SELECT * FROM persons', (error, results, fields) => {
        if (error) {
            return res.status(404).send(error.message);
        }
        res.send(results);
    });

});

/**
 * Create Person (Body)
 */
app.post('/persons', (req, res) => {
    var details = req.body;

    dbConnection.query('INSERT INTO persons SET ?', [details], (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }
        res.send(results.insertId.toString());
    });

});

/**
 * Delete Person (Body)
 */
app.delete('/persons', (req, res) => {
    var id = req.body.id;

    dbConnection.query('DELETE FROM persons WHERE id = ?', id, (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }
        res.send("Deleted " + results.affectedRows + " entries");
    });
});

/**
 * Delete Person (Params)
 */
app.delete('/persons/:id', (req, res) => {
    var id = req.params.id;

    dbConnection.query('DELETE FROM persons WHERE id = ?', id, (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }
        res.send("Deleted " + results.affectedRows + " entry(s)");
    });
});

/**
 * Get Person (Params)
 */
app.get('/persons/:id', (req, res) => {
    var id = req.params.id;

    dbConnection.query('SELECT * FROM persons WHERE id = ?', id, (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }

        if (results.length == 0) {
            res.status(404).send("ID not found!");
        } else {
            res.send(results);
        }

    });
});

/**
 * Get Persons Details - Age and Profession (Params)
 */
app.get('/persons/:age/:profession', (req, res) => {
    var age = req.params.age;
    var profession = req.params.profession;

    dbConnection.query('SELECT * FROM persons WHERE age = ? AND profession = ?', [age, profession], (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }

        if (results.length == 0) {
            res.status(404).send("Users not found!");
        } else {
            res.send(results);
        }
    });
});

/**
 * Update Person (Params and Body)
 */
app.put('/persons/:id', (req, res) => {
    var id = req.params.id;
    var details = req.body;

    dbConnection.query('UPDATE persons SET ? WHERE id = ?', [details, id], (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }

        if (results.length == 0) {
            res.status(404).send("ID not found!");
        } else {
            details = {
                id,
                ...details
            }
            res.send(details);
        }
    });
});





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});