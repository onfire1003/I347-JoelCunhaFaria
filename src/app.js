/*
-----------------------------------------------------------------------------------------------------------------------
file name           :   app.js
author              :   Joel Cunha Faria & Dylan Martini
creation date       :   12.03.2026
modification date   :   29.05.2026
version             :   1.0
-----------------------------------------------------------------------------------------------------------------------

Main application file.
This file starts Express and exposes the ingredient, menu, and dish routes.
*/

const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const app = express();
const dishRoutes = require('./routes/dish.routes');
const ingredientRoutes = require('./routes/ingredient.routes');
const menuRoutes = require('./routes/menu.routes');

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/v1/dishes', dishRoutes);
app.use('/api/v1/ingredients', ingredientRoutes);
app.use('/api/v1/menus', menuRoutes);

app.get('/', function (req, res) {
    return res.status(200).json({
        message: 'API catalogue active'
    });
});

app.get('/hello', function (req, res) {
    return res.status(200).json({
        message: 'Hello !'
    });
});

const env = require('./config/env');
const PORT = env.port;

app.listen(PORT, function () {
    console.log('API disponible sur http://localhost:' + PORT);
    console.log('Le swagger est disponible sur http://localhost:' + PORT + '/api-docs');
});

module.exports = app;
