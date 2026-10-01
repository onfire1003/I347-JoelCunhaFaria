/*
-----------------------------------------------------------------------------------------------------------------------
file name           :   dish.routes.js
author              :   Joel Cunha Faria & Dylan Martini
creation date       :   12.03.2026
modification date   :   29.03.2026
version             :   1.0
-----------------------------------------------------------------------------------------------------------------------
Routes for dishes.
This file handles:
- checking that the dish route is active
- creating, updating, retrieving, and deleting dishes
*/

const express = require('express');
const router = express.Router();
const dishController = require('../controllers/dish.controller');

/**
 * @openapi
 * components:
 *   schemas:
 *     Dish:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           maxLength: 30
 *           example: Cheeseburger
 *         description:
 *           type: string
 *           maxLength: 300
 *           example: Pain, steak haché, cheddar, cornichons, oignons, ketchup et moutarde.
 *         price:
 *           type: number
 *           format: decimal
 *           example: 4.5
 *         availability:
 *           type: boolean
 *           default: false
 *           example: true
 *         size:
 *           type: string
 *           maxLength: 30
 *           example: Moyen
 *         image_url:
 *           type: string
 *           example: /images/cheeseburger.jpg
 *       required:
 *         - name
 *         - description
 *         - price
 *         - size
 *         - image_url
 *     DishInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           maxLength: 30
 *           example: Cheeseburger
 *         description:
 *           type: string
 *           maxLength: 300
 *           example: Pain, steak haché, cheddar, cornichons, oignons, ketchup et moutarde.
 *         price:
 *           type: number
 *           format: decimal
 *           example: 4.5
 *         availability:
 *           type: boolean
 *           example: true
 *         size:
 *           type: string
 *           maxLength: 30
 *           example: Moyen
 *         image_url:
 *           type: string
 *           example: /images/cheeseburger.jpg
 *       required:
 *         - name
 *         - description
 *         - price
 *         - size
 *         - image_url
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         error:
 *           type: string
 *   responses:
 *     NotFound:
 *       description: Ressource introuvable
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *     ServerError:
 *       description: Erreur serveur
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 */

/**
 * @openapi
 * tags:
 *   name: Dishes
 *   description: Gestion des plats du catalogue
 */

/**
 * @openapi
 * /api/v1/dishes:
 *   get:
 *     summary: Récupère la liste de tous les plats
 *     tags: [Dishes]
 *     responses:
 *       200:
 *         description: Liste des plats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dish'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
// GET /api/v1/dishes
router.get('/', dishController.getAllDishes);

/**
 * @openapi
 * /api/v1/dishes/{id}:
 *   get:
 *     summary: Récupère un plat par son identifiant
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant du plat
 *     responses:
 *       200:
 *         description: Plat trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dish'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
// GET /api/v1/dishes/:id
router.get('/:id', dishController.getDishById);

/**
 * @openapi
 * /api/v1/dishes:
 *   post:
 *     summary: Crée un nouveau plat
 *     tags: [Dishes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DishInput'
 *     responses:
 *       201:
 *         description: Plat créé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dish'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
// POST /api/v1/dishes
router.post('/', dishController.createDish);

/**
 * @openapi
 * /api/v1/dishes/{id}:
 *   put:
 *     summary: Met à jour un plat existant
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant du plat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DishInput'
 *     responses:
 *       200:
 *         description: Plat mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dish'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
// PUT /api/v1/dishes/:id
router.put('/:id', dishController.updateDish);

/**
 * @openapi
 * /api/v1/dishes/{id}:
 *   delete:
 *     summary: Supprime un plat par son identifiant
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant du plat
 *     responses:
 *       200:
 *         description: Plat supprimé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Dish deleted successfully
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
// DELETE /api/v1/dishes/:id
router.delete('/:id', dishController.deleteDish);

module.exports = router;
