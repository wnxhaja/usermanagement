'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Log.init({
    action: {
      type: DataTypes.ENUM('create', 'update', 'delete'),
      defaultValue: 'viewer'
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    timestamp:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
      allowNull: false, 
    },
    details: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Log',
  });
  return Log;
};