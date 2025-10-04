const Usuario = require("../models/usuario");

exports.criar = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const usuario = await Usuario.create({ nome, email });
    res.status(201).json(usuario);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ status: 409, title: "Conflito", detail: "E-mail já cadastrado" });
    }
    res.status(400).json({ status: 400, title: "Erro", detail: err.message });
  }
};

exports.listar = async (_req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
};

exports.obter = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ status: 404, title: "Não encontrado", detail: "Usuário não encontrado" });
  res.json(usuario);
};

exports.atualizar = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ status: 404, title: "Não encontrado" });
  try {
    const { nome, email } = req.body;
    await usuario.update({ nome, email });
    res.json(usuario);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ status: 409, title: "Conflito", detail: "E-mail já cadastrado" });
    }
    res.status(400).json({ status: 400, title: "Erro", detail: err.message });
  }
};

exports.remover = async (req, res) => {
  const usuario = await Usuario.findByPk(req.params.id);
  if (!usuario) return res.status(404).json({ status: 404, title: "Não encontrado" });
  await usuario.destroy();
  res.status(204).send();
};