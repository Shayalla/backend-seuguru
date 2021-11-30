'use strict';

const Insurance = (sequelize, DataTypes) => {
  const insurance = sequelize.define('Insurance', {
    name: DataTypes.STRING,
  },
  { timestamps: false, tableName: 'insurances' });

  insurance.associate = (models) => {
    insurance.hasMany(models.Coverage,
      { foreignKey: 'insurance_id', as: 'coverages' });
  };
 
  return insurance;
};

module.exports = Insurance;