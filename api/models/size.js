'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Size.init({
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    }, {
    sequelize,
    modelName: 'Size',
  });
  Size.associate = function(models) {
    Size.belongsToMany(models.Shoe, { through: 'size_shoe', foreignKey: 'size_id' });
  };
  return Size;
};