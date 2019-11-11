const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Language = require('../models/Language');
const Repository = require('../models/Repository');

const connection = new Sequelize(dbConfig);

Language.init(connection);
Repository.init(connection);

Language.associate(connection.models);
Repository.associate(connection.models);

module.exports = connection;