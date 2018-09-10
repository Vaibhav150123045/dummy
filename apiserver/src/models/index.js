/**
 * Initialize and export all model schemas
 */

const config = require('../../config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.db, config.username, config.password, {
  dialect: 'postgres'
})

const models = { sequelize };

//Import definitions
models.User = sequelize.import('./User')

sequelize.sync()

//Define associations


module.exports = models;

