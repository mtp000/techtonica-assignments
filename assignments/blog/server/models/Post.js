
const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

//Model for each blog posts: abstraction/ represents table in database
const Post = sequelize.define('posts', {
    //model attributes corrrespond to tablel columns
    id: {
        type: DataTypes.INTEGER, //integer = sql int, serial w/ autoIncrement
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(250), //string(250) = varcahr(250)
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sentimentScore: {
        type: DataTypes.INTEGER,
    },
    sentimentComparative: {
        type: DataTypes.FLOAT,
    }
});

module.exports = Post;