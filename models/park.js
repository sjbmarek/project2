
module.exports = function(sequelize, DataTypes) {
  var Park = sequelize.define("Park", {
    park_name: {
      type: DataTypes.STRING,
    },
    total_park_visits: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

  });

  return Park;
};
