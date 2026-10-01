/*
-----------------------------------------------------------------------------------------------------------------------
file name           :   menu.routes.js
author              :   Joel Cunha Faria & Dylan Martini
creation date       :   24.03.2026
modification date   :   29.03.2026
version             :   1.0
-----------------------------------------------------------------------------------------------------------------------
Routes for menus.
This file handles:
- checking that the menu route is active
- creating, updating, retrieving, and deleting menus
*/

const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');

/**
 * @openapi
 * components:
 *   schemas:
 *     Menu:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           maxLength: 30
 *           example: Menu Best Of
 *         description:
 *           type: string
 *           maxLength: 300
 *           example: Cheeseburger, frites et boisson au choix.
 *         price:
 *           type: number
 *           format: decimal
 *           example: 9.9
 *         availability:
 *           type: boolean
 *           default: false
 *           example: true
 *         size:
 *           type: string
 *           maxLength: 30
 *           example: Grand
 *         image_url:
 *           type: string
 *           example: /images/menu-best-of.jpg
 *       required:
 *         - name
 *         - description
 *         - price
 *         - size
 *         - image_url
 *     MenuInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           maxLength: 30
 *           example: Menu Best Of
 *         description:
 *           type: string
 *           maxLength: 300
 *           example: Cheeseburger, frites et boisson au choix.
 *         price:
 *           type: number
 *           format: decimal
 *           example: 9.9
 *         availability:
 *           type: boolean
 *           example: true
 *         size:
 *           type: string
 *           maxLength: 30
 *           example: Grand
 *         image_url:
 *           type: string
 *           example: /images/menu-best-of.jpg
 *       required:
 *         - name
 *         - description
 *         - price
 *         - size
 *         - image_url
 */

/**
 * @openapi
 * tags:
 *   name: Menus
 *   description: Gestion des menus du catalogue
 */

/**
 * @openapi
 * /api/v1/menus:
 *   get:
 *     summary: Récupère la liste de tous les menus
 *     tags: [Menus]
 *     responses:
 *       200:
 *         description: Liste des menus
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Menu'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
// GET /api/v1/menus
router.get('/', menuController.getAllMenus);

/**
 * @openapi
 * /api/v1/menus/{id}:
 *   get:
 *     summary: Récupère un menu par son identifiant
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant du menu
 *     responses:
 *       200:
 *         description: Menu trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
// GET /api/v1/menus/:id
router.get('/:id', menuController.getMenuById);

/**
 * @openapi
 * /api/v1/menus:
 *   post:
 *     summary: Crée un nouveau menu
 *     tags: [Menus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MenuInput'
 *     responses:
 *       201:
 *         description: Menu créé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
// POST /api/v1/menus
router.post('/', menuController.createMenu);

/**
 * @openapi
 * /api/v1/menus/{id}:
 *   put:
 *     summary: Met à jour un menu existant
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant du menu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MenuInput'
 *     responses:
 *       200:
 *         description: Menu mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Menu'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
// PUT /api/v1/menus/:id
router.put('/:id', menuController.updateMenu);

/**
 * @openapi
 * /api/v1/menus/{id}:
 *   delete:
 *     summary: Supprime un menu par son identifiant
 *     tags: [Menus]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant du menu
 *     responses:
 *       200:
 *         description: Menu supprimé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Menu deleted successfully
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
// DELETE /api/v1/menus/:id
router.delete('/:id', menuController.deleteMenu);

module.exports = router;
