const config = require("./config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        port: config.port,
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.form = require("./form.model")(sequelize, Sequelize)

module.exports = db