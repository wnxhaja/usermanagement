'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat(value) {
          if (isNaN(parseFloat(value))) {
            throw new Error('Price must be a valid number');
          }
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};