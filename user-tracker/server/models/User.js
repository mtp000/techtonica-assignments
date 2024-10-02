// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const user = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true, // Ensures the email format is valid
        },
    },
});

module.exports = user;
