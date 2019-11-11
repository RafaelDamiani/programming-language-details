'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Repository', {
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Description: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      CreatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      UpdatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      IdLanguage: {
        type: Sequelize.INTEGER,
        references: { model: 'Language', key: 'id' },
        onDelete: 'SET NULL',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Repository');
  }
};
