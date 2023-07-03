const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  state: {
    type: Sequelize.ENUM("CART", "COMPLETED"),
  },
  date: {
    type: Sequelize.DATEONLY,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
  },
  shippingInfo: {
    type: Sequelize.STRING,
  },
  paymentInfo: {
    type: Sequelize.STRING,
    validate: {
      isCreditCard: true,
    },
  },
});

module.exports = Order;
