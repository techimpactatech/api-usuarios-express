module.exports = function errorHandler(err, _req, res, _next) {
  if (err?.name === 'SequelizeUniqueConstraintError' || err?.status === 409) {
    return res.status(409).type('application/problem+json').json({
      title: 'Conflito',
      status: 409,
      detail: 'email já cadastrado',
    });
  }
  if (err?.status === 404) {
    return res.status(404).type('application/problem+json').json({
      title: 'Recurso não encontrado',
      status: 404,
      detail: err.detail || 'Usuário não encontrado',
    });
  }
  if (err?.status === 400) {
    return res.status(400).type('application/problem+json').json({
      title: 'Requisição inválida',
      status: 400,
      detail: err.detail || 'Dados inválidos',
    });
  }
  return res.status(500).type('application/problem+json').json({
    title: 'Erro interno do servidor',
    status: 500,
    detail: err.message || 'Ocorreu um erro inesperado',
  });
};
