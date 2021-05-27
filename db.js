const {Sequelize} = require('sequelize');

const db = new Sequelize("postgres://postgres:YOURPASSWORDHERE@localhost:5432/animal-server");

module.exports = db;