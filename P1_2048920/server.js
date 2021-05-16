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



 const sequelize = new Sequelize('projetobackend', 'root', '', {
     dialect: 'mysql'
 });

     sequelize.authenticate()
         .then(() => {
             console.log("Connection has been established");
         })
         .catch(err => {
             console.error("Unable to connect", err);
})

 const Product = sequelize.define('product', {
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    views: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    images: {
        type: Sequelize.JSON,
        allowNull: false
    },
    comments: {
        type: Sequelize.JSON,
        allowNull: false
    },
    tags: {
        type: Sequelize.JSON,
        allowNull: false
    },
})

sequelize.sync({ force: false})
    .then(() => {
       console.log('Database & tables created!');
    }).then(function () {
        return Product.findAll();
    }).then(function (product) {
        console.log(product)
})


Product.bulkCreate([
    {firstName: 'Pedro', lastName: 'Jardim', profession: 'IT', age:62},
    {firstName: 'Manuel', lastName: 'Matos', profession: 'IT', age:12},
    {firstName: 'Maria', lastName: 'Figueira', profession: 'IT', age:32},
    {firstName: 'Ana', lastName: 'Duarte', profession: 'IT', age:82},
    {firstName: 'Luís', lastName: 'Faria', profession: 'IT', age:42},
]).then(function (){
    return Product.findAll();
}).then(function (product) {
    console.log(product)
});

//PARTE B

// a)

app.get('/product/:id', (req, res) => {

        id = req.query.id;

        Product.findByPk(id).then(product => {
            res.send(product);
        })
});


// b)
app.delete('/product/:id', (req, res) => {

    Product.destroy({
        where:{
            id: req.params.id
        }
    }).catch(err => {
        res.status(404).send({err: 'No product found'})
    })
    res.status(204).send();
});


// c)

app.post('/product')
