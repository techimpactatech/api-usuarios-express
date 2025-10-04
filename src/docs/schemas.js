/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id:          { type: integer, example: 1 }
 *         nome:        { type: string,  example: "Ana Silva" }
 *         email:       { type: string,  example: "ana@exemplo.com" }
 *         dataCriacao: { type: string,  format: date-time, example: "2025-10-02T23:59:59Z" }

 *     PageUsuario:
 *       type: object
 *       properties:
 *         content:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Usuario'
 *         page:          { type: integer, example: 0 }
 *         size:          { type: integer, example: 20 }
 *         totalElements: { type: integer, example: 1 }
 *         totalPages:    { type: integer, example: 1 }

 *     Problem:
 *       type: object
 *       properties:
 *         title:  { type: string,  example: "Requisição inválida" }
 *         status: { type: integer, example: 400 }
 *         detail: { type: string,  example: "Dados inválidos" }
 *         errors:
 *           type: object
 *           additionalProperties:
 *             type: string

 *   responses:
 *     Problem400:
 *       description: Requisição inválida
 *       content:
 *         application/problem+json:
 *           schema: { $ref: '#/components/schemas/Problem' }
 *           examples:
 *             invalid_request:
 *               value:
 *                 title:  "Requisição inválida"
 *                 status: 400
 *                 detail: "Dados inválidos"

 *     Problem404:
 *       description: Recurso não encontrado
 *       content:
 *         application/problem+json:
 *           schema: { $ref: '#/components/schemas/Problem' }
 *           examples:
 *             not_found:
 *               value:
 *                 title:  "Recurso não encontrado"
 *                 status: 404
 *                 detail: "Usuário não encontrado"

 *     Problem409:
 *       description: Conflito
 *       content:
 *         application/problem+json:
 *           schema: { $ref: '#/components/schemas/Problem' }
 *           examples:
 *             email_conflict:
 *               value:
 *                 title:  "Conflito"
 *                 status: 409
 *                 detail: "email já cadastrado"
 */