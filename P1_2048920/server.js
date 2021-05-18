// Importar > Express

const express = require('express')
const mysql = require('mysql2')
const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const swaggerUi = require('swagger-ui-express')
//const swaggerDocument = require('./swagger.json')


// Instanciar o express
const app = express()
// Definir a porta do servidor http
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



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

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    }).then(function () {
        return Product.findAll();
    }).then(function (product) {
        console.log(product)
    })


/*Product.bulkCreate([
    {seller_id: 1,title:'Computador',description:'Computador Gaming',price:1000,url:"www.worten.pt",views:178,images:"pc gaming",comments:"Muito Bom",tags:"pc"},
    {seller_id: 2,title:'Rato',description:'Rato Wirelss',price:50,url:"www.worten.pt",views:121,images:"rato wireless",comments:"Bom",tags:"rato"},
    {seller_id: 3,title:'Teclado',description:'Teclado Mecanico',price:104,url:"www.worten.pt",views:134,images:"teclado mecanico",comments:"Excelente",tags:"teclado"},
]).then(function(){
    return Product.findAll()
}).then(function(product){
    console.log(product)
})*/

//PARTE B

// a) feito

app.get('/product', (req, res) => {

    if (req.query.id) {
        Product.findByPk(req.query.id).then(product => {
            res.send(product);
        }).catch(err => {
            res.status(404).send({ err: 'No product found' });
        });
    }
    else {
        Product.findAll().then(product => {
            res.send(product);
        });
    }
});


// b) feito

app.delete('/product/:id', (req, res) => {

    Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(product => {
        res.send({ "Product deleted": product });
    })

});


// c) Quase feito

app.put('/product/:id/images', (req, res) => {

    Product.update({images:req.body.images}, {
        where: {
            id: req.params.id
        }
    }).then((affectedRows) => {
        Product.findOne({
            where: {
                id: req.params.id
            }
        }).then(product => {
            res.send(product)
        }).catch(err => {
            res.status(404).send({ err: 'No product found' })
        })

    }).catch(err => {
        res.status(404).send({ err: 'No product found' })
    })

    /*Product.findOne({
        where:{
            id: req.params.id
        }
    }).then(product => {
        res.json({"Updated Image path:":product.images})
    }).catch(err => {
        res.status(404).send({err: 'No product found'})
    })*/
})


// d)


app.put('/product/comments', (req, res) => {
    Product.update({comments:req.body.comments}, {
        where: {
            id: req.query.id
        }
    }).then((affectedRows) => {
        Product.findOne({
            where: {
                id: req.query.id
            }
        }).then(product => {
            res.json(product)
        }).catch(err => {
            res.status(404).send({ err: 'No product found' })
        })

    }).catch(err => {
        res.status(404).send({ err: 'No product found' })
    })

    /*Product.findOne({
        where: {
            id: req.query.id
        }
    }).then(product => {
        res.send({ "Images path:": product.comments })
    }).catch(err => {
        res.status(404).send({ err: 'No product found' })
    })*/

})

// e)








app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});