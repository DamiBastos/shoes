'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    static associate(models) {
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
    state_payment: {
        type: DataTypes.ENUM('Inicial','Pago','Cancelado'),
      allowNull: false,
      defaultValue:'Inicial'
    },
    state_ship: {
      type: DataTypes.ENUM('Local','Enviado', 'Completado','Cancelado'),
      allowNull: false,
      defaultValue:'Local'    
    },
    items: {
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