const express = require('express');
const usuariosRoutes = require('./routes/usuariosRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/usuarios', usuariosRoutes);

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📖 Swagger disponível em http://localhost:${PORT}/api-docs`);
});