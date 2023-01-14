'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateCreated: {
      type: DataTypes.STRING,
      allowNull: false,
      default: Date.toLocaleDateString()
    },
    timeCreated: {
      type: DataTypes.STRING,
      allowNull: false,
      default: Date.toLocaleTimeString()
    },
    orderStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      default: 'Placed'
    }
  });

  return Order;
};
