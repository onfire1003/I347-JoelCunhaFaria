/*
-----------------------------------------------------------------------------------------------------------------------
file name           :   menu.service.js
author              :   Joel Cunha Faria & Dylan Martini
creation date       :   24.03.2026
modification date   :   29.03.2026
version             :   1.0
-----------------------------------------------------------------------------------------------------------------------
*/

const Menu = require('../models/menu.model');
const menuFields = ['name', 'description', 'price', 'availability', 'size', 'image_url'];

function extractMenuFields(data) {
    return Object.fromEntries(
        Object.entries(data).filter(([field, value]) => menuFields.includes(field) && value !== undefined)
    );
}

/**
 * Retrieve all menus.
 * @returns {Promise<object[]>} List of all menus
 */
async function getAllMenus() {
    return await Menu.findAll();
}

/**
 * Retrieve a single menu by its ID.
 * @param {number} id - The menu ID
 * @returns {Promise<object|null>} The menu, or null if not found
 */
async function getMenuById(id) {
    return await Menu.findByPk(id);
}

/**
 * Create a new menu.
 * @param {object} data - The menu data (name, description, size)
 * @returns {Promise<object>} The newly created menu
 */
async function createMenu(data) {
    return await Menu.create(extractMenuFields(data));
}

/**
 * Update an existing menu by its ID.
 * @param {number} id - The menu ID
 * @param {object} data - The fields to update (name, description, size)
 * @returns {Promise<object|null>} The updated menu, or null if not found
 */
async function updateMenu(id, data) {
    const menu = await Menu.findByPk(id);

    if (!menu) return null;

    await menu.update(extractMenuFields(data));
    return menu;
}

/**
 * Delete a menu by its ID.
 * @param {number} id - The menu ID
 * @returns {Promise<boolean>} True if deleted, false if not found
 */
async function deleteMenu(id) {
    const menu = await Menu.findByPk(id);

    if (!menu) return false;

    await menu.destroy();
    return true;
}

module.exports = {
    getAllMenus,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu
};
