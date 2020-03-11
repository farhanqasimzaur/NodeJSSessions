const dbContext = require('../common/dbContext');
const Sequelize = require('Sequelize');

const tasks = dbContext.define(
  'tasks',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    title: {
      type: Sequelize.STRING,
      field: 'title' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    details: {
      type: Sequelize.STRING,
      field: 'details'
    },
    dueDate: {
      type: Sequelize.DATE,
      field: 'duedate'
    },
    state: {
      type: Sequelize.STRING,
      field: 'state'
    }
  },
  {
    freezeTableName: true // Model tableName will be the same as the model name
  }
);


module.exports = tasks;
