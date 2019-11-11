'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Repository',
      'Login',
      {
        type: Sequelize.STRING,
        allowNull: false,
        after: 'Description'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Repository',
      'Login'
    );
  }
};
