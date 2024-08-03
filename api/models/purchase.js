'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Purchase.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_ship: {
      type: DataTypes.ENUM('correo_argentino','andreani','local'),
      allowNull: false,
      defaultValue:'local'
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_street: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_payment: {
      type: DataTypes.ENUM('cash','transfer','mercado_pago'),
      allowNull: false,
      defaultValue:'cash'
    },
    state_purchase: {
      type: DataTypes.ENUM('initial','payed','shipped','completed','cancelated'),
      allowNull: false,
      defaultValue:'initial'
    },
    ítems: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Purchase',
  });
  Purchase.associate = function (models) {
    Purchase.belongsTo(models.User, {
     foreignKey: "user_id",
     as: "user",
   });
};
  return Purchase;
};