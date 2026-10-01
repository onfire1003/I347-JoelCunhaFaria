/*
-----------------------------------------------------------------------------------------------------------------------
file name           :   menu.model.js
author              :   Joel Cunha Faria & Dylan Martini
creation date       :   24.03.2026
modification date   :   29.03.2026
version             :   1.0
-----------------------------------------------------------------------------------------------------------------------
*/

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Menu = sequelize.define('Menu', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    availability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    size: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'menus',
    timestamps: false
});

module.exports = Menu;