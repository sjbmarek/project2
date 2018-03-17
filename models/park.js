
module.exports = function(sequelize, DataTypes) {
  var Park = sequelize.define("Park", {
    como: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    como_visits: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    minnehaha: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    minnehaha_visits: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    bootcamp: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    bootcamp_visits: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    doghouse: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

  });

  return Park;
};
