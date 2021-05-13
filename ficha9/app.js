// Importar > Express

const express = require('express')
const mysql = require('mysql2')
const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')


// Instanciar o express
const app = express()
// Definir a porta do servidor http
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



 const sequelize = new Sequelize('ficha9', 'root', '', {
     dialect: 'mysql'
 });

     sequelize.authenticate()
         .then(() => {
             console.log("Connection has been established");
         })
         .catch(err => {
             console.error("Unable to connect", err);
        })

const Person = sequelize.define('person', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profession: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   
})


sequelize.sync({ force: false})
    .then(() => {
       console.log('Database & tables created!');
    }).then(function () {
        return Person.findAll();
    }).then(function (person) {
        console.log(person)
    })

/*
Person.bulkCreate([
    {firstName: 'Pedro', lastName: 'Jardim', profession: 'IT', age:62},
    {firstName: 'Manuel', lastName: 'Matos', profession: 'IT', age:12},
    {firstName: 'Maria', lastName: 'Figueira', profession: 'IT', age:32},
    {firstName: 'Ana', lastName: 'Duarte', profession: 'IT', age:82},
    {firstName: 'Luís', lastName: 'Faria', profession: 'IT', age:42},
]).then(function (){
    return Person.findAll();
}).then(function (person) {
    console.log(person)
});
*/


//listar pessoas
/*
app.get('/person', (req ,res) => {
    Person.findAll().then(person => {
        res.send(person);
    })
});*/

//adicionar pessoas
app.post('/person', (req, res) => {
    Person.create({firstName:"Joao", lastName:"Alberto", profession:"IT", age:62}).then(person => {
        res.send(person)
    })
});

//apagar uma pessoa no body
app.delete('/person', (req, res) => {
    Person.destroy({
        where:{
            id: req.body.id
        }
    }).catch(err => {
        res.status(404).send({err: 'No user'})
    })
    res.status(204).send();
});


//apgar pessoas por parametros
app.delete('/person/:id', (req, res) => {
    Person.destroy({
        where:{
            id: req.params.id
        }
    }).catch(err => {
        res.status(404).send({err: 'No user'})
    })
    res.status(204).send();
});

//Query
app.get('/person', (req, res) => {

    if (req.query.id) {
        Person.findByPk(req.query.id).then(person => {
            res.send(person);
        }).catch(err => {
            res.status(404).send({ err: 'No user' });
        });
    }
    else {
        Person.findAll().then(person => {
            res.send(person);
        });
    }
});

app.get('/person/:age/:profession', (req ,res) => {
    Person.findAll({
        where:{
            age: req.params.age,
            profession: req.params.profession
        }
        }).then(person => {
            res.send(person)
        }).catch(err => {
            res.send("No user", err)
        })
        res.status(204).send()
});
    


app.put('/persons/:id', (req, res) => {
    Person.update({
        

        
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});