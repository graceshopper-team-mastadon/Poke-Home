const Sequelize = require('sequelize');
const db = require('../db');

const Feedback = db.define('feedback', {
    name: {
        type: Sequelize.STRING
    },
    feedback: {
        type: Sequelize.TEXT,
    },
});

module.exports = Feedback
