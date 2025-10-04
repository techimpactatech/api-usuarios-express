const swaggerJsdoc = require('swagger-jsdoc');   // <— IMPORTANTE!

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuários (Express)',
      version: '1.0.0',
      description: 'CRUD de usuários com Problem+JSON padronizado',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local' },
    ],
  },
  // Certifique-se de que esses caminhos existem no seu projeto
  apis: [
    './src/routes/**/*.js',
    './src/docs/**/*.js',   // aqui fica o components.js que criamos
  ],
};

const swaggerSpec = swaggerJsdoc(options);  // <— chama a função
module.exports = swaggerSpec;               // <— exporta o objeto gerado