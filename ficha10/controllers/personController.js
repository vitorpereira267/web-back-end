
const Person = require('../sequelize').Person;


exports.getPersons = function (req, res, next){
    Person.findAll()
    .then(result => {
        res.render('person', { title: 'Person', data: result });
    })
    
}