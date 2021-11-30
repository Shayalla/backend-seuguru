'use strict';

const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    zipcode: DataTypes.STRING,
  },
  { timestamps: false, tableName: 'users' });
 
  return user;
};

module.exports = User;