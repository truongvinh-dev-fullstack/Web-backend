"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ideas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ideas.init(
    {
      category: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      idea_name: DataTypes.STRING,
      description: DataTypes.STRING,
      first_closure_date: DataTypes.DATE,
      final_closure_date: DataTypes.DATE,
      document: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ideas",
    }
  );
  return Ideas;
};
