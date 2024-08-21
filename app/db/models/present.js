'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Present extends Model {
    static associate(models) {
      Present.hasMany(models.User, {
        sourceKey: "id",
        foreignKey: "presentId"
      });
    }
  }
  Present.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Present',
  });
  return Present;
};