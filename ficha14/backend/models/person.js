module.exports = (sequelize, type) => {
    return sequelize.define('person', {
        firstname: {
            type: type.TEXT,
        },
        lastname: {
            type: type.TEXT,
        },
        profession: {
            type: type.STRING,
        },
        age: {
            type: type.INTEGER,
        }
    })
}