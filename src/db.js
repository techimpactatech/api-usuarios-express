const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("tcc_framework", "tcc_user", "tcc_pass", {
  host: "127.0.0.1",
  port: 5433,
  dialect: "postgres",
  logging: false,
});
module.exports = sequelize;