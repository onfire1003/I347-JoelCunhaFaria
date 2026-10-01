/*
-----------------------------------------------------------------------------------------------------------------------
file name           :   env.js
author              :   Joel Cunha Faria & Dylan Martini
creation date       :   12.03.2026
modification date   :   05.06.2026
version             :   1.0
-----------------------------------------------------------------------------------------------------------------------
Environment variables loader.
*/

const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const env = {

    dbHost: process.env.DB_HOST,

    dbUser: process.env.DB_USER,

    dbPassword: process.env.DB_PASSWORD,

    dbName: process.env.DB_NAME,

    port: process.env.PORT || 3000

};

module.exports = env;
