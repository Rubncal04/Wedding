'use strict';
const {
  Model,
  Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Present, {
        targetKey: "id",
        foreignKey: "presentId"
      })
    }
  }
  User.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    isConfirmed: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeUpdate(async (user, options) => {
    if (user.presentId !== 22) {
      const existingUser = await User.findOne({
        where: {
          presentId: user.presentId,
          id: { [Op.ne]: user.id } // Excluir el registro actual de la búsqueda
        },
        attributes: ['id', 'presentId', 'name']
      });

      if (existingUser?.presentId === user.presentId) {
        return
      }

      if (existingUser) {
        throw new Error('Este regalo ya fue escogido por otro.');
      }
    }
  });

  return User;
};