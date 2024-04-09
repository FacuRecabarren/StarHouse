const { Sequelize } = require('sequelize');
require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const Product = require('./models/Product');
const User = require('./models/User');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {logging: false})

Product(sequelize);
User(sequelize);

module.exports = {
    ...sequelize.models,
    connection: sequelize,
}