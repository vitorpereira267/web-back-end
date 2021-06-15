module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        password: {
            type: type.TEXT,
        },
        email: {
            type: type.STRING,
        },
    })
}