const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('Post', {
  userId: DataTypes.INTEGER,
  title: DataTypes.STRING,
  body: DataTypes.STRING,
});

module.exports = Post;
