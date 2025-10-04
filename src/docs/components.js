/**
 * @swagger
 * components:
 *   schemas:
 *     Problem:
 *       type: object
 *       properties:
 *         title:  { type: string }
 *         status: { type: integer }
 *         detail: { type: string }
 *         errors:
 *           type: object
 *           additionalProperties:
 *             type: string
 *   responses:
 *     Problem400:
 *       description: Dados inválidos
 *       content:
 *         application/problem+json:
 *           schema:
 *             $ref: '#/components/schemas/Problem'
 *           examples:
 *             example:
 *               value:
 *                 title:  "Requisição inválida"
 *                 status: 400
 *                 detail: "Dados inválidos"
 *                 errors:
 *                   email: "deve ser um e-mail válido"
 *                   nome:  "não deve estar em branco"
 *
 *     Problem409:
 *       description: Conflito
 *       content:
 *         application/problem+json:
 *           schema:
 *             $ref: '#/components/schemas/Problem'
 *           examples:
 *             example:
 *               value:
 *                 title:  "Conflito"
 *                 status: 409
 *                 detail: "email já cadastrado"
 *     Problem404:
 *       description: Recurso não encontrado
 *       content:
 *         application/problem+json:
 *           schema:
 *             $ref: '#/components/schemas/Problem'
 *           example:          # <-- use example (singular) para substituir o "Example Value"
 *             title:  "Recurso não encontrado"
 *             status: 404
 *             detail: "Usuário não encontrado"
 */