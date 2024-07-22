'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shoe.init({
    model: DataTypes.STRING,
    brand: DataTypes.STRING,
    color: DataTypes.STRING,
    size: DataTypes.DOUBLE,
    genre: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    discount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shoe',
  });
  return Shoe;
};