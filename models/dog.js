
module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("Dog", {
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    dog_comment: {
      type: DataTypes.STRING,
      defaultValue: "Woof Woof!"
    },
    dog_photo_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    park_at: {
      type: DataTypes.STRING,
      defaultValue: "Doghouse"
    },
    como_visits: {
      type: DataTypes.INTEGER,
      defaultValue: 0, 
    },
    minnehaha_visits: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    bootcamp_visits: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });

  return Dog;
};
