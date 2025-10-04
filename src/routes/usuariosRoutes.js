const express = require('express');
const router = express.Router();
const c = require('../controllers/usuarioController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nome:
 *           type: string
 *           example: "Ana Silva"
 *         email:
 *           type: string
 *           example: "ana@exemplo.com"
 *         data_criacao:
 *           type: string
 *           format: date-time
 *           example: "2025-10-02T23:59:59Z"
 *
 *     Problem:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "Recurso não encontrado"
 *         status:
 *           type: integer
 *           example: 404
 *         detail:
 *           type: string
 *           example: "Usuário não encontrado"
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Listar todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */
router.get('/', c.listar);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obter usuário por ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/problem+json:
 *             schema:
 *               $ref: '#/components/schemas/Problem'
 */
router.get('/:id', c.obter);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Criar novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, email]
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Ana Silva"
 *               email:
 *                 type: string
 *                 example: "ana@exemplo.com"
 *     responses:
 *       201:
 *         description: Usuário criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Requisição inválida
 *         content:
 *           application/problem+json:
 *             schema:
 *               $ref: '#/components/schemas/Problem'
 *       409:
 *         description: E-mail já cadastrado
 *         content:
 *           application/problem+json:
 *             schema:
 *               $ref: '#/components/schemas/Problem'
 */
router.post('/', c.criar);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualizar usuário por ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Novo Nome"
 *               email:
 *                 type: string
 *                 example: "novo@exemplo.com"
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/problem+json:
 *             schema:
 *               $ref: '#/components/schemas/Problem'
 *       409:
 *         description: E-mail já cadastrado
 *         content:
 *           application/problem+json:
 *             schema:
 *               $ref: '#/components/schemas/Problem'
 */
router.put('/:id', c.atualizar);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Remover usuário por ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Removido com sucesso
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/problem+json:
 *             schema:
 *               $ref: '#/components/schemas/Problem'
 */
router.delete('/:id', c.remover);

module.exports = router;
