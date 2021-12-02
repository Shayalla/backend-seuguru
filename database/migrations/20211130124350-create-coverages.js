'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coverages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      insurance_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'insurances',
          key: 'id',
        },
      },
      name: {
        type: Sequelize.STRING
      },
      factor: {
        type: Sequelize.DECIMAL(2, 1)
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('coverages');
  }
};