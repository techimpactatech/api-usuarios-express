const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuários',
      version: '1.0.0',
      description: 'CRUD de usuários para comparativo de frameworks (Node + Express)',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // onde estarão as anotações das rotas
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;