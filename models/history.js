'use strict';
module.exports = function(sequelize, DataTypes) {
  var history = sequelize.define('history', {
    chromeHistory: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return history;
};