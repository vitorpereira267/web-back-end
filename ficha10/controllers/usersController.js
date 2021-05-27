const Users = require('../sequelize').Users;


exports.getUsers = function (req, res, next){
    Users.findAll()
    .then(result => {
        res.render('person', { title: 'Person', data: result });
    })
    
}