const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Form = sequelize.define('form', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_lengkap: {
            type: DataTypes.STRING
        },
        umur: {
            type: DataTypes.STRING
        },
        kontak: {
            type: DataTypes.STRING
        }
    })

    return Form
}