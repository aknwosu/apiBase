'use strict';
module.exports = (sequelize, DataTypes) => {
  var Quote = sequelize.define('Quote', {
    author: {
      type: DataTypes.STRING,
      defaultValue: 'Unknown'
    },
    year: {
      type: DataTypes.INTEGER,
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  
  return Quote;
};