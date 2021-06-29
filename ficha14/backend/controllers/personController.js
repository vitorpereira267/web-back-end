const Person = require('../sequelize').Person

exports.getPersons = function (req, res, next) {
    Person.findAll()
        .then(result => {
            res.json({data:result});
        })
}
