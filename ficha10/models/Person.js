
module.exports = (sequelize, type) => {
     return sequelize.define('person', {
    firstName: {
        type: type.STRING,
    },
    lastName: {
        type: type.STRING,
        
    },
    profession: {
        type: type.STRING,
        
    },
    age: {
        type: type.INTEGER,
        
    },
   
})}

