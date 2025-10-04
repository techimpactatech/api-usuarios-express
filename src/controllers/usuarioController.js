const Usuario = require('../models/usuario');

const toDTO = (u) => ({ id: u.id, nome: u.nome, email: u.email, dataCriacao: u.dataCriacao });

const problem = (status, title, detail) => {
  const err = new Error(detail || title);
  err.status = status; err.title = title; err.detail = detail || title;
  return err;
};

exports.listar = async (req, res, next) => {
  try {
    const page = Math.max(0, parseInt(req.query.page ?? '0', 10) || 0);
    const sizeRaw = parseInt(req.query.size ?? '20', 10) || 20;
    const size = Math.min(100, Math.max(1, sizeRaw));

    const { count, rows } = await Usuario.findAndCountAll({
      limit: size,
      offset: page * size,
      order: [['id', 'ASC']],
    });

    return res.status(200).json({
      content: rows.map(toDTO),
      page, size,
      totalElements: count,
      totalPages: Math.ceil(count / size),
    });
  } catch (e) { next(e); }
};

exports.obter = async (req, res, next) => {
  try {
    const u = await Usuario.findByPk(req.params.id);
    if (!u) return next(problem(404, 'Recurso não encontrado', 'Usuário não encontrado'));
    return res.status(200).json(toDTO(u));
  } catch (e) { next(e); }
};

exports.criar = async (req, res, next) => {
  try {
    const { nome, email } = req.body;

    const errors = {};
    if (!nome?.trim()) errors.nome = 'não deve estar em branco';
    if (!email?.trim()) errors.email = 'deve ser um e-mail válido';
    if (Object.keys(errors).length) {
      return next(problem(400, 'Requisição inválida', 'Dados inválidos'));
    }

    const novo = await Usuario.create({ nome, email });
    return res.status(201).json(toDTO(novo));
  } catch (e) {
    if (e?.name === 'SequelizeUniqueConstraintError') {
      return next(problem(409, 'Conflito', 'email já cadastrado'));
    }
    next(e);
  }
};

exports.atualizar = async (req, res, next) => {
  try {
    const u = await Usuario.findByPk(req.params.id);
    if (!u) return next(problem(404, 'Recurso não encontrado', 'Usuário não encontrado'));

    const { nome, email } = req.body;
    await u.update({
      ...(nome !== undefined && { nome }),
      ...(email !== undefined && { email }),
    });

    return res.status(200).json(toDTO(u));
  } catch (e) {
    if (e?.name === 'SequelizeUniqueConstraintError') {
      return next(problem(409, 'Conflito', 'email já cadastrado'));
    }
    next(e);
  }
};

exports.remover = async (req, res, next) => {
  try {
    const u = await Usuario.findByPk(req.params.id);
    if (!u) return next(problem(404, 'Recurso não encontrado', 'Usuário não encontrado'));
    await u.destroy();
    return res.status(204).send();
  } catch (e) { next(e); }
};
