const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  generation: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930",
  },
  price: {
    type: Sequelize.FLOAT,
  },
  color: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;
