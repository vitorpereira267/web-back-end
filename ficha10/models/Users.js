
module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
            type: type.INTENGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: type.TEXT,
        password: type.STRING,

       

    })
}