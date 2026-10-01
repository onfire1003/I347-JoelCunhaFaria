/*
-----------------------------------------------------------------------------------------------------------------------
file name           :   swagger.js
author              :   Joel Cunha Faria & Dylan Martini
creation date       :   01.10.2026
version             :   1.0
-----------------------------------------------------------------------------------------------------------------------
Swagger (OpenAPI) configuration.
Generates the API specification from JSDoc annotations in the route files.
*/

const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');
const env = require('./env');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API catalogue',
            version: '1.0.0',
            description: "API REST Express et Sequelize limitée à trois tables MySQL : ingredients, menus et dishes (plats). Il n'y a ni authentification, ni commandes, ni panier, ni favoris, ni tables de liaison."
        },
        servers: [
            {
                url: 'http://localhost:' + env.port,
                description: 'Serveur local'
            }
        ]
    },
    apis: [path.join(__dirname, '../routes/*.routes.js').split(path.sep).join('/')]
};

module.exports = swaggerJsdoc(options);
