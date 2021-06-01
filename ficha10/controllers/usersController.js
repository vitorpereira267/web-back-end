const Users = require('../sequelize').Users;


exports.getUsers = function (req, res, next){
    Users.findAll()
    .then(result => {
        res.json(result);
    })
    
}

exports.getTest = function (req, res, next){
    res.send('TEST')
    
}