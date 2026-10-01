/*
-----------------------------------------------------------------------------------------------------------------------
file name           :   ingredient.routes.js
author              :   Joel Cunha Faria & Dylan Martini
creation date       :   17.03.2026
modification date   :   29.03.2026
version             :   1.0
-----------------------------------------------------------------------------------------------------------------------
*/

const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredient.controller');

/**
 * @openapi
 * components:
 *   schemas:
 *     Ingredient:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Cheddar
 *         description:
 *           type: string
 *           nullable: true
 *           example: Tranche de fromage cheddar fondu.
 *         availability:
 *           type: boolean
 *           default: true
 *           example: true
 *       required:
 *         - name
 *     IngredientInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Cheddar
 *         description:
 *           type: string
 *           nullable: true
 *           example: Tranche de fromage cheddar fondu.
 *         availability:
 *           type: boolean
 *           example: true
 *       required:
 *         - name
 */

/**
 * @openapi
 * tags:
 *   name: Ingredients
 *   description: Gestion des ingrédients du catalogue
 */

/**
 * @openapi
 * /api/v1/ingredients:
 *   get:
 *     summary: Récupère la liste de tous les ingrédients
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: Liste des ingrédients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingredient'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
router.get('/', ingredientController.getAllIngredients);

/**
 * @openapi
 * /api/v1/ingredients/{id}:
 *   get:
 *     summary: Récupère un ingrédient par son identifiant
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant de l'ingrédient
 *     responses:
 *       200:
 *         description: Ingrédient trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
router.get('/:id', ingredientController.getIngredientById);

/**
 * @openapi
 * /api/v1/ingredients:
 *   post:
 *     summary: Crée un nouvel ingrédient
 *     tags: [Ingredients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IngredientInput'
 *     responses:
 *       201:
 *         description: Ingrédient créé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
router.post('/', ingredientController.createIngredient);

/**
 * @openapi
 * /api/v1/ingredients/{id}:
 *   put:
 *     summary: Met à jour un ingrédient existant
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant de l'ingrédient
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IngredientInput'
 *     responses:
 *       200:
 *         description: Ingrédient mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
router.put('/:id', ingredientController.updateIngredient);

/**
 * @openapi
 * /api/v1/ingredients/{id}:
 *   delete:
 *     summary: Supprime un ingrédient par son identifiant
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant de l'ingrédient
 *     responses:
 *       200:
 *         description: Ingrédient supprimé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Ingredient deleted successfully
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
router.delete('/:id', ingredientController.deleteIngredient);

module.exports = router;
