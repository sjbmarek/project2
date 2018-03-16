
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
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    dog_photo_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

  });

  return Dog;
};
