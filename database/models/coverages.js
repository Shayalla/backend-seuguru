'use strict';

const Coverage = (sequelize, DataTypes) => {
  const coverage = sequelize.define('Coverage', {
    name: DataTypes.STRING,
    factor: DataTypes.DECIMAL(2, 1),
  },
  { timestamps: false, tableName: 'coverages' });

  coverage.associate = (models) => {
    coverage.belongsTo(models.Insurance,
      { foreignKey: 'insurance_id', as: 'insurances' });
  };

  return coverage;
};

module.exports = Coverage;