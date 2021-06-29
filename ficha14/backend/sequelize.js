const Sequelize = require('sequelize')
const PersonModel = require('./models/person')

const sequelize = new Sequelize('ficha14', 'bachenduser2021@backend-mysql-2607', '483N32E5Dg', {
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true
        }
    },
    host: 'backend-mysql-2607.mysql.database.azure.com',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Person = PersonModel(sequelize, Sequelize)



sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established")
    })
    .catch(err => {
        console.error("Unable to connect", err)
    })

sequelize.sync({force: false})
    .then(() =>{
        console.log('Database & tables create!')
    }).then(function () {
        return Person.findAll()
    }).then(function (person){
        console.log(person)
    });

/* Person.bulkCreate([
    {firstname: 'Pedro', lastname: 'Jardim', profession: 'IT', age:62},
    {firstname: 'Manuel', lastname: 'Matos', profession: 'IT', age:12},
    {firstname: 'Maria', lastname: 'Figueira', profession: 'IT', age:32},
    {firstname: 'Ana', lastname: 'Duarte', profession: 'IT', age:82},
    {firstname: 'Luís', lastname: 'Faria', profession: 'IT', age:42},
]).then(function (){
    return Person.findAll();
}).then(function (person) {
    console.log(person)
});*/
    
module.exports = {
    Person
}