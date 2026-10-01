/*
-----------------------------------------------------------------------------------------------------------------------
file name           :   ingredient.service.js
author              :   Joel Cunha Faria & Dylan Martini
creation date       :   11.03.2026
modification date   :   29.03.2026
version             :   1.0
-----------------------------------------------------------------------------------------------------------------------
*/

const Ingredient = require('../models/ingredient.model');
const ingredientFields = ['name', 'description', 'availability'];

function extractIngredientFields(data) {
    return Object.fromEntries(
        Object.entries(data).filter(([field, value]) => ingredientFields.includes(field) && value !== undefined)
    );
}

/**
 * Retrieve all ingredients.
 */
async function getAllIngredients() {
    return await Ingredient.findAll();
}

/**
 * Retrieve a single ingredient by its ID.
 * @param {number} id
 */
async function getIngredientById(id) {
    return await Ingredient.findByPk(id);
}

/**
 * Create a new ingredient.
 * @param {object} data - { name, description, availability }
 */
async function createIngredient(data) {
    return await Ingredient.create(extractIngredientFields(data));
}

/**
 * Update an existing ingredient by its ID.
 */
async function updateIngredient(id, data) {
    const ingredient = await Ingredient.findByPk(id);
    if (!ingredient) return null;

    await ingredient.update(extractIngredientFields(data));

    return ingredient;
}

/**
 * Delete an ingredient by its ID.
 */
async function deleteIngredient(id) {
    const ingredient = await Ingredient.findByPk(id);
    if (!ingredient) return false;

    await ingredient.destroy();
    return true;
}

module.exports = {
    getAllIngredients,
    getIngredientById,
    createIngredient,
    updateIngredient,
    deleteIngredient
};
